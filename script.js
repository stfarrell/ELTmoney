let moneyBtn = document.querySelector('#moneyBtn');
let wallet = document.querySelector('#wallet');
let money = 0.00

function munay() {
    money += 0.0105
    money = money.toFixed(2)
    money = parseFloat(money)
    wallet.innerHTML = `<h1>$${money}</h1>`
}

moneyBtn.addEventListener('click', e => {
    console.log("$$$")
    setInterval(munay, 1000)

})
