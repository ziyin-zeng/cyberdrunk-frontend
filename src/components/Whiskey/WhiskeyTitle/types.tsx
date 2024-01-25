export interface WhiskeyTitleProps {
    style?: React.CSSProperties;
    data: WhiskeyTitlePropsData;
}

interface WhiskeyTitlePropsData {
    brandName: String,
    tasteType: String,
    cocktailChoice: {
        soda: Number,
        cola: Number,
        coconut: Number,
        tea: Number
    },
    content: String,
    volume: Number
}