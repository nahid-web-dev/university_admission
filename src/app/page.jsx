import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FaGraduationCap, FaFlask, FaLaptopCode, FaUsers } from 'react-icons/fa'

const HomePage = () => {
  const universityHighlights = [
    {
      icon: FaGraduationCap,
      title: "Academic Excellence",
      description: "Offering a wide range of programs in science, technology, and engineering.",
    },
    {
      icon: FaFlask,
      title: "Research Opportunities",
      description: "State-of-the-art laboratories and research centers for groundbreaking discoveries.",
    },
    {
      icon: FaLaptopCode,
      title: "Innovation Hub",
      description: "Fostering entrepreneurship and technological innovation among students.",
    },
    {
      icon: FaUsers,
      title: "Diverse Community",
      description: "A vibrant campus life with students from various backgrounds and cultures.",
    },
  ]

  return (
    <div className="min-h-svh relative flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className='bg-gradient-to-br from-teal-500 via-blue-500 to-purple-500 p-4 my-8 rounded-lg'>
          <h1 className="text-4xl font-bold text-center mb-4 text-white">
            Welcome to Mawlana Bhashani Science and Technology University
          </h1>
          <h2 className="text-2xl font-semibold text-center mb-2 text-white">
            Empowering Minds, Advancing Technology
          </h2>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">About MBSTU</h3>
          <p className="text-white mb-4">
            Mawlana Bhashani Science and Technology University (MBSTU) is a leading institution dedicated to advancing knowledge in science, technology, engineering, and mathematics. Founded with the vision of nurturing innovative minds, MBSTU has become a hub for cutting-edge research and technological breakthroughs.
          </p>
          <p className="text-white">
            Our commitment to academic excellence, coupled with state-of-the-art facilities, provides students with an unparalleled learning experience. At MBSTU, we believe in preparing our students not just for careers, but for leadership roles in shaping the future of technology and science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {universityHighlights.map((highlight, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg p-6 text-white">
              <highlight.icon className="text-4xl mb-4" />
              <h4 className="text-xl font-semibold mb-2">{highlight.title}</h4>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/about" className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full transition-all hover:from-blue-500 hover:to-teal-500">
            Learn More About Our Programs
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
