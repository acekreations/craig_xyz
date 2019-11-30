import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";

const routes = [
    { path: "/", component: HomePage },
    { path: "/project/:id", component: ProjectPage }
];

export default routes;
