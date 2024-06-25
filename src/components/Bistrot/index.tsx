import './index.scss'
import { useEffect, useRef, useState } from 'react'
import { styled } from "@mui/material/styles"
import { doAlgoTriInsertion, selectSort } from '../../api/Tri'
import { getWhiskeyBrand } from '../../api/Alcohol'
import CardStepper from '../CustomCard/CardStepper'
import WhiskeyTransitionTitle from '../CustomCard/WhiskeyTransitionTitle'
// import { CardHighlight } from '../CustomCard/WhiskeyCard'
import JD from '../../assets/images/whiskey/pexels-marcelo-verfe-18702214.jpg';
import JDLogo from '../../assets/images/whiskey/logo/johnnie-walker-brand.avif';
import LK from '../../assets/images/whiskey/cody-chan-hLgKiFcVuDY-unsplash.jpg'
import CVS from '../../assets/images/whiskey/kartikeya-srivastava-Wn07Sg4O2LY-unsplash.jpg'
import MCL from '../../assets/images/whiskey/daniel-horvath-ZdoDrx4u7WA-unsplash.jpg'


// 假设调API来了一串标题
const TitleList = ["J", "L", "C", "G"]

const cards = [
  {
    brand: 'Johnnie walker',
    color: "#fc7944",
    cover: JD,
    logo: JDLogo,
    title:
      <>
        Astronomy Binoculars
        <br />A Great Alternative
      </>
    ,
    imgSource: "Pexels",
    imgAuthor: "Marcelo Verfe",
    date: "02.04.2020",
  },
  {
    brand: 'Loku',
    color: "#fc7944",
    cover: LK,
    logo: JDLogo,
    title:
      <>
        Astronomy Binoculars
        <br />A Great Alternative
      </>
    ,
    imgSource: "Pexels",
    imgAuthor: "Marcelo Verfe",
    date: "02.04.2020",
  },
  {
    brand: 'Chivas',
    color: "#fc7944",
    cover: CVS,
    logo: JDLogo,
    title:
      <>
        Astronomy Binoculars
        <br />A Great Alternative
      </>
    ,
    imgSource: "Pexels",
    imgAuthor: "Marcelo Verfe",
    date: "02.04.2020",
  },
  {
    brand: 'Glen',
    color: "#fc7944",
    cover: MCL,
    logo: JDLogo,
    title:
      <>
        Astronomy Binoculars
        <br />A Great Alternative
      </>
    ,
    imgSource: "Pexels",
    imgAuthor: "Marcelo Verfe",
    date: "02.04.2020",
  },
];

const Bistrot = () => {
  // Bistrot 自己管理一套index，只在CardStepper回调函数里更新
  const [activeIndex, setActiveIndex] = useState(1);
  const handleStateChangeRef = useRef((nextActiveStep: number) => { });

  useEffect(() => {
    selectSort([20, 1])
    getWhiskeyBrand()
      .then((response: any) => {
        const alcoholName = response.data;
        // setTitle(alcoholName.data)
      });
  }, [])

  const StyledFlexBox = styled("div")(() => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: "30px",
    height: "90%"
  }))

  const handleStateChange = (nextActiveStep: number) => {
    // activeIndex <= nextActiveStep ? activeIndex = activeIndex + 1 : activeIndex = activeIndex - 1;
    console.log("some", nextActiveStep)
    setActiveIndex(nextActiveStep)
  }
  handleStateChangeRef.current = handleStateChange;

  return (
    <div className={'container bistrot-page'}>
      <div className={'content-zone'}>
        {/* <h2 style={{ height: "10%" }}>{title}</h2> */}
        <WhiskeyTransitionTitle title={TitleList[activeIndex]} />
        <StyledFlexBox>
          <div style={{ border: "solid", width: "15%", height: "30%" }}>sometihngsometihngsometihng</div>
          <CardStepper onStateChange={handleStateChangeRef.current} cardList={cards} />
        </StyledFlexBox>
      </div>
    </div>
  )
}

export default Bistrot
