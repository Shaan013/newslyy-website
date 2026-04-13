import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-black">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 glassmorphism">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-bold text-newslyy-yellow tracking-tight">
            <Image
              src="/app_icon_without_bg.png"
              alt="Newslyy icon"
              width={48}
              height={48}
              className="object-contain"
            />
            Newslyy
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition">
              Features
            </a>
            <a href="https://github.com/Shaan013" 
                              target="_blank"
                  rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition">
              GitHub
            </a>
            <a
              href="/newslyy.apk"
              download
              className="px-6 py-2 bg-newslyy-yellow text-black font-semibold rounded-full hover:bg-yellow-300 transition yellow-glow-hover"
            >
              Download APK
            </a>
          </div>
          <div className="md:hidden">
            <a
              href="/newslyy.apk"
              download
              className="px-4 py-2 bg-newslyy-yellow text-black font-semibold rounded-full text-sm"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-newslyy-yellow/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            The News You Need,{' '}
            <span className="text-newslyy-yellow">Styled for You</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Experience global news curated with sophisticated design, smooth interactions, and instant updates.
            Newslyy combines premium UX with real-time journalism.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/newslyy.apk"
              download
              className="px-8 py-4 bg-newslyy-yellow text-black font-bold rounded-full hover:bg-yellow-300 transition yellow-glow-hover text-lg"
            >
              ↓ Download APK
            </a>
            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glassmorphism text-white font-semibold rounded-full hover:bg-white/10 transition border border-white/20"
            >
              View Source
            </a> */}
          </div>

          {/* Mobile Mockup */}
          <div className="mt-12 flex justify-center">
            <div className="relative w-80 h-auto">
              <div className="relative glass-effect rounded-3xl overflow-hidden shadow-2xl border border-newslyy-yellow/20">
                <div className="bg-gradient-to-b from-newslyy-yellow/10 to-black/50 p-3">
                  <div className="bg-black rounded-2xl overflow-hidden aspect-[9/16]">
                    <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center p-4">
                      <div className="relative w-16 h-16 mb-4">
                        <Image
                          src="/app_icon_without_bg.png"
                          alt="Newslyy icon"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-white text-center text-sm">
                        <span className="text-newslyy-yellow font-bold">Newslyy</span>
                      </p>
                      <p className="text-gray-400 text-xs mt-2">Download to see the magic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 px-4 bg-gradient-to-b from-black via-gray-900/20 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Packed with <span className="text-newslyy-yellow">Features</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to stay informed with style.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🌍',
                title: 'Real-Time Global News',
                description: 'Integration with newsapi.org delivers breaking news from around the world, instantly updated.',
              },
              {
                icon: '📂',
                title: 'Filter by Category',
                description: 'Choose Business, Entertainment, Technology, and more so you only see what matters to you.',
              },
              {
                icon: '🔎',
                title: 'Secret Topic Search',
                description: 'Search for hidden topics and uncover stories using powerful keyword discovery.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="glassmorphism p-8 rounded-2xl hover:bg-white/8 transition group cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Install Section */}
      <section id="install" className="py-20 md:py-32 px-4 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-newslyy-yellow/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How to Install
            </h2>
            <p className="text-gray-400 text-lg">Get Newslyy running in minutes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Download the APK',
                description: 'Click the download button and save the newslyy.apk file to your device.',
              },
              {
                step: '2',
                title: 'Enable Unknown Sources',
                description: 'Go to Settings > Security > Enable "Install from Unknown Sources".',
              },
              {
                step: '3',
                title: 'Launch Newslyy',
                description: 'Open the APK file and follow the installation prompts. Start reading!',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-newslyy-yellow text-black rounded-full flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/newslyy.apk"
              download
              className="inline-block px-10 py-4 bg-newslyy-yellow text-black font-bold rounded-full hover:bg-yellow-300 transition yellow-glow-hover text-lg"
            >
              Download APK Now
            </a>
          </div>
        </div>
      </section>

      {/* Progress Notice Section */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-black via-gray-900/20 to-black">
        <div className="max-w-5xl mx-auto text-center glassmorphism p-10 rounded-3xl border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            This App Is Still in Progress
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Newslyy is an evolving experience. You can currently filter news by category and search for secret topics, with more premium features coming soon.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-newslyy-yellow font-semibold mb-2">Live Today</p>
              <p className="text-gray-400 text-sm">Category filtering for Business, Entertainment, Technology, General, and more.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-newslyy-yellow font-semibold mb-2">Secret Topic Search</p>
              <p className="text-gray-400 text-sm">Discover stories with hidden keyword search and custom topic discovery.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-newslyy-yellow font-semibold mb-2">Upcoming</p>
              <p className="text-gray-400 text-sm">More features are on the way—this is not the final app yet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-newslyy-yellow mb-2">Newslyy</h3>
              <p className="text-gray-400">Premium news experience, beautifully designed.</p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-4">
              <div className="flex gap-4">
                <a
                  href="https://github.com/Shaan013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-newslyy-yellow transition"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/shaan-patel-609879271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-newslyy-yellow transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              Designed and Developed by <span className="text-newslyy-yellow font-semibold">Shaan</span>
            </p>
            <p className="text-gray-600 text-xs mt-2">© 2026 Newslyy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
