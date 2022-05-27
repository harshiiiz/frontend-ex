import React,{FC} from 'react'
import Feature from './Feature'

interface proptype{
  para2:string;
}
const Features: FC<proptype>=(props) =>{
  const n=4;
  return (
    <>
    <div className='featurescontainer'>
      <div className="features">{
      [...Array(n)].map((e, i) => 
      <Feature
      boxnum = {i+1} para2={props.para2} />)
     }
     </div>
    </div>
    </>

  )
}

export default Features