 import './App.css'
import Navebar from './componsts/Navebar'
import Sidebar from './componsts/Sidebar'
import Dashbord from './pages/Dashbord'
import Createinvoice from './pages/Createinvoice'
import Editinvoice from './pages/Editinvoice'
import Myinvoice from './pages/Myinvoice'
import { Route, Routes } from 'react-router-dom'
import Invoicepreiew from './componsts/Invoicepreiew'

  
  
 
 function App() {
    
  
 
  return (
    <>
    <Navebar/>
     <div className='d-flex'>
      <Sidebar/>

      <div className='flex-grow-1 p-4'>
        <Routes>
          <Route path='/' element={<Dashbord/>}/>
          <Route path='/create-invoice' element={<Createinvoice/>}/>
           <Route path='/my-invoices' element={<Myinvoice/>}/>
          <Route path='/edit-invoice/:id' element={<Editinvoice/>}/>
          <Route path='/invoice-prew' element={<Invoicepreiew/>}/>



        </Routes>
 
    </div>
     </div>
     
    </>
  )
}

export default App
