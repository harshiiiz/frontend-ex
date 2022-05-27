import React,{FC} from 'react'

interface proptype{
  boxnum:number;
}
const ClientComment:FC<proptype>=(props)=> {
  return (
  

    <div className="client-comment">
    <div className={`component${props.boxnum}`}>
      <img className="ellipse" src="https://cdn.animaapp.com/projects/6267e8559ca4aeb9…ses/6267e86e0561ee1dfacdc2c0/img/ellipse-4@2x.png
"  alt='e'/>
    </div>
    <div className="client-rating">
      <div className="full-name">
        <span >Full name</span>
      </div>
      <div className="stars">
        <div className="star-1"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star-2"></div>
      </div>
    </div>
  </div>
       
      
  )
}

export default ClientComment