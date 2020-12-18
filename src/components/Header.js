import React,{Component} from 'react'
import {NavLink} from "react-router-dom";

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
class Header extends Component{
    // HTML을 저장 => JSX (JavaScript+XML)
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/">SIST 포털</NavLink>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><NavLink to="/">Home</NavLink></li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">레시피
                                <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><NavLink to="/recipe_list">레시피 목록</NavLink></li>
                                <li><NavLink to="/chef_list">쉐프 목록</NavLink></li>
                                <li><NavLink to="/news_list">레시피 뉴스</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/movie_list">영화 목록</NavLink></li>
                        <li><NavLink to="/music_list">뮤직 목록</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Header