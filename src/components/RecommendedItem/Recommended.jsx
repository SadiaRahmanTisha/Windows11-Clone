import React from 'react'
import './Recommended.css'

const Recommended = ({icon, heading, text, classList}) => {
  return (
	<div className={`recommeded-item-box`} >
	 <img src={icon && icon} className="recomeded-item-image" />
	  <div className='recommeded-text'>
		<h5>{heading && heading}</h5>
		<p>{text && text}</p>
	  </div>
	</div>
  )
}

export default Recommended
