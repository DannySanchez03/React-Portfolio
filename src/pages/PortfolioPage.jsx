import c1 from '../assets/1Challenge.png';
import c2 from '../assets/2Challenge.png';
import c3 from '../assets/3Challenge.png';
import c4 from '../assets/4Challenge.png';
import c5 from '../assets/5Challenge.png';
import c6 from '../assets/6Challenge.png';
import c7 from '../assets/7Challenge.png';
import c8 from '../assets/8Challenge.png';
import c9 from '../assets/9Challenge.png';
import c10 from '../assets/10Challenge.png';
import c11 from '../assets/11Challenge.png';
// import c12 from '../assets/12Challenge.png';
import c13 from '../assets/13Challenge.png';
// import c14 from '../assets/14Challenge.png';
import c15 from '../assets/15Challenge.png';
import c16 from '../assets/16Challenge.png';
import c17 from '../assets/17Challenge.png';
import c18 from '../assets/18Challenge.png';
// import c19 from '../assets/19Challenge.png';
import c20 from '../assets/20Challenge.png';

import Project from '../components/Project';
const project = [
    [
        "https://dannysanchez03.github.io/SEO/",
        c1,
        'SEO',
        'Solo'
    ],
    [
        "https://dannysanchez03.github.io/Noob-Portfolio/",
        c2,
        '1st Portfolio',
        'Solo'
    ],
    [
        "https://dannysanchez03.github.io/Password-Generator/",
        c3,
        'Password Generator',
        'Solo'
    ],
    [
        "https://dannysanchez03.github.io/API-Quiz/",
        c4,
        'JavaScript Quiz',
        'Solo'
    ],
    [
        "https://dannysanchez03.github.io/Work-Day-Scheduler/",
        c5,
        'Work Planner',
        'Solo'
    ],
    [
        "https://dannysanchez03.github.io/Weather-API/",
        c6,
        'Weather API',
        'Solo'
    ],
    [
        "https://shaneleejohnson.github.io/Star-Wars-Trivia/",
        c7,
        'Star Wars Trivia',
        'Group'
    ],
    [
        "https://github.com/DannySanchez03/README.md-Generator",
        c8,
        'Markdown Generator',
        'Solo'
    ],
    [
        "https://github.com/DannySanchez03/SVG-Logo-Maker",
        c9,
        'Logo Maker',
        'Solo'
    ],
    [
        "https://my-note-taker-app-hehe-c865ff4718a5.herokuapp.com/",
        c10,
        'Social Notes App',
        'Solo'
    ],
    [
        "https://github.com/DannySanchez03/Employee-Database",
        c11,
        'Employee Database App',
        'Solo'
    ],
    // [
    //     "",
    //     c12,
    //     'project 12',
    //     'Solo'
    // ],
    [
        "https://tech-blog-post-b2375f543ec7.herokuapp.com/",
        c13,
        'Online Chat for Techies',
        'Solo'
    ],
    // [
    //     "",
    //     c14,
    //     'project 14',
    //     'Solo'
    // ],
    [
        "https://github.com/DannySanchez03/RegExTutroial",
        c15,
        'A Regular Expression',
        'Solo'
    ],
    [
        "https://github.com/DannySanchez03/Thoughts",
        c16,
        'Insomnia Thoughts',
        'Solo'
    ],
    [
        "https://gdb-text-editor.onrender.com/",
        c17,
        'Offline Text Editor',
        'Solo'
    ],
    [
        "https://my-react-portfolio-dsp-2024.netlify.app/",
        c18,
        'Your looking at it',
        'Solo'
    ],
    // [
    //     "",
    //     c19,
    //     'project 19',
    //     'Solo'
    // ],
    [
        "https://whisper-kv3n.onrender.com/",
        c20,
        'Online Chat Room',
        'Group'
    ],
];
export default function portfolioPage() {
    return (
    <div className="container MLR" id="portfolio">
        <div className="row">
            {project.map((project, index) => (
            <div key={index} className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <Project project={project} />
            </div>
            ))}
        </div>
    </div>
    );
  }