export interface WhiskeyTitleProps {
    style?: React.CSSProperties;
    data: WhiskeyTitlePropsData;
}

interface WhiskeyTitlePropsData {
    brandName: String,
    whiskeyType: String,
}