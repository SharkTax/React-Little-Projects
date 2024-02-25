import { useState } from "react"



export default function Tabs({tabsContent, onChange}){

    const [currentTabindex, setCurrentTabindex] = useState(0)

    function handleOnClick(getCurrentIndex){
        setCurrentTabindex(getCurrentIndex)
        onChange(getCurrentIndex)
    }

    return (
        <div className="wrapper">
            <div className="heading">
                {
                    tabsContent.map((tabItem, index) =>{
                    return (
                        <div className={`tab-item ${currentTabindex === index ? "active" : ""}`} onClick={()=>{handleOnClick(index)}} key={tabItem.label}>
                            <span className="label">{tabItem.label}</span>
                        </div>)
                    })
                }
            </div>

            <div className="content" style={{color: "red"}}>
                {
                    tabsContent[currentTabindex] && tabsContent[currentTabindex].content
                }
            </div>
        </div>
    )
}