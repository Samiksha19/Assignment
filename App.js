import React from 'react';

import RootNavigator from './src/navigators/_RootNav';
import NavService from './src/navigators/navigationService'

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator
        ref={(navRef) => NavService.setNavigator(navRef, 'root')}
      />
    );
  }
}
