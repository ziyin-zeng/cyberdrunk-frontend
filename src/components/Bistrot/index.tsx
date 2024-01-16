import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { styled } from "@mui/material/styles"
import { doAlgoTriInsertion } from '../../api/Tri'
import CardStepper from '../CustomCard/CardStepper'
import WhiskeyTitle from '../CustomCard/WhiskeyTitle'
import { CardHighlight } from '../CustomCard/WhiskeyCard'


const Bistrot = () => {
  const [tableau, setTableau] = useState([5, 4, 3, 2, 1, 0])

  useEffect(() => {
    const tableau = { 'tableau': [5, 4, 20, 0, 7, 8, 2, 1, 34, 2] }
    // doAlgoTriInsertion()
    // .then((response: any) => {
    //   const alcoholName = response.data;
    //   setTableau(alcoholName.data)
    // });

  }, [])

  const StyledFlexBox = styled("div")(() => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: "30px",
    height: "90%"
  }))

  return (
    <div className={'container bistrot-page'}>
      <div className={'content-zone'}>
        <h2 style={{height: "10%"}}>{tableau}</h2>
        <WhiskeyTitle/>
        <StyledFlexBox>
          <div style={{border: "solid", width: "15%", height: "30%"}}>sometihngsometihngsometihng</div>
          <CardStepper />
        </StyledFlexBox>
        
        {/* <CardHighlight/> */}
      </div>
    </div>
  )
}

export default Bistrot
