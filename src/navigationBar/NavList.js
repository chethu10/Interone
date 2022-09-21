import "./NavList.css";


function NavList(props) {
  return (
      <div className="navspace">
      <div className="home">{props.home}</div>
      <div className="services">{props.services}</div>
      <div className="industries">{props.industries}</div>
      <div className="customers">{props.customers}</div>
      <div className="technologies"> {props.technologies}</div>
      <div className="blog">{props.blog}</div>
      <div className="contact">{props.contact}</div>
    </div>
  );
}

export default NavList;
