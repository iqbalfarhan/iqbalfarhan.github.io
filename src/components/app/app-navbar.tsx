import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import {
	Briefcase,
	Flag,
	Github,
	Hand,
	Menu,
	Minus,
	Smile,
} from 'lucide-react';
import { ModeToggle } from '../themes/mode-toggle';
import { Button, buttonVariants } from '../ui/button';
import {
	Item,
	ItemActions,
	ItemContent,
	ItemMedia,
	ItemTitle,
} from '../ui/item';
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet';

const AppNavbar = () => {
	const isMobile = useIsMobile();

	if (isMobile) {
		return (
			<Item>
				<ItemMedia variant={'image'}>
					<img src="/logo192.png" />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Iqbalfarhan </ItemTitle>
				</ItemContent>
				<ItemActions>
					<Sheet>
						<SheetTrigger asChild>
							<Button size={'icon'} variant={'ghost'} className="lg:hidden">
								<Menu className="size-6" />
							</Button>
						</SheetTrigger>
						<SheetContent side="top">
							<SheetHeader>
								<SheetTitle>Main menu</SheetTitle>
							</SheetHeader>
							<SheetFooter className="px-6 grid">
								<Link
									to="/"
									activeProps={{
										className: cn(buttonVariants({ variant: 'default' })),
									}}
									className={cn(
										buttonVariants({
											variant: 'ghost',
											className: 'justify-start',
										}),
									)}
								>
									<Hand />
									Curriculum vitae
								</Link>
								<Link
									to="/projects"
									activeProps={{
										className: cn(buttonVariants({ variant: 'default' })),
									}}
									className={cn(
										buttonVariants({
											variant: 'ghost',
											className: 'justify-start',
										}),
									)}
								>
									<Briefcase />
									Hasil karya
								</Link>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</ItemActions>
			</Item>
		);
	}

	return (
		<Item>
			<ItemMedia variant={'image'}>
				<img src="/logo192.png" />
			</ItemMedia>
			<ItemContent>
				<ItemTitle className="text-lg">Iqbalfarhan</ItemTitle>
			</ItemContent>
			<ItemActions>
				<Link
					to="/"
					activeProps={{
						className: buttonVariants({ variant: 'default' }),
					}}
					className={buttonVariants({ variant: 'ghost' })}
				>
					<Smile />
					My resume
				</Link>
				<Link
					to="/projects"
					activeProps={{
						className: buttonVariants({ variant: 'default' }),
					}}
					className={buttonVariants({ variant: 'ghost' })}
				>
					<Briefcase />
					Portfolio
				</Link>
				<Button variant={'ghost'} disabled>
					<Minus className="rotate-90" />
				</Button>
				<Button variant="ghost" size={'icon'}>
					<Github />
				</Button>
				<ModeToggle />
				<Button variant="ghost" size={'icon'}>
					<Flag />
				</Button>
			</ItemActions>
		</Item>
	);
};

export default AppNavbar;
