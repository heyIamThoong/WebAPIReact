import projectsFake from "../data"

const Projectlist = () => {
  return ` <div>
  ${projectsFake.map((item) => {
    return ` <div><a href="/project/${item.id}">${item.name}</a></div>`;
  })
  .join("")}
  </div>`;
}

export default Projectlist