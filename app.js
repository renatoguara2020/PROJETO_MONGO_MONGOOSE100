const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const conn = require("./database/conn").run;

const productsRoutes = require("./routes/productsRoutes");
app.use(express.json());
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {

  res.send(`<h1>Bem vindo ao Express com Mongo!!!</h1>`)
})
 app.use(
express.urlencoded({
     extended: true,
   })
 );
app.use('/products',productsRoutes)

app.listen(3000)
  