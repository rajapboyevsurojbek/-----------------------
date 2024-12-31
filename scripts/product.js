const detailEl = document.querySelector(".detail")
const BASE_URL = "https://dummyjson.com"

async function fetchData() {
    let params = new URLSearchParams(window.location.search)
    const response = await fetch(`${BASE_URL}/products/${params.get("id")}`)
    response
        .json()
        .then(res => {
            createDetailPage(res);
        })

}

window.onload = ()=> {
    fetchData()
}

function createDetailPage(data){
    detailEl.innerHTML = `
        <div>
            <img src=${data.images[0]} alt="">
        </div>
        <div class="product__content">
            <h1 class="title">${data?.title}</h1>
            <p class="description">${data?.description}</p>
            <p class="price">$ ${data?.price}</p>
            <p class="rating">Rating: ${data?.rating}</p>
            <button class="add__btn">Add to cart</button>
        </div>
    `
}