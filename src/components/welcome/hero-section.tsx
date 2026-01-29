import { Link } from '@tanstack/react-router';
import { Download, MessageCircle } from 'lucide-react';
import { buttonVariants } from '../ui/button';
import DotSeparator from '../ui/dot-separator';

const HeroSection = () => {
	return (
		<div className="flex items-center py-16 gap-12">
			<div className="grid gap-6 w-[70%]">
				<p className="text-lg">
					Web developer, Android developer, UI/UX Designer
				</p>
				<h1 className="text-7xl font-black">Iqbal Farhan Syuhada</h1>
				<p>
					Halo, saya Iqbal Farhan. Dengan pengalaman lebih dari 11 tahun di
					dunia teknologi, sata spesialis dalam membangun Web Ecosystem, Mobile
					Apps (React Native), dan UI Design yang nggak cuma estetik, tapi juga
					fungsional.
				</p>
				<DotSeparator />
				<div className="flex flex-wrap gap-2">
					<Link
						to="/kontak"
						className={buttonVariants({ variant: 'outline', size: 'lg' })}
					>
						<MessageCircle />
						Kontak saya
					</Link>
					<a
						href="/resume-iqbalfarhan-29012026.pdf"
						className={buttonVariants({ size: 'lg' })}
					>
						<Download />
						Download CV
					</a>
				</div>
			</div>
			<div className="w-[30%] h-full flex items-center justify-center">
				<img src="/logo512.png" className="w-40 aspect-square rounded-full" />
			</div>
		</div>
	);
};

export default HeroSection;
