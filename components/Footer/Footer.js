import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import ApartmentIcon from '@material-ui/icons/Apartment';
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import styles from '../Footer/Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.logoFooter}>
          <img className={styles.img} src="/assets/media/Logo-white.jpg" alt="company logo" />
        </div>
        <div className={styles.txt}>
          <h3 className={styles.h3}>for candidates</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>Career Advice</li>
            <li className={styles.li}>Interview Tips</li>
            <li className={styles.li}>CV Advice</li>
            <li className={styles.li}>Recent jobs</li>
            <li className={styles.li}>Jobs Alerts</li>
            <li className={styles.li}>F.A.Q</li>
          </ul>
        </div>
        <div className={styles.txt}>
          <h3 className={styles.h3}>for employers</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>Why Labor Staffers</li>
            <li className={styles.li}>Get Started</li>
            <li className={styles.li}>Our Benefits</li>
            <li className={styles.li}>Our Services</li>
            <li className={styles.li}>About us</li>
            <li className={styles.li}>Contact us</li>
            <li className={styles.li}>F.A.Q</li>
          </ul>
        </div>
        <div className={styles.txt}>
          <h3 className={styles.h3}>contact us</h3>
          <ul className={styles.ul}>
            <li className={styles.li}><i className={styles.i}><RoomIcon /></i>1106 Church Street Hollidaysburg, PA 16648</li>
            <li className={styles.li}><i className={styles.i}><EmailIcon /></i>Dave@laborstaffers.com</li>
            <li className={styles.li}><i className={styles.i}><PhoneIcon /></i>+1 (814) 889-9125</li>
            <li className={styles.li}><i className={styles.i}><ApartmentIcon /></i>Labor Staffers</li>
            <div className={styles.socialIcons, styles.up}>
              <a className={styles.a} href="https://www.facebook.com/laborstaffers/"><i><FacebookIcon /></i></a>
              <a className={styles.a} href="https://www.instagram.com/laborstaffers/"><i><InstagramIcon /></i></a>
              <a className={styles.a} href="https://twitter.com/laborstaffers"><i><TwitterIcon /></i></a>
              <a className={styles.a} href="https://www.linkedin.com/in/dhite/"><i><LinkedinIcon /></i></a>
            </div>
          </ul>
        </div>

      </footer>
      <div className={styles.copyright}>
        <p>LABOR STAFFERS © 2021</p>
      </div>

    </>
  )
}
