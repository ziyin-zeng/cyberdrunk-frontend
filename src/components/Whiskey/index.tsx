// mui
import { styled } from "@mui/material/styles";

// 导入子组件
import WhiskeyTitle from './WhiskeyTitle'
import WhiskeyContent from './WhiskeyContent'
import WhiskeyVolume from './WhiskeyVolume'

// 导入图片，实际应该是调API
import JD from '../../assets/images/whiskey/pexels-marcelo-verfe-18702214.jpg';


const WhiskeyContainer = styled("div")(()=>({
    display: "flex",
    flexDirection: "column",
    width: "95%",
    margin: "34px auto",
    border: "solid blue",
    position: "relative",
}))

const WhiskeyTitleStyles: React.CSSProperties = {
    marginBottom: "25px",
};

const WhiskeyContentStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    minHeight: "540px",
    position: "relative",
};

const WhiskeyVolumeStyles: React.CSSProperties = {
    height: "832px",
    paddingTop: "130px",
};

const Whiskey = () => {
    const jiashuju = {
        brandName: "Chivas Regal",
        whiskeyType: "Blended Whiskey",
        cocktailChoice: {
            soda: 5,
            cola: 4,
            coconut: 5,
            tea: 1
        },
        content: "timeline blablablabla",
        volume: 0.7
    }
    
    return (
        <WhiskeyContainer className='WhiskeyContainer'>
            <WhiskeyTitle style={WhiskeyTitleStyles} data={jiashuju}/>
            <WhiskeyContent style={WhiskeyContentStyles} img={JD} data={jiashuju}/>
            <WhiskeyVolume style={WhiskeyVolumeStyles}/>
        </WhiskeyContainer>
    )
}

export default Whiskey