import '../BlogCont/Blog.css';
import { useNavigate } from "react-router-dom";



function Button(props){
    const history = useNavigate();

  const BlogRouteHandler = (button) => {
    console.log(button)
    history(button);
  };
    return(
        <div><div className="blogButton"  onClick={() => BlogRouteHandler(props.button)}><button className="button">See more</button></div> </div>
    )
}
export default Button;