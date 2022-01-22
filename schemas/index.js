const mongoose=require('mongoose');

const connect=()=>{
	mongoose.connect('mongodb://127.0.0.1:27017/chat',{
		dbName: 'chat'
	},(error)=>{
		if (error){
			console.log('mongodb connection error ',error )
		}else{
			console.log('Successfully Connect Mongodb');
		}
	});
}

mongoose.connection.on('error', error=>{
	console.error('mongodb connection error ', error);
})
mongoose.connection.on('disconnected',()=>{
	console.error('reconnection Mongodb')
	connect();
})

module.exports=connect;
