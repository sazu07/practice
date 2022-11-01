// const numbers =[2,4,6,8]
// const output=[];


//  for (const number of numbers) {
//     const result=number*2;
//     output.push(result);
//  }
//  console.log(output);

// const numbers =[2,4,6,8]
// const output=[];
// function dobulold(num){
//   const result=num*2;
//   return result;
// }

// const dodulIt=(num)=>num*2;

//  for (const number of numbers) {
//    const result= dodulIt(number);
//     output.push(result);
//  }
//  console.log(output);


// const numbers= [2,4,8,10,3];
// const dabul=(number)=>number*2;
// const output= numbers.map(dabul);
// console.log(output)

// function dabul(number){
//   result= number*2;
//   return result;
// }

// const  frinds=['rahim', 'karim', 'josim']
// const item=(frind)=>frind.length;


// const output=frinds.map(item);
// console.log(output)

const products=[
    {name:'laptop', price:20000,model:17, color:'black'},
    {name:'mobile', price:2000,model:12, color:'red'},
    {name:'computer', price:122000,model:20, color:'white'},
    {name:'smart watch', price:15000,model:10, color:'blue'},
]

const productsName=products.map(products=>products.price)
console.log(productsName);



