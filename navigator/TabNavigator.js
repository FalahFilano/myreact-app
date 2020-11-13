import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';
import { Ionicons } from '@expo/vector-icons';
import CourseScreen from '../screens/CourseScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import Menu from '../components/Menu';

const activeColor = '#4775f2';
const inactiveColor = '#b8bece';

const HomeStack = createStackNavigator(
	{
		Home: HomeScreen,
		Section: SectionScreen,
		Menu: Menu,
	},
	{
		mode: 'modal',
	}
);

HomeStack.navigationOptions = ({ navigation }) => {
	var tabBarVisible = true;
	const routeName = navigation.state.routes[navigation.state.index].routeName;

	if (routeName == 'Section') tabBarVisible = false;

	return {
		tabBarVisible,
		tabBarLabel: 'Home',
		tabBarIcon: ({ focused }) => (
			<Ionicons
				name="ios-home"
				size={26}
				color={focused ? activeColor : inactiveColor}
			/>
		),
	};
};

const CoursesStack = createStackNavigator({
	Courses: CourseScreen,
});

CoursesStack.navigationOptions = ({ navigation }) => {
	var tabBarVisible = true;

	return {
		tabBarVisible,
		tabBarLabel: 'Courses',
		tabBarIcon: ({ focused }) => (
			<Ionicons
				name="ios-albums"
				size={26}
				color={focused ? activeColor : inactiveColor}
			/>
		),
	};
};

const ProjectStack = createStackNavigator({
	Project: ProjectsScreen,
});

ProjectStack.navigationOptions = {
	tabBarLabel: 'Projects',
	tabBarIcon: ({ focused }) => (
		<Ionicons
			name="ios-folder"
			size={26}
			color={focused ? activeColor : inactiveColor}
		/>
	),
};

const TabNavigator = createBottomTabNavigator({
	ProjectStack,
	HomeStack,
	CoursesStack,
});

export default TabNavigator;
