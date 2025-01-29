import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import HomeView from "./pages/HomeView";
import DesignView from "./pages/services/DesignView";
import OptimizationView from "./pages/services/Optimization";
import ModernizationView from "./pages/services/Modernization";
import ProjectsView from "./pages/ProjectsView";


function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<HomeView />} />
				<Route path="/design" element={<DesignView />} />
				<Route path="/optimization" element={<OptimizationView />} />
				<Route path="/modernization" element={<ModernizationView />} />
				<Route path="/projects" element={<ProjectsView />} />
			</Routes>
		</Router>
	);
}

export default App;