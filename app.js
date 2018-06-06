const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes/index')
const desainer = require('./routes/desainer')

//setup view engine/
app.set('views', __dirname+'/views/')
app.set('view engine', 'ejs')

//membuar folder static public
app.use(express.static('public'))

//body parser
app.use(bodyParser.urlencoded({
	extended: false
}))

//membuar folder static public
app.use(express.static('public'))


app.use('/', router);
app.use('/desainer', desainer);


const port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log(`Server Start on ${port}`);
})
//app.listen(5432, () => console.log('Server Success berjalan di http://localhost:5432'))