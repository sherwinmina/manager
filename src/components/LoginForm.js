import React, { Component } from 'react';
import { connect } from 'react-redux';

import { emailChange } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
onEmailChange(text) {
  this.props.emailChange(text);  
}

  render() {
    return (
      <Card> 
        <CardSection>
          <Input 
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection> 

        <CardSection>
          <Input 
              secureTextEntry
              label="Password"
              placeholder="password"
          />
        </CardSection> 
        
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection> 
      </Card>
    );
  }
}

export default connect(null, { emailChange })(LoginForm); 
