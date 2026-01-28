import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/components/themes/theme-provider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ButtonGroup } from '../ui/button-group';

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<ButtonGroup>
			<Button size={'icon'} variant={'muted'} onClick={() => setTheme('light')}>
				<Sun className={cn(theme == 'light' && 'stroke-primary fill-muted')} />
			</Button>
			<Button size={'icon'} variant={'muted'} onClick={() => setTheme('dark')}>
				<Moon className={cn(theme == 'dark' && 'stroke-primary fill-muted')} />
			</Button>
		</ButtonGroup>
	);
}
