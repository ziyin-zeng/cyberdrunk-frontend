// 导入子组件

import { styled } from "@mui/material/styles";
import Whiskey from "..";
import { WhiskeyContentProps } from "./types"

const WhiskeyImgContainer = styled("div")(()=>({
    position: "sticky",
    top: "130px",
    width: "70%",
    height: "600px",
    marginRight: "30px",
    border: "solid white"
}))

const WhiskeyTimelineContainer = styled("div")(()=>({
    position: "relative",
    width: "30%",
}))

const WhiskeyContent = (props:WhiskeyContentProps) => {
    const {style, img} = props;
    const HeaderStyle = {
        border: "solid yellow",
        width: "100%",
        height: "100px",
    };
    return (
        <>
            <div style={style}>
                {/* <div className="whiskey-header" style={HeaderStyle}></div> */}
                <WhiskeyImgContainer>{img}</WhiskeyImgContainer>
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
        </>
    )
}

export default WhiskeyContent