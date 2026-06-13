let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchform.classList.remove("active");
  cartItem.classList.remove("active");
};
let searchform = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchform.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");
document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchform.classList.remove("active");
};
windows.onscroll = () => {
  navbar.classList.remove("active");
  searchform.classList.remove("active");
  cartItem.classList.remove("active");
};

//
//
// document.addEventListener("DOMContentLoaded", () => {
//   const cartButtons = document.querySelectorAll(".products .fa-shopping-cart");

//   const cartContainer = document.querySelector(".cart-items-container");

//   cartButtons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//       e.preventDefault();

//       const box = button.closest(".box");

//       const image = box.querySelector("img").src;
//       const name = box.querySelector("h3").textContent;
//       const price = box
//         .querySelector(".price")
//         .childNodes[0].textContent.trim();

//       const cartItem = document.createElement("div");

//       cartItem.className = "cart-item";

//       cartItem.innerHTML = `
//         <span class="fas fa-times"></span>
//         <img src="${image}" alt="">
//         <div class="content">
//           <h3>${name}</h3>
//           <div class="price">${price}</div>
//         </div>
//       `;

//       const checkoutBtn = cartContainer.querySelector(".btn");

//       cartContainer.insertBefore(cartItem, checkoutBtn);
//     });
//   });

//   cartContainer.addEventListener("click", (e) => {
//     if (e.target.classList.contains("fa-times")) {
//       e.target.parentElement.remove();
//     }
//   });
// });
