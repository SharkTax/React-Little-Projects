import { useEffect, useState } from "react"
import Suggestions from "./suggestions"



export default function SearchAutoComplete(){

    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [searchParam, setSearchParam] = useState("")
    const [showDropDown, setShowDropDown] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])

    function handleChange(event){
        const query = event.target.value.toLowerCase()
        setSearchParam(query)
        if(query.length > 1){
            const filteredData = users && users.length ? 
            users.filter(item=>{return item.toLowerCase().indexOf(query) > -1})
            //here he puted -1 because if indexOf finds some thinf that is`t inside the query he returns -1, with this he prevents something random
            : []

            setFilteredUsers(filteredData)
            setShowDropDown(true)
        }else{
            setShowDropDown(false)
        }
    }

    function handleClick(event){
        setShowDropDown(false)
        setSearchParam(event.target.innerText)
        setFilteredUsers([])
    }


    async function fetchListOfUsers(){
        try {
            setLoading(true)
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json()

            console.log(data)

            if(data && data.users && data.users.length){
                setUsers(data.users.map((userItem) => {return userItem.firstName}))
                setLoading(false)
                setError(null)
            }
            
        } catch (error) {
            setLoading(false)         
            console.log(error)
            setError(error)
        }
    }

    useEffect(()=>{
        fetchListOfUsers()
    }, [])

    console.log(users, filteredUsers)

    return(
        <div className="search-auto-complete-container">
            {
                loading ? <h1>Loading Data! wait</h1> : <input onChange={handleChange} value={searchParam}  name="search-users" placeholder="Search Users here"/>
            }
            
            {
                showDropDown && <Suggestions handleClick={handleClick} data={filteredUsers}/>
            }
        </div>  
    )
}