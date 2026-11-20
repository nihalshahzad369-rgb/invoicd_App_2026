 import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
 
 

function Sidebar() {
  return (
    <div className='bg-dark text-white p-3' style={{width:'240px',minHeight:'100vh'}}>
    <h5 className='mb-4' style={{fontFamily:'Arvo'}}>Menu</h5>
    <ul className="list-unstyled">
      <li className="mb-4">
        <Link to="/" className="text-white text-decoration-none" style={{fontFamily:'Arvo'}}><FaHome className='me-2' /> Dashbord
        </Link>
      </li>

      <li className="mb-4">
        <Link to="/create-invoice" className="text-white text-decoration-none" style={{fontFamily:'Arvo'}}>< FaPlus className='me-2' />Create Invoice
        </Link>
      </li>

      <li className="mb-4">
        <Link to="/my-invoices" className="text-white text-decoration-none" style={{fontFamily:'Arvo'}}><  FaFileInvoice className='me-2' /> My Invoices
        </Link>
      </li>

    </ul>
    </div>
  )
}

export default Sidebar