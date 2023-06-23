import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RegistrationScreen from './screens/auth/RegistrationScreen';
import LoginScreen from './screens/auth/LoginScreen';
import HomeScreen from './screens/mainScreen/HomeScreen';
import PostsScreen from './screens/mainScreen/PostsScreen';
import CreatePostsScreen from './screens/mainScreen/CreatePostsScreen';
import ProfileScreen from './screens/mainScreen/ProfileScreen';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5, SimpleLineIcons, AntDesign, Feather, Ionicons } from "@expo/vector-icons";

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
	if (!isAuth) {
		return (
			<MainStack.Navigator

			// screenOptions={{ headerMode: 'screen' }}
			>
				<MainStack.Screen
					options={{ headerShown: false }}
					name='Registration'
					component={RegistrationScreen}
				/>
				<MainStack.Screen
					options={{ headerShown: false }}
					name='Login'
					component={LoginScreen}
				/>
			</MainStack.Navigator>
		)
	} else {
		return (
			<MainTab.Navigator
				initialRouteName="Posts"
				screenOptions={{
					"tabBarShowLabel": false,
					"tabBarStyle": [
						{
							"display": "flex"
						},
						null
					]
				}
				}
			// tabBarOptions={{ showLabel: false }}
			>
				{/* <MainTab.Screen
					options={{
						headerShown: false,
						tabBarShowLabel: false
					}}
					name='Home'
					component={HomeScreen}
				/> */}

				<MainTab.Screen
					options={{
						title: 'Публикации',
						headerTitleAlign: 'center',
						headerTitleStyle: {
							fontFamily: "Roboto-Medium",
							fontSize: 18,
							lineHeight: 22,
						},

						headerRight: () => (
							<TouchableOpacity
								style={{ paddingRight: 16 }}
								activeOpacity={0.8}
								onPress={() => { }}>
								<Feather
									name="log-out"
									size={24}
									color="#BDBDBD"
								/>
							</TouchableOpacity>
						),

						tabBarIcon: ({ focused, color, size }) => (
							// <Image source={require('./assets/images/toolbar/grid1.png')}
							// 	style={{ width: 24, height: 24 }} />
							// <Image source={require('./assets/images/toolbar/grid.png')}
							// 	style={{ width: 40, height: 40 }} />
							<SimpleLineIcons name="grid" size={size} color={color} />
						),
					}}
					name='Posts'
					component={PostsScreen}
				/>

				<MainTab.Screen
					options={{
						title: 'Создать публикацию',
						headerTitleAlign: 'center',
						tabBarStyle: { display: "none" },
						headerLeft: () => (
							<TouchableOpacity
								style={{ paddingLeft: 16 }}
								activeOpacity={0.8}
								onPress={() => { }}>
								<AntDesign name="arrowleft" size={24} color="#212121" />
							</TouchableOpacity>
						),

						tabBarIcon: ({ focused, color, size }) => (
							// <TouchableOpacity style={styles.addBtn}
							// 	activeOpacity={0.8}
							// 	onPress={() => { }}>
							// 	<AntDesign name="plus" size={size} color={"#FFFFFF"} />
							// </TouchableOpacity>

							<AntDesign name="plus" size={size} color={color} />

						),
					}}
					name='CreatePosts'
					component={CreatePostsScreen}
				/>

				<MainTab.Screen
					options={{
						headerShown: false,
						tabBarIcon: ({ focused, color, size }) => (
							// <Image source={require('./assets/images/toolbar/user.png')}
							// 	style={{ width: 40, height: 40 }} />
							// <FontAwesome5 name="user" size={24} color="rgba(33, 33, 33, 0.8)"/>
							<FontAwesome5 name="user" size={size} color={color} />
						),
					}}
					name='Profile'
					component={ProfileScreen}
				/>
			</MainTab.Navigator>
		)
	}
};

const styles = StyleSheet.create({
	addBtn: {
		height: 40,
		minWidth: 70,
		backgroundColor: "#FF6C00",
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center"
	}
});
