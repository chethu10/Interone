import { AppMaint} from '../../../utils/MockData';
import PropTypes from "prop-types";
import UiUxRoutPage from './UiUxRoutPage';


function RouteApp() {
  return (
    <div>
      {AppMaint.map((item) => (
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
RouteApp.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
};
export default RouteApp;