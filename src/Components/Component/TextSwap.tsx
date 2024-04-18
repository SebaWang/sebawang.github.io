import React, { useState, useEffect } from "react";

const buildAnimationStyle = (type: AnimationType, duration: string): object => {
  return {
    display: "inline-block",
    animation: `${type} ${duration}`,
    animationFillMode: "forwards"
  };
};

type AnimationType = "fade" | "slideDown" | "slideUp" | "squish" | "blur";

type TextSwapProps = {
  strings: string[];
  interval?: number;
  animationType?: AnimationType;
  animationDuration?: string;
};

const TextSwap = ({
  strings,
  interval = 2000,
  animationType = "fade",
  animationDuration = "2s"
}: TextSwapProps) => {
  const defaultStyle = buildAnimationStyle(animationType, animationDuration);
  const [currString, setCurrString] = useState(strings[0]);
  const [animationStyle, setAnimationStyle] = useState(defaultStyle);

  useEffect(() => {
    const timer = setInterval(() => {
      const currIndex: number = strings.indexOf(currString);
      const nextIndex: number =
        currIndex < strings.length - 1 ? currIndex + 1 : 0;
      setCurrString(strings[nextIndex]);
    }, interval);
    return () => {
      setAnimationStyle({});
      clearInterval(timer);
      setAnimationStyle(animationStyle);
    };
  }, [currString, strings, interval, animationStyle]);

  return (
    <div key={currString} style={animationStyle} className='text-[#6d6d6d]'>
      {currString}
    </div>
  );
};

export default TextSwap;