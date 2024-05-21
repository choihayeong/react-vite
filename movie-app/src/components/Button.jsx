import styles from "../scss/Button.module.scss";


/**
 * function 컴포넌트이름() {
 *   return (
 *     <>
 *   )
 * }
 */

function Button() {
    return (
        <button type="button" className={styles.btn}>Default</button>
    )
}

export default Button;