import { useEffect, useRef } from "react";
import CodeSnippetAnimation from "./CodeSnippetAnimation";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { IoIosSend } from "react-icons/io";

function Contact() {
    const layers = useRef([]);

    const sendForm = (e) => {
        e.preventDefault();
        console.log(
            "Im actually not gonna read this, I dont do client work, I work clients"
        );
    };

    useGSAP((e) => {
        const mouseMoveFunc = (e) => {
            layers.current.forEach((layer, index) => {
                const depth = 65;
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
            <div
                ref={(element) => (layers.current[1] = element)}
                data-depth="100"
                className="flex flex-col items-center justify-center h-full text-neutral-content w-full"
            >
                <div
                    ref={(element) => (layers.current[2] = element)}
                    data-depth="25"
                    className="center font-bold text-3xl text-neutral-content mb-6"
                >
                    Contact Me!
                </div>
                <form action="" className="flex flex-col w-2/6">
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full bg-secondary"
                        ref={(element) => (layers.current[3] = element)}
                        data-depth="100"
                    />
                    <label className="form-control w-full">
                        <div className="label">
                            <span
                                className="label-text text-neutral-content"
                                ref={(element) => (layers.current[4] = element)}
                                data-depth="100"
                            >
                                Message:
                            </span>
                        </div>
                        <textarea
                            className="textarea resize-none h-36 textarea-bordered bg-secondary h-24 w-full"
                            placeholder="Write text here..."
                            ref={(element) => (layers.current[5] = element)}
                            data-depth="100"
                            rows="4"
                            cols="50"
                        ></textarea>
                    </label>
                    <button
                        ref={(element) => (layers.current[2] = element)}
                        data-depth="100"
                        className="btn btn-wide hover:btn-neutral bg-neutral-content text-neutral hover:text-neutral-content mt-6 self-end"
                        onClick={sendForm}
                    >
                        Submit
                        <IoIosSend />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
