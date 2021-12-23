import express from 'express'

 const app = express();


  app.get("/", (request, response) => {
    response.send("It's running 👋 ")
  })

  app.post("/create", (request, response) => {
    response.json("Create")
  })

  app.post("/login", (request, response) => {
    response.send("Login")
  })



 app.listen(4000, () => console.log('Server on on PORT 4000')) // Aqui esta escutando o server