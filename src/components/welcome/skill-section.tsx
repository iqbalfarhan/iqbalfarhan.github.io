import useData from '@/hooks/use-data';
import type { Skill } from '@/types/skill';
import { Settings2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ItemTitle } from '../ui/item';
import SkillLevelIndicator from '../ui/skill-level-indicator';

const data: Skill[] = useData.skills();

const SkillSection = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle icon={Settings2}>Skill profesional</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4">
				{data.map((item, index) => {
					return (
						<div className="flex items-center" key={index}>
							<ItemTitle className="uppercase w-[40%]">{item.name}</ItemTitle>
							<SkillLevelIndicator className="w-[60%]" level={item.level} />
						</div>
					);
				})}
			</CardContent>
		</Card>
	);
};

export default SkillSection;
