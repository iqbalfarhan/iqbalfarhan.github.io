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
      <h1 className="text-5xl font-bold">Portofolio</h1>
      <p>
        Berikut adalah beberapa proyek yang telah saya kerjakan, baik secara
        individu maupun dalam kelompok. Silakan dilihat, semoga dapat menarik
        perhatian Anda.
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
