import ProjectItem from '@/components/app/project-item';
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
import useData from '@/hooks/use-data';
import { createFileRoute, Link } from '@tanstack/react-router';
import {
	Filter,
	MessageCircle,
	RefreshCcw,
	Search,
	SortAsc,
} from 'lucide-react';

export const Route = createFileRoute('/projects/')({
	component: RouteComponent,
});

const data = useData.projects();

function RouteComponent() {
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
					<Button size={'icon'}>
						<Filter />
					</Button>
					<Button size={'icon'}>
						<SortAsc />
					</Button>
				</ButtonGroup>
			</div>

			{data.length > 0 ? (
				<div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 dark:gap-0">
					{data.map((item, index) => (
						<ProjectItem project={item} key={index} />
					))}
					<Card className="h-full bg-accent">
						<CardContent className="h-full" />
						<CardHeader>
							<CardTitle>
								Gimana gimana? Tertarik untuk buat aplikasi juga?
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
						<Button>
							<RefreshCcw />
							Refresh
						</Button>
					</EmptyContent>
				</Empty>
			)}
		</>
	);
}
