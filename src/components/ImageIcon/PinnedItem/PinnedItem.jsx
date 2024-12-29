import React from 'react'
import './PinnedItem.css'

const PinnedItem = ({icon, title, classList}) => {
  return (
	<div className='pinned-item'>
	  <img src={icon && icon} className='pinned-image'/>
	  <p className='pinned-text secondary-heading'>{title && title }</p>
	</div>
  )
}

export default PinnedItem
