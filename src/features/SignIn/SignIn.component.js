import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Button, Form, FormGroup, FormFeedback, Label, Input } from 'reactstrap';

class SignInComponent extends Component {
  render() {
    return (
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <Card className="my-5 mx-auto">
            <CardBody>
              <CardTitle>Sign In</CardTitle>
              <Form>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input invalid type="email" name="email" id="email" placeholder="devil@hell.com" />
                  <FormFeedback>This e-mail doesn't exists.</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input invalid type="password" name="password" id="password" placeholder="must have at least 6 characters" />
                  <FormFeedback>Wrong password.</FormFeedback>
                </FormGroup>
                <Button color="primary" className="float-right">Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SignInComponent;
