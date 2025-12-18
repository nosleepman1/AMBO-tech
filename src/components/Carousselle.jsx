import React from 'react';
import { Sparkles } from 'lucide-react';

const TechCarousel = () => {
  const technologies = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: '#777BB4' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', color: '#7952B3' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' },
    { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', color: '#007FFF' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', color: '#FF2D20' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: '#000000' },
    { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', color: '#E0234E' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg', color: '#326CE5' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#181717' },
    { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg', color: '#2088FF' },
    { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', color: '#009639' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: '#FF9900' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: '#4FC08D' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', color: '#DD0031' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000' },
    { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', color: '#CC6699' },
    { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg', color: '#8DD6F9' }
  ];

  // Dupliquer le tableau pour un défilement infini fluide
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="w-screen py-16 md:py-20 overflow-hidden" id="stack">
      <div className="mx-auto px-4  mb-12 md:mb-16 flex justify-center">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0FFCBE] mb-3">
            Stack Technique
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 ">
            Les technologies avec lesquelles nous créons vos solutions
          </p>
        </div>
      </div>
      <br/>

      {/* Carousel Container */}
      <div className="relative group">
        {/* Gradient Overlays - Same color as borders */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-5 bg-linear-to-r from-[#0FFCBE]/12 via-[#0FFCBE]/8 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-5 bg-linear-to-l from-[#0FFCBE]/12 via-[#0FFCBE]/8 to-transparent z-10" />

        {/* Carousel animé */}
        <div className="flex gap-6 sm:gap-8 md:gap-10 animate-scroll">
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="tech-card group shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-2 md:gap-3 border border-[#0FFCBE] hover:border-[#0FFCBE]/80 hover:scale-105 md:hover:scale-110 cursor-pointer"
              style={{
                animation: 'float 3s ease-in-out infinite',
                animationDelay: `${index * 1}s`
              }}
            >
              <div className="relative">
                <div 
                  className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-25 transition-opacity duration-300 rounded-full"
                  style={{ backgroundColor: tech.color }}
                />
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xs sm:text-xs md:text-sm font-semibold text-gray-300 group-hover:text-[#0FFCBE] transition-colors text-center px-1 md:px-2 line-clamp-2">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <br/>

      {/* Deuxième rangée en sens inverse */}
      <div className="relative mt-10 md:mt-14 group">
        {/* Gradient Overlays - Same color as borders */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-5 bg-linear-to-r from-[#0FFCBE]/12 via-[#0FFCBE]/8 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-5 bg-linear-to-l from-[#0FFCBE]/12 via-[#0FFCBE]/8 to-transparent z-10" />

        <div className="flex gap-6 sm:gap-8 md:gap-10 animate-scroll-reverse">
          {duplicatedTechs.reverse().map((tech, index) => (
            <div
              key={`reverse-${tech.name}-${index}`}
              className="tech-card group shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-2 md:gap-3 border border-[#0FFCBE] hover:border-[#0FFCBE]/80 hover:scale-105 md:hover:scale-110 cursor-pointer"
              style={{
                animation: 'float 3s ease-in-out infinite',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative">
                <div 
                  className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-25 transition-opacity duration-300 rounded-full"
                  style={{ backgroundColor: tech.color }}
                />
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xs sm:text-xs md:text-sm font-semibold text-gray-300 group-hover:text-[#0FFCBE] transition-colors text-center px-1 md:px-2 line-clamp-2">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>



      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-scroll {
          animation: scroll 50s linear infinite;
          width: fit-content;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 50s linear infinite;
          width: fit-content;
        }

        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }

        .tech-card {
          position: relative;
          overflow: hidden;
        }

        .tech-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, #0FFCBE, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tech-card:hover::before {
          opacity: 1;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .animate-scroll,
          .animate-scroll-reverse {
            animation-duration: 55s;
          }
        }
      `}</style>
    </div>
  );
};

export default TechCarousel;