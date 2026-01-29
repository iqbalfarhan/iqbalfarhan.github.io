import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import { Briefcase, Menu, MessageCircle, Phone, Smile } from 'lucide-react';
import { ModeToggle } from '../themes/mode-toggle';
import { Avatar, AvatarImage } from '../ui/avatar';
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
	SheetDescription,
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
								<SheetDescription>Iqbal farhan syuhada</SheetDescription>
							</SheetHeader>
							<div className="grid px-4">
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
									<Smile />
									Resume
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
								<Link
									to="/kontak"
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
									<Phone />
									Kontak
								</Link>
							</div>
							<SheetFooter className="px-6">
								<ModeToggle />
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</ItemActions>
			</Item>
		);
	}

	return (
		<div className="flex items-center justify-center py-6 w-full px-4 gap-3 sticky top-0 mx-auto">
			<div className="p-3 bg-accent flex rounded-full dark:rounded shadow-xs">
				<Avatar className="size-10 mr-3 rounded-full dark:rounded">
					<AvatarImage src="/logo192.png" />
				</Avatar>
				<Link
					to="/"
					activeProps={{
						className: buttonVariants({ variant: 'default' }),
					}}
					className={buttonVariants({ variant: 'muted' })}
				>
					<Smile />
					Resume
				</Link>
				<Link
					to="/projects"
					activeProps={{
						className: buttonVariants({ variant: 'default' }),
					}}
					className={buttonVariants({ variant: 'muted' })}
				>
					<Briefcase />
					Portfolio
				</Link>
				<Link
					to="/kontak"
					activeProps={{
						className: buttonVariants({ variant: 'default' }),
					}}
					className={buttonVariants({ variant: 'muted' })}
				>
					<MessageCircle />
					Kontak
				</Link>
			</div>
			<div className="p-3 bg-accent flex rounded-full dark:rounded shadow-xs">
				<ModeToggle />
			</div>
		</div>
	);
};

export default AppNavbar;
