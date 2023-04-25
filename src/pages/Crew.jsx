import { useRef, useState } from 'react'

import data from '../index.js'




export default function Crew(){
  

  
  const [crewNum,setCrewNum] = useState(0)
  const navigation = useRef()

  function handleClick(e){
    setCrewNum(e.target.dataset.index)
  
      const child =navigation.current.children
      for(let i = 0; i < child.length; i++) {
          const element = child[i];
          element.classList.remove('active')
          
      }
     e.target.classList.add('active')
  }


  const elements = data.map((element ,crewIndex) => (
    <div className='crew--page--container'>
            <h1 className='meet-your-crew'><span className='meet-your-crew-span'>02</span>Meet your crew</h1>
            <div key={crewIndex} className="crew--page">
              <div className='content'>
                <p className="role">{element.crew[crewNum].role}</p>
                <h1 className='name'>{element.crew[crewNum].name}</h1>
                <p className="bio"> {element.crew[crewNum].bio}</p>
                <div ref={navigation} className='bullets--container'>
                  <p data-index='0' onClick={handleClick} className='bullets active'>•</p>
                  <p data-index='1' onClick ={handleClick} className='bullets'>•</p>
                  <p data-index='2' onClick ={handleClick} className='bullets'>•</p>
                  <p data-index='3' onClick={handleClick} className='bullets'>•</p>
              
                </div>
              </div>
              <div className='img--container'>
                <img src={element.crew[crewNum].image} alt='' className='person' />
                <hr className='hr' />
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