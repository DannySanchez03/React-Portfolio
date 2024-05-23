import pic from '../assets/me.jpg';

export default function Footer() {
    return (
    <div className="MT d-flex flex-column align-items-center justify-content-center bodyBg" id="about-me">
        <div>
            <img src={pic} alt="A photo of me :)" className='img-fluid me-pic'/>
        </div>
        <p className="inside-text gradient-text">
            Hey there, I'm Danny, and it is my pleasure to welcome you to my website. 
            Allow me to provide an introduction, currently cruising through a Bachelor's Degree in Computer science at The Texas Rio Grande Valley (UTRGV), 
            I'm twenty years old and proudly stand as a senior, advancing steadily towards my academic goals. 
            Within my family, my older brother conquered the mechanical engineering world and a sister who has flourished within the domain of marketing. 
            Their successes serve as inspiration as I chart my own course in the realm of technology! 

            Now, what's cooking on my plate? 💻Well, I've got my boots on the ground at a FullStack Software Engineer bootcamp with UTSA, 
            a commitment I undertake with dedication. My aspiration is to cultivate an expertise in software engineering, 
            driven by a desire to provide support to those closest to me. 

            Currently, i'm on the hunt for internship that'll let me dive deep into the data-driven world of computer science or 
            flex my muscles as a software engineer (front-end or back-end, you name it!).
            🚀I'm steering clear of anything too AI-heavy for now, but hey, if the chance to dabble in the AI realm pops up, count me in for the adventure!


            As for my coding toolkit, it's a work in progress. 
            I've dabbled in C++ and Java during the UTRGV days, with Java and all its OOP goodness stealing the spotlight. 
            Fast forward to now, I'm grooving with JavaScript, HTML, CSS, and strutting my stuff in the Node.js runtime environment. 
            MERN stack? You betcha, I can whip up a storm with Mongoose, Express, React, and Node! 

            So, who's ready to join me on this epic coding quest? No? Hear me out with this speech of Lorem ipsum: 
            psum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestias eaque asperiores nemo quasi sint aliquam minus consequatur dolorum corporis consequuntur quas ducimus 
            explicabo aliquid quisquam repudiandae dolorem odio, nostrum tempore! Lorem.
        </p>
    </div>
    );
  }