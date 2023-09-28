import Card from '../UI/Card';
import ContentConteiner from '../UI/Content-container';
import Button from 'react-bootstrap/Button';

import image from '../../assets/airBoloon.jpg';
import classes from './Blog.module.css';

const Blog = () => {
  return (
    <Card>
      <ContentConteiner>
        <img src={image} alt="airboloon" className={classes.img} />
        <div>
          <h1 className={classes.title}>About Us</h1>
          <p className={classes.text}>
            Our tour agency offers unique and exciting travel experiences <br />
            for individuals and groups. With a focus on adventure, culture,
            <br /> and sustainable tourism, we strive to create unforgettable
            memories for <br />
            our clients.
          </p>
          <p className={classes.text}>
            Our team of knowledgeable guides and friendly staff are <br />
            dedicated to providing excellent service and
            <br /> ensuring a safe and enjoyable trip for all. From exploring
            exotic destinations to trying <br />
            new activities and cuisines, we specialize in customized itineraries
            <br /> that cater to diverse interests and budgets. Join us for a{' '}
            <br />
            memorable journey that will broaden your horizons and leave you{' '}
            <br />
            feeling inspired.
          </p>
          <Button variant="outline-info">Read more</Button>{' '}
        </div>
      </ContentConteiner>
    </Card>
  );
};

export default Blog;
