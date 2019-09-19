//Finds the bill total. Takes num of people and tip into consideration
const calcTotal = (billAmt, tipPer, numPeople) => {
    //Divide by the number of people to find total amount for each person
    const newTotal = (billAmt / numPeople);

    //Find tip amount for person(s)
    const tipAmt = newTotal * tipPer;

    //Overall total with tip included
    const overallTotal = newTotal + tipAmt;

    return overallTotal;
};

const calcTip = (billAmt, tipPer, numPeople) => {
    //Divide by the number of people to find total amount for each person
    const newTotal = (billAmt / numPeople);
    //Find tip amount for person(s)
    const tipAmt = newTotal * tipPer;
    return tipAmt;
}

document.querySelector("#calc-button").addEventListener("click", () => {
    //Setting a standard for bill amount and number of people
    
    //Bill amount
    const bAmt = parseFloat(document.querySelector("#bill-amt").value);
    //Tip amount
    const tAmt = parseFloat(document.querySelector("#tipPercent").value);
    //Number of people splitting bill
    const pAmt = parseInt(document.querySelector("#numPeople").value);

    //Finding bill and tip total
    //Roudning to two decimal places
    const billTotal = Math.round(calcTotal(bAmt, tAmt, pAmt) * 100) / 100;
    const tipTotal = Math.round(calcTip(bAmt, tAmt, pAmt) * 100) / 100;

    //Storing bill and tip total into HTML ID
    const tip = `Tip Total: $ ${tipTotal}`;
    const total = `Bill Total: $ ${billTotal}`

    document.querySelector("#finalTipAmt").innerHTML = tip;
    document.querySelector("#finalTotalAmt").innerHTML = total;


    //Start of conditions
    
    if(pAmt > 1){
        const tip = `Tip Total per Person: $ ${tipTotal}`
        const total = `Bill Total per Person: $ ${billTotal}`
        document.querySelector("#finalTipAmt").innerHTML = tip;
        document.querySelector("#finalTotalAmt").innerHTML = total;
    }

        
});