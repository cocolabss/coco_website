import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';


interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

	return (
		<>
			<header>
				<Header />
			</header>

			<main>
				{children}
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default MainLayout;