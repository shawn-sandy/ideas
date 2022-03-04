export default Article;
declare function Article({ props, speed, backgroundColor, foregroundColor, width, height }: {
    props: any;
    speed?: number | undefined;
    backgroundColor?: string | undefined;
    foregroundColor?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
}): JSX.Element;
declare namespace Article {
    namespace propTypes {
        const speed: PropTypes.Requireable<number>;
        const backgroundColor: PropTypes.Requireable<string>;
        const foregroundColor: PropTypes.Requireable<string>;
        const width: PropTypes.Requireable<number>;
        const height: PropTypes.Requireable<number>;
    }
}
import PropTypes from "prop-types";
