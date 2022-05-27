import React,{FC} from 'react'
interface proptype{
    para2:string
}

const Header: FC<proptype>=(props)=> {
  return (
<div className='header1'>
    <div className='content'>
        <div className="header2">
      
        <div className='title'>
        <div className='title1'>Start to <br/> workout </div>
        <p className='subtitle'>{props.para2}</p>
        </div>

        <div className='button'>
           <div className="buttontext">Get started</div> </div>
        </div>
      <div className='image'></div>
     
    </div>
</div>
  )
}

export default Header