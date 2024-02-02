export interface WhiskeyTitleProps {
    style?: React.CSSProperties;
    data: WhiskeyTitlePropsData;
    className?: string;
}

interface WhiskeyTitlePropsData {
    brandName: String,
    whiskeyType: String,
}