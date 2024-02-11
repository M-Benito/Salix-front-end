import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './src/navigation/normal.navigation';
import * as SplashScreen from 'expo-splash-screen';
import Toast from 'react-native-toast-message';
import * as tc from './src/Components/Common/CustomToast'

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Oxygen-Bold': require('./assets/fonts/Oxygen-Bold.ttf'),
    'Oxygen-Regular': require('./assets/fonts/Oxygen-Regular.ttf'),
    'Oxygen-Light': require('./assets/fonts/Oxygen-Light.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Navigation />
      <StatusBar style="auto" />
      <Toast config={tc.toastConfig} />
    </GestureHandlerRootView>
  );
}