import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import art_1 from "../assets/FLYINGBLIND.png";
import art_2 from "../assets/moonwalk.png";
import art_3 from "../assets/useyourhead.png";
import art_4 from "../assets/WHAT.png";
import Footer from "./Footer";

function Home() {
    const layers = useRef([]);
    useGSAP(() => {
        const mouseMoveFunc = (e) => {
            layers.current.forEach((layer, index) => {
                const depth = layer.getAttribute("data-depth");
                const moveX = (e.pageX - window.innerWidth / 2) / depth;
                const moveY = (e.pageY - window.innerHeight / 2) / depth;
                index++;
                gsap.to(layer, {
                    x: moveX * index,
                    y: moveY * index,
                });
            });
        };

        document.addEventListener("mousemove", mouseMoveFunc);
    });

    return (
        <div className="h-[88.5%] mx-5 text-primary-content relative">
            <div className="bg-grp w-full h-full absolute overflow-hidden select-none pointer-events-none">
                <div
                    ref={(element) => (layers.current[5] = element)}
                    data-depth={-100}
                    className=" absolute w-full h-full grayscale invert mix-blend-darken blur-[5px] bg-cover bg-center opacity-100"
                    style={{
                        backgroundImage: `url(${art_2})`,
                    }}
                ></div>
            </div>
            <div
                ref={(element) => (layers.current[0] = element)}
                data-depth={12 / 2}
                className="img-grp absolute right-10 bottom-44 md:right-[38rem] mix-blend-luminosity select-none pointer-events-none"
            >
                <div className="img-cont w-24 h-44 rounded-lg  overflow-hidden">
                    <div
                        className="h-full w-full bg-primary opacity-40 bg-cover bg-center grayscale blur-[2px]"
                        style={{
                            backgroundImage: `url(${art_1})`,
                        }}
                    ></div>
                    <div className="h-full w-full bg-primary "></div>
                </div>
            </div>
            <div
                ref={(element) => (layers.current[1] = element)}
                data-depth={30 / 2}
                className="img-grp absolute right-0 top-44 md:right-[24rem] mix-blend-luminosity pointer-events-none"
            >
                <div className="img-cont w-24 h-44 rounded-lg md:w-48 md:h-96  overflow-hidden">
                    <div
                        className="h-full w-full bg-primary opacity-40 bg-cover bg-center grayscale blur-[2px]"
                        style={{
                            backgroundImage: `url(${art_2})`,
                        }}
                    ></div>
                    <div className="h-full w-full bg-primary "></div>
                </div>
            </div>
            <div
                ref={(element) => (layers.current[2] = element)}
                data-depth={50 / 2}
                className="img-grp absolute left-0 top-12 md:left-[32rem] mix-blend-luminosity pointer-events-none"
            >
                <div className="img-cont w-40 h-72 rounded-lg overflow-hidden">
                    <div
                        className="h-full w-full bg-primary opacity-40 bg-cover bg-center grayscale blur-[2px]"
                        style={{
                            backgroundImage: `url(${art_3})`,
                        }}
                    ></div>
                    <div className="h-full w-full bg-primary "></div>
                </div>
            </div>
            <div
                ref={(element) => (layers.current[4] = element)}
                data-depth={40 / 2}
                className="img-grp absolute left-0 bottom-24 md:left-64  mix-blend-luminosity pointer-events-none"
            >
                <div className="img-cont w-80 h-[32rem] rounded-lg overflow-hidden ">
                    <div
                        className="h-full w-full bg-primary opacity-40 bg-cover bg-center grayscale blur-[2px] invert "
                        style={{
                            backgroundImage: `url(${art_4})`,
                        }}
                    ></div>
                    <div className="h-full w-full bg-primary "></div>
                </div>
            </div>

            <div
                ref={(element) => (layers.current[3] = element)}
                data-depth={100 / 2}
                className="flex flex-col items-center justify-center h-full z-20 text-neutral-content"
            >
                <div className="center font-bold text-3xl select-none">
                    HELLO!
                </div>
                <div className="center font-medium select-none">
                    My name is Devontae
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;

{
    /* <div
                ref={(element) => (layers.current[0] = element)}
                data-depth="15"
                className="absolute bottom-0 w-full flex items-center justify-center"
            >
                <CodeSnippetAnimation />
            </div> */
}
