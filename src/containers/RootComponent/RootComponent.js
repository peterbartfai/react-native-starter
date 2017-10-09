import React, { Component } from 'react';
import { View } from 'react-native';
import { translate, I18nextProvider } from 'react-i18next';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { RootNavigator } from '../../router';
import i18n from '../../localization/Localization';


const App = ({ dispatch, nav }) => {
  return (
    <RootNavigator
      navigation={addNavigationHelpers({
        dispatch,
        state: nav,
      })}
      screenProps={{ translate: i18n.getFixedT() }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    nav: state.nav,
  };
};

const AppWithNavigation = connect(mapStateToProps)(App);

const ReloadAppOnLanguageChange = translate('translate', {
  bindI18n: 'languageChanged',
  bindStore: false,
})(AppWithNavigation);

class RootComponent extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'transparent', flex: 1 }} >
        <I18nextProvider i18n={i18n}>
          <ReloadAppOnLanguageChange />
        </I18nextProvider>
      </View>
    );
  }
}

export default connect()(RootComponent);
