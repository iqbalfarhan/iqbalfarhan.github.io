import { useState } from 'react';
import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

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
          <ProjectCard data={data} key={data.id} />
        ))}
      </div>
    </>
  );
};

export default ProjectPage;
