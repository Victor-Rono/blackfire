
const express = require("express");
const app = express(); 
const port = 3000;
const path = require('path');
const { send } = require("process");

app.use(express.static('./public'));
let {people} = require("./examples/api")
const authorize = require("./examples/authorize")

const logger = (req, res, next)=>{
    console.log(req.url, req.method)
    // res.send("TESTING")
  next()
}

app.use([authorize])

app.use(express.urlencoded({extended:false}));
app.use(express.json());
// app.use('/api ',logger)

app.get('/',(req, res)=>{
   
  res.sendFile('./public/index.html')
   
});

app.get('/about',(req, res)=>{
   
    
    const {name, age} = req.query
    
const time = new Date().toLocaleDateString()
    console.log(time)
    res.send('HELLO '+ name)

  });

app.get('/api/products',(req, res)=>{
   
    const newPeople = people.map((person)=>{
        const {id, name, job} = person;
        return {id,name, job}
    })
      res.json({success: true, data: newPeople})
  });

  app.get('/api/products/:productID',(req, res)=>{
  //  console.log(req.params);
const {productID} = req.params
// console.log(model)
  const singlePeople = people.find((person)=> person.id === Number(productID));

  if(singlePeople){
    res.json(singlePeople)
  } else{
      
      res.status(404).send("Product not found")
      
  }
      
  });


  app.post('/login',(req, res)=>{
 
       const username = req.body.username;

      if(username){
        res.status(200).send(username)
      } else{
        res.status(401).send('Cannot be empty')
      }

  })


app.all('*',(req, res)=>{
    res.status(404).send("ERROR 404, PAGE NOT FOUND");
   
});


app.listen(port,()=>{
   
})

