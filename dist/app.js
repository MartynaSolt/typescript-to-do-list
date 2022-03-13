// const input1Element: HTMLInputElement = document.querySelector('#input1');
// const input2Element: HTMLInputElement = document.querySelector('#input2');
// const addButtonElement = document.querySelector('button');
// const add = (v1: number, v2: number) => v1 + v2;
// addButtonElement.addEventListener('click', () => {
//     const sum = add(Number(input1Element.value), Number(input2Element.value));
//     console.log(sum);
// })
// UNION TYPE
// const logAge = (age: number | string) => {
//     console.log(`Hej, mam ${age} lat!`)
// };
// logAge(28);
// logAge('dwadzieścia osiem');
// let test: string | number | boolean;
// test = 'test';
// test = 21;
// test = true;
// TYP BOOLEAN W PRAKTYCE
const buttonElement = document.querySelector('button');
const calculatePrice = (originalPrice, hasDiscount) => {
    return hasDiscount ? originalPrice * 0.8 : originalPrice;
};
buttonElement.addEventListener('click', () => {
    const originalPrice = 50;
    const hasDiscount = new URLSearchParams(window.location.search).get('discount') === 'true';
    console.log(calculatePrice(originalPrice, hasDiscount));
});
