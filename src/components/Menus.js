import menus from "../data"
const MenusData = () => {
  return ` <ul class="navbar-nav ms-auto me-2">
  ${menus
    ?.map(
      (menu) =>
      `<li class="nav-item"><a class="nav-link" href="${menu.link}">${menu.name}</a></li>`
    )
    .join("")}
</ul>`
}

export default MenusData