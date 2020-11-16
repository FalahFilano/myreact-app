import React from 'react';
import styled from 'styled-components';
import Project from '../components/Project';
import { PanResponder, Animated } from 'react-native';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	// console.log(state.action);
	return {
		action: state.action,
	};
}

function changeIndex(index) {
	if (index + 1 > ProjectArray.length - 1) return 0;
	return index + 1;
}

class ProjectsScreen extends React.Component {
	static navigationOptions = {
		title: 'Projects',
		headerShown: false,
	};

	state = {
		pan: new Animated.ValueXY(),
		scale: new Animated.Value(0.9),
		translateY: new Animated.Value(44),
		thirdScale: new Animated.Value(0.8),
		thirdTranslateY: new Animated.Value(-10),
		index: 0,
		opacity: new Animated.Value(0),
	};

	componentWillMount() {
		this._panResponder = PanResponder.create({
			onMoveShouldSetPanResponder: (gestureState) => {
				if (gestureState.dx == 0 && gestureState.dy == 0) return false;
				else if (this.props.action == 'closeCard') return true;
				else false;
			},

			onPanResponderGrant: () => {
				Animated.spring(this.state.scale, {
					toValue: 1,
					useNativeDriver: false,
				}).start();
				Animated.spring(this.state.translateY, {
					toValue: 0,
					useNativeDriver: false,
				}).start();

				Animated.spring(this.state.thirdScale, {
					toValue: 0.9,
					useNativeDriver: false,
				}).start();
				Animated.spring(this.state.thirdTranslateY, {
					toValue: 44,
					useNativeDriver: false,
				}).start();
				Animated.timing(this.state.opacity, {
					toValue: 1,
					useNativeDriver: false,
				}).start();
			},

			onPanResponderMove: Animated.event([
				null,
				{ dx: this.state.pan.x, dy: this.state.pan.y },
			]),

			onPanResponderRelease: () => {
				const positionY = this.state.pan.y.__getValue();
				const positionX = this.state.pan.x.__getValue();
				console.log(positionY);

				Animated.timing(this.state.opacity, {
					toValue: 0,
					useNativeDriver: false,
				}).start();

				if (positionY > 150 || positionX > 150) {
					Animated.timing(this.state.pan, {
						toValue: { x: 0, y: 800 },
						useNativeDriver: false,
					}).start(() => {
						this.setState({ index: changeIndex(this.state.index) });
						this.state.pan.setValue({ x: 0, y: 0 });
						this.state.scale.setValue(0.9);
						this.state.translateY.setValue(44);
						this.state.thirdScale.setValue(0.8);
						this.state.thirdTranslateY.setValue(-10);
					});
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

					Animated.spring(this.state.thirdScale, {
						toValue: 0.8,
						useNativeDriver: false,
					}).start();
					Animated.spring(this.state.thirdTranslateY, {
						toValue: -10,
						useNativeDriver: false,
					}).start();
				}
			},
		});
	}

	render() {
		return (
			<Container>
				<AnimatedMask style={{ opacity: this.state.opacity }} />
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
						title={ProjectArray[this.state.index].title}
						image={ProjectArray[this.state.index].image}
						author={ProjectArray[this.state.index].author}
						text={ProjectArray[this.state.index].text}
						canOpen={true}
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
						title={ProjectArray[changeIndex(this.state.index)].title}
						image={ProjectArray[changeIndex(this.state.index)].image}
						author={ProjectArray[changeIndex(this.state.index)].author}
						text={ProjectArray[changeIndex(this.state.index)].text}
					/>
				</Animated.View>
				<Animated.View
					style={{
						position: 'absolute',
						top: 0,
						width: '100%',
						height: '100%',
						zIndex: -2,
						justifyContent: 'center',
						alignItems: 'center',
						transform: [
							{ scale: this.state.thirdScale },
							{ translateY: this.state.thirdTranslateY },
						],
					}}
				>
					<Project
						title={ProjectArray[changeIndex(this.state.index + 1)].title}
						image={ProjectArray[changeIndex(this.state.index + 1)].image}
						author={ProjectArray[changeIndex(this.state.index + 1)].author}
						text={ProjectArray[changeIndex(this.state.index + 1)].text}
					/>
				</Animated.View>
			</Container>
		);
	}
}
export default connect(mapStateToProps)(ProjectsScreen);

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background: #f0f3f5;
`;

const Mask = styled.View`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -3;
	background: rgba(0, 0, 0, 0.25);
`;

const AnimatedMask = Animated.createAnimatedComponent(Mask);

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
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
	},
	{
		title: 'Animation and Transition',
		image: require('../assets/background4.jpg'),
		author: 'Falah Nurli Filano',
		text:
			'Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a first-century BC text by the Roman statesman. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a first-century BC text by the Roman statesman. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a first-century BC text by the Roman statesman. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a first-century BC text by the Roman statesman.',
	},
];
