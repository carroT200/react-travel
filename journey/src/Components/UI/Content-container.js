import classes from './Content-container.module.css';

const ContentContainer = (props) => {
  return <div className={classes.content}>{props.children}</div>;
};

export default ContentContainer;
