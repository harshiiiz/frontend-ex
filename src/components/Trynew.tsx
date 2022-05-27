import React,{FC} from 'react'
interface proptype{
    para2:string;
}
const Trynew:FC<proptype>=(props) =>{
  return (
    <div className='trynewcontainer'>
        <div className="frame">
       <div className="bg">
           <div className="info">
               <div className="title">
                   <div className="maintitle">Try new classes</div>
                   <div className="subtitled">{props.para2}</div>
               </div>
           </div>
           <div className="iphone">
               <div className="template">
                   <div className="base">
                   <div className="shadows"></div>
                   
                   </div>
                   <div className="blackcover"></div>
                   </div>
                   
               <div className="phonescreen"></div>
           </div>
           <div className="block">
               <div className="learnmore">Learn more</div>
               <div className="block2">
                   <div className="gplay"></div>
                   <div className="appstore"></div>
               </div>
           </div>
       </div>
        
    
    
    
    </div>
    </div>
  )
}

export default Trynew