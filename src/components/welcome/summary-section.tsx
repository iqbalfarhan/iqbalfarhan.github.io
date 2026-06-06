import { Contrast } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const SummarySection = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle icon={Contrast}>Ringkasan</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<p>
					Halo, saya Iqbal Farhan. Dengan pengalaman lebih dari 11 tahun di
					industri teknologi, saya spesialis dalam membangun Ekosistem Web,
					Aplikasi Seluler (React Native), serta Desain UI yang tidak hanya
					estetis, tetapi juga fungsional.
				</p>
				<p>
					Apakah Anda memiliki ide besar? Mari kita berkolaborasi untuk
					mengeksekusinya menjadi produk digital yang mampu memberikan dampak
					nyata.
				</p>
			</CardContent>
		</Card>
	);
};

export default SummarySection;
