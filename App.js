// import { StatusBar } from 'expo-status-bar';
import { useState, useCallback } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableWithoutFeedbac, Keyboard, KeyboardAvoidingView, View, Button, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import BackgroundImage from './assets/images/photo-bg.png';

SplashScreen.preventAutoHideAsync();

export default function App() {

	const [value, setValue] = useState("");
	const [fontsLoaded] = useFonts({
		'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
		'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
		'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
		'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	const inputHandler = (text) => setValue(text);

	return (
		<View style={styles.container} onLayout={onLayoutRootView}>
			<ImageBackground source={BackgroundImage} style={styles.image}>
				<View style={styles.registerForm}>
					<View style={styles.avatarBox}>
						<View style={styles.avatarBtn}>
							<Text style={styles.text} >X</Text>
						</View>
					</View>
					<Text style={styles.textTitle} >Регистрация</Text>
					<View style={styles.inputContainer}>
						<TextInput style={styles.inputForm}
							placeholder="Логин"
							value={value}
							onChangeText={inputHandler}
						/>
						<TextInput style={styles.inputForm}
							placeholder="Адрес электронной почты"
							value={value}
							onChangeText={inputHandler}
						/>
						<TextInput style={styles.inputForm} secureTextEntry={true}
							placeholder="Пароль"
							value={value}
							onChangeText={inputHandler}
						/>
					</View>

					<Button style={styles.inputButton} title='Зарегистрироваться' onPress={() => { }} />
					<Text>Уже есть аккаунт? Войти</Text>
				</View>
			</ ImageBackground>
			{/* <StatusBar style="auto" /> */}
		</View >
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},

	textTitle: {
		color: '#212121',
		fontFamily: 'Roboto-Medium',
		fontSize: 30,
		lineHeight: 35,
		marginBottom: 32
	},

	image: {
		flex: 1,
		justifyContent: 'flex-end',
		// alignItems: 'center'
		// justifyContent: 'center'
	},

	registerForm: {
		backgroundColor: "#fff",
		height: 549,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		alignItems: 'center',
		// padding: 16,
		paddingTop: 92,
		paddingBottom: 78,
		// marginHorizontal: 16
	},

	avatarBox: {
		width: 120,
		height: 120,
		backgroundColor: '#F6F6F6',
		borderRadius: 25,
		// borderWidth: 1,
		// borderColor: '#FF6C00',
		position: 'absolute',
		marginTop: -60,
	},

	avatarBtn: {
		width: 25,
		height: 25,
		// padding: 6,
		borderWidth: 1,
		borderColor: '#FF6C00',
		borderRadius: 25,
		position: 'absolute',
		// marginRight: 100,
		transform: [{ translateX: 107 }, { translateY: 81 }],
	},

	inputContainer: {
		display: 'flex',
		gap: 16,
		marginBottom: 43,
		// marginHorizontal: 16
	},

	inputForm: {
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		minWidth: 343,
		height: 50,
		backgroundColor: '#F6F6F6',
		borderColor: '#E8E8E8',
		borderWidth: 1,
		borderRadius: 8,
		padding: 16,
		// marginHorizontal: 16
	},

	inputButton: {
		width: 343,
		// minWidth: 343,
		backgroundColor: '#FF6C00',
		// padding: [16, 94],
		marginBottom: 16
	}

});
