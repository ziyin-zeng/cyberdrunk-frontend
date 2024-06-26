// mui
import { styled } from "@mui/material/styles";

// 导入props
import { WhiskeyTitleProps } from "./types";

const WhiskeyTitleBrand = styled("div")(() => ({
    font: "small-caps bold 45px/2.5 sans-serif",
}));

// B1 轻盈&芳香 B2 果味&辛香 B3饱满&果香 B4烟熏&泥煤 
const WhiskeyTitleTaste = styled("div")(() => ({
    font: "bold 24px/1 sans-serif",
}));

const WhiskeyTitle = (props: WhiskeyTitleProps) => {
    const { style, data, className } = props;

    const BasicWhiskeyTitleStyles: React.CSSProperties = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        width: "100%",
        // height: "fit-content",
        padding: "10px 30px",
        // border: "solid red",
        background: "rgba(30,30,63,0.5)",
        borderRadius: "1rem",
    };

    const WhiskeyTitleStyles: React.CSSProperties = {
        ...BasicWhiskeyTitleStyles,
        ...style
    };

    return (
        <div className={className ? className : "Whiskey-Title"} style={WhiskeyTitleStyles}>
            <WhiskeyTitleBrand>{data.brandName}</WhiskeyTitleBrand>
            <WhiskeyTitleTaste>{data.whiskeyType}</WhiskeyTitleTaste>
        </div>
    )
}

export default WhiskeyTitle