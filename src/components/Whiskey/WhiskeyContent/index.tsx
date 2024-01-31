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

const WhiskeyImgContainer = styled("div")(() => ({
    width: "100%",
    height: "600px",
    marginBottom: "25px",
    border: "solid white"
}))

const WhiskeyTimelineContainer = styled("div")(() => ({
    position: "relative",
    width: "30%",
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

const WhiskeyBaseInfoContainer = styled("div")(()=>({
    display: "flex",
    flexDirection: "row",
}))

const WhiskeyContent = (props: WhiskeyContentProps) => {
    const { style, img, data } = props;

    return (
        <div style={style}>
            <WhiskeyLeftContentContainer>
                <WhiskeyImgContainer>{img}</WhiskeyImgContainer>
                <WhiskeyCocktailContainer>
                    <WhiskeyCocktail cocktailType={"tea"} cocktailRank={data.cocktailChoice.tea} />
                    <WhiskeyCocktail cocktailType={"soda"} cocktailRank={data.cocktailChoice.soda} />
                    <WhiskeyCocktail cocktailType={"cola"} cocktailRank={data.cocktailChoice.cola} />
                    <WhiskeyCocktail cocktailType={"coconut"} cocktailRank={data.cocktailChoice.coconut} />
                </WhiskeyCocktailContainer>
                <WhiskeyTitle data={data}/>
            </WhiskeyLeftContentContainer>
            <WhiskeyTimelineContainer>
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
                <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export default</h1>
                <h1>Timeline WhiskeyTimelineContainer props paddingRight import div haha export the end</h1>
            </WhiskeyTimelineContainer>
        </div>
    )
}

export default WhiskeyContent