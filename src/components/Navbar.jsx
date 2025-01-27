import { NavbarMenu } from "../constants";
import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";


const Navbar = () => {
  return (
    <>
        <div className="bg-brandDark text-white font-varela ">
            <nav className=" container flex justify-between items-center">
                {/* ____ Logo section ____ */}
                <div>
                    <a href="#" className="text-2xl font-bold uppercase">
                        Playing / <span className="font-extralight text-white/70">Market</span>
                    </a>
                </div>
                {/* ____ Menu section ____ */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-5 py-4">
                        {NavbarMenu.map((item) => (
                            <li key={item.id}>
                                <a href={item.link} className="inline-block text-sm py-2 px-3 uppercase">{item.name}</a>
                            </li>
                        ))}
                        <button className="text-xl ps-14">
                            <SlEarphones />
                        </button>
                    </ul>
                </div>
                {/* ____ Mobile Hamburger section ____ */}
                <div className="md:hidden">
                    <MdMenu className="text-4xl"/> 
                </div>
            </nav>
        </div>
    </>
  )
}
// install : react-icons , framer-motion , react-mouse-follower

export default Navbar