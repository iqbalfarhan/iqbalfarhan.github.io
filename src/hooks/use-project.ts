import type { Project } from '@/types/project';
import { useQuery } from '@tanstack/react-query';

const projects: Project[] = [
	{
		title: 'Website Profile AxiomDev',
		type: 'web',
		slug: 'website-profile-axiomdev',
		desctiption: [
			'Kami mengerjakan website official ini secara team, website ini dapat di akses di https://axiomdev.id',
			'Website ini berisi daftar anggota, project yang dikerjakan, article dan testimony customer',
		],
		thumbnail: '/projects/axiomdev.png',
		client: 'Axiomdev.id',
	},
	{
		title: '.IQMN :: Iqbal Materi Ngajar',
		type: 'web',
		slug: 'iqmn-iqbal-materi-ngajar',
		desctiption: [
			'Platform untuk belajar dan mengajar. Berfungsi untuk menyimpan link google slide materi belajar',
			'Aplikasi web ini saya gunakan sewaktu menjadi pengajar partime di LP3I Balikpapan',
		],
		thumbnail: '/projects/iqmn.png',
		client: 'iqbal farhan syuhada',
	},
];

async function fetchProjects(): Promise<Project[]> {
	return projects;
}

export const useProject = {
	lists: () => {
		return useQuery({
			queryKey: ['projects'],
			queryFn: fetchProjects,
		});
	},
};
