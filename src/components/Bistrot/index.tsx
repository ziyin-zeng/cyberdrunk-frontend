import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {getAlcoholByCat} from '../../api/Alcohol'

const Bistrot = () => {
  const [alcohol, setAlcohol] = useState("1")

//   useEffect(()=>{
//     getAlcoholByCat(1)
//     .then((response) => {
//       const alcoholName = response.data;
//       console.log(alcoholName)
//       setAlcohol(alcoholName)
//       console.log("this is al in then ",alcohol)
//     });
//     console.log("this is al ",alcohol)
//   },[])

  return (
    <div className={'container home-page'}>
      <div className={'text-zone'}>
        <h2>Frontend Developer/ Destruction warlock / {alcohol} Lover</h2>
      </div>
    </div>
  )
}

export default Bistrot
