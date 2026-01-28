import useData from '@/hooks/use-data';
import { Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Item, ItemContent, ItemDescription, ItemTitle } from '../ui/item';

const data = useData.award();

const AwardSection = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle icon={Trophy}>Penghargaan</CardTitle>
			</CardHeader>
			<CardContent className="px-3">
				{data.map((item, index) => {
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

export default AwardSection;
