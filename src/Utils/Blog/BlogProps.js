import PropTypes from "prop-types";

function BlogProps(props) {
  return (
    <div className="blog">
        <div>
      <div>
        <img className="BlogImages" src={props.image} alt="" />
      </div>
      <div>
        <div>{props.content}</div>
        <div>{props.main}</div>
      </div>
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
