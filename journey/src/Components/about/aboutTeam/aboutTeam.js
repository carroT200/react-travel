import ContentContainer from '../../UI/Content-container';
import Card from '../../UI/Card';

import person1 from '../../../assets/person1.jpg';

import classes from './aboutTeam.module.css';

const AboutTeam = () => {
  return (
    <Card>
      <h1 className={classes.title}>Our professional guides</h1>
      <p className={classes.text}>
        With years of experience, our guide is adept at providing insightful
        <br />
        commentary and making your journey interesting and engaging. <br />
        From the history and culture of the destinations you visit to the local{' '}
        <br />
        customs and traditions, our guide will provide you with a wealth of{' '}
        <br /> information to enrich your travels.
      </p>
      <ContentContainer>
        <article className={classes.card}>
          <img src={person1} alt="person" className={classes['card__img']} />
          <h4>Ben Anderson</h4>
          <p>Languages: France, English, Italian</p>
          <p>
            <p>
              Hi there, I'm Sara and I'll be your <br />
              guide. Whether you're looking for <br /> information or need
              assistance, I'm <br /> here to help. Let me know what <br />
              you're interested in or what <br /> you need, and I'll do my best
              to <br />
              provide you with the <br />
              best guidance possible. <br /> I hope you have a great experience{' '}
              <br /> and feel free to ask me <br />
              any questions along the way.
            </p>
          </p>
        </article>
      </ContentContainer>
    </Card>
  );
};

export default AboutTeam;
