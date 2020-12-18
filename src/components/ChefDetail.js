import {useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchChefDetail} from '../actions/recipeActions'
import {NavLink} from "react-router-dom";
/*
      useState : 멤버변수를 지정할 때 사용
        const [변수명,set변수명]=useState(초기값) => function에서도 멤버를 사용한다
      useEffect : componentWillMount():HTML을 출력하기 전상태
                  componentDidMount():HTML 출력후
                  => HTML출력전에 데이터를 읽어 온다
      useSelector : HTML에 필요한 데이터를 읽어 온다(store=>state)
      useDispatch : 사용자가 요청한 내용을 처리 => reducer로 전송
                                             ============
                                             데이터를 갱신 (state)=>store에 저장
      실행하는 과정
      component(사용자가 보는 화면)============> dispatch(fetchChefList())
                  요청(이벤트발생:메뉴,버튼클릭)   ========> reducer(처리(state갱신))
                                                ==> 갱신된 state store에 저장
      ==> component=> 갱신된 state를 가지고 온다(store) (useSelector())
      =================
      View
      =======
      react => Chef.js
      =================  중간 => 연결 (Controller: dispatch():배달) : MVC(Redux)
      Model
      =======
      reducer
      store
      =================
      a.jsp?id=aaa  a.jsp
 */
export default function ChefDetail(props)
{
    const dispatch=useDispatch()//Controller => 서빙
    useEffect(()=>{
        dispatch(fetchChefDetail(props.match.params.chef))
    },[])
    const chef_detail=useSelector((state)=>state.recipes.recipe)

    const html=chef_detail.map((m)=>
        <div className="col-md-4">
            <div className="thumbnail">
                <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                <div className="caption">
                    <p>{m.title}</p>
                </div>
            </div>
        </div>
    )
    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                {html}
            </div>
            <div className={"row"}>
                <div className={"text-center"}>
                  <NavLink to={"/chef_list"} className={"btn btn-sm btn-danger"}>쉐프목록</NavLink>
                </div>
            </div>
        </div>
    )
}









