const express=require('express');
const path=require('path');
const connect=require('./schemas/index');
const chatRouter=require('./routes');
connect();

const app=express();

app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
	res.render('index');
})
app.use('/api',chatRouter);

app.listen(app.get('port'),()=>{
	console.log('port '+ app.get('port')+ ' 대기 중');
})
