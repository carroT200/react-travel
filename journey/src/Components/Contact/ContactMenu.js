import Card from '../UI/Card';
import ContentConteiner from '../UI/Content-container';
import image from '../../assets/contact.jpg';
import classes from '../about/Blog.module.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactMenu = () => {
  return (
    <Card>
      <ContentConteiner>
        <img alt="good view" src={image} className={classes.img} />
        <Form>
          <h1 className={classes.title}>
            Let Us Plan Your Dream Trip - just fill out the form
          </h1>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Surname" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" placeholder="Your wishes" rows={3} />
          </Form.Group>
          <ContentConteiner>
            <Form.Label>How many people?</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
            </Form.Select>
          </ContentConteiner>
          <Button variant="info">Send</Button>{' '}
        </Form>
      </ContentConteiner>
    </Card>
  );
};

export default ContactMenu;
