import useData from '@/hooks/use-data';
import type { Skill } from '@/types/skill';
import { Settings2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ItemTitle } from '../ui/item';
import { Progress } from '../ui/progress';

const data: Skill[] = useData.skills();

const SkillSection = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle icon={Settings2}>Skill profesional</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4">
				{data.map((item) => {
					return (
						<div className="flex items-center">
							<ItemTitle className="uppercase w-[40%]">{item.name}</ItemTitle>
							<Progress className="w-[60%] bg-accent" value={item.value} />
						</div>
					);
				})}
			</CardContent>
		</Card>
	);
};

export default SkillSection;
