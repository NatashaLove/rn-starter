import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator(
  //1 object
  {
    //what to show on the screen
    Home: HomeScreen, 
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen
  },
  //2 object
  {
    //which first component should be displayed -which screen:
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
