/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import App from "./App";

import "@lina-roether/palantir-ui/styles.css";

render(
	() => (
		<Router>
			<App />
		</Router>
	),
	document.getElementById("root")!
);

