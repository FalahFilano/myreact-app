import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import Card from './components/Card';
import { Ionicons } from '@expo/vector-icons';
import { NotificationIcon } from './components/Icons';
import Logo from './components/Logo';
import Course from './components/Course';

export default function App() {
	return (
		<Container>
			<SafeAreaView>
				<ScrollView>
					<StatusBar style="auto" />
					<TitleBar>
						<Avatar source={require('./assets/avatar.jpg')} />
						<Title>Welcome back,</Title>
						<Name>Filano</Name>
						<NotificationIcon
							style={{ position: 'absolute', right: 20, top: 5 }}
						/>
					</TitleBar>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						style={{
							flexDirection: 'row',
							padding: 20,
							paddingLeft: 12,
							paddingTop: 30,
						}}
					>
						{LogoArray.map((logo, index) => (
							<Logo key={index} Image={logo.Image} Text={logo.Text} />
						))}
					</ScrollView>
					<Subtitle>Continue Learning</Subtitle>
					<ScrollView
						horizontal={true}
						style={{ paddingBottom: 30 }}
						showsHorizontalScrollIndicator={false}
					>
						{CardArray.map((card, index) => (
							<Card
								key={index}
								Title={card.Title}
								Image={card.Image}
								Caption={card.Caption}
								Logo={card.Logo}
								Subtitle={card.Subtitle}
							/>
						))}
					</ScrollView>
					<Subtitle>Related Courses</Subtitle>
					{CourseArray.map((course, index) => (
						<Course
							Title={course.Title}
							Image={course.Image}
							Logo={course.Logo}
							Caption={course.Caption}
							Avatar={course.Avatar}
							Subtitle={course.Subtitle}
							Name={course.Name}
						/>
					))}
				</ScrollView>
			</SafeAreaView>
		</Container>
	);
}

const Container = styled.View`
	background: #f0f3f5;
	flex: 1;
`;

const TitleBar = styled.View`
	width: 100%;
	margin-top: 50px;
	padding-left: 80px;
`;

const Avatar = styled.Image`
	width: 44px;
	height: 44px;
	background: black;
	border-radius: 22px;
	margin-left: 20px;
	position: absolute;
	top: 0;
	left: 0;
`;

const Title = styled.Text`
	font-size: 16px;
	color: #b8bece;
	font-weight: 500;
`;

const Name = styled.Text`
	font-size: 20px;
	color: #3c4560;
	font-weight: bold;
`;

const Subtitle = styled.Text`
	color: #b8bece;
	font-weight: 600;
	font-size: 15px;
	margin-left: 20px;
	margin-top: 20px;
	text-transform: uppercase;
`;

const LogoArray = [
	{
		Image: require('./assets/logo-framerx.png'),
		Text: 'Framer X',
	},
	{
		Image: require('./assets/logo-figma.png'),
		Text: 'Figma',
	},
	{
		Image: require('./assets/logo-studio.png'),
		Text: 'Studio',
	},
	{
		Image: require('./assets/logo-react.png'),
		Text: 'React',
	},
	{
		Image: require('./assets/logo-swift.png'),
		Text: 'Swift',
	},
	{
		Image: require('./assets/logo-sketch.png'),
		Text: 'Sketch',
	},
];

const CardArray = [
	{
		Title: 'React Native for Designer',
		Image: require('./assets/background11.jpg'),
		Caption: 'React Native',
		Logo: require('./assets/logo-react.png'),
		Subtitle: '1 of 12 Sections',
	},
	{
		Title: 'Styled Components',
		Image: require('./assets/background12.jpg'),
		Caption: 'React Native',
		Logo: require('./assets/logo-react.png'),
		Subtitle: '4 of 12 Sections',
	},
	{
		Title: 'Props and Icons',
		Image: require('./assets/background13.jpg'),
		Caption: 'React Native',
		Logo: require('./assets/logo-react.png'),
		Subtitle: '5 of 12 Sections',
	},
	{
		Title: 'Static Data and Loop',
		Image: require('./assets/background14.jpg'),
		Caption: 'React Native',
		Logo: require('./assets/logo-react.png'),
		Subtitle: '7 of 12 Sections',
	},
];

const CourseArray = [
	{
		Title: 'Prototype in InVision Studio',
		Image: require('./assets/background1.jpg'),
		Logo: require('./assets/logo-studio.png'),
		Caption: '10 Sections',
		Avatar: require('./assets/avatar.jpg'),
		Subtitle: 'Design a Powerful prototype using InVision Studio',
		Name: 'by Falah Filano',
	},
	{
		Title: 'Creating Mockup in Sketch',
		Image: require('./assets/background6.jpg'),
		Logo: require('./assets/logo-sketch.png'),
		Caption: '20 Sections',
		Avatar: require('./assets/avatar.jpg'),
		Subtitle: 'Creating Mockup with Sketch',
		Name: 'by Falah Filano',
	},
	{
		Title: 'React Native for Designer',
		Image: require('./assets/background8.jpg'),
		Logo: require('./assets/logo-react.png'),
		Caption: '10 Sections',
		Avatar: require('./assets/avatar.jpg'),
		Subtitle: 'Learn to Design and Code with React Native',
		Name: 'by Falah Filano',
	},
];
