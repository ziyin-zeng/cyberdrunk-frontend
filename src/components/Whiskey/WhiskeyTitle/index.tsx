// mui
import { styled } from "@mui/material/styles";
import { SvgIcon } from "@mui/material";

// 导入props
import { WhiskeyTitleProps } from "./types";

// 导入icons
import { ReactComponent as TeaIcon } from "/Users/skunkhunt42/Desktop/CyberDrunk/cyberdrunk-frontend/src/assets/icons/tea.svg";
import { ReactComponent as ColaIcon } from "/Users/skunkhunt42/Desktop/CyberDrunk/cyberdrunk-frontend/src/assets/icons/cola.svg";
import { ReactComponent as CoconutIcon } from "/Users/skunkhunt42/Desktop/CyberDrunk/cyberdrunk-frontend/src/assets/icons/coconut2.svg";
import { ReactComponent as SodaIcon } from "/Users/skunkhunt42/Desktop/CyberDrunk/cyberdrunk-frontend/src/assets/icons/soda2.svg";

const WhiskeyTitleBrand = styled("div")(() => ({
    font: "small-caps bold 45px/2.5 sans-serif",
}));

const WhiskeyTitleInfo = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-end",
    font: "bold 24px/1 sans-serif",
}));

const WhiskeyTitleTaste = styled("div")(() => ({
}));

const WhiskeyTitleCocktailContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "row",
}));

interface WhiskeyTitleCocktailProps {
    cocktailType: String,
    cocktailRank: Number,
}

const WhiskeyTitleCocktail = (props: WhiskeyTitleCocktailProps) => {
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
            <SvgIcon component={cocktailIcon} inheritViewBox fontSize="inherit"/>
            {cocktailType}:
            {cocktailRank}
        </div>
    )
}

const WhiskeyTitle = (props: WhiskeyTitleProps) => {
    const { style, data } = props;
    return (
        <div className="WhiskeyTitle" style={style}>
            <WhiskeyTitleBrand>{data.brandName}</WhiskeyTitleBrand>
            <WhiskeyTitleInfo>
                <WhiskeyTitleTaste>
                    Taste Type {data.tasteType}
                </WhiskeyTitleTaste>
                <WhiskeyTitleCocktailContainer>
                    <WhiskeyTitleCocktail cocktailType={"tea"} cocktailRank={data.cocktailChoice.tea} />
                    <WhiskeyTitleCocktail cocktailType={"soda"} cocktailRank={data.cocktailChoice.soda} />
                    <WhiskeyTitleCocktail cocktailType={"cola"} cocktailRank={data.cocktailChoice.cola} />
                    <WhiskeyTitleCocktail cocktailType={"coconut"} cocktailRank={data.cocktailChoice.coconut} />
                </WhiskeyTitleCocktailContainer>
            </WhiskeyTitleInfo>
        </div>
    )
}

export default WhiskeyTitle