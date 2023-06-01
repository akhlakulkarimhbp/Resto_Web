import React from 'react'

function Register() {
  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5 text-left'>
              <h2 style={{fontSize: 30}} className='text-center m-2'>Register</h2>
                <div>
                    <input type='text' placeholder='name' className='form-control'/><br/>
                    <input type='text' placeholder='email' className='form-control'/><br/>
                    <input type='text' placeholder='password' className='form-control'/><br/>
                    <input type='text' placeholder='password' className='form-control'/>
                    <button className='btn mt-5'>REGISTER</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
