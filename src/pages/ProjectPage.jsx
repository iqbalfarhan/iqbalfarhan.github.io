import { useState } from 'react';
import { useEffect } from 'react';

const ProjectPage = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch('/json/projectData.json')
      .then((response) => response.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <>
      <h1 className="text-5xl font-bold">Portofolioku</h1>
      <p>
        Berikut ini adalah beberapa project yang telah saya kerjakan secara
        individu maupun dengan kelompok saya. silakan dilihat2 siapa tau
        tertarik.
      </p>

      <div className="masonry">
        {datas.map((data) => (
          <div
            className="card masonry-item bg-base-200 hover:scale-105 transition-all cursor-pointer"
            key={data.id}
          >
            <figure className="aspect-video w-full">
              <img src={data.image} alt="" className="bg-base-300 w-full" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{data.name}</h3>
              <p className="text-sm">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectPage;
