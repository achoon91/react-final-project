import {combineReducers} from "redux";
import recipeReducer from "./recipeReducer";
/*
     서버기반 : Spring
     ================
     1. Database 연결 : Mybatis(Ibatis) , Hibernate , JPA ==> ORM
     2. 화면 출력 : JSP
        ============== 이벤트 (JavaScript)
                       web 2.0 => Ajax
                       web 3.0 => React,Vue
     3. 서버단 : Back-End
        DB단
        View단 : Front-End
        AI단 
 */
export default combineReducers({
    recipes:recipeReducer
})