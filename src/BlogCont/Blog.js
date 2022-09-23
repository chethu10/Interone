import { blog, seemore } from "../Utils/MockData";
import BlogProps from "./BlogProps";
import { useNavigate } from "react-router-dom";
import "./Blog.css";
import ButtonClick from "../Button/ButtonClick";

function Blog(props) {
  console.log(props);
  const history = useNavigate();

  const blogRouteHandler = (button) => {
    console.log(button);
    history(button);
  };
  return (
    <div>
      <div className="blogcont">
        {blog.map((item) => (
          <BlogProps
            image={item.image}
            content={item.content}
            main={item.main}
            bloglink={item.bloglink}
          />
        ))}
      </div>
      <div
        className="blogButton"
        onClick={() => blogRouteHandler(seemore.button)}
      >
       <ButtonClick />
      </div>
    </div>
  );
}
export default Blog;
