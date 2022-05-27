import Request from '../../src/components/Request';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import CopyRight from '../../src/components/Copyright';
import Head from 'next/head';
const LoanRequest = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
		salary: '',
		description: '',
		interest: '',
		business: '',
	});
	const handleForm = async e => {
		e.preventDefault();
		const form = {
			name: formData.name,
			email: formData.email,
			address: formData.address,
			phone: formData.phone,
			salary: formData.salary,
			description: formData.description,
			interest: formData.interest,
			business: formData.business,
		};
		const res = fetch('/api/submit', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form),
		});
		setFormData(formData => ({
			...formData,
			name: '',
			email: '',
			phone: '',
			address: '',
			salary: '',
			description: '',
			interest: '',
			business: '',
		}));
	};
	return (
		<>
			<Head>
				<title>Зээлийн хүсэлт</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/img/lil_logo.png" />
			</Head>
			<Navbar />
			<span className="h-24"></span>
			<Request
				handleForm={handleForm}
				formData={formData}
				setFormData={setFormData}
			/>
			<Footer />
			<CopyRight />
		</>
	);
};

export default LoanRequest;
