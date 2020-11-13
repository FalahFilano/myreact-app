import React from 'react';
import styled from 'styled-components';

class Project extends React.Component {
	render() {
		return (
			<Container>
				<Cover>
					<Image source={this.props.image} />
					<Title>{this.props.title}</Title>
					<Author>by {this.props.author}</Author>
				</Cover>
				<Content>
					<Text>{this.props.text}</Text>
				</Content>
			</Container>
		);
	}
}

export default Project;

const Container = styled.View`
	width: 315px;
	/* margin-left: 20px;
	margin-right: 20px; */
	height: 420px;
	border-radius: 14px;
	background-color: white;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
	height: 65%;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
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
	width: 75%;
`;

const Author = styled.Text`
	position: absolute;
	bottom: 20px;
	left: 20px;
	/* text-transform: uppercase; */
	color: rgba(255, 255, 255, 0.9);
	font-size: 15px;
	font-weight: 700;
`;

const Content = styled.View`
	height: 35%;
	/* align-self: baseline; */
	justify-content: center;
`;

const Text = styled.Text`
	font-size: 17px;
	margin: 20px;
	line-height: 24px;
	color: #3c4560;
`;
