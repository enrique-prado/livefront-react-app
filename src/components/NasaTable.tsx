import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const API_KEY = "MetHYfQ8KJ7rodhMY82Kd320QG7mmer4L8Q5L0xC";

function NasaTable() {
	const { isLoading, error, data } = useQuery({
		queryKey: ["data"],
		queryFn: fetchImagesData,
	});

	if (isLoading) return <p>Loading...</p>;
	if (error instanceof Error) return <p>Error: {error.message}</p>;

	return (
		<table className="table-nasa">
			<thead>
				<tr>
					<th className="px-4 py-2">Date</th>
					<th className="px-4 py-2">Image Title</th>
					<th className="px-4 py-2">Action</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item: { date: string; title: string; url: string }) => (
					<tr className="hover-row group" key={item.date}>
						<td className="border px-4 py-2">{item.date}</td>
						<td className="border-x-0 px-4 py-2">{item.title}</td>
						<td className="border px-4 py-2">
							<div className="flex-center">
								<span>
									<Link
										to="/photoDetails/$date"
										params={{ date: item.date }}
										className="table-link"
									>
										<img
											src={item.url}
											alt={item.title}
											className="thumb-image"
										/>
									</Link>
								</span>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export async function fetchImagesData() {
	const response = await fetch(
		`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=30&thumbs=true`,
	);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json();
}

export default NasaTable;
