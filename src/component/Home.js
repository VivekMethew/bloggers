import React from 'react';
import BlogsContainer from '../component/BlogsContainer';
import SidebarContainer from '../component/SidebarContainer';

function Home() {
	document.title = 'Home, Blog App';
	return (
		<>
			<div className="main-content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-1"> </div>{' '}
						<div className="col-lg-7">
							<BlogsContainer />
						</div>{' '}
						<div className="col-lg-4">
							<SidebarContainer />
						</div>{' '}
					</div>{' '}
				</div>{' '}
			</div>{' '}
		</>
	);
}

export default Home;
