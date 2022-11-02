const product={
    name:'laptop', model:'i3',price:20000
}
const shopinghMall='IDB'

const shoping=`Going to ${shopinghMall} to but ${product.name} `
// console.log(shoping);

// const devided=(number)=>number/5;
// const result=devided(25);
// console.log(result);

// const multiply=(x,y)=>(x+2)*(y+2);
// const final= multiply(3,3);
// console.log(final);


// const multiply=(x,y)=>{
//     const first=5;
//     const second=10;
//     const firstMultie=first+2;
//     const secondMultie=second+2;
//     const result=firstMultie*secondMultie;
//     return result;
// }
// const final=multiply(5,5);
// console.log(final);

const numbers=[2,4,5,6,7];

const dobulit=numbers.map(number=>number*5);
console.log(dobulit);