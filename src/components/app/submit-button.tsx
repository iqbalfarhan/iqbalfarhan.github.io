import { Check, type LucideIcon } from 'lucide-react';
import { type ComponentProps, type FC } from 'react';
import { Button } from '../ui/button';
import { Spinner } from '../ui/spinner';

type Props = ComponentProps<typeof Button> & {
	label?: string;
	icon?: LucideIcon;
	isLoading?: boolean;
};

const SubmitButton: FC<Props> = ({
	label = 'submit',
	icon: Icon,
	isLoading = false,
	...props
}) => {
	return (
		<Button {...props}>
			{isLoading ? <Spinner /> : Icon ? <Icon /> : <Check />}
			{label}
		</Button>
	);
};

export default SubmitButton;
