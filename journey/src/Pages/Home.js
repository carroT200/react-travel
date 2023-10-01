import { Fragment } from 'react';
import Slider from '../Components/slider/Slider';
import Blog from '../Components/about/Blog';
import Description from '../Components/description/Description';
import AboutPlace from '../Components/about/aboutPlace/AboutPlace';
import AboutTeam from '../Components/about/aboutTeam/aboutTeam';
import Footer from '../Components/footer/Footer';

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <Blog />
      <Description />
      <AboutPlace />
      <AboutTeam />
      <Footer />
    </Fragment>
  );
};

export default Home;
