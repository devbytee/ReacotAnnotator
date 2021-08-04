import React from "react";
import ReactImageAnnotate from "react-image-annotate";
import video from './nature.mp4';
const App = () => (
	<ReactImageAnnotate
		regionClsList={["Alpha", "Beta", "Charlie", "Delta"]}
		regionTagList={["tag1", "tag2", "tag3"]}
		videoSrc={video}
		videoName="video"

	/>
);

export default App;
