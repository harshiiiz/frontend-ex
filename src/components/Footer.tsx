import React from 'react'

function Footer() {
  return (
    <div className='footercontainer'>
        <div className="footer">
            <div className="frame-1">
                <div className="logo"  ></div>
                <div className="text-input">
                    <div className="titled">
                        Susbcribe to our newsletter
                    </div>
                <div className="primary-cta">
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
            <div className="titlinks"></div>


            <div className="socials">
      
        
        
          
            
          
        
        <a href='https://discord.com/invite/eQxkYTNxSp'>
          <div className="discord"></div>
        </a>
        <a href='https://discord.com/invite/eQxkYTNxSp' >
          <div className="facebook"></div>
        </a>
        <a href='https://discord.com/invite/eQxkYTNxSp' >
          <div className="dribble"></div>
        </a>
        <a href='https://discord.com/invite/eQxkYTNxSp' >
          <div className="instagram"></div>
        </a>
        <a href='https://discord.com/invite/eQxkYTNxSp' >
          <div className="behance"></div>
        </a>
        
      
    </div>
      
            </div>
        </div>
    </div>
  )
}

export default Footer