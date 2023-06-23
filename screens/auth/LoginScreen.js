// import { StatusBar } from 'expo-status-bar';
import { useState, useCallback, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, View, Platform, TouchableOpacity, Dimensions } from 'react-native';
import BackgroundImage from '../../assets/images/photo-bg.png';

const loginState = {
	email: '',
	password: ''
}

export default function LoginScreen({ navigation }) {
	const [state, setState] = useState(loginState);
	const [isFocusedEmail, setIsFocusedEmail] = useState(false);
	const [isFocusedPassword, setIsFocusedPassword] = useState(false);
	const [isShowPassword, setIsShowPassword] = useState(true);

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
		setState(loginState);
	};


	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback
				// onPress={Keyboard.dismiss}
				onPress={keyboardHide}
			>
				<ImageBackground source={BackgroundImage} style={styles.image}>
					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding" : null}
					>
						<View style={{
							...styles.loginForm,
							paddingBottom: !isShowKeyboard ? 144 : 0
						}}>
							{/* Dimensions */}
							<View style={{ width: dimensions }}>
								<Text style={styles.loginTitle}>Войти</Text>
								<View style={styles.inputContainer}>
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

								{/* <TouchableOpacity style={{ ...styles.loginBtn, display: isShowKeyboard ? 'none' : null }} activeOpacity={0.8} onPress={handleSubmit}>
									<Text style={styles.loginBtnTitle}>Зарегистрироваться</Text>
								</TouchableOpacity>
								<Text style={{ ...styles.textIsAccount, display: isShowKeyboard ? 'none' : null }}>Уже есть аккаунт? Войти</Text> */}

								{!isShowKeyboard && <View>
									<TouchableOpacity style={styles.loginBtn} activeOpacity={0.8} onPress={handleSubmit}>
										<Text style={styles.loginBtnTitle}>Войти</Text>
									</TouchableOpacity>
									<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Registration')}>
										<Text style={styles.textIsAccount}>Нет аккаунта? Зарегистрироваться</Text>
									</TouchableOpacity>
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

	loginForm: {
		backgroundColor: "#FFFFFF",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		alignItems: 'center',
		paddingTop: 32,
		paddingBottom: 78
	},

	loginTitle: {
		color: '#212121',
		fontFamily: 'Roboto-Medium',
		fontSize: 30,
		lineHeight: 35,
		marginBottom: 32,
		textAlign: 'center'
	},

	inputContainer: {
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

	loginBtn: {
		backgroundColor: '#FF6C00',
		paddingTop: 16,
		paddingBottom: 16,
		marginBottom: 16,
		alignItems: 'center',
		borderRadius: 100
	},

	loginBtnTitle: {
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
