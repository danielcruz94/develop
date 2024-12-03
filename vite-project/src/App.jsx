
import './App.css'
import Form from './Form'
import LoginForm from './login'
import Formregistro from './formregistro'

import { Routes, Route,useNavigate,useLocation} from 'react-router-dom';
function App() {


  return (
   
       <Routes>   
       <Route path='' element={<Form />} />
       <Route path='login' element={<LoginForm />} />
       <Route path='reistrarse' element={<Formregistro />} />
      
      </Routes> 
    
  )
}

export default App
