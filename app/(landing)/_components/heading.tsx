"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Heading() {
	const { isSignedIn, isLoaded } = useUser();
	return (
		<div className="relative max-w-[800px] space-y-4 ">
			<h1 className="text-6xl font-extrabold leading-[1.1]">
				A monthly calendar that helps you plan your life around the{" "}
				weather.
			</h1>
			<h3 className="max-w-[650px] text-xl font-extralight">
				A calendar scheduling tool that embrace the changing elements of
				nature to allow you to fully plans your days around the weather.
			</h3>
			<div className="flex gap-x-8 pt-5">
				{!isLoaded && (
					<div className="ml-52 h-16">
						<Spinner size="lg" />
					</div>
				)}
				{!isSignedIn && isLoaded && (
					<>
						<SignInButton mode="modal">
							<Button
								size="lg"
								className="text-black w-52 h-16 rounded-3xl bg-[#9bccdd] hover:bg-violet-400 transition ease-in-out duration-300 text-base font-bold"
							>
								Try Weathery Free
							</Button>
						</SignInButton>
					</>
				)}
				{isSignedIn && isLoaded && (
					<>
						<Button
							variant="default"
							size="lg"
							asChild
							className="text-black bg-[#9bccdd] w-52 h-16 hover:bg-violet-400 text-base font-bold transition ease-in-out duration-300 rounded-3xl"
						>
							<Link href="/calendar">Enter Weathery</Link>
						</Button>
					</>
				)}
			</div>
			<div className="flex ml-16 pt-12 select-none">
				<Image
					src="/hero-teamwork.png"
					alt="hero"
					width={350}
					height={350}
				/>
			</div>
			<Image
				src="/hero-drawing.png"
				width={220}
				height={220}
				alt="hero-drawing"
				className="absolute -top-[200px] left-[340px] select-none"
			/>
			<Image
				src="/walking.png"
				width={100}
				height={300}
				alt="girl-walking"
				className="absolute top-[75px] -left-[200px] select-none"
			/>
		</div>
	);
}
