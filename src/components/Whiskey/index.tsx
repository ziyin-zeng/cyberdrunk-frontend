// mui
import { styled } from "@mui/material/styles";

// 导入子组件
import WhiskeyTitle from './WhiskeyTitle'
import WhiskeyContent from './WhiskeyContent'
import WhiskeyVolume from './WhiskeyVolume'

// 导入图片
import JD from '../../assets/images/whiskey/pexels-marcelo-verfe-18702214.jpg';


const WhiskeyContainer = styled("div")(()=>({
    display: "flex",
    flexDirection: "column",
    width: "95%",
    margin: "auto",
    border: "solid blue",
    position: "relative",
}))

const WhiskeyTitleStyles: React.CSSProperties = {
    height: "100px",
    position: "sticky",
    top: "0px",
    width: "100%",
    border: "solid red",
    transform: "translateY(0)",
};

const WhiskeyContentStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    paddingRight: "60px",
    minHeight: "540px",
    position: "relative",
};

const WhiskeyVolumeStyles: React.CSSProperties = {
    height: "832px",
    paddingTop: "130px",
};

const Whiskey = () => {
    
    return (
        <WhiskeyContainer className='WhiskeyContainer'>
            <WhiskeyTitle style={WhiskeyTitleStyles}/>
            <WhiskeyContent style={WhiskeyContentStyles} img={JD}/>
            <WhiskeyVolume style={WhiskeyVolumeStyles}/>
        </WhiskeyContainer>
    )
}

export default Whiskey