import "./Navbar.css";
import NavLogo from "../../photo/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Navbar({ Arabic, setArabic }) {
  return (
    <>
      {Arabic ? (
        <>
          <section className="displaynone">
            <nav class="navbar navbar-expand-lg  navbar2_bg right-to-left">
              <div class="container-fluid d-flex justify-content-center " >
                <div class="  "> 
                  <ul class="navbar-nav  mb-2 mb-lg-0 " style={{gap:50}}>
                    <li class="nav-item ms-5 text-white">شركة دلتا جروب</li>
                    <li class="nav-item ms-3 text-white">966582597117+</li>
                    <li class="nav-item ms-3 text-white">01100075910</li>
                    <li class="nav-item ms-3 text-white">
                      Info@Deltatrade-co.com
                    </li>
                    <li class="nav-item  ">
                      <a className="text-white" href="https://www.facebook.com/profile.php?id=100092977611277&mibextid=LQQJ4d">
                        <FaFacebookSquare />
                      </a>
                    </li>
                    {/* <li class="nav-item ms-3  ">
                      <a className="text-white" href="#">
                        <BsTwitter />
                      </a>
                    </li>
                    <li class="nav-item ms-3  ">
                      <a className="text-white" href="#">
                        <FiInstagram />
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </nav>
          </section>
          <section className="text_white">
            <nav className="navbar navbar-expand-lg navbar_bg   w-100">
              <div class="container-fluid right-to-left d-flex">
                <a class="navbar-brand text-white ms-4" href="#">
                  <img src={NavLogo} alt="" />
                </a>
                <button
                  class="navbar-toggler bg-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a
                        class="nav-link active text-white ms-4"
                        aria-current="page"
                        href="#"
                      >
                        الصفحه الرئيسيه
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white ms-4" href="#aboutUs">
                        عنّا
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white ms-4" href="#OurProducts">
                        منتجاتنا
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link  text-white ms-4" href="#BrandNour">
                        نور العلامة تجارية
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link  text-white ms-4" href="#Quality">
                        الجوده
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link  text-white ms-4 " href="#ContactUs">
                        تواصل معنا
                      </a>
                    </li>
                  </ul>
                  <div className="ms-5">
                    <Link
                      onClick={() => {
                        setArabic(false);
                      }}
                      className="text-white fs-3"
                    >
                      <i class="fa-solid fa-language"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </section>
        </>
      ) : (
        <>
          <section className="displaynone">
            <nav class="navbar navbar-expand-lg  navbar2_bg ">
              <div class="container-fluid d-flex justify-content-center">
                <div class="  ">
                  <ul class="navbar-nav  mb-2 mb-lg-0 " style={{gap:50}}>
                    <li class="nav-item me-5 text-white">
                      Delta Group Company
                    </li>
                    <li class="nav-item ms-3 text-white">+966582597117</li>
                    <li class="nav-item ms-3 text-white">01100075910</li>
                    <li class="nav-item ms-3 text-white">
                      Info@Deltatrade-co.com
                    </li>
                    <li class="nav-item ">
                      <a className="text-white" href="https://www.facebook.com/profile.php?id=100092977611277&mibextid=LQQJ4d">
                        <FaFacebookSquare />
                      </a>
                    </li>
                    {/* <li class="nav-item ms-3  ">
                      <a className="text-white" href="#">
                        <BsTwitter />
                      </a>
                    </li> */}
                    {/* <li class="nav-item ms-3  ">
                      <a className="text-white" href="#">
                        <FiInstagram />
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </nav>
          </section>
          <section className="text_white ">
            <nav className="navbar navbar-expand-lg navbar_bg   w-100">
              <div class="container-fluid d-flex">
                <a class="navbar-brand text-white ms-4" href="#">
                  <img src={NavLogo} alt="" />
                </a>
                <button
                  class="navbar-toggler bg-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a
                        class="nav-link active text-white ms-4"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white ms-4" href="#aboutUs">
                        About Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white ms-4" href="#OurProducts">
                        Our Products
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link  text-white ms-4" href="#BrandNour">
                        Brand Nour
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link  text-white ms-4" href="#Quality">
                        Quality
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link  text-white ms-4 " href="#ContactUs">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                  <div className="ms-5">
                    <Link
                      onClick={() => {
                        setArabic(true);
                      }}
                      className="text-white fs-3"
                    >
                      <i class="fa-solid fa-language"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </section>
        </>
      )}
    </>
  );
}
