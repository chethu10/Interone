import { BlogSeeMore} from "../Utils/MockData";
import './Blog.css';
import Blogclick from "./Blogclick";

function BlogSeeClick(){
    return(
        <div >
        <div className="blogcont">
        {BlogSeeMore.map((item) => (
          <Blogclick
          image={item.image}
          content={item.content}
          main={item.main}
          bloglink={item.bloglink}
        />
        ))}
      </div>
      
      </div>
    )
}
export default BlogSeeClick;