import { Link } from 'react-router-dom';

const ProjectCard = ({ data }) => {
  return (
    <Link
      to={`/project/${data.id}`}
      className="card masonry-item bg-base-200 hover:scale-105 transition-all cursor-pointer"
    >
      <figure className="aspect-video w-full">
        <img src={data.image} alt="" className="bg-base-300 w-full" />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{data.name}</h3>
        <div className="flex gap-1">
          {data.platform.map((item, index) => (
            <div key={index} className="badge badge-neutral badge-sm">
              {item}
            </div>
          ))}
        </div>
        <p className="text-sm">{data.sinopsys}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
