import   { useState } from 'react'
import { addInoviceApi } from '../serveses/InvoiceAPI'
import { useNavigate } from 'react-router-dom'




function Createinvoice() {
  const navigate=useNavigate()
  const [product , setProduct]=useState([])
   const [invoiceData, setInvoiceData]=useState({
    custmername:'',
    email:'',
    phonenumber:'',
    address:'',
    invoicenumber:'',
    invoiceData:'',
    duedate:'',
    productname:'',
    quality:'',
    price:''

  })
  // console.log(invoiceData);
 const totaLAmount=product.reduce((total,item)=>{
  return total+ Number(item.quality)*Number(item.price)
 },0)

 const handlebutton=()=>{
  setProduct([...product,{
    productname:invoiceData.productname,
    quality:invoiceData.quality,
    price:invoiceData.price
  }])
 }
  const handledelete=(index)=>{
    setProduct(product.filter((item ,i)=>i !==index))

  }
  const handleCreateInvoice= async()=>{
          if(! invoiceData.custmername || ! invoiceData.email|| ! invoiceData.phonenumber){
        alert('plese fil custmorer detisl')
        return
      }

    const reqBody={
      ...invoiceData,product:product,totalAmount:totaLAmount,status:'pending'
     }
     const res=await addInoviceApi(reqBody)
     console.log(res);
     if(res.status==201){
      alert('Invoice created Succsully')
      navigate('/my-invoices')
     }
     
    
  }
  // console.log(invoice);
  
    
  return (
    <div className='container-fluid'>
      <h2 className='mb-4' style={{fontFamily:'Arvo'}}> Create New Invoice</h2>
      <div className='card shadow-sm p-4'>
        <h2 className='mb-4'>Customer Details</h2>
          {/* Customer Details Card */}
        <div className='mb-3'>
          <label className='form-label'>Customer Name</label>
          <input value={invoiceData.custmername} type="text" onChange={(e)=>setInvoiceData({...invoiceData,custmername:e.target.value})} className='form-control' placeholder='Enter customer name'  />
        </div>
         <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input value={invoiceData.email} type="email" onChange={(e)=>setInvoiceData({...invoiceData,email:e.target.value})} className='form-control' placeholder='Enter  customer email' />
        </div>
          <div className='mb-3'>
          <label value={invoiceData.phonenumber} className='form-label'>Phone Number</label>
          <input type="tel" onChange={(e)=>setInvoiceData({...invoiceData,phonenumber:e.target.value})}  className='form-control' placeholder='Enter  customer phone number' />
        </div>
        <div className='mb-3'>
          <label value={invoiceData.address}  className='form-label'>Address</label>
          <textarea type="tel" onChange={(e)=>setInvoiceData({...invoiceData,address:e.target.value})} className='form-control' placeholder='Enter  customer Address' ></textarea>
        </div>
 

      </div>
       {/* Invoice Details Card */}
      <div className='card shadow-sm p-4 mt-4'>
          <h2 className='mb-4'>Invoice Details</h2>
          <div className='mb-3 mt-3'>
          <label className='form-label'>Invoice Number</label>
          <input value={invoiceData.invoicenumber}  type="text" onChange={(e)=>setInvoiceData({...invoiceData,invoicenumber:e.target.value})}  className='form-control' placeholder='Enter  customer invoice number' />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Inovice Date</label>
          <input value={invoiceData.invoiceData}  type="date" onChange={(e)=>setInvoiceData({...invoiceData,invoiceData:e.target.value})} className='form-control'  />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Due Date</label>
          <input  value={invoiceData.duedate}  type="date"onChange={(e)=>setInvoiceData({...invoiceData,duedate:e.target.value})} className='form-control'  />
        </div>
        </div>
       {/* Product Details Card */}
       <div className='card shadow-sm p-4 mt-4'>
       <h2 className='mb-4'>Product Details</h2>
       
        <div className='mb-3 mt-3'>
          <label className='form-label'>Product Name</label>
          <input value={invoiceData.productname}  type="text" onChange={(e)=>setInvoiceData({...invoiceData,productname:e.target.value})} className='form-control' placeholder='Enter customer product name'  />
        </div>
         <div className='mb-3'>
          <label className='form-label'>Qualidty</label>
          <input value={invoiceData.quality}  type="text" onChange={(e)=>setInvoiceData({...invoiceData,quality:e.target.value})} className='form-control' placeholder='Enter qulity'  />
        </div>

         <div className='mb-3'>
          <label className='form-label'>Price</label>
          <input value={invoiceData.price}  type="number" onChange={(e)=>setInvoiceData({...invoiceData,price:e.target.value})} className='form-control' placeholder='Enter price'  />
        </div>

         <div className='mb-3'>
           <button onClick={handlebutton} type='button' className='btn btn-primary'>+ Add Product </button>
         </div>
                {product.map((pr,index)=>((
               <div key={index} className='card p-3 mt-3'>
                <h6>{pr.productname}</h6>
                <p>Quality:{pr.quality}</p>
                <p>price:{pr.price}</p>
                <p>
                 subtotal:{(Number(pr.quality)* Number(pr.price)).toFixed(2)}
                 </p>
                 <button onClick={()=>handledelete(index)} className="btn btn-danger btn-sm">Delete</button>


                </div>
                 )))}


       </div>
       <div className='card shadow-sm p-4 mt-4'>
        <h5 className='mb-3'> Invoice Summary</h5>
        <div className='d-flex justify-content-between mb-3'>
          <h5>Total Amout</h5>
          <h5>-/{totaLAmount.toFixed(2)}</h5>
        </div>

        <div className='d-flex justify-content-end mt-3'>
          <button className='btn btn-primary' onClick={()=>navigate('/invoice-prew',{state:{invoiceData,product,totalAmount:totaLAmount}})}>Preview Invoicedone</button>
          <button onClick={handleCreateInvoice} className='btn btn-success'>Create Invoice</button>

        </div>
       </div>

    </div>
    
  )
}

export default Createinvoice