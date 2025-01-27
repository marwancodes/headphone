import { NavbarMenu } from "../constants"

const Navbar = () => {
  return (
    <nav>
        {/* ____ Logo section ____ */}
        <a href="#">
            Playing / <span>Market</span>
        </a>
        {/* ____ Menu section ____ */}
        <div>
            <ul>
                {NavbarMenu.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
        {/* ____ Mobile Hamburger section ____ */}

    </nav>
  )
}

export default Navbar