import React,{FC} from 'react'

interface proptype{
  boxnum:number;
}
const Readmore:FC<proptype>=(props) =>{
  return (
    <div className={`readmore readmore${props.boxnum}`}>
      
        <div className="label">Read more</div>
      
       <div className="right-arrow"  ></div> 
    </div>
  )
}

export default Readmore