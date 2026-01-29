import { Link } from '@tanstack/react-router';
import { Download, MessageCircle } from 'lucide-react';
import { Button, buttonVariants } from '../ui/button';
import DotSeparator from '../ui/dot-separator';

const HeroSection = () => {
	return (
		<div className="grid md:flex md:flex-row-reverse items-center gap-12 md:h-[70dvh]">
			<div className="w-[30%] h-full flex flex-col items-center justify-center">
				<img src="/logo512.png" className="w-40 aspect-square rounded" />
				<Button variant={'muted'}>iqbalfarhan08</Button>
			</div>
			<div className="grid gap-6 md:w-[70%]">
				<div className="flex flex-wrap gap-1">
					{['Web developer', 'Android developer', 'UI/UX Designer'].map((l) => (
						<Button
							variant={'muted'}
							size={'xs'}
							className="uppercase tracking-widest text-xs"
						>
							{l}
						</Button>
					))}
				</div>
				<h1 className="text-7xl font-black">Iqbal Farhan Syuhada</h1>
				<p>
					Halo, saya Iqbal Farhan. Dengan pengalaman lebih dari 11 tahun di
					dunia teknologi, sata spesialis dalam membangun Web Ecosystem, Mobile
					Apps (React Native), dan UI Design yang nggak cuma estetik, tapi juga
					fungsional.
				</p>
				<DotSeparator />
				<div className="grid md:flex flex-wrap gap-2">
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
		</div>
	);
};

export default HeroSection;
