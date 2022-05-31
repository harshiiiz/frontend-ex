import React from 'react'
import Client from './Client'

function Clients() {
  const n=3;
  return (
    <div className='clientcontainer'>
      <div className="clients">
        <div className="clienttitle">Clients</div>
        <div className="clientcomments">{
        [...Array(n)].map((e, i) => 
      <Client
      boxnum={i+1}
      />)
        }
      
      </div>

      </div>
      
    </div>
  )
}

export default Clients