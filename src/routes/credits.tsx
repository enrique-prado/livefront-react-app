import { createFileRoute } from "@tanstack/react-router";
import Credits from '../components/Credits'

export const Route = createFileRoute("/credits")({
	component: CreditsComponent,
});

function CreditsComponent() {
	return (
		<Credits/>
	);
}
