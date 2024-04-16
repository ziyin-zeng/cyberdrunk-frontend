export interface WhiskeyCocktailProps {
    data: WhiskeyContentPropsData
}

interface WhiskeyContentPropsData {
    brandName: String,
    whiskeyType: String,
    whiskeySubType: String,
    cocktailChoice: {
        soda: number,
        cola: number,
        coconut: number,
        tea: number
    },
    content: String,
}