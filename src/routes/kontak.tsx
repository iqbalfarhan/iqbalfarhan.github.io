import { Button, buttonVariants } from '@/components/ui/button';
import {
	Card,
	CardAction,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import DotSeparator from '@/components/ui/dot-separator';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import useData from '@/hooks/use-data';
import { createFileRoute } from '@tanstack/react-router';
import { Check, FormInput } from 'lucide-react';
import { toast } from 'sonner';

export const Route = createFileRoute('/kontak')({
	component: RouteComponent,
});

const data = useData.socials();

function RouteComponent() {
	return (
		<div className="grid md:grid-cols-2">
			<div className="space-y-8 p-8">
				<h1 className="font-black text-5xl">Let's goo</h1>
				<p>
					Kontak saya lewat form disamping ata dibawah ini, atau coba kontak
					saya dengan cara lainnya dengan klik tombol berikut.
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
				<Card className="bg-card">
					<CardHeader>
						<CardTitle icon={FormInput}>Input</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="grid md:grid-cols-2 gap-4">
							<Field>
								<FieldLabel>Nama</FieldLabel>
								<Input placeholder="Nama kamu" />
							</Field>
							<Field>
								<FieldLabel>Email / No whatsapp</FieldLabel>
								<Input placeholder="username@domain.ext" />
							</Field>
						</div>
						<Field>
							<FieldLabel>Topik diskusi</FieldLabel>
							<Textarea
								className="h-36"
								placeholder="Apa nih yang mau kita bahas."
							/>
						</Field>
					</CardContent>
					<CardFooter>
						<CardAction>
							<Button
								onClick={() => toast.error('Sorry fitur ini belum bisa.')}
							>
								<Check />
								Kirim
							</Button>
						</CardAction>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
