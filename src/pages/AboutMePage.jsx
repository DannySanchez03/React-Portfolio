import pic from '../assets/me.jpg';

export default function Footer() {
    return (
    <div className="MT d-flex flex-column align-items-center justify-content-center bodyBg" id="about-me">
        <div>
            <img src={pic} alt="A photo of me :)" className='img-fluid me-pic'/>
        </div>
        <p className="inside-text gradient-text">
            Hey, Im Danny, and Welcome to my Website. Let's see where to start 🤔, 
            I am currently pursuing a Bachelor's Degree in Computer Science at The University of Texas Rio Grande Valley(UTRGV). 
            I am currently 20 years old and a Senior, 
            I have 1 older brother who graduated as a Mechanical Enginner and 1 older sister that graduated as a Marketing major. 
            At the time of making of this Website or portfolio I am currently enrolled at a FullStack Software Engineer bootcamp with UTSA. 
            I am really trying to push myself to become a good Software Enginner so I can support the people closest to me. 
            I am currently open and looking for internships either related to Computer Science with having to do with data or 
            any type of positions for a Software Engineer (front-end or back-end)(preferably).
            I'd like to stay away from anything that requires a foundation of knowing AI, 
            since at the moment I know nothing about it, 
            but if the opportunity presents itself then I'd love to learn about it from any work or internship that comes my way.
            At the moment I dont know many coding languages, I am just familiar with C++ and Java from which C++ was the language we had to use for our studies at UTRGV,
            then I picked up Java and OOP for Java at UTRGV as a course, 
            and now I am familiar with JavaScript along with learning HTML, CSS, and the Node.js runtime environment, being able to setup a MERN (Mongoose, Express, React, Node) stack application.
            For now enjoy this speech of Lorem ipsum: 
            ipsum dolor sit amet consectetur adipisicing elit. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestias eaque asperiores nemo quasi sint aliquam minus consequatur dolorum corporis consequuntur quas ducimus 
            explicabo aliquid quisquam repudiandae dolorem odio, nostrum tempore!Lorem
        </p>
    </div>
    );
  }