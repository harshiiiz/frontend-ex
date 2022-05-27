import React from 'react'
import Client from './Client'

function Clients() {
  const n=3;
  return (
    <div className='clientcontainer'>
      <div className="clients">
        <h1 className="clienttitle">Clients</h1>
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