import axios from 'axios'
import { useState, useEffect } from 'react'

import Card from "./components/Card"
import Search from './components/Search'

function App() {
  
  const [user, setUser] = useState([])
  const [search, setSearch] = useState([])
  
  useEffect(() => {
      const getData = async() => {
        const getUsers = await fetchData();
        setUser(getUsers)
      }
      getData();
    }, [user])

    const fetchData = async() => {
      try{
        const data = await axios.get("https://jsonplaceholder.typicode.com/users");        
        return data
      }catch(error){
        console.error(error);
      }
    }

  return (
    <div className="App">
      <h1>Contact List</h1>
      <Search setSearch={setSearch} data={user}/>
      <Card search={search}/>
    </div>
  )
}

export default App
