const express = require("express");
const app = express();

const isSquare = (id) => {
    let n = Math.sqrt(id)
    n = n.toFixed(2)
    if(n*n === id) {
        return true
    } else {
        return false
    }
}


// function number_test(n) {
//    var result = (n - Math.floor(n)) !== 0; 
//   if (result)
//     return 'Number has a decimal place.';
//    else
//      return 'It is a whole number.';
//   }

app.set('view engine', 'jsx');
  
app.engine('jsx', require('express-react-views').createEngine());
// const Fibonacci = require("./Fibonacci");

//middleware
app.use(express.urlencoded({extended: true}));


// Home page 
app.get ('/', (req, res) => {
    res.send("<h1>Fibonacci<h1><br/><h2>Enter Number in URL route to check if its in Fibonacci sequence.")
})
//TODO - Get Square root to compare to for isSquare.
app.get('/:id' , (req,res)=>{
    console.log(req.params.id)
    if(isSquare(5*(req.params.id*req.params.id)-4)) {
        res.render("Fibonacci")
    } else if(isSquare(5*(req.params.id*req.params.id)+4)) {
        res.render("Fibonacci")
    } else {
        res.render("False")
        console.log("Else ran")
    }
})


app.listen(3000, () => {
    console.log("Tuned in to 3000")
});