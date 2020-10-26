import React from 'react';
import styled from 'styled-components';

const Course = (props) => (
	<Container>
		<Cover>
			<Image source={props.Image} />
			<Logo source={props.Logo} resizeMode="contain" />
			<Caption>{props.Caption}</Caption>
			<Title>{props.Title}</Title>
		</Cover>
		<Content>
			<Avatar source={props.Avatar} />
			<VerticalWrapper>
				<Subtitle>{props.Subtitle}</Subtitle>
				<Name>{props.Name}</Name>
			</VerticalWrapper>
		</Content>
	</Container>
);
export default Course;

const Container = styled.View`
	background-color: white;
	height: 335px;
	border-radius: 14px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
	margin-left: 20px;
	margin-right: 20px;
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
