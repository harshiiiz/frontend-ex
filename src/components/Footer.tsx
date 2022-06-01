import React from 'react'

function Footer() {
  return (
    <div className='footercontainer'>
      <div className="upperdivider"></div>
        <div className="footer">
          
            <div className="frame-1">
                <div className="logo"  ></div>
                <div className="text-input">
                    <div className="titled">
                        Susbcribe to our newsletter
                    </div>
                <div className="primary-ctaa">
                <input
                className="enter-your-email"
                name="enteryouremail"
                placeholder="Enter your email"
                type="email"
                />
                <div className="place">
                   <span >Send</span>
                </div>
                </div>
                </div>
            </div>
            
            <div className="frame2">
            


            <div className="socials">
              <div className="livelinks">
      
        </div>
        
        
      
    </div>
    <div className="titlinks">
      <div className="privacy">Privacy policy</div>
      <div className="cookies">Cookies policy</div>
      <div className="trainerz">© Trainers 2022</div>
    </div>
      
            </div>
        </div>
    </div>
  )
}

export default Footer