import styles from './Container.module.css'

function Container(Props) {
  return (
    <div className={`${styles.container} ${styles[Props.customClass]}`}>
      {Props.children}
    </div>
  )
}

export default Container
