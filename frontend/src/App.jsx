
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import SignUp from './Pages/Signup/SignUp'


function App() {

  return (
     <div className='p-4 h-screen flex items-center justify-center'>
   <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signUp' element={<SignUp/>}></Route>
   </Routes>
     </div>
  )
}

export default App
