import Resume from '../assets/Resume 2024.pdf'

export default function Footer() {
    return (
    <div className="" id="resume">
        <h2 >Skills</h2>
        <ul>
            <li>- C++</li>
            <li>- Exposure to Advanced Data Structures, From Linked List - Up to examples of Acrylic Graphs in C++</li>
            <li>- Java</li>
            <li>- SQLite: DB Browser</li>
            <li>- JavaScript/HTML/CSS</li>
            <li>- SQL: MySQL</li>
            <li>- NoSQL: MongoDB</li>
            <li>- MERN Stack Applications</li>
            <li>- Familiar with CRUD operations and RESTful API'S</li>
            <li>- Familiar with GraphQL and Insomnia</li>
            <li>- Git version controls</li>
            <li>- <a href={Resume}>Word Resume Here</a></li>
        </ul>
    </div>
    );
  }