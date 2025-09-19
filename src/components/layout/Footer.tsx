import insta from "../../assets/insta.png";
import fb from "../../assets/fb.png";

export const Footer = (): JSX.Element => {

    return (
        <footer className="relative">

            {/* Footer Bar */}
            <div className="bg-[#8B4513] text-white py-3 px-4 md:px-8 h-24 ">
                <div className="flex flex-col md:flex-row justify-between items-center  text-xs md:text-sm space-y-2 md:space-y-0 md:mt-8 mt-4" >
                    <div className="flex space-x-4 md:w-fit">
                        <img className="w-4 h-4" src={insta} />
                        <img className="w-4 h-4" src={fb} />
                    </div>
                    <span className="font-small  md:w-screen md:text-center">© Copyright 2025 Trade Free Market</span>
                </div>
            </div>
        </footer>

    )
}