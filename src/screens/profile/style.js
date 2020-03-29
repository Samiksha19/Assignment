import {StyleSheet} from 'react-native';
import appstyles from '../../assets/styles/app';
import * as COLORS from '../../assets/styles/colors';

const styles = StyleSheet.create({
  head_view: {
    flex: 0.7,
    backgroundColor: COLORS.androidPurple,
    justifyContent: 'flex-end',
    zIndex: 1,
  },
  profile_pic: {
    width: 200,
    height: 200,
    top: 50,
    borderRadius: 200,
    borderWidth: 10,
    borderColor: COLORS.greyTheme,
    position: 'absolute',
    zIndex: 5,
    alignSelf: 'center',
  },
  personal_info: {
    flex: 2,
    padding: 20,
    backgroundColor: COLORS.white,
    paddingTop: 50,
  },
});

export default Object.assign(styles, appstyles);
