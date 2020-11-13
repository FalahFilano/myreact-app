import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

const screenWidth = Dimensions.get('window').width;

function getScreenWidth(screenWidth) {
	var cardWidth = screenWidth - 40;

	if (screenWidth >= 768) cardWidth = (screenWidth - 60) / 2;
	if (screenWidth > 1024) cardWidth = (screenWidth - 80) / 3;
	return cardWidth;
}

class Course extends React.Component {
	state = {
		cardWidth: getScreenWidth(screenWidth),
	};

	componentDidMount() {
		Dimensions.addEventListener('change', this.adaptLayout);
	}

	adaptLayout = (dimensions) => {
		this.setState({
			cardWidth: getScreenWidth(dimensions.window.width),
		});
	};

	render() {
		return (
			<Container style={{ width: this.state.cardWidth }}>
				<Cover>
					<Image source={this.props.Image} />
					<Logo source={this.props.Logo} resizeMode="contain" />
					<Caption>{this.props.Caption}</Caption>
					<Title>{this.props.Title}</Title>
				</Cover>
				<Content>
					<Avatar source={this.props.Avatar} />
					<VerticalWrapper>
						<Subtitle>{this.props.Subtitle}</Subtitle>
						<Name>{this.props.Name}</Name>
					</VerticalWrapper>
				</Content>
			</Container>
		);
	}
}

export default Course;

const Container = styled.View`
	background-color: white;
	height: 335px;
	border-radius: 14px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
	margin-left: 10px;
	margin-right: 10px;
	margin-top: 20px;
`;

const Cover = styled.View`
	height: 78%;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
	justify-content: flex-end;
`;

const Image = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
`;

const Logo = styled.Image`
	width: 48px;
	height: 48px;
	left: 50%;
	top: 20px;
	margin-left: -24px;
	position: absolute;
`;

const Caption = styled.Text`
	color: rgba(255, 255, 255, 0.8);
	font-weight: 500;
	font-size: 15px;
	text-transform: uppercase;
	margin-left: 20px;
	margin-top: 30px;
`;

const Title = styled.Text`
	color: white;
	font-size: 24px;
	font-weight: bold;
	width: 170px;
	margin-top: 4px;
	margin-left: 20px;
	margin-bottom: 20px;
`;

const Content = styled.View`
	height: 22%;
	flex-direction: row;
	align-items: center;
	margin-left: 20px;
	margin-right: 20px;
`;

const VerticalWrapper = styled.View`
	margin-left: 10px;
	margin-right: 20px;
	flex-direction: column;
`;

const Avatar = styled.Image`
	width: 32px;
	height: 32px;
	background: black;
	border-radius: 22px;
`;

const Subtitle = styled.Text`
	font-size: 14px;
	color: #3c4560;
	font-weight: 500;
`;

const Name = styled.Text`
	font-size: 13px;
	color: #b8bece;
	font-weight: 500;
	margin-top: 4px;
`;
