import { AppRegistry } from 'react-native';
import App from './guardApp'; // Adjust the path if your App.js file is in a different directory
import { name as appName } from './app.json';

// Register the main application component
AppRegistry.registerComponent(appName, () => App);
