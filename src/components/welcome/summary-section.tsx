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
					dunia teknologi, sata spesialis dalam membangun Web Ecosystem, Mobile
					Apps (React Native), dan UI Design yang nggak cuma estetik, tapi juga
					fungsional. Lo punya ide besar? Mari kita eksekusi jadi produk digital
					yang dapet impact nyata.
				</p>
			</CardContent>
		</Card>
	);
};

export default SummarySection;
