import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import './Blog.css';

function BlogProps(props) {
  const history = useNavigate();

  const BlogRouteHandler = (bloglink) => {
    history(bloglink);
  };
  return (

 
    <div className="blg" onClick={() => BlogRouteHandler(props.bloglink)}>
      <div>
        <img className="BlogImages" src={props.image} alt="" />
      </div>
      <div className="maincontent">
        <div className="con">{props.content}</div>
        <div className="main">{props.main}</div>
      </div>
    </div>
    
    
  );
}
BlogProps.prototype = {
  image: PropTypes.string,
  content: PropTypes.string,
  main: PropTypes.string,
};
export default BlogProps;
