import React from 'react';
import styled from 'styled-components';

class ProjectsScreen extends React.Component {
	static navigationOptions = {
		title: 'Projects',
		headerShown: false,
	};

	render() {
		return (
			<Container>
				<Text>ProjectsScreen</Text>
			</Container>
		);
	}
}
export default ProjectsScreen;

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Text = styled.Text``;
