import { render, router } from "./src/lib";
import HomePage from "./src/pages/HomePage";
import Project from "./src/pages/Projects";
import NotFound from "./src/pages/Not-found";
import ProjectDetail from "./src/pages/ProjectDetail";
import ProjectsAminPage from "./src/pages/admin/Projects";
import ProjectsAdd from "./src/pages/admin/ProjectsAdd";
import ProjectsEdit from "./src/pages/admin/ProjectEdit";
const app = document.querySelector("#app");


router.on("/" , () => render(HomePage,app));
router.on("/project", () => render(Project,app));
router.on("/project/:projectId", (params) => render(() => ProjectDetail(params),app));
router.on("/admin/project", () => render(ProjectsAminPage,app));
router.on("/admin/project/add", () => render(ProjectsAdd,app));
router.on("/admin/project/edit", () => render(ProjectsEdit,app));
router.notFound(() => render(NotFound(), app));
router.resolve();
