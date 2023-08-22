import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';

class App extends Component {
	state = {
		posts: [],
	};

	async componentDidMount() {
		//pending > resolved (success) OR rejected (failure)
		// const promise = axios.get('https://jsonplaceholder.typicode.com/posts');
		const { data: posts } = await axios.get(apiEndpoint);

		// console.log(promise);
		// const response = await promise;
		console.log('posts in axios: ', posts);
		this.setState({ posts: posts });
		console.log('posts in state(after this.setState): ', posts);
	}

	handleAdd = async () => {
		// console.log('Add');
		const obj = { title: 'a', body: 'b' };
		const { data: post } = await axios.post(apiEndpoint, obj);
		console.log(post);
		const addedPosts = [post, ...this.state.posts];
		this.setState({ posts: addedPosts });
	};

	handleUpdate = async (post) => {
		// console.log('Update', post);
		post.title = 'UPDATED';
		// const { data } = await axios.put(apiEndpoint + '/' + post.id, post);
		// console.log(data);
		// axios.patch(apiEndpoint + '/' + post.id, { title: post.title });
		await axios.put(apiEndpoint + '/' + post.id, post);
		const postsClone = [...this.state.posts];
		const index = postsClone.indexOf(post);
		// postsClone[index] = { ...post };
		postsClone[index] = post;
		this.setState({ posts: postsClone });
	};

	handleDelete = (post) => {
		console.log('Delete', post);
	};

	render() {
		return (
			<React.Fragment>
				<button className="btn btn-primary" onClick={this.handleAdd}>
					Add
				</button>
				<table className="table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Update</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{this.state.posts.map((post) => (
							<tr key={post.id}>
								<td>{post.title}</td>
								<td>
									<button
										className="btn btn-info btn-sm"
										onClick={() => this.handleUpdate(post)}
									>
										Update
									</button>
								</td>
								<td>
									<button
										className="btn btn-danger btn-sm"
										onClick={() => this.handleDelete(post)}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</React.Fragment>
		);
	}
}

export default App;
