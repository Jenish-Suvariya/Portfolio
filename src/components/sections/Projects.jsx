import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> AI Resume Analyzer</h3>
              <p className="text-gray-400 mb-4">
                AI Resume Analyzer is a full-stack web application developed using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB that enables users to upload and analyze resumes efficiently. The platform includes secure user authentication, resume management, and cloud-based file upload functionality. It also integrates AI-based resume evaluation to provide personalized feedback and suggestions, helping users improve their resumes and enhance job application quality.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">JobDekho</h3>
              <p className="text-gray-400 mb-4">
                Job Dekho is a full-stack job portal web application developed using React.js, Node.js, Express.js, and MongoDB that connects job seekers with recruiters. The platform allows recruiters to post and manage job listings, while users can search and apply for jobs through an interactive interface. It includes secure authentication, role-based access, job application management, and cloud-based resume handling to provide a seamless recruitment experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Node.js", "Express.js", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">CricTime</h3>
              <p className="text-gray-400 mb-4">
                Gully Cricket is a cross-platform Flutter application developed using Dart that provides an interactive cricket scoring and match management experience. The application supports multiple platforms including Android, iOS, Web, Windows, Linux, and macOS. It includes features such as ball-by-ball score tracking, match summaries, player statistics, and real-time game management to enhance the overall cricket scoring experience for users.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Flutter", "Dart", "Android", "iOS", "Web"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">MedCheckMate</h3>
              <p className="text-gray-400 mb-4">
                MedCheckMate is a full-stack healthcare web application developed using React.js, Tailwind CSS, Node.js, Express.js, MongoDB, and XGBoost that helps users search medicines and access detailed medical information efficiently. The platform provides medicine descriptions, usage details, and storage condition categorization such as normal temperature or cold storage. It also integrates an XGBoost-based machine learning model to analyze medicine-related data and deliver smarter healthcare insights through an interactive and user-friendly interface.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "XGBoost"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
