import FeatureCard from '@/components/FeatureCard'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {
  FaRobot,
  FaEnvelope,
  FaChartBar,
  FaGraduationCap,
  FaFileAlt,
  FaTicketAlt,
  FaCalendarAlt,
  FaUserGraduate,
  FaComments,
} from "react-icons/fa"

const AboutPage = () => {
  const features = [
    {
      icon: FaRobot,
      title: "Admission Process Automation",
      description: "Streamline your application with our automated system.",
      isNew: true,
    },
    {
      icon: FaEnvelope,
      title: "Automated Email Notifications",
      description: "Stay updated with timely email alerts about your application status.",
      isNew: true,
    },
    {
      icon: FaChartBar,
      title: "Analytics for Admins",
      description: "Powerful insights to manage admissions effectively.",
    },
    {
      icon: FaGraduationCap,
      title: "Scholarship Eligibility Checker",
      description: "Find out if you qualify for scholarships with our easy-to-use tool.",
    },
    {
      icon: FaFileAlt,
      title: "AI-Powered Resume & CV Analysis",
      description: "Get instant feedback on your application documents.",
      isNew: true,
    },
    {
      icon: FaTicketAlt,
      title: "Auto-Generated Exam Hall Tickets",
      description: "Receive your exam hall ticket automatically upon successful application.",
    },
    {
      icon: FaCalendarAlt,
      title: "Interactive Admission Calendar",
      description: "Stay on top of important dates and deadlines with our dynamic calendar.",
      isNew: true,
    },
    {
      icon: FaUserGraduate,
      title: "Virtual Campus Tours",
      description: "Explore our campus from anywhere with immersive 360° virtual tours.",
    },
    {
      icon: FaComments,
      title: "Live Chat Support",
      description: "Get real-time assistance from our admissions team through our live chat feature.",
    },
  ]
  return (
    <div className="min-h-svh relative flex flex-col">
      <div className=' absolute top-0 left-0 w-full'></div>
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className='bg-gradient-to-br from-teal-400 via-blue-400 to-purple-500 p-4 my-8 rounded-lg'>
          <h1 className="text-4xl font-bold text-center mb-4 text-white">
            Mawlana Bhashani Science and Technology University (MBSTU)
          </h1>
          <h2 className="text-2xl font-semibold text-center mb-2 text-white">University Admission Management System</h2>
          <div className="text-center mb-8">
            <span className="inline-block bg-white text-purple-900 px-4 py-2 rounded-full font-bold text-lg">
              Project Features
            </span>
          </div>
        </div>
        <div className="grid bg-gradient-to-br rounded-lg p-2 sm:p-6 from-blue-400 to-purple-400 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="mt-12 text-center text-white">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-purple-400 to-blue-400 mb-4">Why Choose MBSTU?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" rounded-lg shadow-lg  bg-gradient-to-br from-blue-400 to-purple-400 text-white p-6 text-center">
              <h4 className="text-xl font-semibold mb-2">Excellence in Education</h4>
              <p className="">
                MBSTU is committed to providing high-quality education and fostering innovation in science and
                technology.
              </p>
            </div>
            <div className=" rounded-lg shadow-lg  bg-gradient-to-br from-blue-400 to-purple-400 text-white p-6 text-center">
              <h4 className="text-xl font-semibold mb-2">State-of-the-Art Facilities</h4>
              <p className="">
                Our campus boasts modern laboratories, libraries, and research centers to support your academic journey.
              </p>
            </div>
          </div>
        </div>
      </main>


      <Footer />
    </div>
  )
}

export default AboutPage
