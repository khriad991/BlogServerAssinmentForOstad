const  express = require('express')
const  dotenv = require('dotenv')
const  cors = require('cors')
const  bodyParser = require('body-parser')


//components
const Connection= require('./DB/db.js')
const router =  require('./src/routes/Api')

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
app.use('/api/blog', router);
app.use("*",router.get((res)=>{
    res.status(404).json({status:"page not found"})
}))




const port =process.env.PORTT || 8080;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(port, () => console.log(`Server is running successfully on PORT ${port}`));