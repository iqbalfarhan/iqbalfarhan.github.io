import useData from '@/hooks/use-data';
import { BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Item, ItemContent, ItemDescription, ItemTitle } from '../ui/item';

const datas = useData.certificates();

const CertificateSection = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle icon={BadgeCheck}>Sertifikat kompetensi</CardTitle>
			</CardHeader>
			<CardContent className="px-3">
				{datas.map((item, index) => {
					return (
						<Item size={'sm'} key={index}>
							<ItemContent>
								<ItemTitle>{item.name}</ItemTitle>
								<ItemDescription>{item.description}</ItemDescription>
							</ItemContent>
						</Item>
					);
				})}
			</CardContent>
		</Card>
	);
};

export default CertificateSection;
