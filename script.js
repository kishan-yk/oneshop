
  const loginModal = document.getElementById("loginModal");

  function openLogin() {
    loginModal.style.display = "flex";
  }

  function closeLogin() {
    loginModal.style.display = "none";
  }

  // Close modal when clicking outside the box
  window.onclick = function(event) {
    if (event.target === loginModal) {
      loginModal.style.display = "none";
    }
  };





const searchInput = document.querySelector(".searchbar input");
const searchResults = document.getElementById("searchResults");
const products = document.querySelectorAll(".product-card");

// 🔍 search typing event
searchInput.addEventListener("input", function () {
  const filter = searchInput.value.toLowerCase().trim();
  searchResults.innerHTML = "";

  if (filter === "") {
    searchResults.style.display = "none";
    return;
  }

  let found = 0;
  products.forEach((product) => {
    const text = product.innerText.toLowerCase();
    if (text.includes(filter)) {
      found++;
      const resultItem = document.createElement("div");
      resultItem.textContent = product.querySelector("h3")?.innerText || "Product";

      resultItem.onclick = () => {
        searchResults.style.display = "none";
        product.scrollIntoView({ behavior: "smooth", block: "center" });

        // 🔆 Highlight effect add kare
        product.classList.add("highlight");
        setTimeout(() => product.classList.remove("highlight"), 1500);
      };

      searchResults.appendChild(resultItem);
    }
  });

  if (found === 0) {
    const noResult = document.createElement("div");
    noResult.textContent = "No matching products found";
    noResult.classList.add("no-result");
    searchResults.appendChild(noResult);
  }

  searchResults.style.display = "block";
});

// outside click → popup close
document.addEventListener("click", (e) => {
  if (!searchResults.contains(e.target) && e.target !== searchInput) {
    searchResults.style.display = "none";
  }
});


