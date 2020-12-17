import React,{Component} from 'react'
/*
      JSP : Model1 방식
            =========== 1. 보안의 허점
                        2. 재사용이 불가능
                        3. 유지보수 (확장성)
      MVC : Model2 방식
            =========== 1. 보안(자바 => 소스를 보내는 것이 아니라
                               컴파일된 소스만 전송 => jar)
                        2. 자바 => class를 만들어서 재사용
                        3. 확장성 (오버로딩,오버라이딩)
      React : Model 1
      Redux : MVC => Front-End(MVC:Flux)
      ==> Vue(Model 1) , Vuex(MVC)

      React (View:화면 출력)
      Redux (데이터 관리)
 */
class Home extends Component{
    // HTML을 저장 => JSX (JavaScript+XML)
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">SIST 포털</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">레시피
                                <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">레시피 목록</a></li>
                                <li><a href="#">쉐프 목록</a></li>
                                <li><a href="#">레시피 뉴스</a></li>
                            </ul>
                        </li>
                        <li><a href="#">영화 목록</a></li>
                        <li><a href="#">뮤직 목록</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Home