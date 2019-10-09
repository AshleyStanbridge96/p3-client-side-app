const calcTotal = (billAmt, tipPer, numPeople) => {
    //Divide by the number of people to find total amount for each person
    const newTotal = (billAmt / numPeople);
    //Find tip amount for person(s)
    const tipAmt = newTotal * tipPer;
    //Overall total with tip included
    const overallTotal = newTotal + tipAmt;

    return overallTotal;
}

const calcTip = (billAmt, tipPer, numPeople) => {
    //Divide by the number of people to find total amount for each person
    const newTotal = (billAmt / numPeople);
    //Find tip amount for person(s)
    const tipAmt = newTotal * tipPer;

    return tipAmt;
}

const findTip = new Vue ({
    el: '#findTip',
    data:{
        bill_amt: 20.00,
        tipPercent: 0.05,
        numPeople: 2,
    },
    computed: {
        finalTipAmt: function(){
            const billAmt = parseFloat(this.bill_amt)
            const tipAmt = parseFloat(this.tipPercent)
            const numPeople = parseInt(this.numPeople)

            const tipTotal = Math.round(calcTip(billAmt, tipAmt, numPeople) * 100) / 100;
            return `Tip Total: $ ${tipTotal}`
        },
        finalTotalAmt: function(){
            const billAmt = parseFloat(this.bill_amt)
            const tipAmt = parseFloat(this.tipPercent)
            const numPeople = parseInt(this.numPeople)

            const billTotal = Math.round(calcTotal(billAmt, tipAmt, numPeople) * 100) / 100;
            return `Bill Total: $ ${billTotal}`
        }
    }
})