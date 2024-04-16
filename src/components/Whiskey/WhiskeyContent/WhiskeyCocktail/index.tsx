// 导入types
import { WhiskeyCocktailProps } from "./types"

// mui
import { styled } from "@mui/material/styles";
import { SvgIcon } from "@mui/material";
import { Rating } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';

// 导入icons
import { ReactComponent as TeaIcon } from "/Users/skunkhunt42/Desktop/CyberDrunk/cyberdrunk-frontend/src/assets/icons/tea.svg";
import { ReactComponent as ColaIcon } from "/Users/skunkhunt42/Desktop/CyberDrunk/cyberdrunk-frontend/src/assets/icons/cola.svg";
import { ReactComponent as CoconutIcon } from "/Users/skunkhunt42/Desktop/CyberDrunk/cyberdrunk-frontend/src/assets/icons/coconut2.svg";
import { ReactComponent as SodaIcon } from "/Users/skunkhunt42/Desktop/CyberDrunk/cyberdrunk-frontend/src/assets/icons/soda2.svg";

// ================== Component ==================
// Component - Whiskey Type Description
interface WhiskeyTypeDescriptionProps {
    whiskeyType: String,
    whiskeySubType: String,
}

const WhiskeyTypeDescription = (props: WhiskeyTypeDescriptionProps) => {
    const { whiskeyType, whiskeySubType } = props;
    return (
        <div className="Whiskey-Type-Description" style={{height:"20%", textAlign: "right", font: "bold 30px/1 sans-serif"}}>
            {whiskeyType} with {whiskeySubType} flavour
        </div>
    )
}

// Component - Single Whiskey Cocktail
interface SingleWhiskeyCocktailProps {
    cocktailType: String,
    cocktailRank: number,
}

const SingleWhiskeyCocktail = (props: SingleWhiskeyCocktailProps) => {
    const { cocktailType, cocktailRank } = props;
    let cocktailIcon = TeaIcon;
    switch (cocktailType) {
        case "Green tea":
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
    const SingleWhiskeyCocktailStyles: React.CSSProperties = {
        display: 'flex',
        flexDirection: "row",
        width: "50%",
        height: "100%",
        padding: "5px 5px"
    }

    const RatingContainerStyles: React.CSSProperties = {
        display: 'flex',
        flexDirection: "column",
    }

    const RatingStyles: React.CSSProperties = {
        // height: "70%",
        padding: "5px 30px"
    }

    return (
        <div className={"CocktailType-" + cocktailType} style={SingleWhiskeyCocktailStyles}>
            <SvgIcon component={cocktailIcon} inheritViewBox fontSize="inherit" />
            <div style={RatingContainerStyles}>
                {cocktailType}
                <Rating sx={RatingStyles} size={'large'} value={cocktailRank} readOnly emptyIcon={<StarIcon style={{ color: "#FFFFFF",opacity: 0.55 }} fontSize="inherit" />}/>
            </div>
        </div>
    )
}

// ================== Styled div ==================
// Styled div - Whiskey Cocktail Container
const WhiskeyCocktailContainer = styled("div")(() => ({
    height: "40%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "1rem",
}));

// ================== Styles ==================
const WhiskeyCocktailStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    font: "bold 28px/1 sans-serif",
    height: "60%"
}

export const WhiskeyCocktail = (props: WhiskeyCocktailProps) => {
    const { data } = props;
    return (
        <div className="Whiskey-Cocktail" style={WhiskeyCocktailStyles}>
            <WhiskeyTypeDescription whiskeyType={data.whiskeyType} whiskeySubType={data.whiskeySubType} />
            <WhiskeyCocktailContainer className="Whiskey-Cocktail-Container">
                <SingleWhiskeyCocktail cocktailType={"Soda"} cocktailRank={data.cocktailChoice.soda} />
                <SingleWhiskeyCocktail cocktailType={"Green tea"} cocktailRank={data.cocktailChoice.tea} />
            </WhiskeyCocktailContainer>
            <WhiskeyCocktailContainer className="Whiskey-Cocktail-Container">
                <SingleWhiskeyCocktail cocktailType={"Cola"} cocktailRank={data.cocktailChoice.cola} />
                <SingleWhiskeyCocktail cocktailType={"Coconut"} cocktailRank={data.cocktailChoice.coconut} />
            </WhiskeyCocktailContainer>
        </div>
    )
}

