const express=require('express');
const path=require('path');
const connect=require('./schemas/index');
const indexRouter=require('./routes');
const chatRouter=require('./routes/chat')
connect();

const app=express();

app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
	res.render('index');
})
app.use('/',indexRouter);
app.use('/chat',chatRouter);
app.use(express.static(path.join(__dirname,'public')))

app.listen(app.get('port'),()=>{
	console.log('port '+ app.get('port')+ ' 대기 중');
})
