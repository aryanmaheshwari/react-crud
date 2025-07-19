import './App.css'
import EmployeeListing from './EmployeeListing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeCreate from './EmployeeCreate'
import EmployeeEdit from './EmployeeEdit'
import EmployeeDetails from './EmployeeDetails'

function App() {

  return (
    <>
      <h1>CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmployeeListing />}></Route>
          <Route path='/POSTS/create' element={<EmployeeCreate />}></Route>
          <Route path='/POSTS/edit/:id' element={<EmployeeEdit />}></Route>
          <Route path='/POSTS/details/:id' element={<EmployeeDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
