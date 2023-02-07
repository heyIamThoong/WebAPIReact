import projectsFake from "../../data";
import { router, useEffect, useState } from "../../lib";

const ProjectsAminPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const project = JSON.parse(localStorage.getItem("projects")) || [];
        setData(project)
    }, [])
    useEffect(() => {
        const remove = document.querySelectorAll(".remove");
        for (const btn of remove) {
            btn.addEventListener("click", function () {
                const idn = this.dataset.id;
                const newData = data.filter((item)  =>
                    item.id != idn
                );
                localStorage.setItem("projects", JSON.stringify(newData));
                setData(newData);
            })
        }
    });
    return ` <div>
    <h1>Quan ly du an</h1>
    <a href="/admin/project/add"> Them </a>
        <table class="table table-bordered">
            <thead>
            <tr>
                <td width="100px">STT</td>
                <td width="100px"> Teen du An</td>
                <td width="150px"></td>
            </tr>
            </thead>
            <tbody>
                ${data.map((project, index) => {
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