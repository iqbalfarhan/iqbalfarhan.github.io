import useData from '@/hooks/use-data';
import { Phone } from 'lucide-react';
import { buttonVariants } from '../ui/button';
import { Card, CardHeader, CardTitle } from '../ui/card';

const data = useData.socials();

const SocialSection = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle icon={Phone}>Koneksi sosial</CardTitle>
			</CardHeader>
			<div className="grid px-5">
				{data.map((item, index) => {
					return (
						<a
							key={index}
							href={item.url}
							target="_blank"
							className={buttonVariants({
								variant: 'link',
								className: 'justify-start',
							})}
						>
							<item.icon />
							{item.title}
						</a>
					);
				})}
			</div>
		</Card>
	);
};

export default SocialSection;
