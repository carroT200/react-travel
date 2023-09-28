import { Fragment } from 'react';
import Slider from '../Components/slider/Slider';
import Blog from '../Components/about/Blog';
import Description from '../Components/description/Description';
import Footer from '../Components/footer/Footer';

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <Blog />
      <Description />
      <Footer />
    </Fragment>
  );
};

export default Home;
