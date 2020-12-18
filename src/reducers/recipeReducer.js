import {FETCH_NEWS_LIST,FETCH_CHEF_DETAIL,FETCH_RECIPE_LIST,FETCH_CHEF_LIST} from '../actions/types'
// 저장
const initalState={
    recipe:[],
    chef:[],
    news:[]
}

// 처리 => dispatch로 받은 데이터를 state에 저장
/*
     var a=[1,2,3]
     var b=[...a]  => b=[1,2,3]
     스코프 연산자 ==> 배열에 있는 모든 데이터를 복사할 경우에 사용
     var c=[...a,4,5] => c=[1,2,3,4,5]
 */
export default function (state=initalState,action){
    switch (action.type){
        case FETCH_RECIPE_LIST:
            return {
                ...state,
                recipe: action.payload
            }
        case FETCH_CHEF_LIST:
            return {
                ...state,
                chef: action.payload
            }
        case FETCH_CHEF_DETAIL:
            return {
                ...state,
                recipe: action.payload
            }
        case FETCH_NEWS_LIST:
            return {
                ...state,
                news: action.payload
            }
        default:
            return state

    }
}