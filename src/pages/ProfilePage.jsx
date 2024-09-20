import { Flame } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';

const ProfilePage = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="flex-1 space-y-10">
          <h1 className="text-5xl font-bold">Hallo</h1>
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
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">
              <LayoutDashboard className="stroke-accent fill-accent/30" />
              <span>Frontend Developer</span>
            </h3>

            <p>
              Membangun antarmuka multi platform web dan mobile menggunakan
              ReactJS, React Native, dan Laravel, untuk pengalaman yang mulus di
              berbagai perangkat.
            </p>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">
              <Flame className="stroke-secondary fill-secondary/30" />
              Backend Developer
            </h3>

            <p>
              Mengembangkan sistem backend yang efisien dan skalabel menggunakan
              PHP, JavaScript, dan Go, memastikan performa yang optimal dan
              keamanan data.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
