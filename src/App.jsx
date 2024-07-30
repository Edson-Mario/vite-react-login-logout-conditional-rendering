import Login from "./components/Login"
import Home from "./components/Home"
import {useState} from 'react'


function App() {

  const [newUser, setNewUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const saveUser = (user)  => {
    setNewUser(user)
    if(user.username == 'user'){
      if(user.password == '12345678'){
        setIsLoggedIn(!isLoggedIn)
      }
    }
  }

  const userLogout = (logout) =>{
      if(logout){
        setIsLoggedIn(!isLoggedIn)
      }
  }

  return (
    <div className="w-screen">
      {
        !isLoggedIn ? ( <Login addNewUser={saveUser}/>) : (<Home addLogout={userLogout} />)
      }
    </div>
   
  )
}

export default App
