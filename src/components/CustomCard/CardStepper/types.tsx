import { ReactNode } from "react"

export interface CardStepperProps {
    // title: string
    onStateChange: Function
    cardList: CardProps[]
}

interface CardProps {
    brand: string,
    color: string,
    cover: string, // url
    logo: string, // url
    title: ReactNode,
    imgSource: string,
    imgAuthor: string,
    date: string,
}