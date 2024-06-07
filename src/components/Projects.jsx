import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Card from "./Card";
import Footer from "./Footer";

function Projects() {
    const layers = useRef([]);

    useGSAP((e) => {
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
            {/* <div
                ref={(element) => (layers.current[0] = element)}
                data-depth="15"
                className="absolute bottom-0 w-3/4 flex items-center justify-center"
            >
                <CodeSnippetAnimation />
            </div> */}
            <div className="flex flex-col items-center w-full h-full ">
                <div
                    ref={(element) => (layers.current[1] = element)}
                    data-depth="100"
                    className="center font-bold text-3xl select-none mb-4"
                >
                    Projects
                </div>
                <div className="w-5/6 overflow-y-scroll">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-4">
                        <Card
                            ref={(element) => (layers.current[2] = element)}
                            data-depth="100"
                            title={"C# sharpernater"}
                            description={"Wanna sharpen ur c# more?"}
                            img={""}
                        />
                        <Card
                            ref={(element) => (layers.current[3] = element)}
                            data-depth="100"
                            title={"Grog"}
                            description={"Not so cash money"}
                        />
                        <Card
                            ref={(element) => (layers.current[4] = element)}
                            data-depth="100"
                            title={"Grog away"}
                            description={"Cash Money"}
                        />
                        <Card
                            ref={(element) => (layers.current[5] = element)}
                            data-depth="24"
                            title={"Im not joshing you"}
                            description={
                                "Alpha giga sigma chad style hardstyle poggers"
                            }
                        />
                        <Card
                            ref={(element) => (layers.current[6] = element)}
                            data-depth="25"
                            title={"Maybe I am joshing you"}
                            description={"baby gronk style"}
                        />
                        <Card
                            ref={(element) => (layers.current[7] = element)}
                            data-depth="100"
                            title={"Unless?"}
                            description={"rizz looksmaxxing"}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Projects;
