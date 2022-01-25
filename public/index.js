// 채팅 받아오기
async function getChat(){
	try{
		const res=await axios.get('/chat');
		const db=res.data;
		makeChat(db)
	}catch(err){
		console.error(err);
	}
}

function makeChat(data){
	data.chats.map(chat => {
			const div=document.createElement('div');
			div.innerHTML = `<span>${chat.time}</span> <span>${chat.chatContent}</span>`
			document.querySelector('div#chatBox').appendChild(div);
	})
}
window.addEventListener('load', getChat)

//채팅 보내기
document.querySelector('form#chatSubmit').addEventListener('submit', async (event)=>{
	event.preventDefault();
	const chatContent=event.target.textBox.value;
	if (!chatContent){
		alert('내용을 입력하세요');
	}else{			
		const now=new Date();
		const year=now.getFullYear();
		const month=now.getMonth()+1;
		const date=now.getDate();
		const hour=now.getHours();
		const minute=now.getMinutes();
		const second=now.getSeconds();
		const time=`${year}.${month}.${date} ${hour}:${minute}:${second}`;
		try{
			await axios.post('/chat', {
				time:time,
				chatContent:chatContent
			})
					   .then((res)=>{
						   console.log(res);
					   })
					   .catch((err)=>{
						   console.error(err);
					   })
			const chatBox=document.querySelector('div#chatBox')
			while (chatBox.hasChildNodes()) {
				chatBox.removeChild(chatBox.firstChild); 
			}
			getChat();
		}catch(err){
			console.error(err);
		}
	
		event.target.textBox.value='';	
	}
})
