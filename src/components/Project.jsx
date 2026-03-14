export default function Project(props) {
  const [href, imageSrc, title, type] = props.project;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="dsProjectCard"
    >
      <div className="dsProjectMedia">
        <img src={imageSrc} alt={title} className="dsProjectImg" loading="lazy" />
      </div>
      <div className="dsProjectOverlay">
        <div className="dsProjectMeta">
          <div className="dsProjectTitle">{title}</div>
          <div className="dsProjectTag">{type}</div>
        </div>
        <div className="dsProjectCta">View project</div>
      </div>
    </a>
  );
  }
