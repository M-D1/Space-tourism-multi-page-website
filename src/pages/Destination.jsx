



import data from '../index.js'
import { useRef, useState } from 'react'





export default function Destination(){
 const [planetNum ,setPlanetNum] = useState(0)
 const navigation = useRef()
 
 function handleClick(e){
   setPlanetNum(e.target.dataset.index)
 
   const child =navigation.current.children
   for (let i = 0; i < child.length; i++) {
      const element = child[i];
      element.classList.remove('active')
      
   }
     e.target.classList.add('active')

  
   
 }
 
 const elements = data.map((planet,index) => {

  
   return(
      <div className='destination--page--container'>
          <h1 className='pick-destination'><span className='pick-destination-span'>01</span> Pick your destination</h1>
          <div key={index} className='destination--page'>
              
               <div>
               <img src={planet.destinations[planetNum].image} width='50%' className='planet--img' alt=""/>
               </div>
               
               
               <div className='planet'>
                  <div ref={navigation} className='link'>
                     <p data-index='0' className='active' onClick={handleClick}>Moon</p>
                     <p data-index='1'onClick={handleClick} >Mars</p>
                     <p data-index='2' onClick={handleClick}>Europa</p>
                     <p data-index='3' onClick={handleClick}>Titan</p>
                  </div>
                  <h1 className='name'>{planet.destinations[planetNum].name}</h1>
            
                  <p className='desc'>{planet.destinations[planetNum].description}</p>
                  <hr className='hr' />

                  <div className='dis--time--container'>
                     <div className='distance'>
                        <p className='title' >Avg. Distance</p>
                        <p className='info'>{planet.destinations[planetNum].distance}</p>
                     </div>
                     <div className='time'>
                        <p className='title'>Est.Travel Time</p>
                        <p className='info'>{planet.destinations[planetNum].travel}</p>
                     </div>
               
                  </div>
                  
               </div>
            </div>
      </div>
    
   )
 }
 
 
 )
 return(
  <>   
   {elements}

  </>
 )
}