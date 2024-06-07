import Clock from "./Clock";
import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";

function Footer() {
    return (
        <div className=" z-50">
            <div className="absolute left-0 bottom-0 text-xs">
                © Devontae 2024
                <br />
                <Clock />
            </div>
            <div className="absolute flex gap-1 right-0 text-right bottom-0 text-xs">
                <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UCk10OO5kcjWyxQY8hFr5a3Q"
                >
                    <FaYoutube size={20} className="hover:cursor-pointer" />
                </a>
                <a target="_blank" href="mailto: s2kdevelopshare@gmail.com">
                    <IoIosMail size={20} />
                </a>
                <a target="_blank" href="https://discord.gg/hb6fDTRWa8">
                    <FaDiscord size={20} />
                </a>
            </div>
        </div>
    );
}

export default Footer;
