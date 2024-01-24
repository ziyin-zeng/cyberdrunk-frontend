// 导入子组件
import WhiskeyTitle from './WhiskeyTitle'
import WhiskeyContent from './WhiskeyContent'
import WhiskeyVolume from './WhiskeyVolume'
import { styled } from "@mui/material/styles";

const WhiskeyContainer = styled("div")(()=>({
    display: "flex",
    flexDirection: "column",
    width: "95%",
    height: "1500px",
    marginLeft: "3%",
    border: "solid blue",
    overflow: "scroll",
    position: "relative",
    // top: 0,
    // left: 0,
}))

const WhiskeyTitleStyles: React.CSSProperties = {
    paddingRight: "60px",
    height: "100px",
    position: "fixed",
    width: "100%",
    border: "solid red",
    transform: "translateY(0)",
};

const WhiskeyContentStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    paddingRight: "60px",
    height: "3000px",
    minHeight: "540px",
    position: "relative",
    marginTop: "100px"
};

const Whiskey = () => {
    
    return (
        <WhiskeyContainer>
            <WhiskeyTitle style={WhiskeyTitleStyles}/>
            <WhiskeyContent style={WhiskeyContentStyles}/>
            <WhiskeyVolume />
        </WhiskeyContainer>
    )
}

export default Whiskey