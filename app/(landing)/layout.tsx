import { Footer } from "./_components/footer";
import { Navbar } from "../../components/navbar";

function LandingLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-screen overflow-hidden">
			<Navbar />
			<main className="pt-24">{children}</main>
			<Footer />
		</div>
	);
}

export default LandingLayout;
