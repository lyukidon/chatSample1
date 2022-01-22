// 채팅 받아오기
async function getChat(){
	try{
		const res=await axios.get('/');
		const db=res.data;
		makeChat(db)
	}catch(err){
		console.error(err);
	}
}

function makeChat(data){
	data.chats.map(chat => {
			const div=document.createElement('div');
//			const timeSpan=document.createElemnet('span');
//			timeSpan.textContent=chat.time;
//			const chatSpan=document.createElement('span');
//			chatSpan.textContent=chat.chatContent;
			div.innerHTML = `<span>${chat.time}</span><span>${chat.chatContent}</span>`
			document.querySelector('div#chatBox').appendChild(div);
	})
}
//채팅 보내기
document.querySelector('form#chatSubmit').addEventListener('submit', async (event)=>{
	event.preventDefault();
	const chatContent=event.target.textBox.value;
	if (!chatContent){
		alert('내용을 입력하세요');
	}
	console.log(chatContent)
	
	const now=Date.now
	const year=now.getFullYear();
	const month=now.getMonth()+1;
	const date=now.getDate();
	const hour=now.getHours();
	const minute=now.getMinutes();
	const second=now.getSeconds();
	const time=`${year}.${month}.${date} ${hour}:${minute}:${second}`;
	
	try{
		await axios.post('/',{time, chatContent});
		getChat();
	}catch(err){
		console.error(err);
	}

	event.target.textBox.value='';
})
