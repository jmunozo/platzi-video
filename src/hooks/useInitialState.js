/*import { useState, useEffect } from 'react';

const useInitialState = (API) => {
	const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

	useEffect(() => {
		fetch(API)
			.then((response) => response.json())
			.then((data) => setVideos(data));
	}, []);
	return videos;
};

export default useInitialState;
*/
import { useState, useEffect } from 'react';

const useInitiaState = (API) => {
	const [videos, setVideos] = useState({ mylist: [], trends: [], original: [] });
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch(API)
			.then((response) => response.json())
			.then((data) => {
				setVideos(data);
				setCategories(Object.keys(data));
			});
	}, []);

	return [videos, categories];
};

export default useInitiaState;
