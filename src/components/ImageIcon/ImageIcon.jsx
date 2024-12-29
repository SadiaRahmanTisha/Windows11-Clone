import React from 'react'
import'./ImageIcon.css'

const ImageIcon = ({icon, handleClick}) => {
  return (
	<div className='imageBox'onClick={handleClick && handleClick} >
		<img src={icon && icon} alt="" className='image' />
	</div>
  )
}

export default ImageIcon
