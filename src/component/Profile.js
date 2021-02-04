import React from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
	let { topicId } = useParams();
	return (
		<div>
			<h1>This is profile page {topicId}</h1>
		</div>
	);
}

export default Profile;
