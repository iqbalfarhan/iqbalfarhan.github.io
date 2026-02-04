import * as React from 'react';

import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import DotSeparator from './dot-separator';

function Card({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card"
			className={cn(
				// 'bg-card text-card-foreground flex flex-col  gap-6 rounded-xl border py-6 shadow-sm h-fit',
				'flex flex-col bg-card/50 gap-6 border border-transparent dark:border-accent hover:bg-card/50 rounded-xl py-6 h-fit transition-all dark:rounded-none',
				className,
			)}
			{...props}
		/>
	);
}

function CardHeader({
	className,
	children,
	...props
}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-header"
			className={cn(
				'@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-8 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
				className,
			)}
			{...props}
		>
			{children}
			<DotSeparator />
		</div>
	);
}

function CardTitle({
	className,
	labelClassName,
	children,
	icon: Icon,
	...props
}: React.ComponentProps<'div'> & {
	icon?: LucideIcon;
	labelClassName?: string;
}) {
	return (
		<div
			data-slot="card-title"
			className={cn('leading-none uppercase text-lg font-extrabold', className)}
			{...props}
			children={
				<div className={'flex items-center gap-3'}>
					{Icon ? (
						<Icon className={'size-6 stroke-primary fill-secondary line'} />
					) : null}
					<h4 className={labelClassName}>{children}</h4>
				</div>
			}
		/>
	);
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-description"
			className={cn('text-muted-foreground text-sm', className)}
			{...props}
		/>
	);
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-action"
			className={cn(
				'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
				className,
			)}
			{...props}
		/>
	);
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-content"
			className={cn('px-8', className)}
			{...props}
		/>
	);
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-footer"
			className={cn('flex items-center px-8 [.border-t]:pt-8', className)}
			{...props}
		/>
	);
}

export {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
};
