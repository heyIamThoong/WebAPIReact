import Footer from "../components/Footer";
import Header from "../components/Header"
const HomePage = () => {
    return /*html*/ `
    ${Header()}
    <header>
  <div class="cover bg-light">
    <div class="container px-3">
      <div class="row">
        <div class="col-lg-6 p-2"><img class="img-fluid" src="images/6F267F77-F803-4BF5-80C5-F712200A4003.svg" alt="hello"/></div>
        <div class="col-lg-6">
          <div class="mt-5">
            <p class="lead text-uppercase mb-1">Hello!</p>
            <h1 class="intro-title marker" data-aos="fade-left" data-aos-delay="50">I’m Walter Patterson</h1>
            <p class="lead fw-normal mt-3" data-aos="fade-up" data-aos-delay="100">Web Developer & Mobile Application Developer</p>
            <div class="social-nav" data-aos="fade-up" data-aos-delay="200">
              <nav role="navigation">
                <ul class="nav justify-content-left">
                  <li class="nav-item"><a class="nav-link" href="https://twitter.com/templateflip" title="Twitter"><i class="fab fa-twitter"></i><span class="menu-title sr-only">Twitter</span></a></li>
                  <li class="nav-item"><a class="nav-link" href="https://www.facebook.com/templateflip" title="Facebook"><i class="fab fa-facebook"></i><span class="menu-title sr-only">Facebook</span></a></li>
                  <li class="nav-item"><a class="nav-link" href="https://www.instagram.com/templateflip" title="Instagram"><i class="fab fa-instagram"></i><span class="menu-title sr-only">Instagram</span></a></li>
                  <li class="nav-item"><a class="nav-link" href="https://www.linkedin.com/" title="LinkedIn"><i class="fab fa-linkedin"></i><span class="menu-title sr-only">LinkedIn</span></a></li>
                  <li class="nav-item"><a class="nav-link" href="https://www.behance.net/templateflip" title="Behance"><i class="fab fa-behance"></i><span class="menu-title sr-only">Behance</span></a></li>
                </ul>
              </nav>
            </div>
            <div class="mt-3" data-aos="fade-up" data-aos-delay="200"><a class="btn btn-primary shadow-sm mt-1 hover-effect" href="#contact">Get In Touch <i class="fas fa-arrow-right"></i></a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="wave-bg"></div>
</header>
    ${Footer()}`


}
export default HomePage