// 채팅 받아오기
async function getChat(){
	try{
		const res=await axios.get('/chat');
		const db=res.data;
		makeChat(db)
		document.querySelector('div#chatBox').childNodes[0].style.border = '1px solid red'
		console.log(db)
	}catch(err){
		console.error(err);
	}
}

function makeChat(data){
	data.chats.map(chat => {
		const div=document.createElement('div');
		div.innerHTML = `<span>${chat.time}</span> <span>${chat.chatContent}</span>`
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
	const chatContent=event.target.textBox.value;
	if (!chatContent){
		alert('내용을 입력하세요');
	}else{
		try{
			await axios.post('/chat', {
				chatContent
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
});