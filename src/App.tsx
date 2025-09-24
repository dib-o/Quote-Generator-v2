import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import "boxicons/css/boxicons.min.css";
import defaultbg from "./bgImage/Home.jpg";
import defaultbg1 from "./bgImage/Home1.jpg";
import defaultmusic from "./bgMusic/Mice on Venus.mp3";

import love1 from "./bgImage/loveBgImage/love-1.jpg";
import love2 from "./bgImage/loveBgImage/love-2.jpg";
import love3 from "./bgImage/loveBgImage/love-3.jpg";
import love4 from "./bgImage/loveBgImage/love-4.jpg";
import love5 from "./bgImage/loveBgImage/love-5.jpg";
import love6 from "./bgImage/loveBgImage/love-6.jpg";

import loveP1 from "./bgImage/loveBgImage/love-p1.jpg";
import loveP2 from "./bgImage/loveBgImage/love-p2.jpg";
import loveP3 from "./bgImage/loveBgImage/love-p3.jpg";
import loveP4 from "./bgImage/loveBgImage/love-p4.jpg";
import loveP5 from "./bgImage/loveBgImage/love-p5.jpg";
import loveP6 from "./bgImage/loveBgImage/love-p6.jpg";

import loyalty1 from "./bgImage/loyaltyBgImage/loyalty-1.jpg";
import loyalty2 from "./bgImage/loyaltyBgImage/loyalty-2.jpg";
import loyalty3 from "./bgImage/loyaltyBgImage/loyalty-3.jpg";
import loyalty4 from "./bgImage/loyaltyBgImage/loyalty-4.jpg";
import loyalty5 from "./bgImage/loyaltyBgImage/loyalty-5.jpg";
import loyalty6 from "./bgImage/loyaltyBgImage/loyalty-6.jpg";

import loyaltyP1 from "./bgImage/loyaltyBgImage/loyalty-p1.jpg";
import loyaltyP2 from "./bgImage/loyaltyBgImage/loyalty-p2.jpg";
import loyaltyP3 from "./bgImage/loyaltyBgImage/loyalty-p3.jpg";
import loyaltyP4 from "./bgImage/loyaltyBgImage/loyalty-p4.jpg";
import loyaltyP5 from "./bgImage/loyaltyBgImage/loyalty-p5.jpg";
import loyaltyP6 from "./bgImage/loyaltyBgImage/loyalty-p6.jpg";

import honor1 from "./bgImage/honorBgImage/honor-1.jpg";
import honor2 from "./bgImage/honorBgImage/honor-2.jpg";
import honor3 from "./bgImage/honorBgImage/honor-3.jpg";
import honor4 from "./bgImage/honorBgImage/honor-4.jpg";
import honor5 from "./bgImage/honorBgImage/honor-5.jpg";
import honor6 from "./bgImage/honorBgImage/honor-6.jpg";

import honorP1 from "./bgImage/honorBgImage/honor-p1.jpg";
import honorP2 from "./bgImage/honorBgImage/honor-p2.jpg";
import honorP3 from "./bgImage/honorBgImage/honor-p3.jpg";
import honorP4 from "./bgImage/honorBgImage/honor-p4.jpg";
import honorP5 from "./bgImage/honorBgImage/honor-p5.jpg";
import honorP6 from "./bgImage/honorBgImage/honor-p6.jpg";

import growth1 from "./bgImage/growthBgImage/growth-1.jpg";
import growth2 from "./bgImage/growthBgImage/growth-2.jpg";
import growth3 from "./bgImage/growthBgImage/growth-3.jpg";
import growth4 from "./bgImage/growthBgImage/growth-4.jpg";
import growth5 from "./bgImage/growthBgImage/growth-5.jpg";
import growth6 from "./bgImage/growthBgImage/growth-6.jpg";

import growthP1 from "./bgImage/growthBgImage/growth-p1.jpg";
import growthP2 from "./bgImage/growthBgImage/growth-p2.jpg";
import growthP3 from "./bgImage/growthBgImage/growth-p3.jpg";
import growthP4 from "./bgImage/growthBgImage/growth-p4.jpg";
import growthP5 from "./bgImage/growthBgImage/growth-p5.jpg";
import growthP6 from "./bgImage/growthBgImage/growth-p6.jpg";

import wisdom1 from "./bgImage/wisdomBgImage/wisdom-1.jpg";
import wisdom2 from "./bgImage/wisdomBgImage/wisdom-2.jpg";
import wisdom3 from "./bgImage/wisdomBgImage/wisdom-3.jpg";
import wisdom4 from "./bgImage/wisdomBgImage/wisdom-4.jpg";
import wisdom5 from "./bgImage/wisdomBgImage/wisdom-5.jpg";
import wisdom6 from "./bgImage/wisdomBgImage/wisdom-6.jpg";

import wisdomP1 from "./bgImage/wisdomBgImage/wisdom-p1.jpg";
import wisdomP2 from "./bgImage/wisdomBgImage/wisdom-p2.png";
import wisdomP3 from "./bgImage/wisdomBgImage/wisdom-p3.jpg";
import wisdomP4 from "./bgImage/wisdomBgImage/wisdom-p4.jpg";
import wisdomP5 from "./bgImage/wisdomBgImage/wisdom-p5.jpg";
import wisdomP6 from "./bgImage/wisdomBgImage/wisdom-p6.jpg";

import passion1 from "./bgImage/passionBgImage/passion-1.jpg";
import passion2 from "./bgImage/passionBgImage/passion-2.jpg";
import passion3 from "./bgImage/passionBgImage/passion-3.jpg";
import passion4 from "./bgImage/passionBgImage/passion-4.jpg";
import passion5 from "./bgImage/passionBgImage/passion-5.jpg";
import passion6 from "./bgImage/passionBgImage/passion-6.jpg";

import passionP1 from "./bgImage/passionBgImage/passion-p1.jpg";
import passionP2 from "./bgImage/passionBgImage/passion-p2.jpg";
import passionP3 from "./bgImage/passionBgImage/passion-p3.jpg";
import passionP4 from "./bgImage/passionBgImage/passion-p4.jpg";
import passionP5 from "./bgImage/passionBgImage/passion-p5.jpg";
import passionP6 from "./bgImage/passionBgImage/passion-p6.jpg";

import Love from "./quotes/love.json";
import Loyalty from "./quotes/loyalty.json";
import Honor from "./quotes/honor.json";
import Growth from "./quotes/growth.json";
import Wisdom from "./quotes/wisdom.json";
import Passion from "./quotes/passion.json";

const App = () => {
  const [num, setNum] = useState(0);
  const [fade, setFade] = useState(false);
  const [fadeQuote, setFadeQuote] = useState(false);
  const [mute, setMute] = useState(true);
  const [bgUrl, setBgUrl] = useState("");

  const [start, setStart] = useState(false);
  const [genre, setGenre] = useState(0);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [hovered, setHovered] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const audioRef = useRef<HTMLAudioElement>(null);

  const bgImage = [defaultbg, defaultbg1];
  const bgLove = [love1, love2, love3, love4, love5, love6];
  const bgLoyalty = [
    loyalty1,
    loyalty2,
    loyalty3,
    loyalty4,
    loyalty5,
    loyalty6,
  ];
  const bgHonor = [honor1, honor2, honor3, honor4, honor5, honor6];
  const bgGrowth = [growth1, growth2, growth3, growth4, growth5, growth6];
  const bgWisdom = [wisdom1, wisdom2, wisdom3, wisdom4, wisdom5, wisdom6];
  const bgPassion = [
    passion1,
    passion2,
    passion3,
    passion4,
    passion5,
    passion6,
  ];

  const bgLoveP = [loveP1, loveP2, loveP3, loveP4, loveP5, loveP6];
  const bgLoyaltyP = [
    loyaltyP1,
    loyaltyP2,
    loyaltyP3,
    loyaltyP4,
    loyaltyP5,
    loyaltyP6,
  ];
  const bgHonorP = [honorP1, honorP2, honorP3, honorP4, honorP5, honorP6];
  const bgGrowthP = [
    growthP1,
    growthP2,
    growthP3,
    growthP4,
    growthP5,
    growthP6,
  ];
  const bgWisdomP = [
    wisdomP1,
    wisdomP2,
    wisdomP3,
    wisdomP4,
    wisdomP5,
    wisdomP6,
  ];
  const bgPassionP = [
    passionP1,
    passionP2,
    passionP3,
    passionP4,
    passionP5,
    passionP6,
  ];
  const genres = [Love, Loyalty, Honor, Growth, Wisdom, Passion];

  const color = [
    "#FF6B6B",
    "#FFD580",
    "#ADD8E6",
    "#90EE90",
    "#FFF9C4",
    "#E1BEE7",
  ];
  // const bgColor = [
  //   "bg-lightred",
  //   "bg-lightorange",
  //   "bg-lightblue",
  //   "bg-lightgreen",
  //   "bg-lightyellow",
  //   "bg-lightpurple",
  // ];

  const fontColor = [
    "text-lightred",
    "text-lightorange",
    "text-lightblue",
    "text-lightgreen",
    "text-lightyellow",
    "text-lightpurple",
  ];

  const genreQsRef = useRef<number[][]>([[], [], [], [], [], []]);
  const bgsGenre = useRef<number[][]>([[], [], [], [], [], []]);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          document.addEventListener("click", handleUserInteraction, {
            once: true,
          });
        });
      }
    };

    const handleUserInteraction = () => {
      if (audioRef.current) audioRef.current.play();
    };

    playAudio();

    return () => document.removeEventListener("click", handleUserInteraction);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = mute;
    }
  }, [mute]);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setFade(true);
    setTimeout(() => {
      setNum((prev) => (prev + 1) % bgImage.length);
      setFade(false);
    }, 300);
  };

  const generateQuote = () => {
    console.log(screenWidth);
    setFadeQuote(true);
    setTimeout(() => {
      let randomGenre = 1;
      let randomQuote = Math.floor(Math.random() * genres[randomGenre].length);

      while (genreQsRef.current[randomGenre].includes(randomQuote)) {
        if (
          genreQsRef.current[randomGenre].length === genres[randomGenre].length
        ) {
          genreQsRef.current[randomGenre] = [];
        }

        randomQuote = Math.floor(Math.random() * genres[randomGenre].length);
      }

      genreQsRef.current[randomGenre].push(randomQuote);

      setGenre(randomGenre);
      setQuote(genres[randomGenre][randomQuote].quote);
      setAuthor(genres[randomGenre][randomQuote].author);
      setFadeQuote(false);

      let BgIndex = Math.floor(Math.random() * 6);

      while (bgsGenre.current[randomGenre].includes(BgIndex)) {
        if (bgsGenre.current[randomGenre].length === 6) {
          bgsGenre.current[randomGenre] = []; 
        }
        BgIndex = Math.floor(Math.random() * 6);
      }

      bgsGenre.current[randomGenre].push(BgIndex); 

      switch (randomGenre) {
        case 0:
          screenWidth > 500
            ? setBgUrl(bgLove[BgIndex])
            : setBgUrl(bgLoveP[BgIndex]);
          break;
        case 1:
          screenWidth > 500
            ? setBgUrl(bgLoyalty[BgIndex])
            : setBgUrl(bgLoyaltyP[BgIndex]);
          break;
        case 2:
          screenWidth > 500
            ? setBgUrl(bgHonor[BgIndex])
            : setBgUrl(bgHonorP[BgIndex]);
          break;
        case 3:
          screenWidth > 500
            ? setBgUrl(bgGrowth[BgIndex])
            : setBgUrl(bgGrowthP[BgIndex]);
          break;
        case 4:
          screenWidth > 500
            ? setBgUrl(bgWisdom[BgIndex])
            : setBgUrl(bgWisdomP[BgIndex]);
          break;
        case 5:
        default:
          screenWidth > 500
            ? setBgUrl(bgPassion[BgIndex])
            : setBgUrl(bgPassionP[BgIndex]);
          break;
      }
    }, 300);
  };

  return (
    <div
      className={clsx(
        "relative flex flex-col justify-center items-center",
        "w-full h-screen",
        "overflow-hidden",
        "bg-black"
      )}
    >
      {/* Audio */}
      <audio ref={audioRef} src={defaultmusic} loop />

      {/* Background Layer */}
      <div
        className={clsx(
          "absolute",
          "flex justify-center items-center",
          "inset-0",
          !start && "bg-black",
          "bg-center bg-cover",
          "transform transition-all duration-700 ease-in-out",
          fade ? "scale-110 opacity-0" : "scale-100 opacity-100"
        )}
        style={{ backgroundImage: !start ? `url(${bgImage[num]})` : "" }}
      ></div>
      <div
        className={clsx(
          "relative",
          "flex flex-col justify-center items-center",
          "w-full h-full p-10",
          "z-[0]",
          "bg-center bg-cover",
          "transform transition-all duration-700 ease-in-out",
          fade ? "scale-110 opacity-0" : "scale-100 opacity-100"
        )}
        style={{
          backgroundImage: start && bgUrl ? `url(${bgUrl})` : "",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "darken",
        }}
      >
        {!start && (
          <>
            <div
              className={clsx(
                "w-auto h-auto",
                "text-[6rem]",
                "cursor-pointer",
                "max-s7rem:text-[9rem]",
                "max-s5rem:text-[8rem]"
              )}
              style={{ textShadow: "2px 2px 5px white" }}
              onClick={handleClick}
            >
              Daily Sparks
            </div>
            <div
              className={clsx(
                "w-auto h-auto p-3",
                "bx bx-play",
                "text-[5rem]",
                "cursor-pointer",
                "rounded-[.8rem]",
                "border-solid",
                "transition-all duration-300 ease-in-out",
                "hover:scale-[1.5]",
                "bg-center bg-cover",
                "max-s7rem:text-[9rem]",
                "max-s5rem:text-[8rem]"
              )}
              style={{ textShadow: "2px 2px 5px white" }}
              onClick={() => {
                setStart(true);
                generateQuote();
              }}
            ></div>
          </>
        )}
        {start && (
          <div
            className={clsx(
              "flex flex-col justify-center items-center",
              "w-auto h-auto",
              "gap-10"
            )}
          >
            <div
              className={clsx(
                "justify center items-center",
                "w-[80rem] h-auto",
                "text-center text-white text-[5rem] font-semibold",
                "transition-opacity duration-500 ease-in-out",
                "max-s7rem:w-[70rem]",
                "max-s5rem:w-[55rem]",
                fadeQuote ? "opacity-0" : "opacity-100"
              )}
              style={{ textShadow: `0px 0px 5px ${color[genre]}` }}
            >
              {quote}
            </div>
            <div
              className={clsx(
                "text-[3rem] text-center text-white",
                "transition-opacity duration-500 ease-in-out",
                fadeQuote ? "opacity-0" : "opacity-100"
              )}
              style={{ textShadow: `0px 0px 5px ${color[genre]}` }}
            >
              - {author}
            </div>
            <div
              className={clsx(
                genre === 0
                  ? "bx bxs-dice-1"
                  : genre === 1
                  ? "bx bxs-dice-2"
                  : genre === 2
                  ? "bx bxs-dice-3"
                  : genre === 3
                  ? "bx bxs-dice-4"
                  : genre === 4
                  ? "bx bxs-dice-5"
                  : "bx bxs-dice-6",
                "text-[6rem]",
                "w-auto h-full",
                "cursor-pointer",
                "max-s7rem:text-[7rem]",
                "max-s5rem:text-[8rem]",
                hovered && "bx-tada",
                fontColor[genre]
              )}
              style={{ textShadow: "0px 0px 5px rgba(0,0,0.2)" }}
              onClick={() => {
                generateQuote();
                handleClick();
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            ></div>
          </div>
        )}

        <div
          className={clsx(
            "flex flex-row justify-center items-center",
            "w-auto h-auto",
            "text-[2.5rem]"
          )}
        >
          <p
            className={clsx(
              "absolute",
              !mute ? "bx bxs-volume-full" : "bx bxs-volume-mute",
              "p-5",
              "bottom-10 left-10",
              "rounded-[50%]",
              "border-[.1rem] border-solid border-white",
              "bg-transparent",
              "cursor-pointer",
              "hover:shadow-[0px_0px_5px_rgba(0,0,0.2)]",
              "max-s7rem:text-[3.5rem]",
              "max-s5rem:text-[2.5rem]"
            )}
            style={{ textShadow: "0px 0px 5px white" }}
            onClick={() => setMute((prev) => !prev)}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default App;
