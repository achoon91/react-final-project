import React,{Component,useEffect,useState} from 'react'
import {fetchRecipeList} from '../actions/recipeActions'
import {useDispatch,useSelector} from 'react-redux'
// React-Hooks
function Recipe(props)
{
    const [page,setPage]=useState(1)
    const [total,setTotal]=useState(1400)
    // dispatch 얻어오기
    const dispatch=useDispatch() // 전송
    // componentWillMount()
    useEffect(()=>{
        dispatch(fetchRecipeList(1))
    },[])
    // const onPrev=function(e){}
    const onPrev=(e)=>{
        setPage(page>1?page-1:page)
        dispatch(fetchRecipeList(page))
    }
    const onNext=(e)=>{
        setPage(page<total?page+1:page)
        dispatch(fetchRecipeList(page))
    }
    const recipe_data = useSelector((state)=>state.recipes.recipe)
    const html=recipe_data.map((m)=>
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
                    <button className={"btn btn-sm btn-danger"} onClick={onPrev}>이전</button>
                    {page} page / {total} pages
                    <button className={"btn btn-sm btn-primary"} onClick={onNext}>다음</button>
                </div>
            </div>
        </div>
    )

}
export default Recipe