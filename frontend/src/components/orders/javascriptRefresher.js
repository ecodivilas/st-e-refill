const orderDetails = [
    {
        customerId: 1,
        customerName: "Ely Odivilas",
        customerAddress: "234 100flr Mapagmahal St., Cupid Subd., Brgy 145, Caloocan City",
        addressDescription: "Near Red Door harap tindahan ni aleng marites",
        orderType: "Pick-up Container",
        expectedTime: "Anytime",
        orderDescription: [
            {
                id: 1,
                name: "Slim 5 gallons standard size",
                quantity: 2,
                priceAmount: 50
            },
            {
                id: 2,
                name: "Round 5 gallons standard size",
                quantity: 2,
                priceAmount: 50
            },
            {
                id: 3,
                name: "Half Slim 2.5 gallons standard size",
                quantity: 2,
                priceAmount: 30
            },
        ]
    }
]

// Array Only
// orderDetails.push("Good")


// const productDetails = []

// productDetails[0] = { id: 1 }

// console.log(productDetails)


// .push({name: "Eleazar"})

// Appending new key value/pair
// 1st Way ... bracket Notation
orderDetails[0]["orderDescription"][3] = {
    id: 4,
    name: "Alien Container 2.5 gallons standard size",
    quantity: 5,
    priceAmount: 100
}
// 2nd Way ... Dot Notation
orderDetails[0].orderDescription[4] = {
    id: 5,
    name: "Divine 2.5 gallons standard size",
    quantity: 100,
    priceAmount: 10000
}


console.log(orderDetails[0]["orderDescription"])


function join(t, a, s) {
    function format(m) {
       let f = new Intl.DateTimeFormat('en', m);
       return f.format(t);
    }
    return a.map(format).join(s);
 }
 
 let format = [{day: 'numeric'}, {month: 'short'}, {year: 'numeric'}];
 let date = join(new Date(), format, '-');
 console.log(date);


// const date = new Date("2015-03-25");
// console.log(date);

