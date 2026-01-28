import useData from '@/hooks/use-data';
import { Download, Printer } from 'lucide-react';
import { Button } from '../ui/button';

const data = useData.latest_update();

const FooterSection = () => {
	return (
		<div className="grid md:flex items-center justify-between py-6 gap-6">
			<p className="text-muted-foreground">
				Halaman ini terakhir diupdate pada {data}
			</p>
			<div className="flex gap-2 items-center">
				<Button
					variant={'outline'}
					onClick={() => {
						window.print();
					}}
				>
					<Printer />
					Print CV
				</Button>
				<Button
					variant={'default'}
					onClick={() => {
						window.print();
					}}
				>
					<Download />
					Download CV
				</Button>
			</div>
		</div>
	);
};

export default FooterSection;
