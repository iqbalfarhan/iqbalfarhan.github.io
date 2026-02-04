import { cn } from '@/lib/utils';
import type { Skill } from '@/types/skill';
import type { FC } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

type Props = {
	level: Skill['level'];
	className?: string;
};

export const indicator: Record<Skill['level'], number> = {
	beginner: 1,
	good: 2,
	skillfull: 3,
	experienced: 4,
	expert: 5,
};

const SkillLevelIndicator: FC<Props> = ({ level = 'expert', className }) => {
	const selected = indicator[level];
	return (
		<div className={cn('flex gap-1 h-2', className)}>
			{Array.from({
				length: 5,
			}).map((_, index) => {
				const active = index < selected;
				return (
					<Tooltip>
						<TooltipTrigger asChild>
							<div
								className={cn(
									'flex-1 h-2 bg-primary/20 rounded-full',
									active && 'bg-primary',
								)}
							/>
						</TooltipTrigger>
						<TooltipContent>{level}</TooltipContent>
					</Tooltip>
				);
			})}
		</div>
	);
};

export default SkillLevelIndicator;
