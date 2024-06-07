import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useRef, useState } from "react";
import { themeChange } from "theme-change";
import Footer from "./components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppWrapper />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

function AppWrapper() {
    const themes = [
        "coffee",
        "cupcake",
        "emerald",
        "synthwave",
        "retro",
        "garden",
        "lofi",
        "pastel",
        "wireframe",
        "luxury",
        "autumn",
        "business",
        "winter",
        "dim",
        "nord",
        "sunset",
    ];
    const [themeIndex, setThemeIndex] = useState(0);
    const [theme, setTheme] = useState(themes[themeIndex]);
    useEffect(() => {
        setTheme(themes[themeIndex]);
    }, [themeIndex]);

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
        <div
            data-theme={theme}
            className="flex items-center justify-center h-screen bg-secondary"
        >
            <div
                ref={(element) => (layers.current[0] = element)}
                data-depth={100}
                className=" bg-primary rounded-lg h-[90vh] md:h-5/6 w-3/4 hover-plane"
            >
                <Navbar
                    setThemeIndex={setThemeIndex}
                    themeIndex={themeIndex}
                    themeCount={themes.length}
                />
                <Outlet />
            </div>
        </div>
    );
}

export default App;
