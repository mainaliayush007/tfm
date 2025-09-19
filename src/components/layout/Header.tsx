
import logo from "../../assets/logo.png";
import { MobileNav } from "../ui/MobileNav";


export const Header = (): JSX.Element => {
    const navigationItems = [
        { label: "HOME", active: false, link:"/" },
        { label: "ABOUT US", active: false, link:"#" },
        { label: "LOCATIONS", active: false, link:"#" },
        { label: "TRADERS", active: false, link:"#" },
        { label: "GALLERY", active: false, link:"/gallery"},
        { label: "ENTRY", active: false, link:"#" },
        { label: "CONTACT US", active: false , link:"#"},
    ];


    return (
        <header className="relative bg-[#f5f3e8] px-8 py-6">
            <div className="text-center mb-6">
                <div className="inline-block relative w-2/3">
                    <img src={logo} alt="Trade Free Market" />
                </div>
            </div>

            {/* Navigation */}
            <MobileNav navigationItems={navigationItems} />
        </header>
    )

};