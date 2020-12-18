import {fetchChefList} from '../actions/recipeActions'
import {useDispatch,useSelector} from "react-redux";
import React, {useEffect,useState} from 'react'

export default function Chef(props){
    // 전송 => dispatch()=>reducer=>store => store저장된 state => yseSelector
    const [page,setPage]=useState(1)
    const [total,setTotal]=useState(210)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchChefList(1))
    },[])
    const onPrev=(e)=>{
        setPage(page>1?page-1:page)
        dispatch(fetchChefList(page))
    }
    const onNext=(e)=>{
        setPage(page<total?page+1:page)
        dispatch(fetchChefList(page))
    }
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
            <div className={"row"} style={{"margin":"0px auto","width":"700px"}}>
                <div className={"text-center"}>
                    <button className={"btn btn-sm btn-danger"} onClick={onPrev}>이전</button>
                    {page} page / {total} pages
                    <button className={"btn btn-sm btn-primary"} onClick={onNext}>다음</button>
                </div>
            </div>
        </div>
    )
}
