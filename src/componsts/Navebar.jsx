// import React from 'react'

function Navebar() {
  return (
    <>
    <nav className='navbar bg-white shadow-sm px-4'>
      <h4 className="fw-bold text-primary mb-0" style={{fontFamily:'Arvo'}}>Invoice  <span className='text-danger'> Pro</span> </h4>
      <div className='d-flex align-items-center gap-3'>
        <span>Welcome Admin</span>
        <button className='btn btn-outline-primary btn-sm' style={{fontFamily:'Arvo'}}>Profile</button>

      </div>

    </nav>
    </>
  )
}

export default Navebar