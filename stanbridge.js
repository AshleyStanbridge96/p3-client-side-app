const calcTip = (billAmt, tipPer, numPeople) => {
    //Divide by the number of people to find total amount for each person
    const newTotal = (billAmt / numPeople);
    //Find tip amount for person(s)
    const tipAmt = newTotal * tipPer;
    //Overall total with tip included
    const overallTotal = newTotal + tipAmt;
    return overallTotal;
};

document.querySelector("#calc-button").addEventListener("click", () => {
    //Bill amount
    const bAmt = parseFloat(document.querySelector("#bill-amt").value);
    //Tip amount
    const tAmt = parseFloat(document.querySelector("#tipPercent").value);
    //Number of people splitting bill
    const pAmt = parseInt(document.querySelector("#numPeople").value);

    const billTotal = calcTip(bAmt, tAmt, pAmt);


    const tip = `Bill Total: ${billTotal}`
    document.querySelector("#finalTipAmt").innerHTML = tip;
});