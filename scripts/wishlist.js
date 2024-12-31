const wrapperEl = document.querySelector(".wrapper")

// CARD CREATOR
function createCard() {
    const data = JSON.parse(localStorage.getItem("wishlist"))
    let fragment = document.createDocumentFragment()
    data.forEach(product => {
        const divEl = document.createElement("div")
        divEl.className = "card"
        divEl.dataset.id = product.id
        divEl.innerHTML = `
          <button name="like-btn" class="wishlist">Add</button>
            <img src=${product.thumbnail} alt="${product.title}">
            <h3 title="${product.title}">${product.title}</h3>
            <p>${product.price} USD</p>
            <button class="buy__btn">Buy now</button>
        `
        fragment.appendChild(divEl)
    })
    wrapperEl.appendChild(fragment)
}


window.onload = ()=>{
    createCard()
}