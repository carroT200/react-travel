import ContentConteiner from '../UI/Content-container';
import logo from '../../assets/logo.png';

import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';

import location from '../../assets/Location.png';
import phone from '../../assets/Phone.png';
import email from '../../assets/Email.png';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.bg}>
      <ContentConteiner>
        <section>
          <div className={classes.company}>
            <img alt="logo" src={logo} />
            <p className={classes.title}>Cappadocia Adventures</p>
          </div>
          <p className={classes.text}>
            Cappadocia Adventures Tour Agency is a leading tour operator in the
            Cappadocia region of Turkey. With years of experience, we specialize
            in organizing customized tours and excursions for individuals,
            families, and groups.
          </p>
          <div className={classes.company}>
            <h5 className={classes.social}>Follow Us</h5>
            <ul className={classes['social-list']}>
              <li>
                <a href="https://www.instagram.com/">
                  <img alt="instagram" src={instagram} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <img alt="facebook" src={facebook} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <img alt="twitter" src={twitter} />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h4 className={classes.title}>Communication</h4>
          <ul>
            <li>
              <img alt="" src={phone} className={classes.img} />
              <div>
                <p className={classes['small-text']}>Drop a line</p>
                <p className={classes['big-text']}>+123 456 789</p>
              </div>
            </li>
            <li>
              <img alt="" src={email} className={classes.img} />
              <div>
                <p className={classes['small-text']}>Email Address </p>
                <p className={classes['big-text']}>cappadociaTour@gmail.com</p>
              </div>
            </li>
            <li>
              <img alt="" src={location} className={classes.img} />
              <div>
                <p className={classes['small-text']}>Visit Office </p>
                <p className={classes['big-text']}>
                  Hakim Muzaffer Arer Sk., 50650
                </p>
              </div>
            </li>
          </ul>
        </section>
      </ContentConteiner>
    </div>
  );
};

export default Footer;
