import React, { useState, useEffect } from "react";
import useTheme from "../components/store/useTheme";
import Rectangular from "../components/homeComponent/Rectangular";
import ToggleMode from "../components/homeComponent/ToggleMode";
import Hello from "../components/homeComponent/Hello";

const Home = () => {
  const { mode, changeMode } = useTheme();
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    // Preload background images with high priority - start immediately
    const whiteImg = new Image();
    const darkImg = new Image();

    // Set loading strategy for high priority
    whiteImg.loading = "eager";
    darkImg.loading = "eager";
    whiteImg.decoding = "sync"; // Synchronous for faster rendering
    darkImg.decoding = "sync";

    // Get image sources
    const whiteImgSrc = require("../components/imgs/Yaqub1.jpg");
    const darkImgSrc = require("../components/imgs/yaqubDark.jpg");

    // Start loading immediately - critical for first paint
    whiteImg.src = whiteImgSrc;
    darkImg.src = darkImgSrc;

    // Check if images are already cached/loaded
    if (whiteImg.complete && darkImg.complete) {
      setBgLoaded(true);
      return;
    }

    let loadedCount = 0;
    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === 2) {
        setBgLoaded(true);
      }
    };

    whiteImg.onload = handleLoad;
    darkImg.onload = handleLoad;

    // Shorter fallback timeout for faster initial render
    const timeoutId = setTimeout(() => {
      setBgLoaded(true);
    }, 800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`min-h-screen relative w-full overflow-hidden flex flex-col items-start justify-center ${
        mode ? "" : "bg-[#262626]"
      }`}
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 ${
          mode ? "white" : "dark"
        } transition-opacity duration-500 ${
          bgLoaded ? "opacity-100" : "opacity-80"
        }`}
        style={{
          willChange: "opacity",
        }}
      />
      {/* Theme toggle button - Top Left */}
      <div className="absolute z-20 top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8">
        <button
          onClick={() => changeMode(!mode)}
          aria-label="Toggle theme"
          className={`cursor-pointer rounded-lg p-2 sm:p-2.5 md:p-3 transition-all duration-300 hover:scale-110 backdrop-blur-sm ${
            mode
              ? "bg-[#9cd5ee64] hover:bg-[#9cd5ee80]"
              : "bg-[#505C62] hover:bg-[#505C6290]"
          }`}
        >
          <ToggleMode />
        </button>
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-end lg:justify-center min-h-screen pb-24 sm:pb-28 md:pb-32 lg:pb-0 lg:-translate-y-8 lg:px-20 lg:items-start px-4 sm:px-6">
        <Hello />
      </div>

      {/* Social links - Bottom Left */}
      <div className="absolute z-20 bottom-6 sm:bottom-8 md:bottom-12 lg:bottom-8 left-4 sm:left-6 md:left-8">
        <Rectangular />
      </div>
    </div>
  );
};

export default Home;
