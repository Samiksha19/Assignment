import React from 'react';
import { Image, View, Text, AsyncStorage, Alert } from 'react-native';
import _Input from '../../components/Input/_Input';
import styles from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import _TouchItem from '../../components/_TouchItem/_TouchItem';
import * as globals from '../../lib/_global';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phone_number: '',
      email: '',
      password: '',
      userId: '',
      editable: false
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('user_info', (err, result) => {
      result = JSON.parse(result);
      let { name, phone_number, email, password, userId } = result;
      console.log('dsadas', result)
      this.setState({
        name,
        phone_number,
        email,
        password,
        userId
      })
    })
  }

  validate(refs) {
    if (!this.state.editable) {
      this.setState({ editable: true }, () => {
        this.input_name.focusInput()
      })
    } else {
      if (globals.checkInputValidation(refs)) {
        this.setState({ editable: false }, () => {
          Alert.alert('Success', 'Details saved successfully.');
        })
      }
    }
  }

  render() {
    const inputValidation = () => { this.validate([this.input_name, this.input_phone_number, this.input_email, this.input_userId, this.input_password]) }
    return (
      <View style={styles.screen}>
        <View style={styles.head_view}>
          <View style={styles.profile_pic}>
            <Image
              source={require('../../assets/images/USER_PROFILE.png')}
              resizeMode="contain"
              style={[styles.profile_pic, {top: 0}]}
            />
          </View>
        </View>
        <View style={styles.personal_info}>
          <_TouchItem onPress={inputValidation} style={[styles.continue_btn, {marginVertical: 0, paddingVertical: 10, width: '20%', alignSelf: 'flex-end'}]}>
            <Text style={styles.btn_text}>{this.state.editable ? 'SAVE' : 'EDIT'}</Text>
          </_TouchItem>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' alwaysBounceVertical={false} contentContainerStyle={{ flexGrow: 1, paddingTop: 20 }} extraScrollHeight={100}>
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
              editable={this.state.editable}
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
              editable={this.state.editable}
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
              editable={this.state.editable}
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
              editable={this.state.editable}
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
              text={this.state.password}
              editable={this.state.editable}
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
          </KeyboardAwareScrollView>
        </View>
      </View>
    );
  }
}

export default Profile;
