import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DoubleArrowSharpIcon from '@mui/icons-material/DoubleArrowSharp';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import CustomCard from '../WhiskeyCard';
import JD from '../../../assets/images/whiskey/pexels-marcelo-verfe-18702214.jpg';
import JDLogo from '../../../assets/images/whiskey/logo/johnnie-walker-brand.avif';
import LK from '../../../assets/images/whiskey/cody-chan-hLgKiFcVuDY-unsplash.jpg'
import CVS from '../../../assets/images/whiskey/kartikeya-srivastava-Wn07Sg4O2LY-unsplash.jpg'
import LogoZ from '../../../assets/images/logo-z.svg'

const AutoPlaySwipeableViews = SwipeableViews;

const images = [
  {
    label: 'Johnnie walker',
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
    label: 'Johnniwalker',
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
    date: "02.04.2020",  },
  {
    label: 'Johnnie wker',
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
    date: "02.04.2020",  },
  {
    label: 'Johnnie walr',
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
    date: "02.04.2020",  },
];

const StyledButton = styled(Button)(() => ({
    zIndex: 4,
    position: "absolute",
    height: "100%",
    width: "5%",
    minWidth: "90px",
    transition: "background-color 1s",

    // 按钮悬浮border动画 - 开始
    "&::before, &::after": {
        content: '""',
        width: "0",
        height: "2px",
        position: "absolute",
        transition: "all .2s linear",
        background: "rgba(255,255,255,0.3)"
    },

    "span::before, span::after": {
        content: '""',
        width: "2px",
        height: "0",
        position: "absolute",
        transition: "all .2s linear",
        background: "rgba(255,255,255,0.3)"
    },

    "&:before, &:after": {
        transitionDelay: ".2s",
    },

    "& span::before, & span::after": {
        transitionDelay: "0s",
    },

    "&:before": {
        right: "0",
        top: "0",
    },

    "&:after": {
        left: "0",
        bottom: "0",
    },

    "& span::before": {
        left: "0",
        top: "0",
    },

    "& span::after": {
        right: "0",
        bottom: "0",
    },

    "&:hover": {
        "&.back-button": {
            background: "linear-gradient(to right,rgba(255,255,255,0.3),transparent) !important"
        },
        "&.next-button": {
            background: "linear-gradient(to left,rgba(255,255,255,0.3),transparent) !important"
        },
        // 按钮悬浮border动画 - 开始
        "&:before, &:after": {
            width: "100%",
            transitionDelay: "0s"
        },

        "& span::before, & span::after": {
            height: "100%",
            transitionDelay: ".2s"
        },
    }
}));

function CardStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  // 这里通过step控制显示button与否
  const BackButtonDisplayStyle = {
    display: activeStep === 0?"none":"inline-flex",
    background: "linear-gradient(to right,rgba(255,255,255,0.2),transparent)",
    transition: "background-color 1s",
  }

  const NextButtonDisplayStyle = {
    display: activeStep === maxSteps - 1?"none":"inline-flex",
    left: "calc(100% - 90px)",
    background: "linear-gradient(to left,rgba(255,255,255,0.2),transparent)",
    transition: "background-color 1s",
  }

  return (
    <Box sx={{ flexGrow: 1, width: "100%", marginTop: "30px", position: "relative" }}>
        <StyledButton className='back-button' size="small" onClick={handleBack} disabled={activeStep === 0} style={BackButtonDisplayStyle}>
        <DoubleArrowSharpIcon sx={{ fontSize: 40, transform: "rotate(180deg)", transformOrigin: "center center", color: "white" }}/>
        </StyledButton>
        <StyledButton className='next-button' size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} style={NextButtonDisplayStyle}>
        <DoubleArrowSharpIcon sx={{ fontSize: 40, color: "white" }}/>
        </StyledButton>
      <SwipeableViews
        resistance
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{padding: '0 90px 0 0'}}
        >
        {images.map((step, index) => (
            console.log("log"+Math.abs(activeStep - index)),
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
            <CustomCard
                color={step.color}
                imgSource={"step.imgSource"}
                imgAuthor={"step.imgAuthor"}
                date={step.date}
                cover={step.cover}
                logo={step.logo}
                title={step.title}
            />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      
      {/* 有空加个彩蛋 <img className="solid-logo" src={LogoZ} alt={'Z'} /> */}
    </Box>
  );
}

export default CardStepper;