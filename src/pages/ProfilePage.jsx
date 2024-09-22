import { Flame } from 'lucide-react';
import { Database } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfilePage = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch('/json/skillData.json')
      .then((response) => response.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="flex-1 space-y-10">
          <h1 className="text-5xl font-bold">Salam kenal</h1>
          <p>
            Nama saya Iqbal Farhan Syuhada saya adalah seorang Web Developer dan
            Content Creator. Dengan keahlian dalam pengembangan web, saya
            berdedikasi untuk menciptakan solusi digital yang inovatif dan
            responsif. Saya juga senang berbagi pengetahuan dan pengalaman
            melalui konten-konten yang saya buat.
          </p>
        </div>
        <div className="flex-none">
          <div className="avatar">
            <div className="w-full md:w-48 rounded-lg mx-auto">
              <img src="iqbal.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {datas &&
          datas.map((item, index) => (
            <div className="card bg-base-200" key={index}>
              <div className="card-body space-y-4">
                <h3 className="card-title text-2xl flex-col md:flex-row items-center">
                  {index === 0 ? (
                    <CheckCircle className="stroke-accent fill-accent/30" />
                  ) : index == 1 ? (
                    <LayoutDashboard className="stroke-accent fill-accent/30" />
                  ) : index == 2 ? (
                    <Flame className="stroke-accent fill-accent/30" />
                  ) : (
                    <Database className="stroke-accent fill-accent/30" />
                  )}
                  <span>{item.name}</span>
                </h3>

                <div>{item.descriptions}</div>

                <table className="table bg-base-300 table-sm">
                  <tbody>
                    {item?.datas?.map((tech, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap">{tech.tech}</td>
                        <td className="w-[70%]">
                          <progress
                            className="progress progress-accent"
                            value={tech.value}
                            max="100"
                          ></progress>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProfilePage;
