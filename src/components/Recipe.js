import React,{Component,useEffect} from 'react'
import {fetchRecipeList} from '../actions/recipeActions'
import {useDispatch,useSelector} from 'react-redux'
// React-Hooks
function Recipe(props)
{
    // dispatch 얻어오기
    const dispatch=useDispatch() // 전송
    // componentWillMount()
    useEffect(()=>{
        dispatch(fetchRecipeList(1))
    },[])
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
        </div>
    )

}
export default Recipe