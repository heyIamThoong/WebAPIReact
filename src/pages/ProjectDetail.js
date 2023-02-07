import projectsFake from "../data";
const ProjectDetail = ({ data: { projectId } }) => {
  const currunt = projectsFake.find((project) => project.id == projectId);
  if (!currunt) return `Khoong cos`;
  return ` <div>ProjectDetail</div>
  ${currunt.name}
  <br/>${currunt.teams
      ? `
      <h2>Teams</h2>
  <ul>
  ${currunt.teams.map((member) => `<li>${member.name}</li>`).join("")}
  </ul>
  `: currunt.author
    }
  `;
}

export default ProjectDetail