import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, (error) => {
	const expectedError =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500;
	// console.log('intercepter called!');

	if (!expectedError) {
		console.log('Logging the error', error);
		// alert('An unexpected error occurred!');
		// toast.error('An unexpected error occurred!');
		toast('An unexpected error occurred!');
	}

	return Promise.reject(error);
});

export default {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
};
