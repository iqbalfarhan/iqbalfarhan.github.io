import AwardSection from '@/components/welcome/award-section';
import CertificateSection from '@/components/welcome/certificate-section';
import EducationSection from '@/components/welcome/education-section';
import FooterSection from '@/components/welcome/footer-section';
import HeroSection from '@/components/welcome/hero-section';
import JobSection from '@/components/welcome/job-section';
import SkillSection from '@/components/welcome/skill-section';
import SocialSection from '@/components/welcome/social-section';
import SummarySection from '@/components/welcome/summary-section';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<HeroSection />
			<div className="grid print:grid-cols-1 xl:grid-cols-5">
				<div className="grid print:grid-cols-1 xl:col-span-3 h-fit">
					<SummarySection />
					<JobSection />
					<EducationSection />
				</div>
				<div className="grid print:grid-cols-1 xl:col-span-2 h-fit">
					<SkillSection />
					<CertificateSection />
					<AwardSection />
					<SocialSection />
				</div>
			</div>
			<FooterSection />
		</>
	);
}
