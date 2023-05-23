const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multiParty = require('connect-multiparty')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


/*
const corsOptions = {
   origin: '*',
   optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
*/




app.get('/downloadExcel', (req ,res) => {
    res.download('/uploads/ponto.xlsx')
});

app.get('/downloadPdf', (req ,res) => {
    res.download('/uploads/seguro.pdf')
});




const multiPartMiddleware = multiParty({uploadDir: './uploads'})

app.post('/uploads', multiPartMiddleware, (req, res) => {
    const files = req.files;
    console.log(files);
    res.json({message: files});
});

app.use((err, req, res, next)=>{
    res.json({error: res.message})
})

app.listen(8000, ()=>{
    console.log('Server rodando na porta 8000')
});