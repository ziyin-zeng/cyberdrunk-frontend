// 导入子组件
import { styled } from "@mui/material/styles";
import Whiskey from "..";
import { WhiskeyVolumeProps } from "./types"


const WhiskeyVolume = (props:WhiskeyVolumeProps) => {
    const {style} = props;
    return (
        <>
            <div style={style}>RemainedVolume</div>
        </>
    )
}

export default WhiskeyVolume