import type { Award } from '@/types/award';
import type { Certificate } from '@/types/certificate';
import type { Education } from '@/types/education';
import type { Job } from '@/types/job';
import type { Project } from '@/types/project';
import type { Skill } from '@/types/skill';
import type { Social } from '@/types/social';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

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
				title: 'iqbal-syuhada-73371b218',
				icon: Linkedin,
				url: 'https://www.linkedin.com/in/iqbal-syuhada-73371b218/',
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
				keterangan: 'Jurusan sistem informasi angkatan 2015',
			},
			{
				kampus: 'LP3I Balikpapan',
				tahun: '2013/2015',
				jurusan: 'Informatika komputer',
				keterangan: 'Jurusan informatika komputer angkatan 2013',
			},
			{
				kampus: 'MAN Balikpapan',
				tahun: '2010/2013',
				jurusan: 'Jurusan IPA',
				keterangan: 'Jurusan IPA angkatan 2010',
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
			{ name: 'laravel', level: 'expert' },
			{ name: 'react js', level: 'experienced' },
			{ name: 'mysql', level: 'expert' },
			{ name: 'react native', level: 'skillfull' },
			{ name: 'figma', level: 'experienced' },
		];
	},
	projects: (): Project[] => {
		return [];
	},
};

export default useData;
