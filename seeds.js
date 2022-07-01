const mongoose = require('mongoose');
const Product = require('./models/product');
mongoose.connect('mongodb://localhost:27017/farmStand')
.then(()=>{
    console.log("Mongo Connection Open")
})
.catch(err=>{
    console.log("Mongo Error")
    console.log(err)
})

// const seedProducts = [
//     {
//     name:'Melon',
//     price:50,
//     category:'fruit'
//     },
//     {
//         name:'Orange',
//         price:1.00,
//         category:'fruit'
//     },
//     {
//         name:'Banana',
//         price:0.55,
//         category:'fruit'
//     },
//     {
//         name:'Cabbage',
//         price:3.50,
//         category:'vegetable'
//     },
//     {
//         name:'EggPlant',
//         price:2.50,
//         category:'vegetable'
//     },
//     {
//         name:'Pumkin',
//         price:4.50,
//         category:'vegetable'
//     }
// ]

Product.insertMany(seedProducts)
.then(res=>{
    console.log(res)
})
.catch(e =>{
    console.log(e)
})