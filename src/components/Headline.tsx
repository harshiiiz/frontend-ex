import React , {FC} from 'react'

interface proptype{
  para2:string;
}

const Headline:FC<proptype>=(props)=> {
  return (
    <div className='headlinecontainer'>
      <div className="headline">
        <div className="headlineimg" ></div>
        <div className="textarea">
          <div className="texted">
          <div className="title">Headline</div>
          <div className="text">{props.para2}</div>
          </div>
          <div className="buttonhovered">
          <div className="trybutton"></div>
          <div className="buttonntext">
              Try free
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headline