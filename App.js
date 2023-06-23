{/* <script src="http://192.168.0.110:8097"></script> */ }
import 'react-native-gesture-handler';

// import { StatusBar } from 'expo-status-bar';
// import React from "react";
// import { useCallback } from 'react';
import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from './router';

// SplashScreen.preventAutoHideAsync();



export default function App() {
	const [fontsLoaded] = useFonts({
		'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
		'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
		'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
		'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
	});

	// const onLayoutRootView = useCallback(async () => {
	// 	if (fontsLoaded) {
	// 		await SplashScreen.hideAsync();
	// 	}
	// }, [fontsLoaded]);

	// if (!fontsLoaded) {
	// 	return null;
	// }

	const routing = useRoute(true);
	// const routing = useRoute(false);

	if (!fontsLoaded) {
		return null;
	}


	return (
		<NavigationContainer>
			{routing}
		</NavigationContainer>
	);
}
