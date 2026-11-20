import  { useEffect, useState } from 'react'
import {   useNavigate, useParams } from 'react-router-dom'
import { getinvoiceApi, updateInvoiceApi } from '../serveses/InvoiceAPI'





function Editinvoice() {
  const navigate=useNavigate()
  const {id}=useParams()
  // console.log(id);
  
  const [invoiceData,SatInnoiceData]=useState({})

  useEffect(() => {
     const fetchinvo= async()=>{
      const res=await getinvoiceApi()

      const data=res.data.find((item)=>item.id == id)
      SatInnoiceData(data)
     }
     fetchinvo()
  }, [id])
  console.log(invoiceData);

  //total amout
  const totalAmount = (invoiceData.product || []).reduce((total, item) => {
  return total + Number(item.quality) * Number(item.price)
}, 0)
  
 const updatehandle= async()=>{
  const res=await updateInvoiceApi(id,invoiceData)
  console.log(res);
  if(res.status==200){
    alert('invoice update succsfuly')
    navigate('/my-invoices')
  }
  
 }


  
  
  return (
    <div className='container-fluid'>
      <h2 className='mb-4' style={{fontFamily:'Arvo'}}>Edit Invoice</h2>
      <div className='card shadow-sm p-4 mb-4 ' style={{fontFamily:'Story Script'}} >
        <h5 className='mb-3'style={{fontFamily:'Story Script'}} >Custmor details</h5>
        <div className='row g-3'>
          <div className='col-md-6'>
            <label className='form-label'>Customer Nmae</label>
             <input value={invoiceData.custmername || ''} onChange={(e)=>SatInnoiceData({...invoiceData,custmername:e.target.value})} type="text" className="form-control" placeholder="Enter customer name" />
          </div>

           <div className='col-md-6'>
            <label className='form-label'>email</label>
             <input value={invoiceData.email || ''} onChange={(e)=>SatInnoiceData({...invoiceData,email:e.target.value})} type="eamil" className="form-control" placeholder="Enter customer email" />
          </div>

            <div className='col-md-6'>
            <label className='form-label'>phone NUmber</label>
             <input value={invoiceData.phonenumber || ''} onChange={(e)=>SatInnoiceData({...invoiceData,phonenumber:e.target.value})} type="text" className="form-control" placeholder="Enter customer Phone number" />
          </div>


          <div className='col-md-6'>
            <label className='form-label'>Addressr</label>
             <textarea value={invoiceData.address || ''} onChange={(e)=>SatInnoiceData({...invoiceData,address:e.target.value})} type="text" className="form-control" placeholder="Enter customer Address"></textarea>
          </div>

        </div>

      </div>

      <div className='container-fluid' style={{fontFamily:'Story Script'}} >
      <h2 className='mb-4'>Invoice Details</h2>
      <div className="row g-3">
  <div className="col-md-6">
    <label className="form-label">Invoice Number</label>
    <input value={invoiceData. invoicenumber|| ''} onChange={(e)=>SatInnoiceData({...invoiceData, invoicenumber:e.target.value})} type="text" className="form-control" placeholder="Enter invoice number" />
  </div>

  <div className="col-md-6">
    <label className="form-label">Invoice Date</label>
    <input value={invoiceData. invoiceData|| ''} onChange={(e)=>SatInnoiceData({...invoiceData, invoiceData:e.target.value})} type="date" className="form-control" />
  </div>

  <div className="col-md-6">
    <label className="form-label">Due Date</label>
    <input value={invoiceData. duedate|| ''} onChange={(e)=>SatInnoiceData({...invoiceData, duedate:e.target.value})} type="date" className="form-control" />
  </div>
</div>
      </div>

      <div className='container-fluid' style={{fontFamily:'Story Script'}} >
      <h2 className='mb-4'>product details</h2>
      <div className="row g-3">
  <div className="col-md-4">
    <label className="form-label">Product Name</label>
    <input value={invoiceData.product?.[0]?. productname|| ''} onChange={(e)=>SatInnoiceData({...invoiceData,product:invoiceData.product.map((item,index)=>index==0 ?{...item,productname:e.target.value}:item)})} type="text" className="form-control" placeholder="Product name" />
  </div>

  <div className="col-md-4">
    <label className="form-label">Quantity</label>
    <input value={invoiceData.product?.[0]?.quality|| ''} onChange={(e)=>SatInnoiceData({...invoiceData,product:invoiceData.product.map((item,index)=>index==0 ?{...item,quality:e.target.value}:item)})} type="number" className="form-control" placeholder="Quantity" />
  </div>

  <div className="col-md-4">
    <label className="form-label">Price</label>
    <input value={invoiceData.product?.[0]?.price|| ''} onChange={(e)=>SatInnoiceData({...invoiceData,product:invoiceData.product.map((item,index)=>index==0 ?{...item,price:e.target.value}:item)})} type="number" className="form-control" placeholder="Price" />
  </div>
</div>


      </div>
      <div className="card shadow-sm p-4 mb-4">
      <h5 className="mb-3">Invoice Summary</h5>
     <div className="d-flex justify-content-between mb-3">
      <h6>Total Amount</h6>
      <h5>{totalAmount.toFixed(2)}</h5>
     </div>
     <div className="text-end mt-3">
      <button onClick={updatehandle} className="btn btn-success">
        Update Invoice
      </button>
      </div>

</div>
      
       
      </div>
  )
}

export default Editinvoice