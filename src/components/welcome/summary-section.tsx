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
					Multidisciplinary Developer & Designer. Spesialis dalam pengembangan
					aplikasi Web dan Android dengan sentuhan desain yang presisi.
					Memadukan logika pemrograman dengan estetika desain untuk menciptakan
					produk yang fungsional, cantik, dan berdampak bagi pengguna.
				</p>
			</CardContent>
		</Card>
	);
};

export default SummarySection;
