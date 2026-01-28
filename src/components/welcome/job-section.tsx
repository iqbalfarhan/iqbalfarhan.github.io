import useData from '@/hooks/use-data';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Item, ItemContent, ItemDescription, ItemTitle } from '../ui/item';

const data = useData.jobs();

const JobSection = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle icon={Briefcase}>Pengalaman kerja</CardTitle>
			</CardHeader>
			<CardContent className="px-3">
				{data.map((item) => {
					return (
						<div className="flex items-start">
							<Item className="w-[40%]">
								<ItemContent>
									<ItemTitle>{item.company}</ItemTitle>
									<ItemDescription>{item.year}</ItemDescription>
								</ItemContent>
							</Item>
							<Item className="w-[60%]">
								<ItemContent>
									<ItemTitle>{item.title}</ItemTitle>
									<ItemDescription>{item.description}</ItemDescription>
								</ItemContent>
							</Item>
						</div>
					);
				})}
			</CardContent>
		</Card>
	);
};

export default JobSection;
