import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function DonateButton() {
	return (
		<Button size="lg" asChild>
			<div>
				<h3>Donate Now</h3>
				<ArrowRight />
			</div>
		</Button>
	)
}
