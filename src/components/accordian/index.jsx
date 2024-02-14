//single selection
//mutiple selection
import "./styles.css"
import data from "./data"
import { useState } from "react"



export default function Accordian(){

    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId)

    }

    function handleMultipleSeletion(getCurrentId){
        let cpyMutiple = [...multiple];
        const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId)


        if(findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId)
        else cpyMutiple.splice(findIndexOfCurrentId, 1)

        setMultiple(cpyMutiple)
    }

    console.log(selected,multiple)
    return ( 
        <div className="wrapper">
            <button onClick={()=>{ setEnableMultiSelection(!enableMultiSelection)}}>Enable multiple seletion</button>

            <div className="accordian">
                {
                    data && data.length >= 0 ? (data.map(dataItem =>{
                    return(
                        <div className="item">
                            <div onClick={ enableMultiSelection ? ()=>{handleMultipleSeletion(dataItem.id)} : ()=>handleSingleSelection(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelection ? 
                                multiple.indexOf(dataItem.id) !== -1 &&
                                <div className="content"> {dataItem.answer} </div> :
                                selected === dataItem.id &&
                                <div className="content"> {dataItem.answer} </div> 
                            }

                        </div>
                        )
                    }))
                     : <div> No data Found </div>
                }
            </div>
        </div>
    )
}