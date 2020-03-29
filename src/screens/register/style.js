import {StyleSheet} from 'react-native';
import appstyles from '../../assets/styles/app';

const styles = StyleSheet.create({
  wrap_container: {
    flex: 1,
    margin: 20
  },
  age_title: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  radio_btns: {
    fontSize: 18,
    marginVertical: 10,
  },
  continue_btn: {
    alignSelf: 'center',
    backgroundColor: '#702197',
    marginVertical: 50,
    width: '70%',
    flex: 0,
    alignItems: 'center',
    paddingVertical: 20,
  },
  btn_text: {
    fontSize: 17,
    color: 'white',
  },
});

export default Object.assign(styles, appstyles);
