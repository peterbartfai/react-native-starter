import { StackNavigator, TabNavigator } from 'react-navigation';
import ScreenOne from './containers/ScreenOne';
import ScreenTwo from './containers/ScreenTwo';

export const RootNavigator = StackNavigator({
  screenOne: { screen: ScreenOne },
  screenTwo: { screen: ScreenTwo },
}
);
