import PropTypes from "prop-types";
import './Blog.css';
function Blogclick(props){
    return(
        <div className="blg">
        <div>
          <img className="BlogImages" src={props.image} alt="" />
        </div>
        <div className="maincontent">
          <div className="con">{props.content}</div>
          <div className="main">{props.main}</div>
        </div>
      </div>
    )
}
Blogclick.prototype = {
    image: PropTypes.string,
    content: PropTypes.string,
    main: PropTypes.string,}

export default Blogclick;