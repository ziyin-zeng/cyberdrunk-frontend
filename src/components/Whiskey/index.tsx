// mui
import { styled } from "@mui/material/styles";

// 导入子组件
import WhiskeyTitle from './WhiskeyTitle'
import WhiskeyContent from './WhiskeyContent'
import WhiskeyVolume from './WhiskeyVolume'

const WhiskeyContainer = styled("div")(()=>({
    display: "flex",
    flexDirection: "column",
    width: "96%",
    margin: "2% auto",
    position: "relative",
}))

const WhiskeyTitleStyles: React.CSSProperties = {
    marginBottom: "20px",
    height: "calc((100vh - 20px) * 0.35 * 0.4)"
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
    border: "solid",    
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
        <WhiskeyContainer className="Whiskey-Container">
            <WhiskeyTitle style={WhiskeyTitleStyles} data={jiashuju}/>
            <WhiskeyContent style={WhiskeyContentStyles} data={jiashuju}/>
            <WhiskeyVolume style={WhiskeyVolumeStyles}/>
        </WhiskeyContainer>
    )
}

export default Whiskey