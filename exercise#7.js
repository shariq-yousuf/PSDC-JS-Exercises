const orderPrice = 3001
const shippingArea = "keamari"

if (orderPrice >= 5000) {
    console.log("Shipping is free! ==> for the order of Rs.5000/- and above.")
} else {
    if (shippingArea === "defence" || shippingArea === "clifton") {
        if (orderPrice > 1000) {
            console.log(`Shipping is free! ==> for the order from ${shippingArea} that is above than Rs.1000/-`)
        } else {
            console.log(`Shipping cost is Rs. 200/- for ${shippingArea}`)
        }
    } else if (shippingArea === "gulshan") {
        if (orderPrice >= 2000) {
            console.log(`Shipping is free! ==> for the order from ${shippingArea} that is equal or above than Rs.2000/-`)
        } else {
            console.log(`Shipping cost is Rs. 300/- for ${shippingArea}`)
        }
    } else if (shippingArea === "nazimabad") {
        if (orderPrice > 3000) {
            console.log(`Shipping is free! ==> for the order from ${shippingArea} that is above than Rs.3000/-`)
        } else {
            console.log(`Shipping cost is Rs. 500/- for ${shippingArea}`)
        }
    } else {
        console.log(`Shipping cost is Rs. 700/- for ${shippingArea}`)
    }
}