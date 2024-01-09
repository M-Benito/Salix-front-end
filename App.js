import Navigation from './src/navigation/normal.navigation';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Oxygen-Bold': require('./assets/fonts/Oxygen-Bold.ttf'),
    'Oxygen-Regular': require('./assets/fonts/Oxygen-Regular.ttf'),
    'Oxygen-Light': require('./assets/fonts/Oxygen-Light.ttf'),
  });

  return (
    <><Navigation /><StatusBar style="auto" /></>
  );
}