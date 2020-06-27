import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/layout";
import Profile from "../components/profile";
import Login from "../components/login";
import PrivateRoute from "../components/privateRoute"

const App = ({ location }) => {
	return (
		<Layout location = {location}>
			<Router basepath="/app">
				<PrivateRoute path="/profile" component={Profile} />
				<Profile path="/profile" />
				<Login path="/login" />
			</Router>
		</Layout>
	);
};

export default App;
