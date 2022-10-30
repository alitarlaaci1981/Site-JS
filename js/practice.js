const items =[
    {name:"Bike",price: 100},
    {name:"TV",price: 200},
    {name:"Album",price: 10},
    {name:"Book",price: 5},
    {name:"BookPhone",price: 500},
    {name:"Phone",price: 1000},
    {name:"Computer",price: 25},
    
];

const total=items.reduce((currrenTotal,item)=>{
    return item.price+=currrenTotal
   
},0)
console.log(total);