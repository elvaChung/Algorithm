// Convert Celsius to Fahrenheit
const convertToF = (celsius) => {
    let fahrenheit;
    fahrenheit = celsius*(9/5) + 32;

    if( fahrenheit ) return fahrenheit;        
    else return "Fahrenheit is undefined";     
}
console.log(convertToF(30));
