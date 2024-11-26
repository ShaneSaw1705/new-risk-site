'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, Calendar, Users, ChevronRight } from 'lucide-react'
import { handleSubscribe } from '@/hooks/newsletter'

export default function LandingPage() {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="bg-primary text-primary-foreground py-4">
				<div className="container mx-auto flex justify-between items-center">
					<Link href="/" className="flex items-center space-x-2">
						<Image src="/placeholder.svg?height=40&width=40" alt="RiSK Logo" width={40} height={40} />
						<span className="text-2xl font-bold">RiSK</span>
					</Link>
					<nav>
						<ul className="flex space-x-4">
							<li><Link href="#about" className="hover:underline">About</Link></li>
							<li><Link href="#events" className="hover:underline">Events</Link></li>
							<li><Link href="#contact" className="hover:underline">Contact</Link></li>
						</ul>
					</nav>
				</div>
			</header>

			<main className="flex-grow">
				<section className="bg-muted py-20">
					<div className="container mx-auto text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">Riders Supporting Kids</h1>
						<p className="text-xl mb-8 max-w-2xl mx-auto">Empowering less fortunate children through community events and toy donations.</p>
						<Button size="lg" asChild>
							<Link href="#donate">Donate Now</Link>
						</Button>
					</div>
				</section>

				<section id="about" className="py-16">
					<div className="container mx-auto">
						<h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<Card>
								<CardHeader>
									<Gift className="w-10 h-10 mb-2 text-primary" />
									<CardTitle>Toy Donations</CardTitle>
								</CardHeader>
								<CardContent>
									<p>We collect and distribute toys to bring joy to children in need.</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<Calendar className="w-10 h-10 mb-2 text-primary" />
									<CardTitle>Community Events</CardTitle>
								</CardHeader>
								<CardContent>
									<p>We organize events that bring together riders and local families.</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<Users className="w-10 h-10 mb-2 text-primary" />
									<CardTitle>Support Network</CardTitle>
								</CardHeader>
								<CardContent>
									<p>We build a community of support for underprivileged children.</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				<section id="events" className="bg-muted py-16">
					<div className="container mx-auto">
						<h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
						<div className="grid md:grid-cols-2 gap-8">
							<Card>
								<CardHeader>
									<CardTitle>Annual Toy Run</CardTitle>
									<CardDescription>November 24, 2024</CardDescription>
								</CardHeader>
								<CardContent>
									<p>Join us for our biggest event of the year! We&apos;ll be collecting toys for local children in need.</p>
									<Button variant="outline" className="mt-4">
										Learn More <ChevronRight className="ml-2 h-4 w-4" />
									</Button>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Other Event</CardTitle>
									<CardDescription>July 20, 2024</CardDescription>
								</CardHeader>
								<CardContent>
									<p>other information</p>
									<Button variant="outline" className="mt-4">
										Learn More <ChevronRight className="ml-2 h-4 w-4" />
									</Button>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				<section id="donate" className="py-16">
					<div className="container mx-auto text-center">
						<h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
						<p className="mb-8 max-w-2xl mx-auto">Your donation helps us continue our mission of supporting less fortunate children in our community.</p>
						<Button size="lg">Donate Now</Button>
					</div>
				</section>
			</main>

			<footer className="bg-primary text-primary-foreground py-8">
				<div className="container mx-auto">
					<div className="grid md:grid-cols-3 gap-8">
						<div>
							<h3 className="text-lg font-semibold mb-4">Contact Us</h3>
							<p>Email: email@email.com</p>
							<p>Phone: 027-524-7967</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-4">Follow Us</h3>
							<div className="flex space-x-4">
								<Link href="#" className="hover:underline">Facebook</Link>
								<Link href="#" className="hover:underline">Instagram</Link>
							</div>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-4">Newsletter</h3>
							<p>Subscribe to our newsletter for updates on events and ways to help.</p>
							<div>
								<form className='mt-4 flex' action={handleSubscribe}>
									<input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-md w-full" />
									<Button variant="secondary" className="rounded-l-none">Subscribe</Button>
								</form>
							</div>
						</div>
					</div>
					<div className="mt-8 text-center">
						<p>&copy; 2024 RiSK (Riders Supporting Kids). All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

