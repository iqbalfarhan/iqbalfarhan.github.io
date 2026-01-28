import useData from '@/hooks/use-data';
import { HatGlasses } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Item, ItemContent, ItemDescription, ItemTitle } from '../ui/item';

const data = useData.educations();

const EducationSection = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle icon={HatGlasses}>Riwayat pendidikan</CardTitle>
			</CardHeader>
			<CardContent className="px-3">
				{data.map((item, index) => {
					return (
						<div className="flex items-start" key={index}>
							<Item className="w-[40%]">
								<ItemContent>
									<ItemTitle>{item.kampus}</ItemTitle>
									<ItemDescription>{item.tahun}</ItemDescription>
								</ItemContent>
							</Item>
							<Item className="w-[60%]">
								<ItemContent>
									<ItemTitle>{item.jurusan}</ItemTitle>
									<ItemDescription>{item.keterangan}</ItemDescription>
								</ItemContent>
							</Item>
						</div>
					);
				})}
			</CardContent>
		</Card>
	);
};

export default EducationSection;
