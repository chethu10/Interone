import { Navtitle } from "../Utils/MockData";
import NavList from "./NavList";
import PropTypes from 'prop-types'
function NavBar() {
  return (
    <div>
      {Navtitle.map((item) => (
        <NavList
          home={item.home}
          services={item.services}
          industries={item.industries}
          customers={item.customers}
          technologies={item.technologies}
          blog={item.blog}
          contact={item.contact}
        />
      ))}
    </div>
  );
}
NavList.PropTypes={
  home:PropTypes.string,
  services:PropTypes.string,
  industries:PropTypes.string,
  customers:PropTypes.string,
  technologies:PropTypes.string,
  blog:PropTypes.string,
  contact:PropTypes.string, 
};
export default NavBar;
