import { blog } from "../Utils/MockData";
import BlogProps from "./BlogProps";
import './Blog.css';

function Blog(){
    return(
        <div >
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
      <div className="blogButton"><button className="button">See more</button></div>
      </div>
    )
}
export default Blog;