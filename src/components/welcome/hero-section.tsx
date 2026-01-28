const HeroSection = () => {
	return (
		<div className="flex flex-col items-center py-12 gap-12">
			<img src="/logo512.png" className="w-40 aspect-square rounded-full" />
			<div className="flex flex-col items-center gap-6">
				<h1 className="text-6xl font-black">Iqbal Farhan Syuhada</h1>
				<p className="text-lg">
					Web developer, Android developer, UI/UX Designer
				</p>
			</div>
		</div>
	);
};

export default HeroSection;
