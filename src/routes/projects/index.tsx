import ProjectItem from '@/components/app/project-item';
import SubmitButton from '@/components/app/submit-button';
import { Button, buttonVariants } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from '@/components/ui/empty';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from '@/components/ui/input-group';
import { useProject } from '@/hooks/use-project';
import type { Project } from '@/types/project';
import { createFileRoute, Link } from '@tanstack/react-router';
import {
	Code2,
	Filter,
	MessageCircle,
	Monitor,
	Palette,
	RefreshCcw,
	Search,
	Smartphone,
	SortAsc,
	type LucideIcon,
} from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/projects/')({
	component: RouteComponent,
});

const jenisProject: {
	label: string;
	key: Project['type'];
	icon: LucideIcon;
}[] = [
	{
		label: 'Aplikasi web',
		key: 'web',
		icon: Monitor,
	},
	{
		label: 'Aplikasi android',
		key: 'android',
		icon: Smartphone,
	},
	{
		label: 'UI/UX Design',
		key: 'design',
		icon: Palette,
	},
	{
		label: 'API Service',
		key: 'api',
		icon: Code2,
	},
];

function RouteComponent() {
	const [type, setType] = useState<Project['type']>();

	const { data, refetch, isLoading, isRefetching } = useProject.lists();

	return (
		<>
			<div className="py-6">
				<h1 className="font-black text-center text-5xl">Portofolio</h1>
			</div>
			<div className="flex items-center justify-between gap-4">
				<InputGroup>
					<InputGroupInput placeholder="Pencarian data" />
					<InputGroupAddon align={'inline-start'}>
						<Search />
					</InputGroupAddon>
				</InputGroup>

				<ButtonGroup>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button size={'icon'}>
								<Filter />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							{jenisProject?.map((t) => (
								<DropdownMenuItem key={t.key} onSelect={() => setType(t.key)}>
									<t.icon />
									{t.label}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
					<Button size={'icon'}>
						<SortAsc />
					</Button>
				</ButtonGroup>
			</div>

			{(data ?? []).length > 0 ? (
				<div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 dark:gap-0">
					{data
						?.filter((f) => (type ? f.type === type : true))
						?.map((item, index) => (
							<ProjectItem project={item} key={index} />
						))}
					<Card className="h-full bg-accent">
						<CardContent className="h-full" />
						<CardHeader>
							<CardTitle>
								Gimana? Apakah tertarik untuk buat aplikasi juga?
							</CardTitle>
						</CardHeader>
						<CardFooter>
							<Link
								to={'/kontak'}
								className={buttonVariants({ variant: 'default' })}
							>
								<MessageCircle />
								Ayo diskusi
							</Link>
						</CardFooter>
					</Card>
				</div>
			) : (
				<Empty>
					<EmptyHeader>
						<EmptyMedia variant={'icon'}>
							<Search />
						</EmptyMedia>
						<EmptyTitle>Belum ada portofolio</EmptyTitle>
						<EmptyDescription>
							Belum ada portofolio project yang tersedia. Coba refresh mungin
							datanya sudah ada.
						</EmptyDescription>
					</EmptyHeader>
					<EmptyContent>
						<SubmitButton
							label="Refresh"
							icon={RefreshCcw}
							onClick={() => refetch()}
							disabled={isLoading || isRefetching}
						/>
					</EmptyContent>
				</Empty>
			)}
		</>
	);
}
