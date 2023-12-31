import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {doAlgoTriInsertion} from '../../api/Tri'
import CardHighlight from '../CustomCard/WhiskeyCard'

const Bistrot = () => {
  const [tableau, setTableau] = useState([5,4,3,2,1,0])

  useEffect(()=>{
    const tableau = {'tableau': [5,4,20,0,7,8,2,1,34,2]}
    // doAlgoTriInsertion()
    // .then((response: any) => {
    //   const alcoholName = response.data;
    //   setTableau(alcoholName.data)
    // });
    
  },[])

  return (
    <div className={'container bistrot-page'}>
      <div className={'text-zone'}>
        <h2>{tableau}</h2>
        <CardHighlight/>
      </div>
    </div>
  )
}

export default Bistrot
