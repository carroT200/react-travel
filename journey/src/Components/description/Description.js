import Card from '../UI/Card';
import ContentContainer from '../UI/Content-container';
import image from '../../assets/fotos.png';
import classes from './Description.module.css';

const Description = () => {
  return (
    <Card>
      <div className={classes.title}>
        <h1>What you will get with us</h1>
      </div>
      <ContentContainer>
        <section>
          <div className={classes.benefit}>
            <div className={classes['benefit-title']}>
              <p className={classes['benefit-number']}>1</p>
            </div>
            <h4>Expert travel advice</h4>
            <p>
              A reputable travel agency should have experienced and
              <br />
              knowledgeable staff who can provide expert advice on <br />
              destinations, activities, accommodation, and transportation.
            </p>
          </div>
          <div className={classes.benefit}>
            <div className={classes['benefit-title']}>
              <p className={classes['benefit-number']}>2</p>
            </div>
            <h4>Competitive pricing</h4>
            <p>
              A reputable travel agency will negotiate with travel suppliers{' '}
              <br /> on your behalf to get you the best possible prices.
            </p>
          </div>
          <div className={classes.benefit}>
            <div className={classes['benefit-title']}>
              <p className={classes['benefit-number']}>3</p>
            </div>
            <h4>Customized itineraries:</h4>
            <p>
              A good travel agency will work with you to create a <br />
              personalized itinerary that suits your preferences, budget,
              <br /> and schedule.
            </p>
          </div>
        </section>
        <section>
          <img alt="airboolon" src={image} className={classes.img} />
        </section>
      </ContentContainer>
    </Card>
  );
};

export default Description;
