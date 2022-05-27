import React ,{FC}from 'react'
import Readmore from './Readmore'

interface  proptype{
  para2:string,
  boxnum:number;
}

const Feature:FC<proptype>=(props) =>{
  return (
    <div className={`feature feature${props.boxnum}`}>

      <div className={` featureimg featureimg${props.boxnum}`}></div>

      <div className="featuretitle">Feature</div>

      <div className="subtitle">{props.para2}</div>
      
      <Readmore boxnum={props.boxnum}/>
    </div>
  )
}

export default Feature