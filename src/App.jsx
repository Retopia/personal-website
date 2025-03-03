import { Github, Linkedin, Mail, FileText, Instagram } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <header className="bg-gray-800 shadow py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-50 mb-4">Preston Tang</h1>
          <p className="text-xl text-gray-300">
            Computer Science Student @ New York University
          </p>
          <div className="flex items-center gap-4 mt-6 pl-1">
            <a href="https://github.com/Retopia" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-all hover:-translate-y-0.5">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/preston-tang" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-all hover:-translate-y-0.5">
              <Linkedin size={24} />
            </a>
            <a href="http://instagram.com/prestontangg" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-all hover:-translate-y-0.5">
              <Instagram size={24} />
            </a>
            <a href="mailto:prestonltang@nyu.edu" className="text-gray-300 hover:text-blue-400 transition-all hover:-translate-y-0.5">
              <Mail size={24} />
            </a>
          </div>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm font-medium mt-8 transition-colors">
            View Resume
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-50 mb-8 mt-0">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a Computer Science student at NYU passionate about web development and AI
            <br />
            Currently working part time as a teaching assistant for Applied Internet Technology (CSCI-UA 467)
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-50 mb-8 mt-0">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <a href="https://eplanner.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-gray-700 rounded-lg p-6 transition-transform hover:-translate-y-1 block cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-50 mb-2">ePlanner</h3>
              <p className="text-gray-300 mb-4">
                Event planning website
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 text-white text-sm py-1 px-3 rounded">React</span>
                <span className="bg-blue-600 text-white text-sm py-1 px-3 rounded">Express</span>
                <span className="bg-blue-600 text-white text-sm py-1 px-3 rounded">MongoDB</span>
                <span className="bg-blue-600 text-white text-sm py-1 px-3 rounded">Google OAuth</span>
              </div>
            </a>

            {/* Project Card 2 */}
            <a href="https://github.com/Retopia/Aegis" target="_blank" rel="noopener noreferrer" className="bg-gray-700 rounded-lg p-6 transition-transform hover:-translate-y-1 block cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-50 mb-2">Aegis</h3>
              <p className="text-gray-300 mb-4">
                Compact desktop application to secure your files and photos
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 text-white text-sm py-1 px-3 rounded">Java</span>
                <span className="bg-blue-600 text-white text-sm py-1 px-3 rounded">JavaFX</span>
                <span className="bg-blue-600 text-white text-sm py-1 px-3 rounded">Java Security API</span>
              </div>
            </a>

            {/* Project Card 3 */}
            <a href="https://github.com/Retopia/Evolutionary-Boids" target="_blank" rel="noopener noreferrer" className="bg-gray-700 rounded-lg p-6 transition-transform hover:-translate-y-1 block cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-50 mb-2">Evolutionary Boids</h3>
              <p className="text-gray-300 mb-4">
                2D simulated ecosystem
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 text-white text-sm py-1 px-3 rounded">Python</span>
                <span className="bg-blue-600 text-white text-sm py-1 px-3 rounded">Pygame</span>
              </div>
            </a>

            {/* Project Card 4 */}
            <a href="https://github.com/Retopia/Flappy-Bird-Neuroevolution" target="_blank" rel="noopener noreferrer" className="bg-gray-700 rounded-lg p-6 transition-transform hover:-translate-y-1 block cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-50 mb-2">Flappy Bird Neuroevolution</h3>
              <p className="text-gray-300 mb-4">
                Teaching AI to play flappy bird using Neuroevolution
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 text-white text-sm py-1 px-3 rounded">Java</span>
                <span className="bg-blue-600 text-white text-sm py-1 px-3 rounded">JavaFX</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-50 mb-8 mt-0">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
            <div>
              <h3 className="mb-2 font-semibold text-gray-50">Languages</h3>
              <ul className="list-none p-0 m-0 text-gray-300">
                <li className="mb-1">JavaScript</li>
                <li className="mb-1">Python</li>
                <li className="mb-1">Java</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-50">Frameworks</h3>
              <ul className="list-none p-0 m-0 text-gray-300">
                <li className="mb-1">React</li>
                <li className="mb-1">Node.js</li>
                <li className="mb-1">Express</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-50">Tools</h3>
              <ul className="list-none p-0 m-0 text-gray-300">
                <li className="mb-1">Git</li>
                <li className="mb-1">Docker</li>
                <li className="mb-1">Google Cloud Platform</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-50">Databases</h3>
              <ul className="list-none p-0 m-0 text-gray-300">
                <li className="mb-1">SQL</li>
                <li className="mb-1">MongoDB</li>
                <li className="mb-1">Redis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8 px-4 text-gray-300">
        <div className="flex flex-col md:flex-row justify-center md:justify-center items-center gap-4 md:gap-8 mx-auto max-w-lg md:max-w-4xl w-full">
          <p className="md:text-center text-left">© 2025 Preston Tang. Built with React.</p>
          <a href="mailto:prestonltang@nyu.edu" className="md:text-center text-left text-gray-300 hover:text-blue-400 transition-colors">prestonltang@nyu.edu</a>
          <a href="https://www.linkedin.com/in/preston-tang" target="_blank" rel="noopener noreferrer" className="md:text-center text-left text-gray-300 hover:text-blue-400 transition-colors">linkedin.com/in/preston-tang</a>
          <a href="https://github.com/Retopia" target="_blank" rel="noopener noreferrer" className="md:text-center text-left text-gray-300 hover:text-blue-400 transition-colors">github.com/Retopia</a>
        </div>
      </footer>
    </div>
  );
}

export default App;