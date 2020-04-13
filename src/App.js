import React, { useState } from 'react';
import './App.css';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import axios from 'axios';




function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState(0);

  const addButton = () => {
    axios.get('http://184.172.252.27:31538/?num1=' + num1 + '&num2=' + num2).then((result) => {
      console.log(result.data);
      setResult(result.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <h1>Welcome to my calculator application</h1>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Control
                placeholder="First number"
                onChange={(e) => { setNum1(e.target.value) }}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Second number"
                onChange={(e) => { setNum2(e.target.value) }} />
            </Col>
            <Col style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: 26, marginRight: 30 }}>=</span>
              <Form.Control value={result} disabled></Form.Control>
            </Col>
          </Row>
        </Form>
        <Form>
          <Row style={{ display: 'flex' }}>
            <Button onClick={addButton} style={{ flex: 1, marginTop: 20 }}>
              Addition
            </Button>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default App;
