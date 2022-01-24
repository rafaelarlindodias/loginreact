import React, {Component} from 'react';

import {
  Toast,
  Container,
  Button,
  Form,
  Alert,
} from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.showUsername = this.showUsername.bind(this);
  }

  showUsername(event) {
      this.setState({
        value: event.target.value,
        usuario: event.target.value,
      });
    }

  render(props) {
    return (
      <div class="py-3">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email ou username</Form.Label>
            <Form.Control type="email" name="username" placeholder="Enter email" value={this.state.value} onChange={this.showUsername} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lembrar-me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Form>

        <div class="pt-3">
          <Alert variant="success">
            <Alert.Heading>props</Alert.Heading>
            <hr />
            <p>Parágrafo 1
              <h5 class="pt-3">Login (via props): {this.props.usuario} </h5>
            </p>
            <hr />
            <p className="mb-0">
              Parágrafo 2
            </p>
          </Alert>

          <Alert variant="danger">
            <Alert.Heading>state</Alert.Heading>
            <hr />
            <p>Parágrafo 1
              <h5 class="pt-3">Login (via state): {this.state.usuario} </h5>
            </p>
            <hr />
            <p className="mb-0">
              Parágrafo 2
            </p>
          </Alert>
        </div>
      </div>
    );
  }

}

export default Login;
