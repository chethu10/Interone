import { useNavigate } from "react-router-dom";
import "./PropsUxUiCard.css";

function PropsUxUiCard(props) {
  const history = useNavigate();

  const handlerRoute = (link) => {
    history(link);
  };
  return (
    <div className="uiuxcard" onClick={() => handlerRoute(props.link)}>
      <div>
        <img className="image" src={props.image} alt=""></img>
      </div>
      <div className="title">{props.title}</div>
      <div className="cont">{props.content}</div>
    </div>
  );
}
export default PropsUxUiCard;
