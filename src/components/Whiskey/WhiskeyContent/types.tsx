export interface WhiskeyContentProps {
    style?: React.CSSProperties;
    data: WhiskeyContentPropsData;
}

interface WhiskeyContentPropsData {
    brandName: String,
    whiskeyType: String,
    cocktailChoice: {
        soda: Number,
        cola: Number,
        coconut: Number,
        tea: Number
    },
    content: String,
}