import { Instagram } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-10">
          <h1 className="text-5xl font-bold">Kontak saya</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            soluta aut alias amet numquam unde. Ipsam, minima veritatis nostrum
            saepe soluta voluptatum ad doloribus asperiores dolor eaque natus,
            sit ipsum!
          </p>

          <div className="flex flex-wrap gap-1">
            <button className="btn">
              <Mail size={20} />
              <span>iqbalfarhan1996@gmail.com</span>
            </button>
            <button className="btn">
              <Instagram size={20} />
              <span>@iqbalfarhan08</span>
            </button>
            <button className="btn">
              <Send size={20} />
              <span>@iqbalfarhan08</span>
            </button>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">Kontak saya</h3>

            <div className="py-4 space-y-2">
              <input
                type="text"
                className="input w-full"
                placeholder="Nama dan email kamu"
              />
              <textarea
                type="text"
                className="textarea w-full"
                placeholder="Pertanyaan atau diskusi"
                rows={5}
              ></textarea>
            </div>

            <div className="card-actions">
              <button className="btn btn-primary">
                <Send size={20} />
                <span>Kirim pertanyaan</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
