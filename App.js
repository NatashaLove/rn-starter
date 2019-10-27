import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';

const navigator = createStackNavigator(
  //1 object
  {
    //what to show on the screen
    Home: HomeScreen, 
    Components: ComponentsScreen
  },
  //2 object
  {
    //which first component should be displayed
    initialRouteName: 'Components',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
