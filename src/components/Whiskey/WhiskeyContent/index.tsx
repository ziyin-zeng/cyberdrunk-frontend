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

const WhiskeyLeftContentContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    position: "sticky",
    top: "34px",
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
    border: "solid white"
}))

const WhiskeyImgFooterContainer = styled("div")(() => ({
    // 不一定要flexbox，看看
    display: "flex",
    flexDirection: "column",
}))

const WhiskeyTimelineHeader = styled("div")(() => ({
    position: "sticky",
    top: "34px",
    width: "100%",
    height: "calc(100vh - 143px)", // 和leftContent同高，之后加个变量
    textAlign: "center",
    font: "bold 24px/3 sans-serif",
    background: "white",
    clipPath: "polygon(0 -34px, 100% -34px, 100% 15%, 0 15%)",
    zIndex: "40",
    overflow: "visible",

    "&:before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: "-34px",
        zIndex: 41,
        width: "100%",
        height: "34px",
        clipPath:
            "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
        background: "#ac6d46",
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
    border: "solid white"
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
        <div className={"cocktailType-" + cocktailType}>
            <SvgIcon component={cocktailIcon} inheritViewBox fontSize="inherit" />
            {cocktailType}:
            {cocktailRank}
        </div>
    )
}

const WhiskeyContent = (props: WhiskeyContentProps) => {
    const { style, img, data } = props;

    return (
        <div style={style}>
            <WhiskeyLeftContentContainer>
                <WhiskeyImgContainer>{img}</WhiskeyImgContainer>
                <WhiskeyImgFooterContainer>
                    <WhiskeyCocktailContainer>
                        <WhiskeyCocktail cocktailType={"tea"} cocktailRank={data.cocktailChoice.tea} />
                        <WhiskeyCocktail cocktailType={"soda"} cocktailRank={data.cocktailChoice.soda} />
                        <WhiskeyCocktail cocktailType={"cola"} cocktailRank={data.cocktailChoice.cola} />
                        <WhiskeyCocktail cocktailType={"coconut"} cocktailRank={data.cocktailChoice.coconut} />
                    </WhiskeyCocktailContainer>
                    <WhiskeyTitle data={data} />
                </WhiskeyImgFooterContainer>
            </WhiskeyLeftContentContainer>
            <WhiskeyRightContentContainer>
                <WhiskeyTimelineHeader>Des nuits</WhiskeyTimelineHeader>
                <WhiskeyTimelineContainer>
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