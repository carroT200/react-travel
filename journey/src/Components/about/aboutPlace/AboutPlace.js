import Cart from '../../UI/Card';
import ContentConteiner from '../../UI/Content-container';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import image1 from '../../../assets/capid1.jpg';
import image2 from '../../../assets/capid2.jpg';
import image3 from '../../../assets/capid3.jpg';

import classes from './AboutPlace.module.css';

const AboutPlace = () => {
  return (
    <Cart>
      <ContentConteiner>
        <section>
          <h1 className={classes.title}>Our blog about Cappadocia</h1>
          <Button variant="outline-info">Read more</Button>{' '}
        </section>
        <section>
          <p className={classes.text}>
            helo world <br /> of Turkey.{' '}
          </p>
        </section>
      </ContentConteiner>
      <ContentConteiner>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={image1} />
          <Card.Body>
            <Card.Title>5 Place To Eat In Cappadocia</Card.Title>
            <Button variant="info" className={classes.btn}>
              Read more
            </Button>{' '}
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={image2} />
          <Card.Body>
            <Card.Title>Best Hotels In All Cappadocia</Card.Title>
            <Button variant="info" className={classes.btn}>
              Read more
            </Button>{' '}
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={image3} />
          <Card.Body>
            <Card.Title> Environment In Cappadocia</Card.Title>
            <Button variant="info" className={classes.btn}>
              Read more
            </Button>{' '}
          </Card.Body>
        </Card>
      </ContentConteiner>
    </Cart>
  );
};

export default AboutPlace;
