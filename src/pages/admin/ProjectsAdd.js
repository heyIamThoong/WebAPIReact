import { router, useEffect, useState } from "../../lib";

const ProjectsAdd = () => {
    useEffect(() => {
        const form = document.querySelector("#project-form");
        const name = document.querySelector("#project-name");
        const author = document.querySelector("#project-author");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = {
                name: name.value,
                author: author.value
            }
            fetch("http://localhost:3000/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then(() => router.navigate("/admin/project"))
                .catch((error) => console.log(error));
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