import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./assets/upd-logo (1).png";
import logo_YT from "./assets/YT.png";
import vect_1 from './assets/upd_vec_1.jpg';
import vect_2 from './assets/vector_3.jpg';
import team from './assets/team.jpg';
import abt from './assets/about.png';
import offer from './assets/upd_offer.jpg';
import logo_Y from "./assets/Y.png";
import cont from "./assets/cont_us.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
    // ---------- Image Slider ----------
    const images = [
        {
            src: vect_1,

        },
        {
            src: vect_2,
        },
        {
            src: team,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration (in ms)
            once: true,     // Run only once per element
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    // ---------- Contact Form ----------
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        ph: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_r9s9n9e",     // ✅ your EmailJS Service ID
                "template_9o1695s",             // ✅ your EmailJS Template ID
                formData,
                "N3xQeGw_bxw-n0eZ4"    // ✅ your Public Key
            )
            .then(
                () => {
                    alert("✅ Message sent successfully!");
                    setFormData({ name: "", email: "", message: "", ph: "" });
                },
                (error) => {
                    alert("❌ Failed to send message. Please try again.");
                    console.error("EmailJS Error:", error);
                }
            );
    };

    return (
        <div>

            {/* ---------- Hero Slider ---------- */}
            <section
                id="home"
                className="hero-section text-light py-md-4 mb-3 py-1"
                style={{
                    background: "white", // default plain background for mobile
                }}
            >


                {/* ---------- Navbar ---------- */}
                <nav
                    className="navbar navbar-expand-lg mb-1 mb-md-5 shadow-sm"
                    style={{
                        backdropFilter: "blur(1px) ",
                        WebkitBackdropFilter: "blur(1px)", // Safari support
                        top: 0,
                        zIndex: 1000,
                    }}
                >
                    <div className="container">
                        <img
                            src={logo_YT}
                            alt="Yaedu VTech Logo"
                            className="img-fluid me-2 "
                            style={{
                                height: "auto",
                                maxHeight: "25px",   // limits large-screen height
                                width: "auto",
                                objectFit: "cover",
                            }}
                        />
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-dark fw-semibold" href="#home">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark fw-semibold" href="#about">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark fw-semibold" href="#courses">
                                        Courses
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark fw-semibold" href="#features">
                                        Features
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark fw-semibold" href="#programs">
                                        Programs
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark fw-semibold" href="#contact">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    <div className="row align-items-center py-md-1">

                        {/* ---------- Left (Desktop): Logo ---------- */}
                        <div
                            className="col-12 col-md-5 text-center mb-4 mb-md-0 order-1 order-md-1 hero-logo d-none d-md-block border-0"
                            style={{
                                position: "relative",
                                zIndex: 2,
                                borderRadius: "20px",
                            }}
                        >
                            <img
                                src={logo}
                                alt="Yaedu VTech Logo"
                                className="img-fluid hero-logo-img"
                                style={{
                                    maxWidth: "560px",
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                        </div>

                        {/* ---------- Right (Desktop) / Background (Mobile): Slider ---------- */}
                        <div
                            className="col-12 col-md-7 position-relative order-2 order-md-2 hero-slider d-none d-md-block"
                            style={{
                                height: "430px",
                                overflow: "hidden",
                                borderRadius: "10px",
                            }}
                        >
                            {images.map((item, index) => (
                                <img
                                    key={index}
                                    src={item.src}
                                    alt={item.title || "Slide"}
                                    className={`position-absolute w-100 h-100 ${index === currentIndex ? "opacity-100" : "opacity-0"
                                        }`}
                                    style={{
                                        objectFit: "cover",
                                        transition: "opacity 1s ease-in-out",
                                        borderRadius: "10px",
                                    }}
                                />
                            ))}
                        </div>

                        {/* ---------- Mobile: Centered Logo ---------- */}
                        <div
                            className="d-md-none position-relative text-center py-5"
                            style={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "auto",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            {/* Overlay Blur */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    zIndex: 1,
                                }}
                            ></div>

                            {/* Logo */}
                            <img
                                src={logo}
                                alt="Yaedu VTech Logo"
                                className="img-fluid"
                                style={{
                                    width: "90%",
                                    maxWidth: "400px",
                                    zIndex: 2, // keep logo above blur
                                    position: "relative",
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* ---------- Responsive Adjustments ---------- */}
                <style>
                    {`
      /* ✅ Default mobile background */
      #home {
        background: radial-gradient(
  circle farthest-corner at 95% 150%, /* position: 0% from left, 80% from top */
  rgba(123, 187, 244, 0.55) 0%,      /* starting color */
  rgba(255, 255, 255, 0.9) 55%       /* ending color */
) !important;
      }

      /* ✅ Show gradient only for tablet and desktop */
      @media (min-width: 768px) {
        #home {
         background: radial-gradient(
  circle farthest-corner at 15% 30%, /* position: 0% from left, 80% from top */
  rgba(87, 172, 246, 0.55) 0%,      /* starting color */
  rgba(255, 255, 255, 0.9) 25%       /* ending color */
) !important;
        }
      }

      @media (max-width: 768px) {
        .hero-slider {
          height: 320px !important;
        }
      }

      @media (max-width: 576px) {
        .hero-slider {
          height: 260px !important;
        }
      }

      @media (min-width: 992px) {
        .hero-slider {
          height: 430px !important;
        }
      }
    `}
                </style>
            </section>

            {/* --- About Section ---------- */}
            <section id="about" className="py-0 py-md-4">
                <div className="container">
                    <div className="row flex-md-row">

                        {/* Left Text (col-md-7) */}
                        <div className="col-md-7">
                            <div
                                className="card border-0 p-4 rounded-4"
                                style={{
                                    background:
                                        window.innerWidth > 768
                                            ? `radial-gradient(
                    circle farthest-corner at 80% 15%,
                    rgba(124, 190, 249, 0.55) 0%,
                    rgba(255, 255, 255, 0.9) 15%
                  )`
                                            : "#ffffff",
                                    backdropFilter: window.innerWidth > 768 ? "blur(6px)" : "none",
                                    border: "1px solid rgba(255,255,255,0.5)",
                                    textAlign: "left",
                                    backgroundColor: window.innerWidth > 768 ? "#ffffff" : "#f8f9fa",
                                }}
                            >
                                <h2
                                    className="fw-bold mb-3"
                                    style={{
                                        color: "#131f34",
                                        fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", // responsive heading
                                    }}
                                >
                                    <img
                                        src={logo_Y}
                                        alt="Yaedu VTech Logo"
                                        className="img-fluid "
                                        style={{
                                            height: "auto",
                                            maxHeight: "31px",   // limits large-screen height
                                            width: "auto",
                                            objectFit: "cover",
                                        }}
                                        data-aos="fade-right"
                                    />   About US
                                </h2>

                                <p
                                    className="lead"
                                    style={{
                                        color: "#333",
                                        fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", // responsive paragraph
                                        lineHeight: "1.6",
                                        textAlign: "left",
                                    }}
                                >
                                    Yaedu VTech is an innovative education and training institute dedicated to shaping future-ready professionals. We bridge the gap between academic learning and real-world application by offering interactive, project-based programs that focus on practical, industry-relevant skills.
                                </p>
                            </div>
                        </div>

                        {/* Right Image (col-md-5) */}
                        <div className="col-md-5 mb-4 mb-md-0 text-center">
                            <img
                                src={abt}
                                alt="About Yaedu VTech"
                                className="img-fluid rounded-4"
                                style={{ maxHeight: "350px", objectFit: "cover" }}
                                data-aos="fade-left"
                            />
                        </div>

                    </div>
                </div>
            </section>


            {/* ---------- Courses Section ---------- */}
            <section id="courses" className="py-2 py-md-5" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="container text-start">
                    <h2
                        className="fw-bold mb-1 mt-2"
                        style={{ color: "#131f34", fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)" }}
                    >
                        <img
                            src={logo_Y}
                            alt="Yaedu VTech Logo"
                            className="img-fluid "
                            style={{
                                height: "auto",
                                maxHeight: "31px",   // limits large-screen height
                                width: "auto",
                                objectFit: "cover",
                            }}
                            data-aos="fade-right" />   Explore Our Course Categories
                    </h2>

                    <p
                        className="text-muted mb-4"
                        style={{
                            maxWidth: "700px",
                            fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                            lineHeight: "1.7",
                        }}
                    >
                        Yaedu VTech offers a wide range of learning paths designed to help you master
                        practical, industry-ready skills.
                    </p>

                    <div className="row g-4 justify-content-center">
                        {[
                            { title: "Programming Languages", icon: "fa-code" },
                            { title: "Frontend Development", icon: "fa-laptop-code" },
                            { title: "Backend Development", icon: "fa-server" },
                            { title: "Databases", icon: "fa-database" },
                            { title: "Full Stack Development", icon: "fa-layer-group" },
                            { title: "AI Tools", icon: "fa-robot" },
                            { title: "Designing", icon: "fa-pencil-ruler" },
                            { title: "Web Development", icon: "fa-globe" },
                            { title: "Frameworks", icon: "fa-cubes" },
                            { title: "Logical Programming", icon: "fa-brain" },
                            { title: "Real-Time Projects", icon: "fa-project-diagram" },
                            { title: "Domain & Hosting", icon: "fa-network-wired" },
                        ].map((course, index) => (
                            <div className="col-6 col-sm-6 col-md-4 col-lg-3" key={index} data-aos="zoom-in">
                                <div
                                    className="card border-0 shadow-sm p-4 h-100 rounded-4"
                                    style={{
                                        background: "white",
                                        transition: "all 0.3s ease",
                                        cursor: "pointer",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.transform = "translateY(-6px)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.transform = "translateY(0)")
                                    }
                                >
                                    <div className="mb-3">
                                        <i
                                            className={`fa-solid ${course.icon}`}
                                            style={{
                                                fontSize: "2rem",
                                                color: "rgba(12, 112, 199, 0.75)",
                                            }}
                                        ></i>
                                    </div>
                                    <h6
                                        className="fw-semibold"
                                        style={{
                                            color: "#131f34",
                                            fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
                                        }}
                                    >
                                        {course.title}
                                    </h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




            <section id="programs" className="py-md-4 py-4">
                <div className="container">
                    <h2 className="fw-bold mb-md-3 text-start" style={{ color: "#131f34" }}>
                        <img
                            src={logo_Y}
                            alt="Yaedu VTech Logo"
                            className="img-fluid "
                            style={{
                                height: "auto",
                                maxHeight: "31px",   // limits large-screen height
                                width: "auto",
                                objectFit: "cover",
                            }}
                            data-aos="fade-right" />  We Are Offering
                    </h2>

                    <div className="row g-4 justify-content-center">

                        {/* ---------- Image Card ---------- */}
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card border-0 h-100 text-center rounded-4 p-3 d-none d-md-block shadow-sm" >
                                <img
                                    src={offer} // replace with your image variable
                                    alt="Offerings"
                                    className="img-fluid rounded-4 border-0"
                                    style={{ height: "280px", objectFit: "contain" }}
                                    data-aos="fade-right"
                                />
                            </div>
                        </div>

                        {/* ---------- Workshop ---------- */}
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card text-left border-0 shadow-sm h-100 rounded-4 p-3 bg-light" style={{
                                backgroundColor: "#f8f9fa", background:
                                    window.innerWidth > 768
                                        ? `radial-gradient(
                    circle farthest-corner at 95% 95%,
                    rgba(79, 169, 247, 0.55) 0%,
                    rgba(255, 255, 255, 0.9) 23%
                  )`
                                        : "#ffffff",
                            }}
                                data-aos="flip-right">
                                {/* Responsive icon */}
                                <div className="py-3">
                                    <i
                                        className="fa-solid fa-chalkboard-user fa-3x d-inline d-md-none mb-3"
                                        style={{ color: "rgba(12, 112, 199, 0.75)" }}
                                    ></i>
                                    <i
                                        className="fa-solid fa-chalkboard-user fa-7x d-none d-md-inline mb-3"
                                        style={{ color: "rgba(12, 112, 199, 0.75)" }}
                                    ></i>
                                </div>

                                <h5 className="fw-semibold mb-2">Workshop</h5>
                                <p className="text-muted small mb-0">
                                    Hands-on technical training to boost your practical skills.
                                </p>
                            </div>
                        </div>

                        {/* ---------- Internship ---------- */}
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card text-left border-0 shadow-sm h-100 rounded-4 p-3 bg-light" style={{
                                backgroundColor: "#f8f9fa", background:
                                    window.innerWidth > 768
                                        ? `radial-gradient(
                    circle farthest-corner at 95% 95%,
                    rgba(79, 169, 247, 0.55) 0%,
                    rgba(255, 255, 255, 0.9) 23% 
                  )`
                                        : "#ffffff"
                            }}
                                data-aos="flip-right">
                                {/* Responsive icon */}
                                <div className="py-3">
                                    <i
                                        className="fa-solid fa-briefcase fa-3x d-inline d-md-none mb-3"
                                        style={{ color: "rgba(12, 112, 199, 0.75)" }}
                                    ></i>
                                    <i
                                        className="fa-solid fa-briefcase fa-7x d-none d-md-inline mb-3"
                                        style={{ color: "rgba(12, 112, 199, 0.75)" }}
                                    ></i>
                                </div>

                                <h5 className="fw-semibold mb-2">Internship</h5>
                                <p className="text-muted small mb-0">
                                    Gain real-world project experience with expert guidance.
                                </p>
                            </div>
                        </div>

                        {/* ---------- Bootcamp ---------- */}
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card text-left border-0 shadow-sm h-100 rounded-4 p-3 bg-light" style={{
                                backgroundColor: "#f8f9fa", background:
                                    window.innerWidth > 768
                                        ? `radial-gradient(
                    circle farthest-corner at 95% 95%,
                    rgba(79, 169, 247, 0.55) 0%,
                    rgba(255, 255, 255, 0.9) 23%
                  )`
                                        : "#ffffff"
                            }}
                                data-aos="flip-right">
                                {/* Responsive icon */}
                                <div className="py-3">
                                    <i
                                        className="fa-solid fa-laptop-code fa-3x d-inline d-md-none mb-3"
                                        style={{ color: "rgba(12, 112, 199, 0.75)" }}
                                    ></i>
                                    <i
                                        className="fa-solid fa-laptop-code fa-7x d-none d-md-inline mb-3"
                                        style={{ color: "rgba(12, 112, 199, 0.75)" }}
                                    ></i>
                                </div>

                                <h5 className="fw-semibold mb-2">Bootcamp</h5>
                                <p className="text-muted small mb-0">
                                    Fast-track your learning with intensive coding sessions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Features Section ---------- */}
            <section id="features" className="py-3 py-md-4" style={{ background: "#f8f9fa" }}>
                <div className="container text-start">
                    <h2 className="fw-bold mb-2" style={{ color: "#131f34" }}>
                        <img
                            src={logo_Y}
                            alt="Yaedu VTech Logo"
                            className="img-fluid px-2"
                            style={{
                                height: "auto",
                                maxHeight: "31px",   // limits large-screen height
                                width: "auto",
                                objectFit: "cover",
                            }}
                            data-aos="fade-right" />
                        Why Learn with Yaedu VTech
                    </h2>
                    <p className="text-muted mb-4">
                        Explore our unique learning features designed to empower your tech journey.
                    </p>

                    <div className="row g-4">

                        {/* 🧩 Customize Your Learning */}
                        <div className="col-12 col-md-3">
                            <div className="card border-0 shadow-sm h-100 rounded-4 p-4 text-start" data-aos="zoom-out">
                                <div className="mb-3">
                                    <i className="fa-solid fa-layer-group fa-3x" style={{ color: "rgba(12, 112, 199, 0.75)" }}></i> {/* pastel teal */}
                                </div>
                                <h5 className="fw-semibold mb-2">Customize Your Learning</h5>
                                <p className="text-muted">
                                    Design your own path with our customizable course catalog. Learn exactly what matters to you.
                                </p>
                            </div>
                        </div>

                        {/* 💼 Portfolio Development */}
                        <div className="col-12 col-md-3">
                            <div className="card border-0 shadow-sm h-100 rounded-4 p-4 text-start" data-aos="zoom-out">
                                <div className="mb-3">
                                    <i className="fa-solid fa-briefcase fa-3x" style={{ color: "rgba(12, 112, 199, 0.75)" }}></i> {/* pastel blue */}
                                </div>
                                <h5 className="fw-semibold mb-2">Portfolio Development</h5>
                                <p className="text-muted">
                                    Each course includes guided portfolio creation. Build real projects that showcase your skills.
                                </p>
                            </div>
                        </div>

                        {/* 🌟 Learn & Earn Opportunities */}
                        <div className="col-12 col-md-3">
                            <div className="card border-0 shadow-sm h-100 rounded-4 p-4 text-start" data-aos="zoom-out">
                                <div className="mb-3">
                                    <i className="fa-solid fa-coins fa-3x" style={{ color: "rgba(12, 112, 199, 0.75)" }}></i> {/* pastel orange */}
                                </div>
                                <h5 className="fw-semibold mb-2">Learn & Earn Opportunities</h5>
                                <p className="text-muted">
                                    Gain exclusive opportunities such as paid internships, live project roles, and certification rewards.
                                </p>
                            </div>
                        </div>

                        {/* 🎯 Career Guidance */}
                        <div className="col-12 col-md-3">
                            <div className="card border-0 shadow-sm h-100 rounded-4 p-4 text-start" data-aos="zoom-out">
                                <div className="mb-3">
                                    <i className="fa-solid fa-user-tie fa-3x" style={{ color: "rgba(12, 112, 199, 0.75)" }}></i> {/* pastel pink */}
                                </div>
                                <h5 className="fw-semibold mb-2">Career Guidance</h5>
                                <p className="text-muted">
                                    Get expert mentorship, resume reviews, and personalized advice to shape your career direction.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ---------- Contact Section ---------- */}
            <section
                id="contact"
                className=""
                style={{ background: "#f8f9fa" }}
            >
                <div className="container px-0">
                    <h2 className="fw-bold mb-4 text-left" style={{ color: "#131f34" }}>
                        <img
                            src={logo_Y}
                            alt="Yaedu VTech Logo"
                            className="img-fluid px-1 "
                            style={{
                                height: "auto",
                                maxHeight: "35px",   // limits large-screen height
                                width: "auto",
                                objectFit: "cover",
                            }}
                            data-aos="fade-right" />
                        Contact Us
                    </h2>

                    <div className="row g-0 align-items-stretch">
                        {/* ---------- Left Image ---------- */}
                        <div className="col-lg-6 col-md-6">
                            <div style={{ height: "100%" }}>
                                <img
                                    src={cont}
                                    alt="Contact"
                                    className="img-fluid w-100 h-100"
                                    style={{
                                        objectFit: "cover",
                                        borderTopLeftRadius: "0.5rem",
                                        borderBottomLeftRadius: "0.5rem",
                                    }}
                                />
                            </div>
                        </div>

                        {/* ---------- Right Side ---------- */}
                        <div
                            className="col-lg-6 col-md-6 d-flex flex-column justify-content-between text-start"
                            style={{
                                backgroundColor: "white",
                                padding: "3rem 2rem",
                                borderTopRightRadius: "0.5rem",
                                borderBottomRightRadius: "0.5rem",
                            }}
                        >
                            {/* ---------- Reach Us Section ---------- */}
                            <div className="mb-1 text-center text-md-start">
                                <img
                                    src={logo_YT}
                                    alt="Yaedu VTech Logo"
                                    className="img-fluid mb-2"
                                    style={{
                                        height: "auto",
                                        maxHeight: "30px",
                                        width: "auto",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>

                            {/* ---------- Contact Us Section ---------- */}
                            <div>
                                <form onSubmit={sendEmail}>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control rounded-3"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control rounded-3"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            type="tel"
                                            name="ph"
                                            className="form-control rounded-3"
                                            placeholder="Your Phone"
                                            value={formData.ph}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <textarea
                                            name="message"
                                            className="form-control rounded-3"
                                            placeholder="Your Message"
                                            rows="3"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mt-3 gap-2 text-center text-md-start">
                                        {/* Email + Phone */}
                                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start gap-2">
                                            <p className="mb-0 d-flex align-items-center">
                                                <i className="fa-solid fa-envelope me-2" style={{ color: "#131f34" }}></i>
                                                yaeduvtech@gmail.com
                                            </p>

                                            <p
                                                className="mb-0 d-flex d-md-none d-lg-flex align-items-center"
                                                style={{ color: "#131f34" }}
                                            >
                                                <i className="fa-solid fa-phone me-2" style={{ color: "#131f34" }}></i>
                                                9150599502 / 9344179502
                                            </p>
                                        </div>

                                        {/* Button */}
                                        <button
                                            type="submit"
                                            className="btn fw-bold px-3 py-2 rounded-3 text-light"
                                            style={{ backgroundColor: "rgba(12, 112, 199, 0.75)" }}
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Footer ---------- */}
            <footer
                className="py-4 mt-0 text-light"
                style={{
                    background: "linear-gradient(135deg, #89a7d8ff 0%, #243b55 100%)",
                }}
            >
                <div className="container text-center text-md-start">
                    <div className="row align-items-center gy-4">

                        {/* ---------- Left: Logo + Name ---------- */}
                        <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start">
                            <img
                                src={logo_Y}
                                alt="Yaedu VTech Logo"
                                className="me-2 px-5"
                                style={{ height: "50%", width: "auto" }}
                            />
                        </div>

                        {/* ---------- Center: Quick Links ---------- */}
                        <div
                            className="col-md-4 text-center d-flex flex-column justify-content-center border-start border-end border-light"
                            style={{
                                borderWidth: "1px",
                            }}
                        >
                            {["Home", "About", "Courses", "Programs", "Features", "Contact"].map((link, index) => (
                                <a
                                    key={index}
                                    href={`#${link.toLowerCase()}`}
                                    className="text-light text-decoration-none mb-1"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>

                        {/* ---------- Right: Contact Info ---------- */}
                        <div className="col-md-4 text-center text-md-end">
                            <p className="mb-1 small">
                                <i className="fa-solid fa-envelope me-2"></i>
                                yaeduvtech@gmail.com
                            </p>
                            <p className="mb-0 small">
                                <i className="fa-solid fa-phone me-2"></i>
                                9150599502 / 9344179502
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
