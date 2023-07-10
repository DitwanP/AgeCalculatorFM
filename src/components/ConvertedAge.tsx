import React, { useEffect, useMemo, useState } from "react";
import { ConvertedAgePropsInterface } from "../utility/Interfaces";
import AnimatedNumber from "react-animated-numbers";
import debounce from "lodash.debounce";

const ConvertedAge = (props: ConvertedAgePropsInterface) => {
  const [screenWidth, setScreenWidth] = useState<string>("sm");
  const [containerHeight, setContainerHeight] = useState<number>(50);

  const breakpoint = 1024;

  const triggerNumbersRerender = () => {
    let currentWidth = window.innerWidth;
    if (currentWidth >= breakpoint) {
      setScreenWidth("lg");
    } else {
      setScreenWidth("sm");
    }
  };

  const debounceRerender = useMemo(
    () => debounce(triggerNumbersRerender, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", debounceRerender);
    return () => {
      window.removeEventListener("resize", debounceRerender);
    };
  }, [screenWidth]);

  useEffect(() => {
    setContainerHeight(screenWidth === "sm" ? 50 : 115.625);
  }, [screenWidth]);

  useEffect(() => {
    triggerNumbersRerender();
  }, []);

  return (
    <div className="flex justify-start gap-4 text-9xl font-extrabold italic lg:text-18xl">
      <span className="flex items-center text-purple">
        {props.value ? (
          <AnimatedNumber
            includeComma
            fontStyle={{
              fontFamily: "poppins, sans-serif",
              fontSize: containerHeight,
              fontWeight: 800,
              fontStyle: "italic",
            }}
            animateToNumber={Number(props.value)}
            configs={[
              { mass: 1, tension: 320, friction: 150 },
              { mass: 1, tension: 380, friction: 170 },
              { mass: 1, tension: 380, friction: 90 },
              { mass: 1, tension: 380, friction: 175 },
              { mass: 1, tension: 360, friction: 150 },
              { mass: 1, tension: 310, friction: 230 },
            ]}
          />
        ) : (
          "- -"
        )}
      </span>
      <span className="text-off-black">{props.unit}</span>
    </div>
  );
};

export default React.memo(ConvertedAge);
