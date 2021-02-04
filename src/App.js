import React from 'react';
import './App';
import { Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/header';
import About from './component/About';
import Error from './component/Error';
import NewBlogs from './component/NewBlogs';
import Profile from './component/Profile';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/new-blogs" component={NewBlogs} />
				<Route path="/users/:topicId" component={Profile}></Route>
				<Route component={Error} />
			</Switch>
		</div>
	);
}

export default App;
