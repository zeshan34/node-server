const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');


const hostname ='localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionRouter);
app.use('/partners', partnerRouter);




app.use(express.static(__dirname + '/public'));

app.use((req,res) =>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.end('<html><body><h1>this is an Express Server</h1></body></html>');


});
app.listen(port, hostname, () =>{
    console.log(`server runing at http://${hostname}:${port}`)
});
