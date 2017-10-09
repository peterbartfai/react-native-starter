import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Font, AppLoading, Asset } from 'expo';
import reducers from './src/reducers';
import RootComponent from './src/containers/RootComponent/RootComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appIsReady: false,
    };
  }

  async componentWillMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    try {
      await Font.loadAsync([
        {
          // 'fontName': require('./sampleFontUrl'),
        }]);
      await Asset.loadAsync([
        // require('./sampleImageUrl'),
      ]);
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.',
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <RootComponent />
        </Provider>
      );
    }
    return <AppLoading />;
  }
}

export default App;
