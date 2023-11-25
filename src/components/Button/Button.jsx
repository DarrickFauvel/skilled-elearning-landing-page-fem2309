/* eslint-disable react/prop-types */
import styles from "./Button.module.css"

const Button = ({ link, children, variant = "default" }) => {
  const buttonClass =
    variant === "primary"
      ? styles.primary
      : variant === "secondary"
      ? styles.secondary
      : styles.default

  return (
    <a href={link} className={`${styles.button} ${buttonClass}`}>
      <span>{children}</span>
    </a>
  )
}

export default Button
