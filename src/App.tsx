import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import HomeView from "./pages/HomeView";
import DevelopmentView from "./pages/services/DevelopmentView";
import OptimizationView from "./pages/services/OptimizationView";
import ModernizationView from "./pages/services/ModernizationView";
import ProjectsView from "./pages/projects/ProjectsView";
import ProjectDetailView from "./pages/projects/ProjectDetailView";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<HomeView />} />
                <Route path="/development" element={<DevelopmentView />} />
				<Route path="/optimization" element={<OptimizationView />} />
                <Route path="/modernization" element={<ModernizationView />} />
                <Route path="/projects" element={<ProjectsView />} />
                <Route path="/projects/:id" element={<ProjectDetailView />} />
			</Routes>
		</Router>
	);
}

export default App;