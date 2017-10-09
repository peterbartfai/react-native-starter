import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from '../component';

class ScreenOne extends Component {
  onButtonPress = () => {
    return () => {
      this.props.navigation.navigate('screenTwo');
    }
  }

  render() {
    const { translate } = this.props.screenProps;

    return (
      <View>
        <Text>
          ScreenOne - Localized String: {translate('testScreen:testString')}
        </Text>
        <Button
          onPress={this.onButtonPress()}
        >
          Next Page
        </Button>
      </View>
    );
  }
}

export default ScreenOne;
