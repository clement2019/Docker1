const express=require("express");
const app=express();
const port =process.env.port || 3000;
app.get('/',(req,res) => {
res.send('welcome to my website');
    
});
    
app.listen(3000, () => {
console.log('server running on port: 3000')
});