/*
      자바스크립트의 변수형 (자동지정변수)
      = 코틀린 : var(변수) , val(상수)
      = 자바스크립트 : var , let , const (상수)
                     ==========변수
                     score=>사용범위  {}
                     var : scope없다  => ES5버전 이하
                     let : scope가 존재 {}안에서만 사용하는 변수 => ES6버전
      = 자바스크립트 : Ajax (JavaScript AND XML),
                     jquery.js , react.js , vue.js
      = 자바스크립트
          = 함수형 프로그램
             => 화살표 함수 (실제 프로그램:람다식)
             = function , return을 생략해서 사용
          = 클래스형 프로그램
 */
// NodeJS프로그램
// 연결 객체 생성
const Client=require("mongodb").MongoClient
// 자바 : MongoClient mc=new MongoClient("localhost",27017)
// 서버생성 => Spring대체
// 서버 구동 준비
const express=require("express")
const app=express()
const port=3355
// 서버 구동
//app.listen(port,function(){
app.listen(port,()=>{
    console.log("서버 가동...","http://localhost:3355")
})
// 모든 웹서버는 => request(사용자가 요청한 정보를 받는다),response(요청 처리후에 결과값을 돌려줄때)
// 구분 (요청) => 자바(C/S)=> 번호를 사용 , 웹 (URL주소로 구분)
/*
     Spring => 구분해서 요청처리 => @RequestMapping(사용자가 보내준 URI를 설정)
                                  => 메소드를 만들어서 처리 => DispatcherServlet에 메소드 호출
     NodeJS => 구분해서 요청처리 => app.get('/recipe')  => callback함수
     ##CallBack => 요청이 들어 온 경우에 시스템에서 자동 처리 (main,init,service...)
     app.get(),app.post()
     ========  ==========
     @GetMapping() @PostMapping
     app.get('url',(request,respnose)=>{
     })
     app.get('url',function(request,response){
     })
 */
// port충돌 방지
// react : 3000 , node:3355 , spring: 80,8080
// port => 연결선 cross domain
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
// Recipe 목록 출력 => 몽고디비 연결
// app.get("/" => @RequestMapping
app.get("/recipe",(request,response)=>{
    let page=request.query.page
    // String page=request.getParameter("page")  => ?page=1
    let rowSize=20
    let skip=(page*rowSize)-rowSize
    // 몽고비디에서 데이터 얻기
    // 1. 연결
    let url="mongodb://localhost:27017"
    /*
        Client.connect(url,function(err,client){

        })

        RDBMS : 오라클, MS-SQL , MY-SQL => 정형화 (규칙) => table
        NoSQL : SQL문장 없이 사용 => 비정형화 => collection
     */
    Client.connect(url,(err,client)=>{
        // 연결이 되었다면
        /*
           {}
           {}
           {} ==> [{},{},{}..]
         */
        let db=client.db("mydb")
        db.collection('recipe').find({}).skip(skip).limit(rowSize).toArray(function(err,docs){
            console.log(docs)
            response.json(docs)
            client.close()
        })
    })
})

app.get('/chef',function (request,response){
    // page변수 받기
    let page=request.query.page
    let rowSize=20
    let skip=(page*rowSize)-rowSize
    let url="mongodb://localhost:27017"
    Client.connect(url,(err,client)=>{
        let db=client.db('mydb')
        db.collection('chef').find({}).skip(skip).limit(rowSize).toArray(function(err,docs){
            response.json(docs)
            console.log(docs)
            client.close()
        })
    })
})















