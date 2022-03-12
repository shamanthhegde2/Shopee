const inputs = document.querySelectorAll("input[type='submit']")
const cartItemCount = document.querySelector(".cart-item-count")
let count = 0
inputs.forEach(ele => {
  ele.addEventListener("click", e => {
    e.preventDefault()
    count++
    cartItemCount.innerHTML = count
  })
})
