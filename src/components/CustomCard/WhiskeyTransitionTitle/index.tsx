import { useEffect, useState } from 'react';
import { WhiskeyTransitionTitleProps } from './types';
import TextTransition, { presets } from 'react-text-transition';

// const TEXTS = ['Forest', 'Building', 'Tree', 'Color'];

const WhiskeyTransitionTitle = (props:WhiskeyTransitionTitleProps) => {
  const { title } = props;

  const [index, setIndex] = useState(0);
  const [brand, setBrand] = useState("title");

  // TEXTS[index % TEXTS.length]
  const TEXTS = title;
  // console.log("title",title)

  useEffect(() => {
    // const intervalId = setInterval(
    //   () => setIndex((index) => index + 1),
    //   3000, // every 3 seconds
    // );
    // return () => clearTimeout(intervalId);
    console.log("title",title)
    setBrand(title)
  }, []);

  return (
    <h1>
      <TextTransition springConfig={presets.wobbly}>{brand}</TextTransition>
    </h1>
  );
};

export default WhiskeyTransitionTitle;