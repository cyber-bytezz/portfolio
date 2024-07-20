"use client";
import React, { Fragment, useRef, useState, useEffect } from "react";

const BackgroundSound = () => {
  const [isPlayMusic, setIsPlayMusic] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const musicRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (musicRef.current) {
        musicRef.current.play();
        setIsPlayMusic(true);
      }
    };
    
    // Show popup after a delay
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const audioHandler = () => {
    if (musicRef.current?.paused) {
      setIsPlayMusic(true);
      musicRef.current?.play();
    } else {
      setIsPlayMusic(false);
      musicRef.current?.pause();
    }
    setShowPopup(false);
  };

  return (
    <Fragment>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg text-center">
            <p className="mb-4">Please switch on the sound</p>
            <button
              onClick={audioHandler}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Turn On Sound
            </button>
          </div>
        </div>
      )}
      <audio ref={musicRef} loop>
        <source src="portfolio_sound.mp3" type="audio/mpeg" />
      </audio>
      <div className="w-[40px] fixed bottom-0 right-3 left-auto z-[99]">
        <div className="flex flex-col items-center relative after:block after:w-[1px] after:h-[90px] after:mx-0 after:my-auto after:bg-[#F9FAFC]">
          <p
            onClick={audioHandler}
            className="text-primary p-2 my-3 [writing-mode:vertical-rl] uppercase text-sm cursor-pointer select-none"
          >
            Sound {isPlayMusic ? "Off" : "On"}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default BackgroundSound;
