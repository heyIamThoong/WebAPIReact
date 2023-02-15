import MenusData from "../data";

const Header = () => {
  return ` <header class="bg-light">
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="header-nav" role="navigation">
    <div class="container"><a class="link-dark navbar-brand site-title mb-0" href="#">LÊ THÀNH THÔNG</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
       ${MenusData()}
      </div>
    </div>
  </nav>
</header>
<div class="page-content">
  <div id="content">
<header>`
};

export default Header