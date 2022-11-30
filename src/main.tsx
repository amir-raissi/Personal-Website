import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
const App = lazy(() => import('./App'));
import './index.css';
import { FullPageSpinner } from './components/MainContent/shared/FullPageSpinner/FullPageSpinner';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider>
			<Suspense fallback={<FullPageSpinner />}>
				<App />
			</Suspense>
		</ChakraProvider>
	</React.StrictMode>
);
