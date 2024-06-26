'use client';
import {usePathname} from 'next/navigation';
import React, {useContext} from 'react';
import Navbar from '../components/landing-page/Navbar';
import DashboardNavbar from '../components/DashboardNavbar';
import {ToastContainer} from 'react-toastify';
import {AppContext} from '@/context/AppContext';
import Footer from './landing-page/Footer';

const AppWrapper = ({children, isLoading, isOnAuthPage}) => {
	const pathname = usePathname();
	const {isLoggedIn} = useContext(AppContext);

	return (
		<section>
			{!isLoading &&
				(isLoggedIn && isOnAuthPage ? (
					<DashboardNavbar />
				) : pathname === '/login' || pathname === '/register' ? (
					''
				) : (
					<Navbar />
				))}
			<div className="min-h-[80vh]">{children}</div>
			{!isLoading &&
				(pathname === '/login' || pathname === '/register' ? '' : <Footer />)}
			<ToastContainer />
		</section>
	);
};

export default AppWrapper;
