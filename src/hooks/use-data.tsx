import type { Award } from '@/types/award';
import type { Certificate } from '@/types/certificate';
import type { Education } from '@/types/education';
import type { Job } from '@/types/job';
import type { Project } from '@/types/project';
import type { Skill } from '@/types/skill';
import type { Social } from '@/types/social';
import { Github, Instagram, Mail, MessageCircle } from 'lucide-react';

const useData = {
	latest_update: () => {
		return '28 Januari 2026';
	},
	socials: (): Social[] => {
		return [
			{
				title: 'github.com/iqbalfarhan',
				icon: Github,
				url: 'https://github.com/iqbalfarhan',
			},
			{
				title: 'instagram.com/iqbalfarhan08',
				icon: Instagram,
				url: 'https://instagram.com/iqbalfarhan08',
			},
			{
				title: 'iqbalfarhan1996@gmail.com',
				icon: Mail,
				url: 'mailto:iqbalfarhan1996@gmail.com',
			},
			{
				title: 'wa.me/+628999779527',
				icon: MessageCircle,
				url: 'https://wa.me/+628999779527',
			},
		];
	},
	jobs: (): Job[] => {
		return [
			{
				company: 'PT. Persada Sokka Tama',
				year: '2019/2024',
				title: 'Web Programmer',
				description:
					'Worked as a web programmer assigned to Telkom, IS RNO Division, Regional VI Balikpapan.',
			},
			{
				company: 'LP3I Balikpapan',
				year: '2024/2025',
				title: 'Part-time Instructor',
				description:
					'Teaching mobile and  web programming using expo and next js and database administration.',
			},
			{
				company: 'PT. Edumax',
				year: '2019',
				title: 'Programmer and Instructor',
				description:
					'Developed an academic application for HBICS school and taught ICT subjects.',
			},
		];
	},
	educations: (): Education[] => {
		return [
			{
				kampus: 'STMIK BORNEO INTERNASIONAL',
				tahun: '2015/2019',
				jurusan: 'Sistem informasi',
				keterangan:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat provident quasi',
			},
			{
				kampus: 'LP3I Balikpapan',
				tahun: '2013/2015',
				jurusan: 'Informatika komputer',
				keterangan:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat provident quasi',
			},
			{
				kampus: 'MAN Balikpapan',
				tahun: '2010/2013',
				jurusan: 'Jurusan IPA',
				keterangan:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat provident quasi',
			},
		];
	},
	award: (): Award[] => {
		return [
			{
				name: 'Siswa terbaik LP3I jurusan IK',
				description:
					'Mahasiswa terbaik LP3I Balikpapan jurusan Informatika komputer tahun 2013 - 2015',
			},
		];
	},
	certificates: (): Certificate[] => {
		return [
			{
				name: 'Programmer',
				description:
					'Sertifikasi BNSP programmer berlaku dari tahun 2012 - 2015',
			},
			{
				name: 'Web programmer',
				description:
					'Sertifikasi BNSP programmer berlaku dari tahun 2012 - 2015',
			},
		];
	},
	skills: (): Skill[] => {
		return [
			{ name: 'laravel', value: 95 },
			{ name: 'react js', value: 90 },
			{ name: 'golang', value: 80 },
			{ name: 'mysql', value: 90 },
			{ name: 'javascript', value: 80 },
			{ name: 'Kotlin', value: 70 },
		];
	},
	projects: (): Project[] => {
		return [
			// {
			// 	title: 'Contoh android project',
			// 	type: 'android',
			// 	slug: 'contoh-android-project',
			// 	desctiption: [
			// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ratione numquam aut,',
			// 		'eligendi id nihil nostrum officia fuga a debitis odio libero voluptates impedit nemo autem error molestiae ex maxime.',
			// 	],
			// 	thumbnail:
			// 		'https://fastly.picsum.photos/id/448/300/200.jpg?hmac=WHgZcNfmMcA8Sl33YH3lirNV6pSOFPOrxigNhp-lNzc',
			// },
			// {
			// 	title: 'Contoh design project',
			// 	type: 'design',
			// 	slug: 'contoh-design-project',
			// 	desctiption: [
			// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ratione numquam aut,',
			// 		'eligendi id nihil nostrum officia fuga a debitis odio libero voluptates impedit nemo autem error molestiae ex maxime.',
			// 	],
			// 	thumbnail:
			// 		'https://fastly.picsum.photos/id/143/300/200.jpg?hmac=H72th9mSiyGFlh2x1MkbiukTJ32FtSeREnHX9WMrBfQ',
			// },
			// {
			// 	title: 'Contoh web project',
			// 	type: 'web',
			// 	slug: 'contoh-web-project',
			// 	desctiption: [
			// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ratione numquam aut,',
			// 		'eligendi id nihil nostrum officia fuga a debitis odio libero voluptates impedit nemo autem error molestiae ex maxime.',
			// 	],
			// 	thumbnail:
			// 		'https://fastly.picsum.photos/id/738/300/200.jpg?hmac=aCujhxZ8Lq6Sj8d3iYFTYPBMrqZ9AHNKWCe7Kylddes',
			// },
			// {
			// 	title: 'Contoh api project',
			// 	type: 'api',
			// 	slug: 'contoh-api-project',
			// 	desctiption: [
			// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ratione numquam aut,',
			// 		'eligendi id nihil nostrum officia fuga a debitis odio libero voluptates impedit nemo autem error molestiae ex maxime.',
			// 	],
			// 	thumbnail:
			// 		'https://fastly.picsum.photos/id/929/300/200.jpg?hmac=8Wtfz6VsHDZp-UtwHLeemRB_8Qo2AIueepVpR0_vvSw',
			// },
		];
	},
};

export default useData;
