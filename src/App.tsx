import React from 'react';
import { Github, Linkedin, Mail, Bot, Code2, Database, Brain, ChevronDown, ExternalLink, Smartphone, Quote } from 'lucide-react';

function App() {
  const testimonials = [
    {
      id: 1,
      name: "Henna Nashville",
      role: "CEO at Henna Nashville",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      content: "An exceptional developer who brings technical excellence and innovation to every project. Their integration of AI solutions has transformed our application's capabilities."
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Product Manager at InnovateLabs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      content: "Working with them was a game-changer for our startup. Their full-stack expertise and AI implementation skills helped us launch our product ahead of schedule."
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Founder at DataFlow",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      content: "Their ability to bridge complex technical challenges with elegant solutions is remarkable. The mobile app they developed for us exceeded our expectations."
    },
    {
      id: 4,
      name: "David Park",
      role: "CEO at MobileFirst",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      content: "The mobile applications they developed exceeded our expectations in terms of performance and user experience. A true professional who delivers excellence."
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Director at AITech",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
      content: "Their deep understanding of AI integration and technical architecture helped us create a groundbreaking product. Highly recommended for complex projects."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-white text-slate-800">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col justify-center items-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Sean Khatiwada
          </h1>
          <h3 className="text-5xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Full Stack Developer & AI Enthusiast
          </h3>
          <p className="text-xl md:text-2xl text-slate-600 mb-8">
            Bridging the gap between human creativity and artificial intelligence
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="#" className="p-2 text-slate-600 hover:text-indigo-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 text-slate-600 hover:text-indigo-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-2 text-slate-600 hover:text-indigo-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <a href="#about" className="animate-bounce inline-block text-slate-400">
            <ChevronDown size={32} />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">About Me</h2>
          <div className="bg-white/80 rounded-lg p-8 shadow-lg backdrop-blur-sm border border-slate-200">
            <p className="text-lg text-slate-600 mb-6">
              With over 7 years of experience in software development, I specialize in creating innovative full-stack web applications and mobile solutions. My passion lies in leveraging cutting-edge AI technologies to transform conventional applications into intelligent, interactive experiences across all platforms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Code2 className="mx-auto mb-4 text-indigo-600" size={32} />
                <h3 className="font-semibold mb-2 text-slate-800">Full Stack Development</h3>
                <p className="text-slate-600">Modern web applications with scalable architectures</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Smartphone className="mx-auto mb-4 text-emerald-600" size={32} />
                <h3 className="font-semibold mb-2 text-slate-800">Mobile Development</h3>
                <p className="text-slate-600">Native and cross-platform mobile applications</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Bot className="mx-auto mb-4 text-purple-600" size={32} />
                <h3 className="font-semibold mb-2 text-slate-800">AI Integration</h3>
                <p className="text-slate-600">Building intelligent systems with AI agents</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Database className="mx-auto mb-4 text-pink-600" size={32} />
                <h3 className="font-semibold mb-2 text-slate-800">Database Architecture</h3>
                <p className="text-slate-600">Optimized data structures and efficient queries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-100 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="bg-white rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                <img 
                  src={`https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800`} 
                  alt="Project Preview" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">AI-Powered Project Manager</h3>
                  <p className="text-slate-600 mb-4">An intelligent project management system using AI agents for task automation and smart notifications.</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">AI</span>
                  </div>
                  <a href="#" className="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-700">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Client Testimonials</h2>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
              <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="bg-white p-6 rounded-lg shadow-lg relative flex-shrink-0"
                    style={{ width: '350px' }}
                  >
                    <Quote className="absolute top-4 right-4 text-indigo-100" size={32} />
                    <div className="mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100"
                      />
                    </div>
                    <p className="text-slate-600 mb-4 italic relative">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-slate-800">Let's Connect</h2>
          <p className="text-xl text-slate-600 mb-8">
            Interested in collaborating or have a project in mind?
          </p>
          <a 
            href="mailto:your.email@example.com" 
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors"
          >
            Get in Touch
            <Mail size={20} className="ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 border-t border-slate-200">
        <p>© {new Date().getFullYear()} Sean Khatiwada</p>
      </footer>
    </div>
  );
}

export default App;