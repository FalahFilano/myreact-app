import React from 'react';
import styled from 'styled-components';
import Project from '../components/Project';
import { PanResponder, Animated } from 'react-native';

class ProjectsScreen extends React.Component {
	static navigationOptions = {
		title: 'Projects',
		headerShown: false,
	};

	state = {
		pan: new Animated.ValueXY(),
		scale: new Animated.Value(0.9),
		translateY: new Animated.Value(44),
	};

	componentWillMount() {
		this._panResponder = PanResponder.create({
			onPanResponderGrant: () => {
				Animated.spring(this.state.scale, {
					toValue: 1,
					useNativeDriver: false,
				}).start();
				Animated.spring(this.state.translateY, {
					toValue: 0,
					useNativeDriver: false,
				}).start();
			},

			onMoveShouldSetPanResponder: () => true,
			onPanResponderMove: Animated.event([
				null,
				{ dx: this.state.pan.x, dy: this.state.pan.y },
			]),

			onPanResponderRelease: () => {
				const positionY = this.state.pan.y.__getValue();
				console.log(positionY);
				if (positionY > 250) {
					Animated.timing(this.state.pan, {
						toValue: { x: this.state.pan.x, y: 1000 },
						useNativeDriver: false,
					}).start();
				} else {
					Animated.spring(this.state.pan, {
						toValue: { x: 0, y: 0 },
						useNativeDriver: false,
					}).start();
					Animated.spring(this.state.scale, {
						toValue: 0.9,
						useNativeDriver: false,
					}).start();
					Animated.spring(this.state.translateY, {
						toValue: 44,
						useNativeDriver: false,
					}).start();
				}
			},
		});
	}

	render() {
		return (
			<Container>
				<Animated.View
					style={{
						transform: [
							{ translateX: this.state.pan.x },
							{ translateY: this.state.pan.y },
						],
					}}
					{...this._panResponder.panHandlers}
				>
					<Project
						title={ProjectArray[0].title}
						image={ProjectArray[0].image}
						author={ProjectArray[0].author}
						text={ProjectArray[0].text}
					/>
				</Animated.View>
				<Animated.View
					style={{
						position: 'absolute',
						top: 0,
						zIndex: -1,
						width: '100%',
						height: '100%',
						justifyContent: 'center',
						alignItems: 'center',
						transform: [
							{ scale: this.state.scale },
							{ translateY: this.state.translateY },
						],
					}}
				>
					<Project
						title={ProjectArray[1].title}
						image={ProjectArray[1].image}
						author={ProjectArray[1].author}
						text={ProjectArray[1].text}
					/>
				</Animated.View>
			</Container>
		);
	}
}
export default ProjectsScreen;

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background: #f0f3f5;
`;

const ProjectArray = [
	{
		title: 'React Native Gestures',
		image: require('../assets/background5.jpg'),
		author: 'Falah Nurli Filano',
		text:
			'This is an placeholder text. usually it goes with Lorem Ipsum or other generated text for text filled space.',
	},
	{
		title: 'Advanced Gestures',
		image: require('../assets/background12.jpg'),
		author: 'Falah Nurli Filano',
		text:
			'This is an placeholder text. usually it goes with Lorem Ipsum or other generated text for text filled space.',
	},
	{
		title: 'Advanced Animation and Transition',
		image: require('../assets/background7.jpg'),
		author: 'Falah Nurli Filano',
		text:
			'This is an placeholder text. usually it goes with Lorem Ipsum or other generated text for text filled space.',
	},
];
