import React from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import {
	TouchableOpacity,
	StatusBar,
	Linking,
	ScrollView,
	Dimensions,
} from 'react-native';
import { WebView } from 'react-native-webview';
import Markdown from 'react-native-showdown';

const screenHeight = Dimensions.get('window').height;

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
			<ScrollView showsVerticalScrollIndicator={false}>
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
					<Content>
						{/* <WebView
						source={{ html: section.content + htmlContent }}
						scalesPageToFit={false}
						scrollEnabled={false}
						ref="webview"
						onNavigationStateChange={(event) => {
							// console.log(event);
							if (event.url != 'about:blank') {
								this.refs.webview.stopLoading();
								Linking.openURL(event.url);
							}
						}}
					/> */}
						<Markdown
							body={section.content}
							pureCSS={htmlStyles}
							scrollEnabled={false}
						/>
					</Content>
				</Container>
			</ScrollView>
		);
	}
}
export default SectionScreen;

const Container = styled.View`
	flex: 1;
`;

const Cover = styled.View`
	/* background: black; */
	height: 375px;
`;

const Content = styled.View`
	background: white;
	height: 1000px;
	padding: 12px;
`;

const htmlContent = `
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<h2>This is a title</h2>
	<p>This <strong>is</strong> a <a href="http://designcode.io">link</a></p>
	<img src="https://cl.ly/8861f359ed6d/download/Wave14.jpg" />
`;

const htmlStyles = `
	<style>
		* {
			font-family: -apple-system; 
			margin: 0;
			padding: 0;
			font-size: 17px; 
			font-weight: normal; 
			color: #3c4560;
			line-height: 24px;
		}
	
		h2 {
			font-size: 20px;
			text-transform: uppercase;
			color: #b8bece;
			font-weight: 600;
			margin-top: 50px;
		}
	
		p {
			margin-top: 20px;
		}
	
		a {
			color: #4775f2;
			font-weight: 600;
			text-decoration: none;
		}
	
		strong {
			font-weight: 700;
		}

		img {
      width: 100%;
      margin-top: 20px;
    	border-radius: 10px;
		}
		pre {
      padding: 20px;
      background: #212C4F;
      overflow: hidden;
      word-wrap: break-word;
      border-radius: 10px;
    	margin-top: 20px;
    }
    
    code {
      color: white;
    }
	
	</style>
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
