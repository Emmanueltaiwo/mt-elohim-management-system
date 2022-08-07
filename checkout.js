let product1Name = document.getElementById("product1-name")
let product1Price = document.getElementById("product1-price")

let product2Name = document.getElementById("product2-name")
let product2Price = document.getElementById("product2-price")

let product3Name = document.getElementById("product3-name")
let product3Price = document.getElementById("product3-price")

let product4Name = document.getElementById("product4-name")
let product4Price = document.getElementById("product4-price")

let product5Name = document.getElementById("product5-name")
let product5Price = document.getElementById("product5-price")

let product6Name = document.getElementById("product6-name")
let product6Price = document.getElementById("product6-price")

let product7Name = document.getElementById("product7-name")
let product7Price = document.getElementById("product7-price")

let product8Name = document.getElementById("product8-name")
let product8Price = document.getElementById("product8-price")

let product9Name = document.getElementById("product9-name")
let product9Price = document.getElementById("product9-price")

let product10Name = document.getElementById("product10-name")
let product10Price = document.getElementById("product10-price")

let checkout = document.getElementById("checkout")

let totalText = document.getElementById("total-text")

let totalAmount = product1Price.value + product2Price.value + product3Price.value + product4Price.value + product5Price.value + product6Price.value + product7Price.value + product8Price.value + product9Price.value + product10Price.value


checkout.addEventListener("click", function() {
    totalText.textContent = "The total amount is " + totalAmount
})