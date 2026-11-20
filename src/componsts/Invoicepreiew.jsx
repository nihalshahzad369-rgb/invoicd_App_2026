import { useLocation } from "react-router-dom"

// import React from 'react'


function Invoicepreiew() {
  const location=useLocation()
  const { invoiceData, product, totalAmount } = location.state
 console.log(invoiceData)
console.log(product)
console.log(totalAmount)
  


  return (
    <div className='container mt-5'>
  <h2>Invoice Preview</h2>

  <h4>Customer Details</h4>
  <p>Name: {invoiceData.custmername}</p>
  <p>Email: {invoiceData.email}</p>
  <p>Phone: {invoiceData.phonenumber}</p>
  <p>Address: {invoiceData.address}</p>
  <h4>Invoice Details</h4>
<p>Invoice Number: {invoiceData.invoicenumber}</p>
<p>Invoice Date: {invoiceData.invoiceData}</p>
<p>Due Date: {invoiceData.duedate}</p>

<h4>Product Details</h4>

<table className='table table-bordered'>
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Total</th>
    </tr>
  </thead>

  <tbody>
    {product.map((item, index) => (
      <tr key={index}>
        <td>{item.productname}</td>
        <td>{item.quality}</td>
        <td>{item.price}</td>
        <td>{Number(item.quality) * Number(item.price)}</td>
      </tr>
    ))}
  </tbody>
</table>
<div className='text-end mt-3'>
  <h4>Total Amount: ₹{totalAmount}</h4>
</div>
<div className="text-end mt-4">
  <button className="btn btn-danger" onClick={()=> window.print()}>print</button>
</div>
</div>

  )
}

export default Invoicepreiew