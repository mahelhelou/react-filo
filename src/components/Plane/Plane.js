import React from 'react'

import airPlane from '../../assets/images/airplane.gif'
import './Plane.scss'

function Plane() {

  return (
    <div className="plane">
      <img src={airPlane} alt="airPlane" />
    </div>
  )
}

export default Plane
