import React from 'react';
import styled from 'styled-components';
import { Animated, TouchableOpacity, Dimensions, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuItem from './MenuItem';
import { connect } from 'react-redux';

const screenWidth = Dimensions.get('window').width;
var cardWidth = screenWidth;
if (screenWidth > 500) cardWidth = 500;

function mapStateToProps(state) {
	return { action: state.action };
}

function mapDispatchToProps(dispatch) {
	return {
		closeMenu: () =>
			dispatch({
				type: 'CLOSE_MENU',
			}),
	};
}

const screenHeight = Dimensions.get('window').height;

class Menu extends React.Component {
	state = {
		top: new Animated.Value(screenHeight),
	};

	componentDidMount() {
		this.toggleMenu();
	}

	componentDidUpdate() {
		this.toggleMenu();
	}

	toggleMenu = () => {
		if (this.props.action == 'openMenu') {
			Animated.spring(this.state.top, {
				toValue: 54,
				useNativeDriver: false,
			}).start();
		}

		if (this.props.action == 'closeMenu') {
			Animated.timing(this.state.top, {
				toValue: screenHeight,
				duration: 200,
				easing: Easing.in(),
				useNativeDriver: false,
			}).start();
		}
	};

	render() {
		return (
			<AnimatedContainer style={{ top: this.state.top }}>
				<Cover>
					<Image source={require('../assets/background4.jpg')} />
					<Title>Falah Filano</Title>
					<Subtitle>UIUX Designer</Subtitle>
				</Cover>
				<TouchableOpacity
					onPress={this.props.closeMenu}
					style={{
						position: 'absolute',
						top: 120,
						left: '50%',
						marginLeft: -22,
						zIndex: 1,
					}}
				>
					<CloseView>
						<Ionicons name="ios-close" size={44} color="#546bfb" />
					</CloseView>
				</TouchableOpacity>
				<Content>
					{Items.map((item, index) => (
						<MenuItem
							key={index}
							Icon={item.Icon}
							Title={item.Title}
							Text={item.Text}
						/>
					))}
				</Content>
			</AnimatedContainer>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const Container = styled.View`
	position: absolute;
	background: white;
	width: ${cardWidth};
	align-self: center;
	height: 100%;
	z-index: 100;
	border-radius: 10px;
	overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
	height: 142px;
	background: black;
	justify-content: center;
	align-items: center;
`;

const Image = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
`;

const Title = styled.Text`
	color: white;
	font-size: 24px;
	font-weight: 600;
`;

const Subtitle = styled.Text`
	color: rgba(255, 255, 255, 0.6);
	margin-top: 8px;
	font-size: 13px;
	font-weight: 500;
`;

const CloseView = styled.View`
	width: 44px;
	height: 44px;
	border-radius: 22px;
	background: white;
	justify-content: center;
	align-items: center;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Content = styled.View`
	height: ${screenHeight};
	background: #f0f3f5;
	padding: 50px;
`;

const Items = [
	{
		Icon: 'ios-settings',
		Title: 'Account',
		Text: 'Settings',
	},
	{
		Icon: 'ios-card',
		Title: 'Billing',
		Text: 'Payment',
	},
	{
		Icon: 'ios-compass',
		Title: 'Learn React',
		Text: 'Start Course',
	},
	{
		Icon: 'ios-exit',
		Title: 'Logout',
		Text: 'See you soon!',
	},
];
