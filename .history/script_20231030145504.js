const exchangeRates = {
    USD: 1,
    UAH: 36.42,
    EUR: 0.94,
    ZL: 4.21,
    GBP: 0.82, 
}
function convertCurrency(){
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from_currency").value;
    const toCurrency = document.getElementById("to_currency").value;
    const  result = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
    document.getElementById("result").textContent = `Result: ${result.toFixed(2)} ${toCurrency}`
}
document.getElementById("amount").addEventListener("input", convertCurrency);
document.getElementById("fromCurrency").addEventListener("change", convertCurrency);
document.getElementById("toCurrency").addEventListener("change",convertCurrency);
convertCurrency();