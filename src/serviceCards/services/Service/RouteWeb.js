import { WebDep} from "../../../Utils/MockData";
import PropTypes from "prop-types";
import WebRoutePage from "./WebRoutePage";

function RouteWeb() {
  return (
    <div>
      {WebDep.map((item) => (
        <WebRoutePage
          title={item.title}
          image={item.image}
          subtitle={item.subtitle}
          content={item.content}
        />
      ))}
    </div>
  );
}
RouteWeb.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
};
export default RouteWeb;