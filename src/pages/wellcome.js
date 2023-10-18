import React from 'react'
import apple from '../components/images/Apple.png'
import google from '../components/images/Google.png'
const Wellcome = () => {
  return (
    <>
        <section className='wellcome'>
                <div className="wellcome-main-father-div">
                    <div className="wellcome-child-1"></div>
                    <div className="wellcome-child-2">
                        <div className="wellcome-main-contant">
                            <div className="wellcome-child-2-part-1">
                                <h1 className='common-h-50' >Greetings! Welcome to luxury gift shop.</h1>
                            </div>
                            <div className="wellcome-child-2-part-2">
                                <div>
                                    <p className='wellcome-child-2-part-2-text-p' >Use your mobile number to sign up or log in</p>
                                    <input className='wellcome-child-2-part-2-input' type="text" placeholder='+380 XX XXX XX XX' />
                                </div>
                                <button className='btn-black' >CONTINUE</button>
                            </div>
                            <div className="wellcome-child-2-part-3">
                                <div className="line-signup"></div>
                                <p>or </p>
                                <div className="line-signup"></div>
                            </div>
                            <div className="wellcome-child-2-part-4">
                                <p>Instantly login or sign up via Google</p>
                                <div className='wellcome-btn-1-2' >
                                    <button className=' continue-google-btn btn-white' > <img src={google} /> CONTINUE WITH GOOGLE</button>
                                    <button className=' continue-google-btn btn-white' > <img src={apple} /> CONTINUE WITH APPLE</button>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-text-wellcome' >
                            <p>Privacy Policy</p>
                            <div className="row-line"></div>
                            <p>Terms and Conditions</p>
                        </div>
                    </div>
                    <div className="wellcome-child-1"></div>
                </div>
            </section>
    </>
  )
}

export default Wellcome