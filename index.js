const  express = require('express')
const  dotenv = require('dotenv')


const hpp = require("hpp");
const xss  = require("xss-clean")
const helmet = require('helmet')
const  cors = require('cors')
const  mongoSnitize = require('express-mongo-sanitize')
const  bodyParser = require('body-parser')


//components
const Connection= require('./DB/db.js')
const router =  require('./src/routes/Api')

dotenv.config();
const app = express();

app.use(cors());
app.use(hpp());
app.use(helmet());
app.use(xss());
app.use(mongoSnitize());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
app.use('/api/blog', router);

app.use("*",((req, res)=>{
    res.status(404).json({status:"fain" ,data:"page not found"})
}))


const port =process.env.PORTT || 8080;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(port, () => console.log(`Server is running successfully on PORT ${port}`));