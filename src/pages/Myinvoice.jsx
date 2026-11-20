import   { useEffect, useState } from 'react'
import { dltInvoiceApi, getinvoiceApi, updateInvoiceApi } from '../serveses/InvoiceAPI'
import { useNavigate } from 'react-router-dom'
import { RiSafariFill } from 'react-icons/ri'


 

function Myinvoice() {
  const navigate=useNavigate()
  const [invoice,setInvoice]=useState([])
 
  useEffect(() => {
    const fetcinvoice=async()=>{
      const res=await getinvoiceApi()
      console.log(res.data);
      setInvoice(res.data)
      
    }
    fetcinvoice()
    
  
    
  }, [])
  const habdledelte=async(id)=>{
    const res =await dltInvoiceApi(id)
    console.log(res);
     if(res.status==200){
      setInvoice((dt)=>dt.filter((item)=>item.id !==id))
      alert('invoice deltete sucssfully')
     }
      
    
  }
  const  handlestaus= async(item,status)=>{
    const updateinvoice={...item,status}
    const res=await updateInvoiceApi(item.id,updateinvoice)
    console.log(item.id);
    console.log(res);
    
    if(res.status==200){
    setInvoice((st)=>st.map((pr)=>pr.id==item.id?updateinvoice:pr))
    }

  }

  return (
    <div className="container-fluid">
      <h2 className="mb-4" style={{fontFamily:'Arvo'}}>My Invoices</h2>
      <div className='card shadow-sm p-4'>
        <h5 className='mb-3 'style={{fontFamily:'Story Script'}}  >All invoice</h5>
        <div className='table-responsive'>
          <table className="table table-bordered table-hover" style={{fontFamily:'Story Script'}} >
            <thead className='table-light ' style={{fontFamily:'Story Script'}} >
              <tr>
                <th>Invoice ID</th>
                <th>Cusutomer Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoice.map((pr,index)=>(
                <tr key={index}>
                <td>#{pr.invoicenumber}</td>
                <td>{pr.custmername}</td>
                <td>{pr.duedate}</td>
                <td>-/{Number(pr.totalAmount).toFixed(2)}</td>
                <td>
                     <select className='form-select form-select-sm' value={pr.status} onChange={(e)=>handlestaus(pr,e.target.value)}>
                   <option value="pending">pending</option>
                   <option value="paid">Paid</option>

                    </select>
                 </td>
                <td>
                  <button onClick={()=>navigate(`/edit-invoice/${pr.id}`)} className='btn btn-primary btn-sm me-2'>Edit</button>
                  
                  <button onClick={()=>habdledelte(pr.id)}  className='btn btn-danger btn-sm me-2'>Delete</button>
                </td>
              </tr>

              ))}
               
            </tbody>
             

          </table>

        </div>
      </div>
    </div>
  )
}

export default Myinvoice