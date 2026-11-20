import   { useEffect, useState } from 'react'
import { getinvoiceApi } from '../serveses/InvoiceAPI'

 

function Dashbord() {
  const [invoice,setinvoice]=useState([])

  useEffect(() => {
     const getinvoicd= async()=>{
      const res=await getinvoiceApi()
      setinvoice(res.data)
      // console.log(res.data);
      console.log(res.data.map((item) => item.status))
     }
     getinvoicd()
  }, [])
  // total
  const totalinvoice=invoice.length
  // toatalpaid
  const paidInvoice=invoice.filter((item)=>item.status=='paid').length
  // pending
  const pending=invoice.filter((item)=>item.status=='pending').length
  // total revenu

 const totalrevenu = invoice.reduce((total, item) => {
  return total + Number(item.totalAmount)
}, 0)

  
  return (
     <div className="container-fluid">
      <h2 className="mb-4" style={{fontFamily:'Arvo'}}>Dashboard</h2>
      <div className='row g-4'>
        <div className='col-md-3'>
          <div className='card shadow-sm p-3'>
            <h6>Total Invoice</h6>
            <h3>{totalinvoice}</h3>
         </div>
          </div>
             {/* paid invoice */}
           <div className='col-md-3'>
          <div className='card shadow-sm p-3'>
            <h6>Paid invoice</h6>
            <h3>{paidInvoice}</h3>
         </div>
          </div>
            {/* pending invoice */}
           <div className='col-md-3'>
          <div className='card shadow-sm p-3'>
            <h6>pending Invoice</h6>
            <h3>{pending}</h3>
         </div>
          </div>
           {/* total revenu */}
           <div className='col-md-3'>
          <div className='card shadow-sm p-3'>
            <h6>Total Revenu</h6>
            <h3> {totalrevenu.toFixed(2)}</h3>
         </div>
          </div>

      </div>
        {/* Recent Invoices */}
        <div className='card shadow-sm p-4 mt-4'>
          <h5 className='mb-3'>Recent Invoice</h5>
 
         {/* table */}
  <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
             <th>Invoice ID</th>
               <th>Customer</th>
                <th>Date</th>
                  <th>Amount</th>
                    <th>Status</th>
           </tr>
        </thead>

      {/* tablebody */}
       <tbody>
      
        {invoice.map((item,index)=>(
           <tr key={index}>
        <td>#{item. invoicenumber}</td>
        <td>{item. custmername}</td>
        <td>{item.invoiceData}</td>
        <td>₹ {Number(item.totalAmount).toFixed(2)}</td>
        <td>
          <span className={`badge ${item.status === 'paid' ? 'bg-success' : 'bg-warning text-dark'}`}>{item.status || 'Pending'}</span>
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

export default Dashbord