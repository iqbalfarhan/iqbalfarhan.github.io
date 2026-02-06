import { Button, buttonVariants } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import DotSeparator from '@/components/ui/dot-separator';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import useData from '@/hooks/use-data';
import { useForm } from '@tanstack/react-form';
import { createFileRoute } from '@tanstack/react-router';
import { Check, FormInput } from 'lucide-react';
import { toast } from 'sonner';
import z from 'zod';

export const Route = createFileRoute('/kontak')({
	component: RouteComponent,
});

const data = useData.socials();

function RouteComponent() {
	const form = useForm({
		defaultValues: {
			name: '',
			email: '',
			topic: '',
		},
		onSubmit: ({ value }) => {
			toast(value.name, {
				description: value.topic,
			});
		},
	});

	return (
		<div className="grid md:grid-cols-2">
			<div className="space-y-8 p-8">
				<h1 className="font-black text-5xl">Kontak saya</h1>
				<p>
					Kontak saya lewat form diskusi atau coba kontak saya dengan cara
					lainnya dengan klik tombol berikut.
				</p>
				<DotSeparator />
				<Field>
					<FieldLabel>Kontak lainnya:</FieldLabel>
					<div className="flex flex-wrap gap-1">
						{data.map((item, index) => {
							return (
								<a
									href={item.url}
									target="_blank"
									key={index}
									className={buttonVariants({ variant: 'default' })}
								>
									<item.icon />
									{item.title}
								</a>
							);
						})}
					</div>
				</Field>
			</div>
			<div>
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<Card>
						<CardHeader>
							<CardTitle icon={FormInput}>Form diskusi</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="grid md:grid-cols-2 gap-4">
								<form.Field
									name="name"
									validators={{
										onSubmit: z.string().min(1),
									}}
									children={(field) => {
										return (
											<Field>
												<FieldLabel>Nama</FieldLabel>
												<Input
													placeholder="Nama kamu"
													value={field.state.value}
													onChange={(e) => field.handleChange(e.target.value)}
												/>
												<FieldError errors={field.state.meta.errors} />
											</Field>
										);
									}}
								/>
								<form.Field
									name="email"
									validators={{
										onSubmit: z.email(),
									}}
									children={(field) => {
										return (
											<Field>
												<FieldLabel>Email address</FieldLabel>
												<Input
													placeholder="username@domain.ext"
													value={field.state.value}
													onChange={(e) => field.handleChange(e.target.value)}
												/>
												<FieldError errors={field.state.meta.errors} />
											</Field>
										);
									}}
								/>
							</div>
							<form.Field
								name="topic"
								validators={{
									onSubmit: z.string().min(1),
								}}
								children={(field) => {
									return (
										<Field>
											<FieldLabel>Topik diskusi</FieldLabel>
											<Textarea
												className="h-36"
												placeholder="Apa nih yang mau kita bahas."
												value={field.state.value}
												onChange={(e) => field.handleChange(e.target.value)}
											/>
											<FieldError errors={field.state.meta.errors} />
										</Field>
									);
								}}
							/>
						</CardContent>
						<CardFooter>
							<Button type="submit" onClick={form.handleSubmit}>
								<Check />
								Kirim
							</Button>
						</CardFooter>
					</Card>
				</form>
			</div>
		</div>
	);
}
