import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Github } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Send } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [pertanyaan, setPertanyaan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Halo, nama saya ${name}. Saya ingin bertanya: ${pertanyaan}`;
    const phoneNumber = '08999779527';
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(waLink, '_blank');
  };
  return (
    <>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-10">
          <h1 className="text-5xl font-bold">Kontak saya</h1>
          <p>
            Jika Anda memiliki pertanyaan, saran, atau ingin berdiskusi, jangan
            ragu untuk menghubungi saya. Saya akan dengan senang hati merespons
            setiap pesan Anda sesegera mungkin. Silakan gunakan salah satu cara
            kontak di bawah ini atau kirim pertanyaan Anda melalui formulir di
            <span className="md:hidden">bawah ini.</span>
            <span className="hidden md:block">sebelah kanan.</span>
          </p>

          <div className="flex flex-wrap gap-1">
            <a href="mailto:iqbalfarhan1996@gmail.com" className="btn">
              <Mail size={20} />
              <span>iqbalfarhan1996@gmail.com</span>
            </a>
            <a href="https://instagram.com/iqbalfarhan08" className="btn">
              <Instagram size={20} />
              <span>@iqbalfarhan08</span>
            </a>
            <a href="https://t.me/iqbalfarhan08" className="btn">
              <Send size={20} />
              <span>@iqbalfarhan08</span>
            </a>
            <a href="https://www.youtube.com/@iqbalfarhan08" className="btn">
              <Youtube size={20} />
              <span>@iqbalfarhan08</span>
            </a>
            <a href="https://github.com/iqbalfarhan" className="btn">
              <Github size={20} />
              <span>iqbalfarhan</span>
            </a>
          </div>
        </div>
        <div className="card bg-base-200 h-fit">
          <form className="card-body" onSubmit={handleSubmit}>
            <h3 className="card-title">Kontak saya</h3>

            <div className="py-4 space-y-2">
              <input
                type="text"
                className="input w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama dan email anda"
              />
              <textarea
                type="text"
                className="textarea w-full"
                placeholder="Pertanyaan atau diskusi anda"
                value={pertanyaan}
                onChange={(e) => setPertanyaan(e.target.value)}
                rows={5}
              ></textarea>
            </div>

            <div className="card-actions">
              <button className="btn btn-primary">
                <Send size={20} />
                <span>Kirim pesan</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
