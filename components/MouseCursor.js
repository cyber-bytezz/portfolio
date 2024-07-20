"use client";
import React, { Fragment, useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

const MouseCursor = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Fragment>
      {isMounted && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "#F9FAFC", // Updated to Primary Color
          }}
          outerStyle={{
            border: "3px solid #1E90FF", // Updated to Dark Secondary Color
          }}
          className="hidden sm:block"
        />
      )}
    </Fragment>
  );
};

export default MouseCursor;
