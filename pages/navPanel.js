import styles from '../styles/nav.module.css'
import Link from "next/link";

export default function NavPanel() {
    return (
        <div className={styles.container}>
            <div className={styles.urls}>
                <Link href={'/'}><a>Home</a></Link><a>Schedule</a><a>About</a>
            </div>
            <div className={styles.btns}>
                <div id={styles.bookingBtn}><h6><Link href={'/bookingPage'}><a>Booking</a></Link></h6></div>
                <div id={styles.contactBtn}><h6>Contact us</h6></div>
            </div>
        </div>
    )
}
