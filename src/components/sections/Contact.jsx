import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-full max-w-6xl p-6">
          <h2 className="text-5xl font-extrabold mb-12 text-center tracking-wider">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">CONTACT</span>{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">INFO</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Email Card (dark/glass horizontal) */}
            <div className="bg-[#071025]/90 backdrop-blur-sm rounded-xl shadow-[0_10px_30px_rgba(2,6,23,0.6)] p-6 flex items-center gap-6 border border-white/6 w-full min-h-[140px]">
              <div className="w-24 h-24 flex items-center justify-center bg-white/5 rounded-lg flex-shrink-0 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                </svg>
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-sm text-gray-300">jenishsuvariya12@gmail.com</p>
                <p className="text-sm text-gray-300">23dce118@charusat.edu.in</p>
              </div>
            </div>

            {/* Phone Card (dark/glass horizontal) */}
            <div className="bg-[#071025]/90 backdrop-blur-sm rounded-xl shadow-[0_10px_30px_rgba(2,6,23,0.6)] p-6 flex items-center gap-6 border border-white/6 w-full min-h-[140px]">
              <div className="w-24 h-24 flex items-center justify-center bg-white/5 rounded-lg flex-shrink-0 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-cyan-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.01l-2.2 2.21Z" />
                </svg>
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-sm text-gray-300">+91 8799200256</p>
              </div>
            </div>

            {/* Address removed per request - keeping Email, Phone, LinkedIn as three cards */}

            {/* LinkedIn Card (dark/glass horizontal) */}
            <div className="bg-[#071025]/90 backdrop-blur-sm rounded-xl shadow-[0_10px_30px_rgba(2,6,23,0.6)] p-6 flex items-center gap-6 border border-white/6 w-full min-h-[140px]">
              <div className="w-24 h-24 flex items-center justify-center bg-white/5 rounded-lg flex-shrink-0 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM9.75 16.5H7.5v-6h2.25v6zM8.625 9.75a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 16.5h-2.25v-3c0-.714-.006-1.63-1-1.63-.994 0-1.146.777-1.146 1.58v3.05H11.25v-6H13.5v.819c.294-.44 1.02-1.07 2.34-1.07 2.5 0 2.94 1.645 2.94 3.785v2.466z" />
                </svg>
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-sm text-blue-300 hover:underline">www.linkedin.com/in/jenish-suvariya-65a452299</a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
