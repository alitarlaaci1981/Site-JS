const items =[
    {name:"Bike",price: 100},
    {name:"TV",price: 200},
    {name:"Album",price: 10},
    {name:"Book",price: 5},
    {name:"BookPhone",price: 500},
    {name:"Phone",price: 1000},
    {name:"Computer",price: 25},
    
];

const itemNames=items.map((item)=>{
    return item.price
})
//console.log(items)
console.table(itemNames);

// const lastitem=itemNames[itemNames.length-1];
// console.log(lastitem)