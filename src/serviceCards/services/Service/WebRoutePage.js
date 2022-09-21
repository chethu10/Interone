// import './UiUxRoutPage.css';
import PropTypes from "prop-types";

function WebRoutePage(props) {
  return (
    <div className="uiuxcont">
      <div className='UiuxTitle'>{props.title}</div>
      <div className='imgAndSub'>
          <div className='pic'><img src={props.image} alt="" /></div>
        <div className='sub'>{props.subtitle}</div>
        </div>
      <div className='content'>{props.content}</div>
      <div className="UiUxServiceStroke">Service</div>
    </div>
  );
}
WebRoutePage.prototype={
  title:PropTypes.string,
  image:PropTypes.string,
  subtitle:PropTypes.string,
  content:PropTypes.string
}
export default WebRoutePage;