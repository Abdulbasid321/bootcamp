import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";
import RegisterForm from "@/components/RegisterForm";

const courses = [
  {
    title: "Introduction to Computer",
    description:
      "Learn the basics of computing, devices, and digital literacy.",
  },
  {
    title: "Graphics Design",
    description:
      "Unleash creativity with Canva and Adobe tools for visual storytelling.",
  },
  {
    title: "Web Development",
    description:
      "Build websites using HTML, CSS, JavaScript and real-world tools.",
  },
  {
    title: "Data Analysis",
    description:
      "Understand data using Excel, Google Sheets and simple charts.",
  },
  {
    title: "UI/UX Design",
    description:
      "Design engaging user experiences with wireframes and mockups.",
  },
  {
    title: "Digital Marketing",
    description: "Explore social media, branding, and online strategy basics.",
  },
  {
    title: "Artificial Intelligence (AI)",
    description:
      "Discover how AI works and use fun AI tools to create and learn.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Navbar />

      {/* Hero Section will go here next */}
      {/* <section
        id="home"
        className="text-center py-20 px-4 bg-gradient-to-r from-blue-100 to-blue-50"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Innovating Young Minds to Technology
        </h1>
        <p className="max-w-xl mx-auto text-lg mb-6">
          At <strong>meHub</strong>, we inspire children with future-ready tech
          skills in a fun, engaging, and practical way.
        </p>
        <a href="#register">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition">
            Register Your Child
          </button>
        </a>
      </section> */}
      <section id="home" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
          {/* Left: Text with gradient background */}
          <div className="md:w-1/2 bg-gradient-to-r from-blue-100 to-blue-50 rounded-l-2xl p-10 flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Innovating Young Minds to Technology
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              At <strong>meHub</strong>, we inspire children with future-ready
              tech skills in a fun, engaging, and practical way.
            </p>
            <a href="#register">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition">
                Register Your Child
              </button>
            </a>
          </div>

          {/* Right: Image with white background */}
          <div className="md:w-1/2 bg-white rounded-r-2xl p-6 flex justify-center items-center">
            <img
              src="/student2.png"
              alt="Students learning"
              className="rounded-xl shadow-md max-h-[400px] w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          What Your Child Will Learn
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>

      <section id="register" className="py-20 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Register Your Child for meHub Bootcamp
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Fill in the form below to secure a slot for your child. Limited
            seats available per term.
          </p>

          <RegisterForm />
        </div>
      </section>

      <footer className="bg-blue-600 text-white py-10 px-6 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h4 className="text-xl font-semibold mb-3">
              me<span className="text-white">Hub</span>
            </h4>
            <p className="text-sm">
              Empowering young minds with tech education for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:underline">
                  Courses
                </a>
              </li>
              <li>
                <a href="#register" className="hover:underline">
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
            <p className="text-sm">Phone: +2347065165630</p>
            <p className="text-sm">Email: info@mehub.ng</p>
            <p className="text-sm mt-2">
              <a
                href="https://wa.me/+2347065165630"
                target="_blank"
                className="underline hover:text-gray-200"
              >
                WhatsApp us →
              </a>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm mt-10 border-t border-blue-400 pt-4">
          &copy; {new Date().getFullYear()} meHub. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
