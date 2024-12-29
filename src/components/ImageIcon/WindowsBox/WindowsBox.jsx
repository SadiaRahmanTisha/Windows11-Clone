import React from 'react'
import './WindowsBox.css'
import PinnedItem from '../PinnedItem/PinnedItem'
import Edage from "../../imgaes/edage.png"
import FileExporar from "../../imgaes/fileExporar.png"
import Mail from "../../imgaes/Mail.png"
import Shopping from "../../imgaes/shopping.png"
import Photos from "../../imgaes/Photos.png"
import Spotify from "../../imgaes/Spotify.png"
import Store from "../../imgaes/Store.png"
import Notepad from "../../imgaes/Notepad.png"
import Calculator from "../../imgaes/Calculator.png"
import Calender from "../../imgaes/Calender.png"
import Movie from "../../imgaes/Movie.png"
import NetFilex from "../../imgaes/NetFilex.png"
import Paint from "../../imgaes/Paint.png"
import Profile from "../../imgaes/gilrs.png"
import { FaPowerOff } from "react-icons/fa";
 

import Recommended from '../../RecommendedItem/Recommended'




const WindowsBox = ({active}) => {
  return (
	<div className={`windows-box ${active ? "active" : ""}`}>
	  <div className="tools-box">
	  <p className="primary-heading">Pinned</p>
	  <div className="pinned-box">
		<PinnedItem icon={Edage} title="Edage" />
		<PinnedItem icon={FileExporar} title="FileExporar" />
		<PinnedItem icon={Mail} title="Mail" />
		<PinnedItem icon={Shopping} title="Shopping" />

		<PinnedItem icon={Photos} title="Photos" />
		<PinnedItem icon={Spotify} title="Spotify" />
		<PinnedItem icon={Store} title="Store" />
		<PinnedItem icon={Notepad} title="Notepad" />
		<PinnedItem icon={Calculator} title="Calculator" />
		<PinnedItem icon={Calender} title="Calender" />
		<PinnedItem icon={Movie} title="Movie" />
		<PinnedItem icon={NetFilex} title="NetFilex" />
	  </div>
		
		{/* Recommended */}

		<p className='primary-heading-2'>Recommened</p>

		<div className='recommended-box'>
			<Recommended icon={Paint} heading="Paint" text="Recently Added"  />
			<Recommended icon={Paint} heading="Paint" text="Recently Added"  />
			<Recommended icon={Paint} heading="Paint" text="Recently Added"  />
			<Recommended icon={Paint} heading="Paint" text="Recently Added"  />
			
		</div>

	  </div>









		{/* profile-box */}

		<div className="profile-box">
			<div className='profile'>
			<img src={Profile} className="profile-image" />
			<p>Sadia Rahman Tisha</p>
			</div>
			<i className='poweroff'><FaPowerOff /></i>
		</div>

	</div>
  )
}

export default WindowsBox
