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
    top: "20px",
    width: "65%",
    height: "calc(100vh - 20px)",
    marginRight: "30px",
}))

const WhiskeyRightContentContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "35%",
}))

const WhiskeyImgContainer = styled("div")(() => ({
    width: "100%",
    height: "65%",
    marginBottom: "10px",
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
    height: "35%",
    justifyContent: "space-between"
}))

const WhiskeyTimelineHeader = styled("div")(() => ({
    position: "sticky",
    top: "20px",
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
        top: "-20px",
        zIndex: 41,
        width: "100%",
        height: "20px",
        clipPath:
            "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
        // background: "#242433",
        background: "#FFFFFF",
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
    height: "60%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    font: "bold 24px/1 sans-serif",
    borderRadius: "1rem",
}));

// All Styles
const WhiskeyTitleStyles: React.CSSProperties = {
    height: "40%"
}

interface WhiskeyCocktailProps {
    cocktailType: String,
    cocktailRank: Number,
}

const WhiskeyCocktail = (props: WhiskeyCocktailProps) => {
    const { cocktailType, cocktailRank } = props;
    let cocktailIcon = TeaIcon;
    switch (cocktailType) {
        case "Tea":
            cocktailIcon = TeaIcon;
            break;
        case "Cola":
            cocktailIcon = ColaIcon;
            break;
        case "Coconut":
            cocktailIcon = CoconutIcon;
            break;
        case "Soda":
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
                        <WhiskeyCocktail cocktailType={"Tea"} cocktailRank={data.cocktailChoice.tea} />
                        <WhiskeyCocktail cocktailType={"Soda"} cocktailRank={data.cocktailChoice.soda} />
                        <WhiskeyCocktail cocktailType={"Cola"} cocktailRank={data.cocktailChoice.cola} />
                        <WhiskeyCocktail cocktailType={"Coconut"} cocktailRank={data.cocktailChoice.coconut} />
                    </WhiskeyCocktailContainer>
                    <WhiskeyTitle className="Whiskey-Title-in-Img-Footer" style={WhiskeyTitleStyles} data={data} />
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
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export the end</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export the end</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export the end</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export the end</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export the end</h1>
                    <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export the end</h1>
                </WhiskeyTimelineContainer>
            </WhiskeyRightContentContainer>
        </div>
    )
}

export default WhiskeyContent