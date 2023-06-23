import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Feather, EvilIcons, AntDesign } from '@expo/vector-icons';

export default function CreatePostsScreen() {
	return (
		<View style={styles.container}>
			<Camera style={styles.camera}>
				<View style={styles.cameraWrapper}>
					<Image style={styles.cameraPhoto} source={require('../../assets/images/camera-block.png')} />
					<TouchableOpacity style={styles.cameraBtn} onPress={() => { }}>
						<Feather
							style={styles.cameraIcon}
							name="camera"
							size={24}
							color="#BDBDBD"
						/>
					</TouchableOpacity>
				</View>
			</Camera>
			<Text style={styles.cameraText}>Загрузитe фото</Text>

			<View style={styles.inputContainer}>
				<TextInput style={styles.cameraInput}
					placeholder="Название..."
					placeholderTextColor={'#BDBDBD'}
					cursorColor={'#212121'}
					// value={}
					onFocus={() => { }}
					onBlur={() => { }}
					onChangeText={() => { }}
				/>

				<View style={styles.cameraLocationWrapper}>
					<TextInput style={{ ...styles.cameraInput, paddingLeft: 28 }}
						placeholder="Местность..."
						placeholderTextColor={'#BDBDBD'}
						cursorColor={'#212121'}
						// value={ }
						onFocus={() => { }}
						onBlur={() => { }}
						onChangeText={() => { }}
					/>
					<TouchableOpacity style={styles.cameraLocation}
						activeOpacity={0.8}
						onPress={() => { }}>
						{/* <EvilIcons name="location" size={24} color="#BDBDBD" /> */}
						<AntDesign name="enviromento" size={24} color="#BDBDBD" />
					</TouchableOpacity>
				</View>
			</View>

			<TouchableOpacity style={styles.publishBtn} activeOpacity={0.8} onPress={() => { }}>
				<Text style={styles.publishBtnTitle}>Опубликовать</Text>
			</TouchableOpacity>

			<View style={{
				alignItems: 'center',
				marginTop: 'auto'
			}}>
				<TouchableOpacity style={styles.deleteBtn} activeOpacity={0.8} onPress={() => { }}>
					<Feather name="trash-2" size={24} color="#BDBDBD" />
				</TouchableOpacity>

			</View>


		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 32,
		paddingLeft: 16,
		paddingRight: 16,
		backgroundColor: '#FFFFFF',
		// justifyContent: 'center',
		// alignItems: 'center',
		borderTopWidth: 1,
		borderTopColor: "#E8E8E8",
		borderBottomWidth: 1,
		borderBottomColor: "#E8E8E8",
	},

	cameraPhoto: {
		width: '100%',
		// height: 240,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#E8E8E8',
		overflow: 'hidden',
		marginBottom: 8
	},

	cameraBtn: {
		width: 60,
		height: 60,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},

	cameraText: {
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		lineHeight: 19,
		color: '#BDBDBD',
		marginBottom: 32
	},

	cameraWrapper: {
		marginBottom: 32
	},

	cameraIcon: {
		fill: '#BDBDBD',
	},

	inputContainer: {
		gap: 16,
		marginBottom: 32
	},

	cameraInput: {
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		lineHeight: 19,
		height: 50,
		borderBottomWidth: 1,
		borderBottomColor: '#E8E8E8',
	},

	cameraLocationWrapper: {
		position: 'relative',
	},

	cameraLocation: {
		position: 'absolute',
		top: 13,
		left: 0,
	},

	publishBtn: {
		backgroundColor: '#F6F6F6',
		paddingTop: 16,
		paddingBottom: 16,
		// marginBottom: 16,
		alignItems: 'center',
		borderRadius: 100
	},

	publishBtnTitle: {
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		lineHeight: 19,
		color: '#BDBDBD',
	},

	deleteBtn: {
		minWidth: 70,
		// height: 40,
		backgroundColor: '#F6F6F6',
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 8,
		paddingBottom: 8
	}
})