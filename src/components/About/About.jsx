import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/1718039290714.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
                <img src={theme_pattern} alt="pattern"/>
        </div>
        <div className="about-sections">
                <div className="about-para">
                    <p className='text-shadow'>
                     I am a Full Stack Engineer with hands on experience in designing, developing, and deploying exterprise-level software solutions.
                     With 2+ years of experience in the tech industry, I have honed my skills in various technologies and frameworks, allowing me to create robust and scalable solutions.
                    </p>
                </div>
                <div className="about-skills">
                    {/* Logo marquee: two rows moving in opposite directions */}
                    <div className="logo-marquee" aria-hidden>
                        <div className="marquee-row marquee-left">
                            <div className="marquee-track">
                                {logosList().map((l, i) => (
                                    <div className="logo-item" key={`left-${i}`}>
                                        {l.src ? (
                                            <img src={l.src} alt={l.name} loading="lazy"/>
                                        ) : (
                                            <div className="logo-fallback">{l.fallback}</div>
                                        )}
                                    </div>
                                ))}
                                {logosList().map((l, i) => (
                                    <div className="logo-item" key={`left2-${i}`}>
                                        {l.src ? (
                                            <img src={l.src} alt={l.name} loading="lazy"/>
                                        ) : (
                                            <div className="logo-fallback">{l.fallback}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="marquee-row marquee-right">
                            <div className="marquee-track">
                                {logosList().map((l, i) => (
                                    <div className="logo-item" key={`right-${i}`}>
                                        {l.src ? (
                                            <img src={l.src} alt={l.name} loading="lazy"/>
                                        ) : (
                                            <div className="logo-fallback">{l.fallback}</div>
                                        )}
                                    </div>
                                ))}
                                {logosList().map((l, i) => (
                                    <div className="logo-item" key={`right2-${i}`}>
                                        {l.src ? (
                                            <img src={l.src} alt={l.name} loading="lazy"/>
                                        ) : (
                                            <div className="logo-fallback">{l.fallback}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </div>
  )
}

// Helper that returns the logos (url fallbacks use simple-icons via jsdelivr when available)
function logosList(){
    return [
        {name:'React', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg'},
        {name:'Vue.js', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vue-dot-js.svg'},
        {name:'Tailwind', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg'},
        {name:'SASS', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sass.svg'},
        {name:'Figma', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg'},
        {name:'Python', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg'},

        {name:'Node.js', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/node-dot-js.svg', fallback:'Node.js'},
        {name:'Nest.js', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nestjs.svg'},
        {name:'Fastify', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fastify.svg'},
        {name:'Express', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg'},
        {name:'Go', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/go.svg'},

        {name:'MongoDB', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg'},
        {name:'MyS  QL', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg'},
        {name:'Postgres', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg'},

        {name:'Mongoose', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongoose.svg'},
        {name:'Sequelize', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sequelize.svg'},
        {name:'Prisma', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/prisma.svg'},

        {name:'Docker', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg'},
        {name:'Kubernetes', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/kubernetes.svg'},
        {name:'Linux', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linux.svg'},

        {name:'AWS', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg'},
        {name:'Huawei Cloud', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/huawei.svg', fallback:'Huawei Cloud'},

        {name:'Git', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg'},
        {name:'GitHub', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg'},
        {name:'GitLab', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gitlab.svg'},
        {name:'GitHub Actions', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/githubactions.svg'},
        {name:'Expo', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/expo.svg'},
        {name:'MQTT', src:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mqtt.svg', fallback:'MQTT'},
    ]
}

export default About