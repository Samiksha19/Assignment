import React from 'react';
import { View, Text, AsyncStorage, Alert } from 'react-native';

import _TouchItem from '../../components/_TouchItem/_TouchItem';
import _Input from '../../components/Input/_Input';

import * as globals from '../../lib/_global';
import styles from './style';
import NavService from '../../navigators/navigationService';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('user_info', (err, result) => {
      if (result) {
        result = JSON.parse(result);
        console.log('result', result)
        let { email, password } = result;
        this.setState({
          saved_mail: email,
          saved_pass: password,
        }) 
      }
    })
  }

  validate(refs) {
    if (globals.checkInputValidation(refs)) {
      let { email, password, saved_mail, saved_pass } = this.state;
      if(!saved_mail || !saved_pass){
        Alert.alert('Please register first to get logged in.')
      } else if (email === saved_mail && password === saved_pass) {
        NavService.navigate('root', 'Profile');
      } else if (email !== saved_mail || password !== saved_pass) {
        Alert.alert('Error', 'Wrong email Id or password')
      }
    }
  }

  render() {
    const inputValidation = () =>
      this.validate([this.input_email, this.input_password]);
    return (
      <View style={styles.wrap_container}>
        <_Input
          ref={input => (this.input_email = input)}
          label="Email ID"
          placeholder={'Enter Your Email ID'}
          validationMode={'mail'}
          text={this.state.email}
          keyboardType='default'
          onChangeText={t => {
            this.setState({ email: t });
          }}
          autoComplete='off'
          autoCorrect={false}
          wrapperStyle={{ flex: 0 }}
          textStyle={styles.text_style}
          inputStyle={{ backgroundColor: 'white' }}
          borderContainer={styles.input_borderContainer}
          returnKeyType='next'
          onSubmitEditing={() => this.input_country.focusInput()}
        />
        <_Input
          ref={input => (this.input_password = input)}
          label="Password"
          placeholder={'Enter Your Password'}
          validationMode={'req'}
          text={this.state.password}
          keyboardType='default'
          onChangeText={t => {
            this.setState({ password: t });
          }}
          autoComplete='off'
          autoCorrect={false}
          wrapperStyle={{ flex: 0 }}
          textStyle={styles.text_style}
          inputStyle={{ backgroundColor: 'white' }}
          borderContainer={styles.input_borderContainer}
          returnKeyType='next'
          onSubmitEditing={() => this.input_landmark.focusInput()}
        />
        <_TouchItem onPress={inputValidation} style={styles.continue_btn}>
          <Text style={styles.btn_text}>Continue</Text>
        </_TouchItem>
      </View>
    );
  }
}
