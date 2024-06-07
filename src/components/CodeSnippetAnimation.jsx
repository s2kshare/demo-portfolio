import { TypeAnimation } from "react-type-animation";

function CodeSnippetAnimation() {
    return (
        <div className="mockup-code bg-secondary w-5/6 text-secondary-content">
            <pre>
                <TypeAnimation
                    sequence={[
                        "> ",
                        1000,
                        "> npm run sigma",
                        50,
                        "> npm run sigma\n  running application...",
                        1000,
                        "> npm run sigma\n  running application...\n  Downloading nearby femboy",
                        500,
                        "> npm run sigma\n  running application...\n  Downloading nearby femboy.",
                        500,
                        "> npm run sigma\n  running application...\n  Downloading nearby femboy..",
                        500,
                        "> npm run sigma\n  running application...\n  Downloading nearby femboy...",
                        10,
                        "> npm run sigma\n  running application...\n  Downloading nearby femboy...\n  ^C^CTerminate batch job (Y/N)? ",
                        500,
                        "",
                    ]}
                    wrapper="code"
                    speed={50}
                    repeat={Infinity}
                    omitDeletionAnimation={true}
                />
            </pre>
        </div>
    );
}

export default CodeSnippetAnimation;
