import { Flame } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';

const ProfilePage = () => {
  return (
    <>
      <div className="flex gap-10">
        <div className="flex-1 space-y-10">
          <h1 className="text-5xl font-bold">Hallo</h1>
          <p>
            Hallo perkenalkan nama saya iqbal farhan syuhada. saya seorang web
            developer dan juga seorang content creator baru. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Facere quos odio eum corrupti
            at non! Rem, pariatur odio tempore ratione sapiente voluptates! Sunt
            nostrum, veritatis doloremque eveniet quibusdam facilis esse.
          </p>
        </div>
        <div className="flex-none">
          <div className="avatar">
            <div className="w-48 rounded-lg">
              <img src="iqbal.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">
              <LayoutDashboard className="stroke-accent fill-accent/30" />
              <span>Frontend Developer</span>
            </h3>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              atque repudiandae exercitationem magni tempore quasi excepturi
              dolor unde culpa. Debitis.
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              atque repudiandae exercitationem magni tempore quasi excepturi
              dolor unde culpa. Debitis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
