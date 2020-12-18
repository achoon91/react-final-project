import {fetchChefList} from '../actions/recipeActions'
import {useDispatch,useSelector} from "react-redux";
import {useEffect,useState} from 'react'

export default function Chef(props){
    // 전송 => dispatch()=>reducer=>store => store저장된 state => yseSelector
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchChefList(1))
    },[])
    const chef_data=useSelector((state)=>state.recipes.chef)
    const html=chef_data.map((m)=>
       <table className={"table"}>
           <tr>
               <td width={"30%"} rowSpan={"2"}>
                   <img src={m.poster} width={"150"} height={"80"}/>
               </td>
               <td colSpan={"4"} style={{"color":"orange"}}>
                   <h3>{m.chef}</h3>
               </td>
           </tr>
           <tr>
               <td className={"text-center"}>{m.mc1}</td>
               <td className={"text-center"}>{m.mc3}</td>
               <td className={"text-center"}>{m.mc7}</td>
               <td className={"text-center"}>{m.mc2}</td>
           </tr>
       </table>
    )
    return (
        <div className={"container"}>
            <div className={"row"} style={{"margin":"0px auto","width":"700px"}}>
                <table className={"table"}>
                    <tr>
                        <td>
                            {html}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
