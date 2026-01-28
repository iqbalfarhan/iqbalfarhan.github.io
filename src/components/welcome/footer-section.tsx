import useData from '@/hooks/use-data';
import { Download } from 'lucide-react';
import { buttonVariants } from '../ui/button';

const data = useData.latest_update();

const FooterSection = () => {
	return (
		<div className="grid md:flex items-center justify-between py-6 gap-6">
			<p className="text-muted-foreground">
				Halaman ini terakhir diupdate pada {data}
			</p>
			<div className="flex gap-2 items-center">
				<a
					href="/ats-friendly-resume-iqbal-farhan-syuhada.pdf"
					className={buttonVariants()}
				>
					<Download />
					Download CV
				</a>
			</div>
		</div>
	);
};

export default FooterSection;
