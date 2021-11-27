class Currency{
    constructor(){
        this.url= "https://api.exchangerate.host/convert?from="

    }
    async getCurrencyData(firstCur,secondCur){
        const responsecurrencyData= await fetch(this.url + firstCur + "&to=" + secondCur);
        console.log(responsecurrencyData);
        const currencyData = await responsecurrencyData.json();
        console.log(currencyData);
        return currencyData
    }

}