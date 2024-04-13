// 导入子组件
import { WhiskeyContentProps } from "./types"
import WhiskeyTitle from '../WhiskeyTitle'

// mui
import { styled } from "@mui/material/styles";
import { SvgIcon } from "@mui/material";

// 导入icons
import { ReactComponent as TeaIcon } from "/Users/skunkhunt42/Desktop/CyberDrunk/cyberdrunk-frontend/src/assets/icons/tea.svg";
import { ReactComponent as ColaIcon } from "/Users/skunkhunt42/Desktop/CyberDrunk/cyberdrunk-frontend/src/assets/icons/cola.svg";
import { ReactComponent as CoconutIcon } from "/Users/skunkhunt42/Desktop/CyberDrunk/cyberdrunk-frontend/src/assets/icons/coconut2.svg";
import { ReactComponent as SodaIcon } from "/Users/skunkhunt42/Desktop/CyberDrunk/cyberdrunk-frontend/src/assets/icons/soda2.svg";

// 导入图片，实际应该是调API
import JD from '../../../assets/images/whiskey/pexels-marcelo-verfe-18702214.jpg';
import LK from '../../../assets/images/whiskey/cody-chan-hLgKiFcVuDY-unsplash.jpg';
import CVS from '../../../assets/images/whiskey/kartikeya-srivastava-Wn07Sg4O2LY-unsplash.jpg';

const WhiskeyLeftContentContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    position: "sticky",
    top: "3%",
    width: "70%",
    height: "calc(100vh - 143px)",
    marginRight: "30px",
}))

const WhiskeyRightContentContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "30%",
}))

const WhiskeyImgContainer = styled("div")(() => ({
    width: "100%",
    height: "600px",
    marginBottom: "25px",
    backgroundImage: `url(${LK})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "1rem",
    zIndex: "40",
    // transform: "scale(0.95)",

    // "&:before": {
    //     content: "''",
    //     position: "absolute",
    //     top: "0",
    //     width: "50%",
    //     height: "100%",
    //     display: "block",
    //     background: "white",
    //     zIndex: 0
    // }
}))

const WhiskeyImgFooterContainer = styled("div")(() => ({
    // 不一定要flexbox，看看
    display: "flex",
    flexDirection: "column",
}))

const WhiskeyTimelineHeader = styled("div")(() => ({
    position: "sticky",
    top: "3%",
    width: "100%",
    height: "calc(100vh - 143px)", // 和leftContent同高，之后加个变量
    textAlign: "center",
    font: "bold 24px/3 sans-serif",
    background: "#242433",
    clipPath: "polygon(0 -34px, 100% -34px, 100% 15%, 0 15%)",
    zIndex: "40",
    overflow: "visible",

    "&:before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: "-3%",
        zIndex: 41,
        width: "100%",
        height: "3%",
        clipPath:
            "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
        background: "#242433",
        display: "block",
        overflow: "visible",
    }
}))

const WhiskeyTimelineContainer = styled("div")(() => ({
    position: "relative",
    width: "100%",
    transform: "translateY(calc(-100vh + 260px))",
    marginBottom: "calc(-100vh + 260px)"
}))

const WhiskeyCocktailContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    font: "bold 24px/1 sans-serif",
    borderRadius: "1rem",
}));

interface WhiskeyCocktailProps {
    cocktailType: String,
    cocktailRank: Number,
}

const WhiskeyCocktail = (props: WhiskeyCocktailProps) => {
    const { cocktailType, cocktailRank } = props;
    let cocktailIcon = TeaIcon;
    switch (cocktailType) {
        case "tea":
            cocktailIcon = TeaIcon;
            break;
        case "cola":
            cocktailIcon = ColaIcon;
            break;
        case "coconut":
            cocktailIcon = CoconutIcon;
            break;
        case "soda":
            cocktailIcon = SodaIcon;
            break;
        default:
            cocktailIcon = TeaIcon;
            break;
    }
    return (
        <div className={"CocktailType-" + cocktailType}>
            <SvgIcon component={cocktailIcon} inheritViewBox fontSize="inherit" />
            {cocktailType}:
            {cocktailRank}
        </div>
    )
}

const WhiskeyContent = (props: WhiskeyContentProps) => {
    const { style, data } = props;

    return (
        <div className="Whiskey-Content" style={style}>
            <WhiskeyLeftContentContainer className="Whiskey-Left-Content-Container">
                <WhiskeyImgContainer className="Whiskey-Img-Container"></WhiskeyImgContainer>
                <WhiskeyImgFooterContainer className="Whiskey-Img-Footer-Container">
                    <WhiskeyCocktailContainer className="Whiskey-Cocktail-Container">
                        <WhiskeyCocktail cocktailType={"tea"} cocktailRank={data.cocktailChoice.tea} />
                        <WhiskeyCocktail cocktailType={"soda"} cocktailRank={data.cocktailChoice.soda} />
                        <WhiskeyCocktail cocktailType={"cola"} cocktailRank={data.cocktailChoice.cola} />
                        <WhiskeyCocktail cocktailType={"coconut"} cocktailRank={data.cocktailChoice.coconut} />
                    </WhiskeyCocktailContainer>
                    <WhiskeyTitle className="Whiskey-Title-in-Img-Footer" data={data} />
                </WhiskeyImgFooterContainer>
            </WhiskeyLeftContentContainer>
            <WhiskeyRightContentContainer className="Whiskey-Right-Content-Container">
                <WhiskeyTimelineHeader className="Whiskey-Timeline-Header">Des nuits</WhiskeyTimelineHeader>
                <WhiskeyTimelineContainer className="Whiskey-Timeline-Container">
                    <h1>Start Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export the end</h1>
                </WhiskeyTimelineContainer>
            </WhiskeyRightContentContainer>
        </div>
    )
}

export default WhiskeyContent