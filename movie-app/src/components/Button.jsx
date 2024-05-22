import styles from "../scss/Button.module.scss";
import PropTypes from "prop-types";

/**
 * function 컴포넌트이름() {
 *   return (
 *     <>
 *   )
 * }
 */

function Button(props) {
    const { text, btnRef, buttonClickEvent } = props;

    return (
        <button type="button" ref={btnRef} className={styles.btn} onClick={buttonClickEvent} >{text}</button>
    )
}

export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    btnRef: PropTypes.oneOfType([
        // Either a function
        PropTypes.func, 
        // Or the instance of a DOM native element (see the note about SSR)
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    buttonClickEvent: PropTypes.func,
};
