import "./IndustriesComp.css";
import PropTypes from "prop-types";

function PropsIndusrtries(props) {
  return (
    <div className="a">
      <div className="backAndmed">
        <img className="banking" src={props.banking} alt="" />
        <img className="medical" src={props.medical} alt="" />
      </div>
      <div className="busiAndedu">
        <img className="entertainment" src={props.entertainment} alt="" />
        <img className="shopping" src={props.shopping} alt="" />
      </div>
      <div className=" enterAndshop">
        <img className="business" src={props.business} alt="bus" />
        <img className="education" src={props.education} alt="edu" />
      </div>
    </div>
  );
}
PropsIndusrtries.propTypes = {
  image: PropTypes.string,
};

export default PropsIndusrtries;
