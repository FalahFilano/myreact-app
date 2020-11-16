import React from 'react';
import styled from 'styled-components';
import {
	Animated,
	Dimensions,
	TouchableWithoutFeedback,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

function mapStateToProps(state) {
	return {
		action: state.action,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		openCard: () =>
			dispatch({
				type: 'OPEN_CARD',
			}),
		closeCard: () =>
			dispatch({
				type: 'CLOSE_CARD',
			}),
	};
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class Project extends React.Component {
	state = {
		cardWidth: new Animated.Value(315),
		cardHeight: new Animated.Value(420),
		titleTop: new Animated.Value(20),
		scale: new Animated.Value(0),
		isCardOpen: false,
		opacity: new Animated.Value(1),
	};

	openCard = () => {
		if (!this.props.canOpen) return;
		Animated.spring(this.state.cardWidth, {
			toValue: screenWidth,
			useNativeDriver: false,
		}).start();
		Animated.spring(this.state.cardHeight, {
			toValue: screenHeight - 80,
			useNativeDriver: false,
		}).start();
		Animated.spring(this.state.titleTop, {
			toValue: 60,
			useNativeDriver: false,
		}).start();
		Animated.spring(this.state.scale, {
			toValue: 1,
			useNativeDriver: false,
		}).start();
		Animated.timing(this.state.opacity, {
			toValue: 0,
			useNativeDriver: false,
		}).start();

		this.setState({ isCardOpen: true });

		StatusBar.setHidden(true, true);
		this.props.openCard();
	};

	closeCard = () => {
		Animated.timing(this.state.cardWidth, {
			toValue: 315,
			useNativeDriver: false,
		}).start();
		Animated.spring(this.state.cardHeight, {
			toValue: 420,
			useNativeDriver: false,
		}).start();
		Animated.spring(this.state.titleTop, {
			toValue: 20,
			useNativeDriver: false,
		}).start();
		Animated.spring(this.state.scale, {
			toValue: 0,
			useNativeDriver: false,
		}).start();
		Animated.timing(this.state.opacity, {
			toValue: 1,
			useNativeDriver: false,
		}).start();

		this.setState({ isCardOpen: false });

		StatusBar.setHidden(false, true);
		this.props.closeCard();
	};

	render() {
		return (
			<TouchableWithoutFeedback
				onPress={this.state.isCardOpen ? this.closeCard : this.openCard}
				// onPress={this.openCard}
			>
				<AnimatedContainer
					style={{ width: this.state.cardWidth, height: this.state.cardHeight }}
				>
					<Cover>
						<Image source={this.props.image} />
						<AnimatedTitle style={{ top: this.state.titleTop }}>
							{this.props.title}
						</AnimatedTitle>
						<Author>by {this.props.author}</Author>
						<TouchableOpacity
							style={{ position: 'absolute', right: 20, top: 20 }}
							onPress={this.closeCard}
						>
							<AnimatedCloseView
								style={{ transform: [{ scale: this.state.scale }] }}
							>
								<Ionicons name="ios-close" size={36} color="#546bfb" />
							</AnimatedCloseView>
						</TouchableOpacity>
					</Cover>
					<Content>
						<Text>{this.props.text}</Text>
						<Animated.View
							style={{
								opacity: this.state.opacity,
								position: 'absolute',
								bottom: 0,
								height: '50%',
								width: '100%',
							}}
						>
							<LinearGradient
								colors={[
									'rgba(255,255,255,0)',
									'rgba(255,255,255,0.75)',
									'rgba(255,255,255,255)',
								]}
								style={{
									height: '100%',
									width: '100%',
								}}
							/>
						</Animated.View>
					</Content>
				</AnimatedContainer>
			</TouchableWithoutFeedback>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);

const Container = styled.View`
	width: 315px;
	/* margin-left: 20px;
	margin-right: 20px; */
	height: 420px;
	border-radius: 14px;
	background-color: white;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
	height: 60%;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
`;

const Image = styled.Image`
	width: 100%;
	height: 100%;
`;

const Title = styled.Text`
	position: absolute;
	top: 20px;
	left: 20px;
	font-size: 24px;
	font-weight: bold;
	color: white;
	width: 65%;
`;

const AnimatedTitle = Animated.createAnimatedComponent(Title);

const Author = styled.Text`
	position: absolute;
	bottom: 20px;
	left: 20px;
	/* text-transform: uppercase; */
	color: rgba(255, 255, 255, 0.9);
	font-size: 15px;
	font-weight: 700;
`;

const CloseView = styled.View`
	/* position: absolute;
	top: 20px;
	right: 20px; */
	width: 36px;
	height: 36px;
	border-radius: 22px;
	background: white;
	justify-content: center;
	align-items: center;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const AnimatedCloseView = Animated.createAnimatedComponent(CloseView);

const Content = styled.View`
	height: 40%;
	border-bottom-left-radius: 14px;
	border-bottom-right-radius: 14px;
	overflow: hidden;
	/* align-self: baseline; */
	/* justify-content: center; */
`;
const Text = styled.Text`
	font-size: 17px;
	margin: 20px;
	line-height: 24px;
	color: #3c4560;
`;
