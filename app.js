const inputField=document.getElementById("amount");
const firstCurrency=document.getElementById("firstCurrency");
const secondCurrency=document.getElementById("secondCurrency");
const run=document.getElementById("button");
const result = document.getElementById("outputResult");
const currency = new Currency();

run.addEventListener("click", (e)=>{
    let fCurrency = firstCurrency.options[firstCurrency.selectedIndex].value;
    let sCurrency = secondCurrency.options[secondCurrency.selectedIndex].value;
    
     currency.getCurrencyData(fCurrency,sCurrency)
     .then(response=>{
         result.innerText = Number(inputField.value) * Number(response.result);
     console.log(result.innerText);
        });
     
   
})





