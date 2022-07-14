
function addToTotal(amount) {
    document.getElementById("total").innerHTML += amount;
}

const invoiceDiv = document.querySelector("div.invoice")

let headers = ["Product", "Price", "Actions"];
let products = []

function addToProducts(product) {
    products.push(product)
}

function removeFromProducts(product) {
    let temp = [];
    for(let i = 0; i < products.length; i++) {
        if(products[i] !== product) {
            temp.push(product);
        }
    }
    products = temp;
}

const createInvoiceTable = () => {
    while(invoiceDiv.firstChild) invoiceDiv.removeChild(invoiceDiv.firstChild)

    let invoiceTable = document.createElement("table")
    invoiceTable.className = "invoiceTable"

    let invoiceTableHead = document.createElement("thead")
    invoiceTableHead.className = "invoiceTableHead"

    let invoiceTableHeaderRow = document.createElement("tr")
    invoiceTableHeaderRow.className = "invoiceTableHeaderRow"

    headers.forEach(header => {
        let invoiceHeader = document.createElement("th")
        invoiceHeader.innerText = header
        invoiceTableHeaderRow.append(invoiceHeader)
    })

    invoiceTableHead.append(invoiceTableHeaderRow)
    invoiceTable.append(invoiceTableHead)

    let invoiceTableBody = document.createElement("tbody")
    invoiceTableBody.className = "invoiceTable-Body"
    invoiceTable.append(invoiceTableBody)

    invoiceDiv.append(invoiceTable)
}
