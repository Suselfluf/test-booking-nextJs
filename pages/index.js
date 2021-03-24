import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.urls}>
          <a>Home</a><a>Schedule</a><a>About</a>
      </div>
      <div className={styles.btns}>
          <div id={styles.bookingBtn}><h6>Booking</h6></div>
          <div id={styles.contactBtn}><h6>Contact us</h6></div>
      </div>

    </div>
  )
}
