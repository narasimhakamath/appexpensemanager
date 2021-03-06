import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createDrawerNavigator} from "react-navigation-drawer";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {AntDesign} from '@expo/vector-icons';
import {Octicons} from '@expo/vector-icons';

import AccountsScreen from "./../screens/AccountsScreen";
import CategoriesScreen from "./../screens/CategoriesScreen";
import ReportsScreen from "./../screens/ReportsScreen";
import SettingsScreen from "./../screens/SettingsScreen";
import TransactionsScreen from "./../screens/TransactionsScreen";
import AboutScreen from "./../screens/AboutScreen";
import Header from "../components/Header";

const AccountStack = createStackNavigator({
	Accounts: {
		screen: AccountsScreen,
		navigationOptions: ({navigation}) => {
			return {
				title: "Accounts",
				headerLeft: () => <Header navigation={navigation} />
			}
		}
	}
});

const CategoriesStack = createStackNavigator({
	Categories: {
		screen: CategoriesScreen,
		navigationOptions: ({navigation}) => {
			return {
				title: "Categories",
				headerLeft: () => <Header navigation={navigation} />
			}
		}
	}
});

const SettingsStack = createStackNavigator({
	Settings: {
		screen: SettingsScreen,
		navigationOptions: ({navigation}) => {
			return {
				title: "Settings",
				headerLeft: () => <Header navigation={navigation} />
			}
		}
	}
});

const TransactionsStack = createStackNavigator({
	Transactions: {
		screen: TransactionsScreen,
		navigationOptions: ({navigation}) => {
			return {
				title: "Transactions",
				headerLeft: () => <Header navigation={navigation} />
			}
		}
	}
});

const ReportsStack = createStackNavigator({
	Reports: {
		screen: ReportsScreen,
		navigationOptions: ({navigation}) => {
			return {
				title: "Reports",
				headerLeft: () => <Header navigation={navigation} />
			}
		}
	}
})

const HomeTab = createBottomTabNavigator({
	Transactions: {
		screen: TransactionsStack,
		navigationOptions: ({navigation}) => {
			return {
				headerLeft: () => <Header navigation={navigation} />,
				tabBarIcon: () => <AntDesign name="copy1" size={24} color="black" />
			}
		}
	},
	Reports: {
		screen: ReportsStack,
		navigationOptions: ({navigation}) => {
			return {
				headerLeft: () => <Header navigation={navigation} />,
				tabBarIcon: () => <Octicons name="graph" size={24} color="black" />
			}
		}
	}
}, {
	tabBarOptions: {
		showLabel: false,
		activeBackgroundColor: "#ecf0f1",
		keyboardHidesTabBar: true
	}
});

const AboutStack = createStackNavigator({
	About: {
		screen: AboutScreen,
		navigationOptions: ({navigation}) => {
			return {
				title: "About",
				headerLeft: () => <Header navigation={navigation} />
			}
		}
	}
});

const mainDrawer = createDrawerNavigator({
	Transactions: {
		screen: HomeTab,
	},
	Accounts: {
		screen: AccountStack,
	},
	Categories: {
		screen: CategoriesStack,
	},
	Settings: {
		screen: SettingsStack,
	},
	About: {
		screen: AboutStack
	}
});




export default createAppContainer(mainDrawer);