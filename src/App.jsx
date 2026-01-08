import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                StoreHub
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#demo" className="text-gray-700 hover:text-blue-600 transition-colors">Demo</a>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
                🚀 Transform Your GitHub Repos
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              From GitHub to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Live Preview
              </span>
              <br />
              in Seconds
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              StoreHub automatically builds your GitHub repositories and provides instant live previews. 
              Perfect for showcasing projects, testing deployments, and impressing stakeholders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Start Building Now
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 hover:border-blue-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="mt-16 animate-slide-up">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto border border-gray-200">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm text-green-400">
                  <p className="mb-2">$ storehub deploy github.com/user/awesome-project</p>
                  <p className="text-gray-500">→ Cloning repository...</p>
                  <p className="text-gray-500">→ Installing dependencies...</p>
                  <p className="text-gray-500">→ Building project...</p>
                  <p className="text-blue-400">✓ Build successful!</p>
                  <p className="text-purple-400">🌐 Live preview: https://awesome-project.storehub.dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Development
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to showcase your projects professionally
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-700">
                Deploy and preview your projects in seconds. Our optimized build pipeline ensures rapid turnaround times.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Secure & Reliable</h3>
              <p className="text-gray-700">
                Enterprise-grade security with isolated build environments. Your code and deployments are always protected.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Multi-Framework</h3>
              <p className="text-gray-700">
                Support for React, Vue, Angular, Next.js, and more. Works with any modern web framework out of the box.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple Three-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your project live in minutes, not hours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg animate-float">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Connect Repository</h3>
              <p className="text-gray-600">
                Simply paste your GitHub repository URL. StoreHub automatically detects your project configuration.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg animate-float-delay-1">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Automatic Build</h3>
              <p className="text-gray-600">
                Our intelligent build system installs dependencies and builds your project with zero configuration.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg animate-float-delay-2">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Live Preview</h3>
              <p className="text-gray-600">
                Get a shareable live preview URL instantly. Perfect for demos, testing, and presentations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of developers who trust StoreHub for their deployment previews
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="text"
                placeholder="github.com/username/repository"
                className="w-full sm:w-96 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Deploy Now
              </button>
            </div>
            <p className="text-sm mt-4 opacity-75">No credit card required • Free tier available</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="text-xl font-bold">StoreHub</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transform your GitHub repositories into live previews instantly.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 StoreHub. Built with ❤️ for developers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
