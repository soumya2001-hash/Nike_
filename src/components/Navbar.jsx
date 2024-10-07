import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="px-8 py-8 absolute z-10 w-full">
      <nav className="flex justify-between item-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29}></img>
        </a>
        <ul className="flex-1 flex justify-center item-center gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-monsarrat leading-normal text-lg text-slate-grey"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div>
          <img
            src={hamburger}
            alt="hamburger"
            height={25}
            width={25}
            className="hidden max-lg:block"
          ></img>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
