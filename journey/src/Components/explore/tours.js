import Card from '../UI/Card';

import classes from './tours.module.css';

const ToursMenu = () => {
  return (
    <Card>
      <div className={classes.grid}>
        <div className={classes.box1}> Lo</div>
        <div className={classes.box2}>2</div>
        <div className={classes.box3}>1</div>
      </div>
    </Card>
  );
};

export default ToursMenu;
