import { Carousel } from 'react-bootstrap';
import Caves from '../../assets/Caves.jpg';
import Forest from '../../assets/Forest.jpeg';
import Stream from '../../assets/stream.jpeg';
import classes from './Slider.module.css';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <h2 className={classes['main-text']}>
          Explore <br />
          Cappadocia
        </h2>
        <p className={classes['small-text']}>
          Our world is incredibly beautiful, with a rich diversity of
          <br />
          landscapes, cultures, and wildlife. Follow us to enjoy these <br />{' '}
          moments.
        </p>
        <img
          className="d-block w-100 "
          height={700}
          width={700}
          src={Caves}
          alt="Forest"
        />
      </Carousel.Item>
      <Carousel.Item>
        <h2 className={classes['main-text']}>
          Explore <br />
          Swizzerland
        </h2>
        <p className={classes['small-text']}>
          Our world is incredibly beautiful, with a rich diversity of
          <br />
          landscapes, cultures, and wildlife. Follow us to enjoy these <br />{' '}
          moments.
        </p>
        <img
          className="d-block w-100"
          height={700}
          width={700}
          src={Forest}
          alt="Caves"
        />
      </Carousel.Item>
      <Carousel.Item>
        <h2 className={classes['main-text']}>Explore Canada</h2>
        <p className={classes['small-text']}>
          Our world is incredibly beautiful, with a rich diversity of
          <br />
          landscapes, cultures, and wildlife. Follow us to enjoy these <br />{' '}
          moments.
        </p>
        <img
          className="d-block w-100"
          height={700}
          width={700}
          src={Stream}
          alt="Caves"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
