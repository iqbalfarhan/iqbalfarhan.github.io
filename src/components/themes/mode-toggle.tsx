import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/components/themes/theme-provider';
import { ButtonGroup } from '../ui/button-group';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<ButtonGroup>
			<ToggleGroup
				variant={'outline'}
				type="single"
				value={theme}
				onValueChange={(v) => setTheme(v == 'light' ? 'light' : 'dark')}
			>
				<ToggleGroupItem value="light">
					{theme == 'light' ? <Sun /> : <Moon />} {theme}
				</ToggleGroupItem>
			</ToggleGroup>
		</ButtonGroup>
	);
}
