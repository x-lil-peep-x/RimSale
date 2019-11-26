const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');


db.authenticate()
    .then(() => console.log("La base de datos se ha iniciado"))
    .catch(error => console.log(error));

const app = express();
app.use(bodyParser.urlencoded({
    extend: false
}));


const userRoute = require('./routes/UserRoutes');
const rimRoute = require('./routes/RimRoutes');
const clientRoute = require('./routes/ClientRoutes');
const orderRoute = require('./routes/OrderRoutes');
app.use(bodyParser.json());
app.get('/', (req, resp) => resp.send('test'));

app.use('/user',userRoute);
app.use('/rim',rimRoute);
app.use('/client',clientRoute);
app.use('/order',orderRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Listening in port " + PORT));
