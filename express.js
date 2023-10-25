// nunjucks 모듈 가져오기
const nunjucks = require("nunjucks")

//body-parser 모듈 사용하기
const bodyParser = require("body-parser")

// 서버 준비하기
const express = require("express");
const app =  express();
const port = 3000;

// nunjucks를 사용하기 위한 express 세팅
app.set("view engine", "html") // nunjucks를 사용하겠다는 의미
nunjucks.configure("./views", { 
    express: app //express가 app 객체라는 내용
})

app.use(bodyParser.urlencoded({extended: true})) //body 안에 있는 영역 가져오기
//app.use(express.urlencoded({extended: true})) //app(use) 메소드는 get이든 post든 어떤 방식의 요청이든 상관없이 url만 같다면 요청을 받겠다

app.use('/', express.static("./public")) //express.static()은 정적인 파일들을 가져오는 미들웨어 + ()안에 정적인 파일들이 위치할 디렉토리를 넣어준다

app.get("/express", (req, res) => {
    let name = req.query.name // queryString 데이터를 받아오는 구문
    //let date = "2023.09.10" // 변수 생성
    res.render("index.html", { //처음에는 hello world -> 전달 받을 파일로 변경
    user: name
        //today: date // 두번째 인자값을 객체에 전달 -> index.html에 사용 가능
    })
})

app.post("/express", (req, res)=> {
    console.log(req.body)
    res.send("<h1>port 방식의 요청입니다.<h1>")

})

app.listen(port, () => {
    console.log('서버가 실행됩니다.');
})

