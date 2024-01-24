import { WhiskeyTitleProps } from "./types"

const WhiskeyTitle = (props: WhiskeyTitleProps) => {
    const {style} = props;
    return (
        <>
            <div style={style}>
                <div>WTitle</div>
            </div>
        </>
    )
}
// style={{position:"sticky", top:0}}

export default WhiskeyTitle