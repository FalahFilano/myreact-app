import React from 'react';
import {
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	Animated,
	Easing,
	StatusBar,
} from 'react-native';
import styled from 'styled-components';
import Card from '../components/Card';
import { NotificationIcon } from '../components/Icons';
import Logo from '../components/Logo';
import Course from '../components/Course';
import Menu from '../components/Menu';
import { connect } from 'react-redux';
import Avatar from '../components/Avatar';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const CardQuery = gql`
	{
		cardsCollection {
			items {
				title
				subtitle
				image {
					title
					description
					contentType
					fileName
					size
					url
					width
					height
				}
				subtitle
				caption
				logo {
					title
					description
					contentType
					fileName
					size
					url
					width
					height
				}
				content
			}
		}
	}
`;

function mapStateToProps(state) {
	console.log(state.name);
	return { action: state.action, name: state.name };
}

function mapDispatchToProps(dispatch) {
	return {
		openMenu: () =>
			dispatch({
				type: 'OPEN_MENU',
			}),
	};
}

class HomeScreen extends React.Component {
	static navigationOptions = {
		headerShown: false,
	};

	state = {
		scale: new Animated.Value(1),
		opacity: new Animated.Value(1),
	};

	componentDidMount() {
		StatusBar.setBarStyle('dark-content', true);
	}

	componentDidUpdate() {
		this.toggleMenu();
	}

	toggleMenu = () => {
		if (this.props.action == 'openMenu') {
			Animated.timing(this.state.scale, {
				toValue: 0.9,
				duration: 300,
				useNativeDriver: false,
				easing: Easing.in(),
			}).start();
			Animated.spring(this.state.opacity, {
				toValue: 0.5,
				useNativeDriver: false,
			}).start();

			StatusBar.setBarStyle('light-content', true);
		}
		if (this.props.action == 'closeMenu') {
			Animated.timing(this.state.scale, {
				toValue: 1,
				duration: 300,
				easing: Easing.in(),
				useNativeDriver: false,
			}).start();
			Animated.spring(this.state.opacity, {
				toValue: 1,
				useNativeDriver: false,
			}).start();

			StatusBar.setBarStyle('dark-content', true);
		}
	};

	render() {
		return (
			<RootView>
				<Menu />
				<AnimatedContainer
					style={{
						transform: [{ scale: this.state.scale }],
						opacity: this.state.opacity,
					}}
				>
					<SafeAreaView>
						<ScrollView showsVerticalScrollIndicator={false}>
							<TitleBar>
								<TouchableOpacity
									onPress={this.props.openMenu}
									style={{ position: 'absolute', top: 0, left: 0 }}
								>
									<Avatar />
								</TouchableOpacity>
								<Title>Welcome back,</Title>
								<Name>{this.props.name}</Name>
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
							<Query query={CardQuery}>
								{({ loading, error, data }) => {
									if (loading) return <Message>Loading...</Message>;
									if (error) return <Message>Error...</Message>;
									return (
										<ScrollView
											horizontal={true}
											style={{ paddingBottom: 30 }}
											showsHorizontalScrollIndicator={false}
										>
											{data.cardsCollection.items.map((card, index) => (
												<TouchableOpacity
													key={index}
													onPress={() => {
														this.props.navigation.push('Section', {
															section: card,
														});
													}}
												>
													<Card
														Title={card.title}
														Image={card.image}
														Caption={card.caption}
														Logo={card.logo}
														Subtitle={card.subtitle}
														Content={card.content}
													/>
												</TouchableOpacity>
											))}
										</ScrollView>
									);
								}}
							</Query>
							<Subtitle>Related Courses</Subtitle>
							{CourseArray.map((course, index) => (
								<Course
									key={index}
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
				</AnimatedContainer>
			</RootView>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const RootView = styled.View`
	background: black;
	flex: 1;
`;

const Container = styled.View`
	background: #f0f3f5;
	flex: 1;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const TitleBar = styled.View`
	width: 100%;
	margin-top: 50px;
	padding-left: 80px;
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

const Message = styled.Text`
	margin: 20px;
	color: #b8bece;
	font-size: 15px;
	font-weight: 500;
`;

const LogoArray = [
	{
		Image: require('../assets/logo-framerx.png'),
		Text: 'Framer X',
	},
	{
		Image: require('../assets/logo-figma.png'),
		Text: 'Figma',
	},
	{
		Image: require('../assets/logo-studio.png'),
		Text: 'Studio',
	},
	{
		Image: require('../assets/logo-react.png'),
		Text: 'React',
	},
	{
		Image: require('../assets/logo-swift.png'),
		Text: 'Swift',
	},
	{
		Image: require('../assets/logo-sketch.png'),
		Text: 'Sketch',
	},
];

const CardArray = [
	{
		Title: 'React Native for Designer',
		Image: require('../assets/background11.jpg'),
		Caption: 'React Native',
		Logo: require('../assets/logo-react.png'),
		Subtitle: '1 of 12 Sections',
	},
	{
		Title: 'Styled Components',
		Image: require('../assets/background12.jpg'),
		Caption: 'React Native',
		Logo: require('../assets/logo-react.png'),
		Subtitle: '4 of 12 Sections',
	},
	{
		Title: 'Props and Icons',
		Image: require('../assets/background13.jpg'),
		Caption: 'React Native',
		Logo: require('../assets/logo-react.png'),
		Subtitle: '5 of 12 Sections',
	},
	{
		Title: 'Static Data and Loop',
		Image: require('../assets/background14.jpg'),
		Caption: 'React Native',
		Logo: require('../assets/logo-react.png'),
		Subtitle: '7 of 12 Sections',
	},
];

const CourseArray = [
	{
		Title: 'Prototype in InVision Studio',
		Image: require('../assets/background1.jpg'),
		Logo: require('../assets/logo-studio.png'),
		Caption: '10 Sections',
		Avatar: require('../assets/avatar.jpg'),
		Subtitle: 'Design a Powerful prototype using InVision Studio',
		Name: 'by Falah Filano',
	},
	{
		Title: 'Creating Mockup in Sketch',
		Image: require('../assets/background6.jpg'),
		Logo: require('../assets/logo-sketch.png'),
		Caption: '20 Sections',
		Avatar: require('../assets/avatar.jpg'),
		Subtitle: 'Creating Mockup with Sketch',
		Name: 'by Falah Filano',
	},
	{
		Title: 'React Native for Designer',
		Image: require('../assets/background8.jpg'),
		Logo: require('../assets/logo-react.png'),
		Caption: '10 Sections',
		Avatar: require('../assets/avatar.jpg'),
		Subtitle: 'Learn to Design and Code with React Native',
		Name: 'by Falah Filano',
	},
];
