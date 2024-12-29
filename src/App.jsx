import React, { useEffect, useState } from 'react'
import  './App.css'
import './Global.css'
import ImageIcon from './components/ImageIcon/ImageIcon'
import Windows from './components/imgaes/windows.png'
import FileExplorer from './components/imgaes/fileExporar.png'
import Edage from './components/imgaes/edage.png'
import Mail from './components/imgaes/Mail.png'
import Shopping from './components/imgaes/shopping.png'
import { IoIosArrowUp } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import WindowsBox from './components/ImageIcon/WindowsBox/WindowsBox'


const App = () => {


	// const[images, setImages] = useState([
	// 	{images: Windows},
	// 	{images: FileExplorer},
	// 	{images: Edage},
	// 	{images: Mail},
	// 	{images: Shopping}
	// ])


	const[time, setTime] = useState();
	const[date, setDate] = useState();
	const[active, setActive] = useState();

	useEffect(()=>{
		const today = new Date();

		const time = `${today.getHours()} : ${today.getMinutes()} ${today.getHours() > 12 ? "pm" : "am"}`;

		const date = `${today.getMonth() + 1 }/ ${today.getDate()}/${today.getFullYear()}`


		setTime(time);
		setDate(date);
	})

	const activeHandler = () =>{
		setActive(!active)
	}




  return (
	<section className='wallpaper'>
	  <div className="task-bar">

		<ImageIcon  icon={Windows} handleClick={activeHandler} />
		<ImageIcon  icon={FileExplorer}/>
		<ImageIcon  icon={Edage}/>
		<ImageIcon  icon={Mail}/>
		<ImageIcon  icon={Shopping}/>

	  </div>

	  <div className="right-tools">
		<i className='icons' ><IoIosArrowUp /></i>
		<i className='icons' ><FaWifi /></i>
		<i className='icons' ><FaVolumeUp /></i>
	  </div>
	  <div className="time-date">
		<h3 className="time">{time}</h3>
			<h2 className="date">{date}</h2>
	  </div>



	  { active ? <WindowsBox active/> : <WindowsBox />}
	</section>
  )
}

export default App
