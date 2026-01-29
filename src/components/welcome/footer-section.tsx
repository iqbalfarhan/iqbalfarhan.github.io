import useData from '@/hooks/use-data';

const data = useData.latest_update();

const FooterSection = () => {
	return (
		<div className="grid md:flex items-center justify-between py-6 gap-6">
			<p className="text-muted-foreground">
				Halaman ini terakhir diupdate pada {data}
			</p>
		</div>
	);
};

export default FooterSection;
