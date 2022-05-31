import React,{FC} from 'react'
interface proptype{
    para2:string
}

const Header: FC<proptype>=(props)=> {
  return (
<div className='header1'>
    <div className='content'>
        <div className="header2">
      
        <div className='titlee'>
        <div className='title1 '>Start to <br/> workout </div>
        <div className='subtitle'>{props.para2}</div>
        </div>
        <div className="buttonhover">
        <div className='button'>
           <div className="buttontext">Get started</div> </div>
        </div> </div>
      <div className='image'></div>
     
    </div>
</div>
  )
}

export default Header