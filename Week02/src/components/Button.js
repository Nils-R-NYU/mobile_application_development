import PropTypes from "prop-types";
import "../RecipeCard/styles.css";

export default function Button(props) {
  const { primary, children, hidden, ...otherProps } = props;

  return (
    <button {...otherProps} className={hidden ? "hidden" : ""}>
      {children}
    </button>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  hidden: PropTypes.bool,
};
