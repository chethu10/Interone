import { MobileDevelopment} from "../../../utils/MockData";
import PropTypes from "prop-types";
import MobileRoutePage from "./MobileRoutePage";


function RouteMobile() {
  return (
    <div>
      {MobileDevelopment.map((item) => (
        <MobileRoutePage
          title={item.title}
          image={item.image}
          subtitle={item.subtitle}
          content={item.content}
        />
      ))}
    </div>
  );
}
RouteMobile.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
};
export default RouteMobile;