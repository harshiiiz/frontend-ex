import React , {FC} from 'react'
import ClientComment from './ClientComment';
interface proptype
{
    boxnum:number;
}
const Client:FC<proptype>=(props)=> {
     const comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.';
  return (
    <div className={`client client${props.boxnum}`}>
        <div className={` comment comment${props.boxnum}`}>{comment}</div>
        <ClientComment boxnum={props.boxnum}/>

        </div>
       

    
  )
}

export default Client