import { router, useEffect, useState } from "../../lib";

const ProjectsAdd = () => {
      const projectsFake = JSON.parse(localStorage.getItem('projects')) || [];
    useEffect(() => {
        const form = document.querySelector("#project-form");
        const name = document.querySelector("#project-name");
        const author = document.querySelector("#project-author");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const project = {
                id: projectsFake.length + 1,
                name: name.value,
                author: author.value
            }
            projectsFake.push(project);
            localStorage.setItem('projects', JSON.stringify(projectsFake));
            router.navigate("/admin/project")
        });
    });
    return `<div>
     <h1>Projects Add</h1>
            <form id="project-form" action="">
            <input id="project-name" type="text">
            <input id="project-author" type="text">
            <button type="">Them</button>
            </form>
            </div>`
        ;
}

export default ProjectsAdd