
import { useState,useRef } from 'react'
import img from '../assets/technology/image-space-capsule-landscape.jpg'
import data from '../index'
import { useEffect } from 'react'

console.log(data[0].technology)

export default function Technology(){
 const [techNum,setTechNum] = useState(0)
 const [windowWidth ,setWindowWidth] = useState(window.innerWidth)

 const handleResize = () => setWindowWidth(window.innerWidth)

 useEffect(() => {
  window.addEventListener('resize',handleResize)
  
  return () => window.removeEventListener('resize',handleResize)
 },[])

 const navigation = useRef()

  function handleClick(e){
    setTechNum(e.target.dataset.index)
  
      const child =navigation.current.children
      for(let i = 0; i < child.length; i++) {
          const element = child[i];
          element.classList.remove('active')
          
      }
     e.target.classList.add('active')
  }

 const elements = data.map((tech,techIndex) => (
  <div key={techIndex} className='technology--page--container'>
    <h1 className = 'space--launch'><span className='space--launch--span'>01</span>Space launch 101</h1>
     <div  className='technology--page'>
    
    <div className="img--container">
     <img src={windowWidth >= 797 ? tech.technology[techNum].images.portrait : tech.technology[techNum].images.landscape} alt='' />
    </div>
    <div ref={navigation} className="navigation">
     <p data-index='0' onClick={handleClick} className='active'>1</p>
     <p data-index='1' onClick={handleClick}>2</p>
     <p data-index='2' onClick={handleClick}>3</p>
    </div>
    <div className="content">
     <p className='terminology'>The Terminology</p>
     <h2 className='title'> {tech.technology[techNum].name}</h2>
     <p className='desc'> {tech.technology[techNum].description}</p>
    </div>
   </div>
  </div>
  
 ))
 return(
  <>
    
   {elements}
   
  </>
 )
}