import React, { Component } from 'react';
import { Button, Modal, Form, FormControl } from 'react-bootstrap';

class LoginView extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="LoginView">
          {/*<div className="LoginView" style={loginBoxStyle}>*/}
      	{/*<p>*/}
          {/*Troopr Login*/}
        {/*</p>*/}
        {/*<form style={formStyle}>*/}
            {/*/!*<form style={formStyle} onSubmit={this.props.loginHandler}>*!/*/}
	        {/*<input*/}
	          {/*type="text"*/}
	          {/*placeholder="Username"*/}
	        {/*/>*/}
          {/*<input*/}
	          {/*type="text"*/}
	          {/*placeholder="Password"*/}
	        {/*/>*/}
          {/*<Button bsStyle='success' type="submit" value="Login" >*/}
              {/*Submit*/}
          {/*</Button>*/}
      	{/*</form>*/}
          <Modal.Dialog animation>
              <Modal.Header>
                  <Modal.Title>Troopr Login</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                  <Form inline>
                      {/*<form style={formStyle} onSubmit={this.props.loginHandler}>*/}
                      <FormControl
                          type="text"
                          placeholder="Username"
                      />
                      <br/><br/>
                      <FormControl
                          type="text"
                          placeholder="Password"
                      />
                  </Form>
              </Modal.Body>

              <Modal.Footer>
                  <Button bsStyle="link">Create Account</Button>
                  <Button bsStyle='success' type="submit" value="Login" onClick={this.props.loginHandler}>Sign in</Button>
              </Modal.Footer>
          </Modal.Dialog>
      </div>
    );
  }
}

const loginBoxStyle = {
    backgroundColor: 'purple',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '500px',
    width: '500px',
    borderRadius: '10px',
};

const formStyle = {
  backgroundColor: 'yellow',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '50vh',
};

export default LoginView;
