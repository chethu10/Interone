import { blog } from "../MockData";
import BlogProps from "./BlogProps";

function Blog(){
    return(
        <div>
        {blog.map((item) => (
          <BlogProps 
          image={item.image}
          content={item.content}
          main={item.main}
        />
        ))}
      </div>
    )
}
export default Blog;