// import { StatusBar } from 'expo-status-bar';
import { useState, useCallback, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, View, Platform, TouchableOpacity, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import BackgroundImage from './assets/images/photo-bg.png';
import { AntDesign } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();

const registerState = {
	login: '',
	email: '',
	password: ''
}

export default function App() {

	const [state, setState] = useState(registerState);
	const [addPhoto, setAddPhoto] = useState(true);
	const [isFocusedLogin, setIsFocusedLogin] = useState(false);
	const [isFocusedEmail, setIsFocusedEmail] = useState(false);
	const [isFocusedPassword, setIsFocusedPassword] = useState(false);
	const [isShowPassword, setIsShowPassword] = useState(true);
	const [fontsLoaded] = useFonts({
		'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
		'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
		'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
		'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
	});
	const [dimensions, setDimensions] = useState(Dimensions.get("window").width - 16 * 2);
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);

	useEffect(() => {
		const onChange = () => {
			const width = Dimensions.get("window").width - 16 * 2;
			setDimensions(width);
		}
		const subscription = Dimensions.addEventListener('change', onChange);
		return () => subscription?.remove();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	const toogleAddPhoto = () => {
		setAddPhoto(prevState => !prevState)
	}

	const toggleShowPassword = () => {
		setIsShowPassword(prevState => !prevState);
	}

	const keyboardHide = () => {
		Keyboard.dismiss;
		setIsShowKeyboard(false);
	}

	const handleSubmit = () => {
		console.log(state);
		setIsShowPassword(true);
		Keyboard.dismiss;
		setState(registerState);
	};


	return (
		<View style={styles.container} onLayout={onLayoutRootView}>
			<TouchableWithoutFeedback
				// onPress={Keyboard.dismiss}
				onPress={keyboardHide}
			>
				<ImageBackground source={BackgroundImage} style={styles.image}>
					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding" : null}
					>
						<View style={{
							...styles.registerForm,
							paddingBottom: !isShowKeyboard ? 78 : 0
						}}>
							<View style={styles.avatarBox}>
								<TouchableOpacity style={styles.avatarBtn} activeOpacity={0.8} onPress={toogleAddPhoto}>
									<Text>
										{addPhoto ? <AntDesign name="pluscircleo" size={25} color="#FF6C00" /> : <AntDesign name="closecircleo" size={25} color="#E8E8E8" />}
									</Text>
								</TouchableOpacity>
							</View>

							{/* Dimensions */}
							<View style={{ width: dimensions }}>
								<Text style={styles.registerTitle} >Регистрация</Text>
								<View style={styles.inputContainer}>
									<TextInput style={{
										...styles.inputForm,
										borderColor: isFocusedLogin ? '#FF6C00' : '#E8E8E8',
										backgroundColor: isFocusedLogin ? '#FFFFFF' : '#F6F6F6'
									}}
										placeholder="Логин"
										placeholderTextColor={'#BDBDBD'}
										cursorColor={'#212121'}
										value={state.login}
										onFocus={() => { setIsFocusedLogin(true), setIsShowKeyboard(true) }}
										onBlur={() => { setIsFocusedLogin(false), setIsShowKeyboard(false) }}
										onChangeText={value => setState(prevState => ({ ...prevState, login: value }))}
									/>
									<TextInput style={{
										...styles.inputForm,
										borderColor: isFocusedEmail ? '#FF6C00' : '#E8E8E8',
										backgroundColor: isFocusedEmail ? '#FFFFFF' : '#F6F6F6'
									}}
										placeholder="Адрес электронной почты"
										placeholderTextColor={'#BDBDBD'}
										cursorColor={'#212121'}
										value={state.email}
										onFocus={() => { setIsFocusedEmail(true), setIsShowKeyboard(true) }}
										onBlur={() => { setIsFocusedEmail(false), setIsShowKeyboard(false) }}
										onChangeText={value => setState(prevState => ({ ...prevState, email: value }))}
									/>

									<View style={styles.inputPasswordWrapper}>
										<TextInput style={{
											...styles.inputForm,
											borderColor: isFocusedPassword ? '#FF6C00' : '#E8E8E8',
											backgroundColor: isFocusedPassword ? '#FFFFFF' : '#F6F6F6'
										}}
											secureTextEntry={isShowPassword}
											onPress={toggleShowPassword}
											placeholder="Пароль"
											placeholderTextColor={'#BDBDBD'}
											cursorColor={'#212121'}
											value={state.password}
											onFocus={() => { setIsFocusedPassword(true), setIsShowKeyboard(true) }}
											onBlur={() => { setIsFocusedPassword(false), setIsShowKeyboard(false) }}
											onChangeText={value => setState(prevState => ({ ...prevState, password: value }))}
										/>
										<TouchableOpacity
											style={styles.showPasswordWrapper}
											activeOpacity={0.8}
											onPress={toggleShowPassword}>
											<Text style={styles.showPasswordTitle}>{isShowPassword ? 'Показать' : 'Скрыть'}</Text>
										</TouchableOpacity>
									</View>

								</View>

								{/* <TouchableOpacity style={{ ...styles.registerBtn, display: isShowKeyboard ? 'none' : null }} activeOpacity={0.8} onPress={handleSubmit}>
									<Text style={styles.registerBtnTitle}>Зарегистрироваться</Text>
								</TouchableOpacity>
								<Text style={{ ...styles.textIsAccount, display: isShowKeyboard ? 'none' : null }}>Уже есть аккаунт? Войти</Text> */}

								{!isShowKeyboard && <View>
									<TouchableOpacity style={styles.registerBtn} activeOpacity={0.8} onPress={handleSubmit}>
										<Text style={styles.registerBtnTitle}>Зарегистрироваться</Text>
									</TouchableOpacity>
									<Text style={styles.textIsAccount}>Уже есть аккаунт? Войти</Text>
								</View>}
							</View>
						</View>
					</KeyboardAvoidingView>
				</ ImageBackground>
				{/* <StatusBar style="auto" /> */}
			</TouchableWithoutFeedback>
		</View >
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF'
	},

	image: {
		flex: 1,
		justifyContent: 'flex-end',

	},

	registerForm: {
		backgroundColor: "#FFFFFF",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		alignItems: 'center',
		// padding: 16,
		paddingTop: 92,
		paddingBottom: 78
	},

	avatarBox: {
		position: 'relative',
		width: 120,
		height: 120,
		backgroundColor: '#F6F6F6',
		borderRadius: 25,
		marginTop: -150,
	},

	avatarBtn: {
		position: 'absolute',
		transform: [{ translateX: 107 }, { translateY: 81 }],
	},

	registerTitle: {
		color: '#212121',
		fontFamily: 'Roboto-Medium',
		fontSize: 30,
		lineHeight: 35,
		marginBottom: 32,
		marginTop: 32,
		textAlign: 'center'
	},

	inputContainer: {
		// minWidth: '100%'
		display: 'flex',
		gap: 16,
		marginBottom: 43
	},

	inputForm: {
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		height: 50,
		borderWidth: 1,
		borderRadius: 8,
		padding: 16
	},

	inputPasswordWrapper: {
		position: 'relative',
	},

	showPasswordWrapper: {
		position: 'absolute',
		top: 16,
		right: 16
	},

	showPasswordTitle: {
		color: '#1B4371'
	},

	registerBtn: {
		// minWidth: '100%',
		backgroundColor: '#FF6C00',
		paddingTop: 16,
		paddingBottom: 16,
		marginBottom: 16,
		alignItems: 'center',
		borderRadius: 100
	},

	registerBtnTitle: {
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		lineHeight: 18.75,
		color: '#FFFFFF'
	},

	textIsAccount: {
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		lineHeight: 18.75,
		color: '#1B4371',
		textAlign: 'center'
	}
});
