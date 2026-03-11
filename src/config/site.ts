// Site configuration
export const SITE = {
	title: 'On Site Computer Repairs',
	description:
		"Serving St. John's & surrounding area. Virus removal, hardware repair, tune-ups, data recovery, and more. We come to you.",
	url: 'https://yourdomain.com',
	author: 'On Site Computer Repairs',
	tagline: "Serving St. John's & surrounding area",
	phone: '1 (709) 771-3594',
	email: 'oscomputerrepairs@gmail.com',
} as const;

export const NAVIGATION = [
	{ name: 'Home', href: '/' },
	{ name: 'Services', href: '/services' },
	{ name: 'Testimonials', href: '/testimonials' },
	{ name: 'Contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = {
	instagram: 'https://www.instagram.com/onsite_computer_repair/',
	facebook: 'https://www.facebook.com/oscomputerrepairs',
} as const;

export const services = [
	{
		title: 'Computer Diagnostics & Troubleshooting',
		description:
			'Identify hardware or software issues causing crashes, slow performance, or boot problems.',
	},
	{
		title: 'SSD Upgrades',
		description:
			'Replace traditional hard drives with fast solid state drives to dramatically improve startup times and overall system performance.',
	},
	{
		title: 'Windows Installation & Windows 11 Upgrades',
		description:
			'Clean Windows installs, system recovery, and upgrades to Windows 11 with compatibility checks.',
	},
	{
		title: 'Virus & Malware Removal',
		description:
			'Remove viruses, malware, and unwanted software while securing the system against future threats.',
	},
	{
		title: 'Hardware Repairs & Upgrades',
		description:
			'RAM upgrades, storage upgrades, graphics cards, and other hardware replacements.',
	},
	{
		title: 'Performance Optimization',
		description:
			'Improve startup time, system responsiveness, and remove unnecessary programs slowing your computer down.',
	},
	{
		title: 'Data Backup & Recovery Assistance',
		description:
			'Help recovering files from failing systems and setting up proper backup solutions.',
	},
	{
		title: 'On-Site Computer Support',
		description:
			'Convenient on-site troubleshooting and repairs for homes and small businesses in the St. John’s area.',
	},
] as const;
