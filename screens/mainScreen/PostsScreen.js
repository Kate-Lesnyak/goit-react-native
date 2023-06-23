import { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import { EvilIcons } from '@expo/vector-icons';

export default function PostsScreen() {
	// const [dimensions, setDimensions] = useState(Dimensions.get("window").width - 16 * 2);

	// useEffect(() => {
	// 	const onChange = () => {
	// 		const width = Dimensions.get("window").width - 16 * 2;
	// 		setDimensions(width);
	// 	}
	// 	const subscription = Dimensions.addEventListener('change', onChange);
	// 	return () => subscription?.remove();
	// }, []);

	return (
		<View style={{
			...styles.container,
			// width: dimensions
		}}>

			<View style={styles.avatarContainer}>
				<Image style={styles.avatar} source={require('../../assets/images/avatar.png')} />
				<View style={styles.avatarInfo}>
					<Text style={styles.avatarName}> Natali Romanova</Text>
					<Text style={styles.avatarEmail}> email@example.com </Text>
				</View>
			</View>

			<View style={styles.postWrapper}>
				<View>
					<Image style={styles.postPhoto} source={require('../../assets/images/post.png')} />
					<Text style={styles.postTitle}>Лес</Text>

					<View style={styles.postInfo}>

						<View style={styles.postComment}>
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => { }}>
								<EvilIcons name="comment" size={24} color="#BDBDBD" />
							</TouchableOpacity>
							<Text style={styles.postCommentCount}>7</Text>
						</View>

						<View style={styles.postLocation}>
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => { }}>
								<EvilIcons name="location" size={24} color="#BDBDBD" />
							</TouchableOpacity>
							<Text style={styles.postLocationText}>Location region</Text>
						</View>

					</View>
				</View>


				<View>
					<Image style={styles.postPhoto} source={require('../../assets/images/post.png')} />
					<Text style={styles.postTitle}>Лес</Text>

					<View style={styles.postInfo}>

						<View style={styles.postComment}>
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => { }}>
								<EvilIcons name="comment" size={24} color="#BDBDBD" />
							</TouchableOpacity>
							<Text style={styles.postCommentCount}>7</Text>
						</View>

						<View style={styles.postLocation}>
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => { }}>
								<EvilIcons name="location" size={24} color="#BDBDBD" />
							</TouchableOpacity>
							<Text style={styles.postLocationText}>Location region</Text>
						</View>

					</View>
				</View>
			</View>



		</View >
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: '#FFFFFF',
		borderTopWidth: 1,
		borderTopColor: "#E8E8E8",
		borderBottomWidth: 1,
		borderBottomColor: "#E8E8E8",
		paddingTop: 32,
		paddingLeft: 16,
		paddingRight: 16
	},

	avatarContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		marginBottom: 32
	},

	avatar: {
		width: 60,
		height: 60,
		borderRadius: 16,
		overflow: 'hidden'
	},

	avatarName: {
		fontFamily: 'Roboto-Bold',
		fontSize: 13,
		lineHeight: 15,
		color: '#212121'
	},

	avatarEmail: {
		fontFamily: 'Roboto-Regular',
		fontSize: 11,
		lineHeight: 13,
		color: '#212121'
	},

	postWrapper: {
		display: 'flex',
		gap: 32
	},

	postInfo: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	postPhoto: {
		width: '100%',
		height: 240,
		borderRadius: 8,
		overflow: 'hidden',
		marginBottom: 8
	},

	postTitle: {
		fontFamily: 'Roboto-Medium',
		fontSize: 16,
		lineHeight: 19,
		color: '#212121',
		marginBottom: 8
	},

	postComment: {
		display: 'flex',
		flexDirection: 'row',
		gap: 6
	},

	postCommentCount: {
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		lineHeight: 19,
		color: '#BDBDBD'
	},

	postLocation: {
		display: 'flex',
		flexDirection: 'row',
		gap: 3
	},

	postLocationText: {
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		lineHeight: 19,
		color: '#212121',
		textDecorationLine: 'underline'
	},
})