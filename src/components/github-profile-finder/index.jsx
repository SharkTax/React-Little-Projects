import { useEffect, useState } from "react"
import User from "./user"
import "./styles.css"


export default function GitHubProfileFinder(){
    const [userName, setUserName] = useState("SharkTax")
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)


    async function fetchGitHubUserData(){
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json()

        if(data){
            setUserData(data)
            setLoading(false)
            setUserName("")
        }

    }

    function handleSubmit(){
        fetchGitHubUserData()
    }

    useEffect(()=>{
        fetchGitHubUserData()
    },[])

    if(loading){
        return <h1>Loading data! await</h1>
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input 
                name="search-by-username"
                type="text"
                placeholder="Search Github UserName"
                value={userName}
                onChange={(event)=>{setUserName(event.target.value)}}/>

                <button onClick={handleSubmit}>Search</button>
            </div>

            {
                userData !== null ? <User user={userData}/>  : null 
            }
        </div>
    )
}