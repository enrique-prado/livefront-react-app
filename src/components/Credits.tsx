function Credits() {
	return (
		<section className="credits">
			<h1>How to use this app</h1>
			<p>
				To run the app execute the following command: <strong>npm start</strong>
			</p>
			<p>
				The main List View will load 30 random images and videos from NASA's
				API.
				<br />
				<strong>To get details, click on the preview image.</strong>
			</p>
			<p>
				The Media Type column will show an icon indicating if the media is a
				video or an image.
			</p>
			<p>
				There are many more images than videos available in the API.
				<br /> If you don't see any videos listed, simply refresh the page to
				load a new random set of media.
			</p>
			<p>
				If you look at a video's details.{" "}
				<strong>An embedded video player will be displayed</strong>
			</p>

			<p>
				To navigate to the main view click on the "List View" tab in the navbar.
				or click on the "Back to Gallery" button in the details view.
			</p>

			<p>
				The app should be fully accessible as it passed the accessibility scan
				by Deque's AXE DevTools extension
			</p>
			<p>To run automated tests, run the following command: npm run test</p>

			<h1>Credits</h1>
			<p>
				This is a React App that uses NASA's API as documented{" "}
				<a
					href="https://api.nasa.gov/"
					target="_blank"
					rel="noopener noreferrer"
				>
					here
				</a>
			</p>
			<p>
				Developed by Eduardo Enrique Prado using TanStack Router & TanStack
				Query
				<br />
				<strong>
					No CSS libraries were used. All styles are custom made with some
					inspiration from Tailwind CSS.
				</strong>
			</p>
			<p>Using react-player for video playback</p>
			<br />
			<strong>
				For additional information please see README.md at the root of the
				project
			</strong>
		</section>
	);
}

export default Credits;
