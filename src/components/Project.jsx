export default function Project(Name, image,) {
    return (
    <div className="" id="project">
        <img src={image} className="img-fluid" alt="">
            <h3>This is {Name}</h3>
        </img>
    </div>
    );
  }