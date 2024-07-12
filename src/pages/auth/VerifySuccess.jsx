// src/App.jsx
import React from 'react';
import img1 from '/Users/aziz/trovka-website/trovka-website/trovka/src/assets/image/verify.png'
const VerifySuccess = () => {
  return (
    <div  style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
    }} >
      <div className='rounded-border'  style={{
        backgroundColor: 'white',
        padding: '40px',
        // borderRadius: '20px',
        // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        border:'2px solid transparent ',
        borderImage:'linear-gradient(to top, yellow, #E4EAFD)',
        borderImageSlice:'1',    
        }} >
        <img src={img1} alt="Verified" style={{ width: '100px', display:'flex', justifyContent: 'center',alignItems: 'center' ,marginLeft:'108px'}} />
        <h1 style={{ fontSize: '2rem', marginBottom: '10px', color: '#333' }}>Verified!</h1>
        <p style={{ fontSize: '1rem', marginBottom: '20px', color: '#777' }}>You have successfully verified your account!</p>
        <button style={{
          backgroundColor: '#ffa500',
          border: 'none',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1rem',
        }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#ff8c00'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#ffa500'}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default VerifySuccess;
