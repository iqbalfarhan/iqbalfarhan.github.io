import { TanStackDevtools } from '@tanstack/react-devtools';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import AppNavbar from '@/components/app/app-navbar';
import { ThemeProvider } from '@/components/themes/theme-provider';
import { Toaster } from '@/components/ui/sonner';

export const Route = createRootRoute({
	component: () => (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="container mx-auto space-y-6">
				<AppNavbar />
				<div className="mx-auto w-full max-w-6xl print:max-w-full space-y-6 p-8 md:p-0">
					<Outlet />
				</div>
			</div>
			<TanStackDevtools
				config={{
					position: 'bottom-right',
				}}
				plugins={[
					{
						name: 'Tanstack Router',
						render: <TanStackRouterDevtoolsPanel />,
					},
				]}
			/>
			<Toaster />
		</ThemeProvider>
	),
});
