import { RoutUiUx} from "../../../utils/MockData";
import UiUxRoutPage from "./UiUxRoutPage";
import PropTypes from "prop-types";

function RouteUxUi() {
  return (
    <div>
      {RoutUiUx.map((item) => (
        <UiUxRoutPage
          title={item.title}
          image={item.image}
          subtitle={item.subtitle}
          content={item.content}
        />
      ))}
    </div>
  );
}
RouteUxUi.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
};
export default RouteUxUi;
