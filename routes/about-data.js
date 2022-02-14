class Skill {
	constructor (category,array){
		this.category=category;
		this.array=array;
	}
}
const frontend=new Skill(
	'Front-End',
	['HTML', 'CSS', 'JavaScript','React JS']
)
const backend=new Skill(
	'Back-End',
	['Node JS','Express JS']
)
const database=new Skill(
	'Database',
	['mongoDB']
)
const os=new Skill(
	"OS",
	['Debian', 'ubuntu', 'MacOS']
)
const etc=new Skill(
	'ETC',
	['Git', 'NGINX', 'EJS']
)
class Project {
    constructor (thumbnail,url,title,date,description,){
        this.thumbnail=thumbnail;
        this.url=url;
        this.title=title;
        this.date=date;
        this.description=description;
    }
}
const tictactoe= new Project(
    '',
    'https://lyukidon.github.io/tictactoe/',
    '틱택토',
    '2020년 06월 23일',
    '틱택토 게임을 자바스크립트로 표현함',
)
const cup=new Project(
    '',
    'https://lyukidon.github.io/cup/',
    'CUP',
    '2020년 08월 12일',
    'JS를 사용해 웹 사이트 구현',
)
const flag=new Project(
    '',
    'https://github.com/lyukidon/flag',
    '나라 맞추기',
    '2020년 12월 11일',
    'React JS를 이용해 나라 이름 맞추기 게임 구현'
)
const stopwatch=new Project(
    '',
    'https://lyukidon.github.io/stopwatch/',
    '스탑와치',
    '2020년 12월 26일',
    '비동기 함수를 이융해 스탑와치 구현'
)
const rouletteGame=new Project(
    '',
    'https://lyukidon.github.io/RouletteGame/',
    '룰렛게임',
    '2021년 01월 07일',
    ''
)
const data={
    skills:[
		frontend,
		backend,
		database,
		os,
		etc
    ],
    projects: [
        tictactoe,
        cup,
        flag,
        rouletteGame,
    ]
}

module.exports=data;
