const express=require('express');
const morgan=require('morgan');
const cors = require('cors')
const path=require('path');
const connect=require('./schemas/index');

const indexRouter=require('./routes');
const chatRouter=require('./routes/chat');
const aboutRouter=require('./routes/about')
const bodyParser=require('body-parser');

connect();

const app=express();
app.use(cors())

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'public')));

app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use('/',indexRouter);
app.use('/about', aboutRouter)
app.use('/chat',chatRouter);

app.listen(app.get('port'),()=>{
	console.log('port '+ app.get('port')+ ' 대기 중');
});
