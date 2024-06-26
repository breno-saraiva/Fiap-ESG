import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

function Footer() {
    return (
        <footer className="bg-[#222] text-white p-12 text-center items-center">
            <ul className="flex justify-center">
                <li className="mx-4 my-4 text-2xl hover:text-[#22C55E] cursor-pointer">
                    <FaFacebook />
                </li>
                <li className="mx-4 my-4 text-2xl hover:text-[#22C55E] cursor-pointer">
                    <FaInstagram />
                </li>
                <li className="mx-4 my-4 text-2xl hover:text-[#22C55E] cursor-pointer">
                    <FaLinkedin />

                </li>
            </ul>
            <p className="mt-8">
                <span className="font-bold text-[#22C55E]">Green</span>Tech. &copy; 2024
            </p>
        </footer>
    )
}

export default Footer