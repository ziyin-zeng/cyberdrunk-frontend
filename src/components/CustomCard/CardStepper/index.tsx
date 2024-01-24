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
import LogoZ from '../../../assets/images/logo-z.svg'
import { CardStepperProps } from './types'

// const AutoPlaySwipeableViews = SwipeableViews;

const StyledButton = styled(Button)(() => ({
    zIndex: 4,
    position: "absolute",
    height: "100%",
    width: "5%",
    minWidth: "90px",
    transition: "height 0.3s ease",
    top: "50%",
    transform: "translateY(-50%)",

    // 按钮悬浮border动画 - 开始
    "&::before, &::after": {
        content: '""',
        width: "0",
        height: "2px",
        position: "absolute",
        transition: "all .2s linear",
        background: "rgba(255,255,255,0.1)"
    },

    "span::before, span::after": {
        content: '""',
        width: "2px",
        height: "0",
        position: "absolute",
        transition: "all .2s linear",
        background: "rgba(255,255,255,0.2)"
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
            height: "90%",
            background: "linear-gradient(to right,rgba(255,255,255,0.3),transparent) !important"
        },
        "&.next-button": {
            height: "90%",
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

const MobileStepperContainer = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
    marginTop: "5px",
    "& .MuiMobileStepper-dotActive": {
        background: "rgb(237, 203, 184)",
    },
    "& .MuiMobileStepper-root": {
        background: "rgba(255,255,255,0.2)",
    }
}));

function CardStepper(props: CardStepperProps) {
    const { onStateChange, cardList } = props;

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = cardList.length;

    React.useEffect(() => {
        console.log("changed", activeStep)
        onStateChange(activeStep)
    }, [activeStep]);

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
        display: activeStep === 0 ? "none" : "inline-flex",
        left: "0%",
        background: "linear-gradient(to right,rgba(255,255,255,0.2),transparent)",
    }

    const NextButtonDisplayStyle = {
        display: activeStep === maxSteps - 1 ? "none" : "inline-flex",
        left: "calc(100% - 90px)",
        background: "linear-gradient(to left,rgba(255,255,255,0.2),transparent)",
    }

    return (
        // 这里加了一个最大高度600px，如果要改的话，需要和卡片高度一起改
        <Box sx={{ flexGrow: 1, width: "85%", height: "600px", position: "relative" }}>
            <StyledButton className='back-button' size="small" onClick={handleBack} disabled={activeStep === 0} style={BackButtonDisplayStyle} disableRipple>
                <span>
                    <DoubleArrowSharpIcon sx={{ fontSize: 40, transform: "rotate(180deg)", transformOrigin: "center center", color: "rgba(255,255,255,0.3)" }} />
                </span>
            </StyledButton>
            <StyledButton className='next-button' size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} style={NextButtonDisplayStyle} disableRipple>
                <span>
                    <DoubleArrowSharpIcon sx={{ fontSize: 40, color: "rgba(255,255,255,0.3)" }} />
                </span>
            </StyledButton>
            <SwipeableViews
                resistance
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                style={{ padding: '0 90px 0 0', height: "100%" }}
            >
                {cardList.map((step, index) => (
                    // console.log("log" + Math.abs(activeStep - index)),
                    <div key={step.brand} style={{ margin: "10px 0px 10px 0px" }}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <CustomCard
                                brand={step.brand}
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
            <MobileStepperContainer>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <></>
                    }
                    backButton={
                        <></>
                    }
                />
            </MobileStepperContainer>
        </Box>
    );
}

export default CardStepper;