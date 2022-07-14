
document.querySelector('#myForm').addEventListener('submit', function () {
    event.preventDefault()
    alert(this.elements.prod.value)
})




function addToProducts(product) {
    alert(product.value)
    localStorage.setItem("test", "tester")
    if(localStorage.getItem("productsList") == null) {
        let arr = [product]
        localStorage.setItem("productsList", JSON.stringify(arr))
    }
    else {
        let products = JSON.parse(localStorage.getItem("productsList"));
        products.push(product)
    }

}