import React from 'react';
import styled from 'styled-components';

const Card = (props) => (
	<Container style={{ elevation: 15 }}>
		<Cover>
			<Image source={props.Image} />
			<Title>{props.Title}</Title>
		</Cover>
		<Content>
			<Logo source={props.Logo} />
			<Wrapper>
				<Caption>{props.Caption}</Caption>
				<Subtitle>{props.Subtitle}</Subtitle>
			</Wrapper>
		</Content>
	</Container>
);

export default Card;

const Container = styled.View`
	background-color: white;
	width: 315px;
	height: 280px;
	border-radius: 14px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
	margin-left: 20px;
	margin-top: 20px;
	margin-bottom: 30px;
`;

const Cover = styled.View`
	width: 100%;
	height: 200px;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
`;

const Image = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
`;

const Title = styled.Text`
	color: white;
	font-size: 24px;
	font-weight: bold;
	width: 170px;
	margin-top: 20px;
	margin-left: 20px;
`;

const Content = styled.View`
	padding-left: 20px;
	flex-direction: row;
	height: 80px;
	align-items: center;
`;

const Logo = styled.Image`
	width: 44px;
	height: 44px;
`;

const Wrapper = styled.View`
	margin-left: 10px;
	flex-direction: column;
`;

const Caption = styled.Text`
	color: #3c4560;
	font-size: 20px;
	font-weight: 600;
`;

const Subtitle = styled.Text`
	color: #b8bece;
	font-weight: 600;
	font-size: 15px;
	text-transform: uppercase;
	margin-top: 4px;
`;
