import { useEffect } from "react"
import { useState } from "react"
import "./scroll.css"

export default function ScrollIndicator({url}){
    const [data, setData]= useState([])
    const [loading , setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [scrollPorcentege, setScrollPorcentage] = useState(0)

    async function fetchData(getUrl){
        try{
            setLoading(true)
            const response = await fetch(getUrl)
            const data = await response.json()


            if(data && data.products && data.products.length > 0 ){
                setData(data.products)
                setLoading(true)
            }
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        fetchData(url)
    }, [url])

    function handleScrollPercentage(){

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setScrollPorcentage((howMuchScrolled/height) * 100)
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScrollPercentage)

        return ()=>{
            window.removeEventListener("scroll", ()=>{})
        }
    },[])

    console.log(data, scrollPorcentege)

    if(errorMessage){
        return <div>error {errorMessage}</div>
    }

    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div className="current-progress-bar" style={{width : `${scrollPorcentege}%`}}>

                    </div>

                </div>
            </div>

            <div className="data-container">
                {
                    data && data.length > 0 ? 
                    data.map(dataItem => {return <p>{dataItem.title}</p>}) : null
                }
            </div>
        </div>
    )
}