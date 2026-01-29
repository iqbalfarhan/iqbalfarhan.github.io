import { type FC } from 'react';

type Props = {
	length?: number;
};

const DotSeparator: FC<Props> = ({ length = 5 }) => {
	return (
		<div className="flex gap-1">
			{Array.from({ length: length }).map((_, index) => (
				<div
					key={index}
					className="size-1 w-2 bg-primary/50 mt-4 rounded-2xl"
				/>
			))}
		</div>
	);
};

export default DotSeparator;
