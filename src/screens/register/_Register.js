import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Alert,
  AsyncStorage
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import _TouchItem from '../../components/_TouchItem/_TouchItem';
import _Input from '../../components/Input/_Input';

import * as globals from '../../lib/_global';
import {transPurple} from '../../assets/styles/colors';
import styles from './style';
import NavService from '../../navigators/navigationService';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phone_number: '',
      email: '',
      password: '',
      userId: ''
    };
  }

  validate(refs) {
    if (globals.checkInputValidation(refs)) {
      let { name, phone_number, email, password, userId } = this.state;
      AsyncStorage.setItem('user_info', JSON.stringify({
        name,
        phone_number,
        email,
        password,
        userId
      }))
      Alert.alert(
        'Success',
        'Registration Successful! Click OK To Login into Your App.',
        [
          {
            text: 'OK',
            onPress: () => {
              NavService.goBack('root');
              NavService.navigate('root', 'Login')
            },
          },
        ],
        {cancelable: false},
      );
    }
  }

  render() {
    const inputValidation = () => { this.validate([this.input_name, this.input_phone_number, this.input_email, this.input_userId, this.input_password ])}
    return (
      <View style={styles.screen}>
        <StatusBar
          barStyle="dark-content"
          translucent={false}
          backgroundColor={transPurple}
          animated={true}
        />
        <SafeAreaView style={[styles.screen, styles.wrap_container]}>
          <KeyboardAwareScrollView ref={(ref) => { this.scroll = ref; }} keyboardShouldPersistTaps='handled' alwaysBounceVertical={false} contentContainerStyle={{ flexGrow: 1, paddingTop: 20 }} extraScrollHeight={100} style={{ paddingHorizontal: 20 }}>
          <_Input
            ref={input => (this.input_name = input)}
            label="Your Name"
            placeholder={'Enter Your Name'}
            validationMode={'req'}
            text={this.state.name}
            keyboardType='default'
            onChangeText={t => this.setState({ name: t })}
            autoComplete="off"
            autoCorrect={false}
            wrapperStyle={{ flex: 0 }}
            textStyle={styles.text_style}
            inputStyle={{ backgroundColor: 'white' }}
            borderContainer={styles.input_borderContainer}
            returnKeyType='next'
            onSubmitEditing={() => this.input_phone_number.focusInput()}
          />
          <_Input
            ref={input => (this.input_phone_number = input)}
            label="Mobile Number"
            placeholder={'Enter Your Mobile Number'}
            validationMode={'len10'}
            text={this.state.phone_number}
            keyboardType='numeric'
            onChangeText={t => {
              this.setState({ phone_number: t });
            }}
            autoComplete='off'
            autoCorrect={false}
            wrapperStyle={{ flex: 0 }}
            textStyle={styles.text_style}
            inputStyle={{ backgroundColor: 'white' }}
            borderContainer={styles.input_borderContainer}
            returnKeyType='next'
            onSubmitEditing={() => this.input_email.focusInput()}
          />
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
            onSubmitEditing={() => this.input_userId.focusInput()}
          />
          <_Input
            ref={input => (this.input_userId = input)}
            label="User ID"
            placeholder={'Enter Your User ID'}
            validationMode={'req'}
            text={this.state.userId}
            keyboardType='default'
            onChangeText={t => {
              this.setState({ userId: t });
            }}
            autoComplete='off'
            autoCorrect={false}
            wrapperStyle={{ flex: 0 }}
            textStyle={styles.text_style}
            inputStyle={{ backgroundColor: 'white' }}
            borderContainer={styles.input_borderContainer}
            returnKeyType='next'
            onSubmitEditing={() => this.input_password.focusInput()}
          />
          <_Input
            ref={input => (this.input_password = input)}
            label="Password"
            placeholder={'Enter Your Password'}
            validationMode={'req'}
            secureTextEntry={true}
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
            onSubmitEditing={inputValidation}
          />
          <_TouchItem onPress={inputValidation} style={styles.continue_btn}>
            <Text style={styles.btn_text}>Continue</Text>
          </_TouchItem>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

export default Register;
