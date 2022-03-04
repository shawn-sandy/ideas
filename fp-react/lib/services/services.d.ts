export default Services;
declare function Services({ children }: {
    children: any;
}): JSX.Element;
declare namespace Services {
    namespace propTypes {
        const children: PropTypes.Requireable<any>;
    }
}
import PropTypes from "prop-types";
