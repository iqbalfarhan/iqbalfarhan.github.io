import ProjectItem from '@/components/app/project-item';
import { Button } from '@/components/ui/button';
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
import { createFileRoute } from '@tanstack/react-router';
import { MessageCircle, RefreshCcw, Search } from 'lucide-react';

export const Route = createFileRoute('/projects/')({
	component: RouteComponent,
});

const data = useData.projects();

function RouteComponent() {
	return (
		<>
			<InputGroup>
				<InputGroupInput placeholder="Pencarian data" />
				<InputGroupAddon align={'inline-start'}>
					<Search />
				</InputGroupAddon>
			</InputGroup>

			{data.length > 0 ? (
				<div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 dark:gap-0">
					{data.map((item) => (
						<ProjectItem project={item} />
					))}
					<Card className="h-full bg-accent">
						<CardContent className="h-full" />
						<CardHeader>
							<CardTitle>
								Gimana gimana? Tertarik untuk buat aplikasi juga?
							</CardTitle>
						</CardHeader>
						<CardFooter>
							<Button>
								<MessageCircle />
								Ayo diskusi
							</Button>
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
