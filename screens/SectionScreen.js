import React from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, StatusBar } from 'react-native';

class SectionScreen extends React.Component {
	static navigationOptions = {
		title: 'Section',
		headerShown: false,
	};

	componentDidMount() {
		StatusBar.setBarStyle('light-content', true);
	}

	componentWillUnmount() {
		StatusBar.setBarStyle('dark-content', true);
	}

	render() {
		const { navigation } = this.props;
		const section = navigation.getParam('section');
		console.log(section);

		return (
			<Container>
				<StatusBar hidden />
				<Cover>
					<Image source={section.image} />
					<HorizontalWrapper>
						<Logo source={section.logo} />
						<Subtitle>{section.subtitle}</Subtitle>
						<TouchableOpacity
							onPress={() => {
								this.props.navigation.goBack();
							}}
							style={{ position: 'absolute', right: 20 }}
						>
							<CloseView>
								<Ionicons name="ios-close" size={36} color="#546bfb" />
							</CloseView>
						</TouchableOpacity>
					</HorizontalWrapper>
					<Title>{section.title}</Title>
					<Caption>{section.caption}</Caption>
				</Cover>
			</Container>
		);
	}
}
export default SectionScreen;

const Container = styled.View`
	flex: 1;
`;

const Cover = styled.View`
	/* background: black; */
	height: 45%;
`;

const Image = styled.Image`
	height: 100%;
	width: 100%;
	position: absolute;
`;

const HorizontalWrapper = styled.View`
	flex-direction: row;
	margin-top: 50px;
	margin-left: 20px;
	align-items: center;
`;

const Logo = styled.Image`
	width: 24px;
	height: 24px;
`;

const Subtitle = styled.Text`
	color: rgba(255, 255, 255, 0.75);
	font-size: 16px;
	font-weight: bold;
	margin-left: 8px;
	text-transform: uppercase;
`;

const CloseView = styled.View`
	width: 36px;
	height: 36px;
	border-radius: 22px;
	background: white;
	justify-content: center;
	align-items: center;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Title = styled.Text`
	color: white;
	font-size: 36px;
	font-weight: bold;
	width: 70%;
	margin-top: 20px;
	margin-left: 20px;
`;

const Caption = styled.Text`
	position: absolute;
	color: rgba(255, 255, 255, 0.75);
	margin-left: 20px;
	bottom: 20px;
	font-weight: 600;
	font-size: 16px;
	margin-top: 4px;
`;
