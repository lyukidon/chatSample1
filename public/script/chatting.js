// 채팅 받아오기
async function getChat(){
	try{
		const res=await axios.get('/chat');
		const db=res.data;
		makeChat(db)
		if(document.querySelector('div#chatBox').childNodes[0]){
			document.querySelector('div#chatBox').childNodes[0].style.border = '1px solid red'
		}
	}catch(err){
		console.error(err);
	}
}

function makeChat(data){
	data.chats.map(chat => {
		const div=document.createElement('div');
		div.className='chats'
		div.innerHTML = `<span>${chat.time}</span> <span class='idColor'>${chat.userId}</span> <span>${chat.chatContent}</span>`
		const remove=document.createElement('button');
		remove.id=chat._id+'_remove';
		remove.textContent='삭제';
		remove.addEventListener('click', async function(){
			try{
				await axios.delete(`/chat/${chat._id}`);
				while (chatBox.hasChildNodes()) {
					chatBox.removeChild(chatBox.firstChild); 
				}
				getChat(data);
			}catch(err){
				console.error(err);
			}
		})
		div.appendChild(remove);
		document.querySelector('div#chatBox').appendChild(div);
	})
}
window.addEventListener('load', getChat)

//채팅 보내기
document.querySelector('form#chatSubmit').addEventListener('submit', async (event)=>{
	event.preventDefault();
	const userId=event.target.idBox.value;
	const chatContent=event.target.textBox.value;
	if (!chatContent){
		alert('내용을 입력하세요');
	}else{
		try{
			//채팅 데이터 보내기
			await axios.post('/chat', {
				userId,
				chatContent
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
});