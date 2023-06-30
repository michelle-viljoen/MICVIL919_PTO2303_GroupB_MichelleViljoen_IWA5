FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = 0

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED
const total = shoes + toys + shirts + batteries + pens
const customers = 1
let country = 'RSA'
let currency = 'R'
let shipping = 0


if (country === 'RSA') { 
    shipping = 400
	currency = 'R' 
}

else if (country === 'NAM') {
shipping = 600
currency = '$' 
}
    else  {shipping = 800
		 currency = '$'}


if (total > 1000 && currency === 'R' || total > 60 && currency === '$'  ) {
	shipping = 0
	} 


if (shipping === 0 && customers !== 1) { console.log(FREE_WARNING) }

if (country === 'NK') { console.log(BANNED_WARNIN) }
else { console.log('price', currency, total + shipping)}


