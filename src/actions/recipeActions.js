// Model => 함수 => 사용자 요청 => 처리
// @RequestMapping()
import {FETCH_CHEF_DETAIL,FETCH_CHEF_LIST,FETCH_NEWS_LIST,FETCH_RECIPE_LIST} from './types'
import axios from "axios";
// 처리
/*

    component ===> reducer ===> store
             dispatch(action) dispatch ==> 배달
    dispatch : 요청(Action)을 전송
    reducer : 요청 처리
    store : 처리된 데이터 저장
 */
export function fetchRecipeList(page){
    return function (dispatch){
            axios.get('http://localhost:3355/recipe',{
                params:{
                    page:page
                }
            }).then((response)=>dispatch({
                type:FETCH_RECIPE_LIST,
                payload:response.data
            }))
    }
}
export function fetchChefList(page){
    return function (dispatch){
        axios.get('http://localhost:3355/chef',{
            params:{
                page:page
            }
        }).then((response)=>dispatch({
            type:FETCH_CHEF_LIST,
            payload:response.data
        }))
    }
}
export function fetchChefDetail(chef){
    return function (dispatch){
        axios.get('http://localhost:3355/chef_detail',{
            params:{
                chef:chef
            }
        }).then((response)=>dispatch({
            type:FETCH_CHEF_DETAIL,
            payload:response.data
        }))
    }
}
export function fetchNewsList(fd){
    return function (dispatch){
        axios.get('http://localhost:3355/news',{
            params:{
                fd:fd
            }
        }).then((response)=>dispatch({
            type:FETCH_NEWS_LIST,
            payload:response.data
        }))
    }
}