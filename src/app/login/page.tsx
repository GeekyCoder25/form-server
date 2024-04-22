'use client';
import {loginUser} from '@/utils/apiCalls';
import Link from 'next/link';
import React, {useState} from 'react';
import {toast} from 'react-toastify';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleLogin = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		try {
			e.preventDefault();
			if (!formData.email || !formData.password)
				throw new Error('Please provide your username and password');
			const response = await loginUser(formData);
			if (response.status >= 400) throw new Error(response.message);
			toast.error(response.message);
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="w-full max-w-[500px]">
				<h1 className="font-[800] text-3xl">Sign in</h1>
				<div className="flex items-center mt-2 gap-1">
					<span>Or</span>
					<Link className="text-[#c02dc1]" href={'/register'}>
						register for an account
					</Link>
				</div>
				<form className="w-full flex flex-col gap-2 mt-5">
					<div className="mb-4 relative">
						<label htmlFor="">Email Address</label>
						<input
							type="text"
							className="p-2 bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]"
							onChange={event => {
								console.log();
								setFormData(prev => {
									return {...prev, email: event.target.value};
								});
							}}
						/>
					</div>
					<div className="mb-4 relative">
						<label htmlFor="">Password</label>
						<input
							type="password"
							className="p-2 bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]"
							onChange={event => {
								setFormData(prev => {
									return {...prev, password: event.target.value};
								});
							}}
						/>
					</div>
					<div className="mb-4 relative">
						<button
							className="bg-[#c02dc1] text-white rounded w-full p-2"
							onClick={handleLogin}
						>
							Sign In
						</button>
					</div>
					<Link className="text-[#c02dc1]" href={'/'}>
						Forgot your password?
					</Link>
				</form>
				<div className="flex items-center flex-col gap-2 mt-4 justify-center">
					<div className="flex items-center gap-2">
						<Link className="text-black opacity-60" href={'/'}>
							Twitter
						</Link>
						<span>|</span>
						<Link className="text-black opacity-60" href={'/'}>
							Facebook
						</Link>
						<span>|</span>
						<Link className="text-black opacity-60" href={'/'}>
							Github
						</Link>
					</div>
					<span className="text-black opacity-50 text-sm">
						© {new Date().getFullYear()} FormServer, Inc.
					</span>
					<div className="text-sm">
						<span>Please check out our</span>{' '}
						<Link className="text-[#c02dc1]" href={'/'}>
							Help Site
						</Link>
						,{' '}
						<Link className="text-[#c02dc1]" href={'/'}>
							Terms of Use
						</Link>
						, <span>and</span>{' '}
						<Link className="text-[#c02dc1]" href={'/'}>
							Privacy Policy
						</Link>
						.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;