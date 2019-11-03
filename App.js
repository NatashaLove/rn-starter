import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';


const navigator = createStackNavigator(
  //1 object
  {
    //what to show on the screen
    //key:value pairs
    Home: HomeScreen, 
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen

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
