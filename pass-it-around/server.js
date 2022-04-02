const express = require("express");

const app = express();

// Home page 
app.get ('/',(req,res)=>{
    res.send(
    "<h1>99 Bottles of beer on the wall</h1><br/><h2><a href ='/99'>take one down, pass it around</a></h2> ")
})
// show page for each bottle of beer with if statement checking for count, once at 0 the else statement runs to start over
app.get('/:id' , (req,res)=>{
    if(req.params.id != 0 ){
    res.send (`<h1><a href=${req.params.id -1}>There are ${req.params.id} bottles of beer on the wall!</h1><h2>Take one down, pass it around</h2></a>`)
    } else {
        res.send ("<h1>There are 0 bottles of beer on the wall you drunk!</h1><br/><h2><a href ='/'>start over</a></h2>")
    }
})

app.listen(3000, () => {
    console.log("listenin on 3000")
});