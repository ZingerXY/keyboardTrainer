import styles from "./style.module.scss"

export const NotFound = () => {
  return <div className={styles.page}>
    <div className={styles.box}>
      <p className={styles["text-404"]}>
        404
      </p>
      <p className={styles.text}>
        страница не найдена
      </p>
    </div>
  </div>
}