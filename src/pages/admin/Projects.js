import { router, useEffect, useState } from "../../lib";

const ProjectsAminPage = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        const remove = document.querySelectorAll(".remove");
        for (const btn of remove) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                fetch(`http://localhost:3000/projects/${id}`, { method: "DELETE" }).then(() => {
                    // xóa ở client : reRender
                    const newsProject = projects.filter((project) => project.id != id);
                    setProjects(newsProject);
                });
            })
        }
    });
    return ` <div>
    <h1>Quan ly du an</h1>
    <a href="/admin/project/add"> Them </a>
    <a href="/admin/project/add"> Edit </a>
        <table class="table table-bordered">
            <thead>
            <tr>
                <td width="100px">STT</td>
                <td width="100px"> Teen du An</td>
                <td width="150px"></td>
            </tr>
            </thead>
            <tbody>
                ${projects.map((project, index) => {
        return `
                    <tr>
                         <td >${index + 1}</td>
                         <td >${project.name}</td>
                         <td >
                         <button data-id="${project.id
            }" class="remove">Xoas</button>
                         </td>
                    </tr>
                    `
    }).join("")

        }
            </tbody>
        </table>
  </div>`;


}


export default ProjectsAminPage