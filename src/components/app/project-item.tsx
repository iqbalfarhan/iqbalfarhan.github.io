import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import type { Project } from '@/types/project';
import {
	Code2,
	Monitor,
	Palette,
	Smartphone,
	X,
	type LucideIcon,
} from 'lucide-react';
import { type FC } from 'react';
import { ImageZoom } from '../kibo-ui/image-zoom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Field, FieldLabel } from '../ui/field';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet';

type Props = {
	project: Project;
};

const ProjectItem: FC<Props> = ({ project }) => {
	const cardIcon = (type: Project['type']): LucideIcon => {
		if (type == 'android') return Smartphone;
		else if (type == 'api') return Code2;
		else if (type == 'design') return Palette;
		return Monitor;
	};

	const Icon = cardIcon(project.type);

	const isMobile = useIsMobile();

	return (
		<Card
			className={cn(
				'bg-card dark:bg-transparent hover:z-50 overflow-hidden',
				project.thumbnail && 'pt-0',
			)}
		>
			{project.thumbnail && (
				<ImageZoom>
					<img
						src={project.thumbnail}
						className="w-full aspect-video object-cover hover:grayscale-0 dark:grayscale-100 dark:hover:grayscale-0"
					/>
				</ImageZoom>
			)}
			<Sheet>
				<SheetTrigger asChild>
					<CardContent className="p-0 space-y-4 cursor-pointer">
						<CardHeader>
							<CardTitle icon={cardIcon(project.type)}>
								{project.title}
							</CardTitle>
						</CardHeader>
						<CardContent className="text-left">
							<p>{project.desctiption[0]}</p>
						</CardContent>
					</CardContent>
				</SheetTrigger>
				<SheetContent side={isMobile ? 'bottom' : 'right'} className="flex">
					<SheetHeader>
						<SheetTitle>{project.title}</SheetTitle>
						<SheetDescription>{project.type}</SheetDescription>
					</SheetHeader>
					<div className="space-y-8 px-6 overflow-auto">
						<ImageZoom>
							<img src={project.thumbnail} className="aspect-video w-full" />
						</ImageZoom>
						<Field>
							<FieldLabel>Tipe karya</FieldLabel>
							<div className="flex gap-3 items-center">
								<Icon />
								{project.type}
							</div>
						</Field>
						<Field>
							<FieldLabel>Description</FieldLabel>
							{project.desctiption.map((p, index) => (
								<p key={index}>{p}</p>
							))}
						</Field>
						<Field>
							<FieldLabel>Client</FieldLabel>
							<p>{project.client}</p>
						</Field>
					</div>

					<SheetFooter>
						<SheetClose asChild>
							<Button variant={'outline'}>
								<X />
								Close
							</Button>
						</SheetClose>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</Card>
	);
};

export default ProjectItem;
