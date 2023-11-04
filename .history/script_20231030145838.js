const exchangeRates = {
    USD: 1,
    UAH: 36.42,
    EUR: 0.94,
    ZL: 4.21,
    GBP: 0.82, 
}
function convertCurrency(){
    const amount = parseFloat(document.getElementById("amount").value);
    const from_currency = document.getElementById("from_currency").value;
    const to_currency = document.getElementById("to_currency").value;
    const  result = (amount / exchangeRates[from_currency]) * exchangeRates[to_currency];
    document.getElementById("result").textContent = `Result: ${result.toFixed(2)} ${to_currency}`
}
document.getElementById("amount").addEventListener("input", convertCurrency);
document.getElementById("from_currency").addEventListener("change",convertCurrency);
document.getElementById("to_currency").addEventListener("change",convertCurrency);
convertCurrency();