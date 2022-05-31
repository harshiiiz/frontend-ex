import React,{FC} from 'react'

interface proptype{
  boxnum:number;
}
const ClientComment:FC<proptype>=(props)=> {
  return (
  

    <div className="client-comment">
      <div className="component">
    <div className={` component${props.boxnum}`}>
    </div>
      <div className="ellipse" ></div>
      
    </div>
    <div className="client-rating">
      <div className="full-name">
        Full name
      </div>
      <div className="stars">
        <div className="star-1"></div>
        <div className="star"></div>
        <div className="star2"></div>
        <div className="star3"></div>
        <div className="star-2"></div>
      </div>
    </div>
  </div>
       
      
  )
}

export default ClientComment