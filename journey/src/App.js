import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <h1>hello</h1>
      <Button variant="primary">Button</Button>
    </div>
  );
}

export default App;
