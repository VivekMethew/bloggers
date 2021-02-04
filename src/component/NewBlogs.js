import React from 'react';
import { useForm } from 'react-hook-form';

function NewBlogs() {
	document.title = 'Create New, Blog App';
	const { register, handleSubmit, errors } = useForm(); // initialize the hook
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div className="section-new-blog pt-3">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h3 className="font-weight-bold text-uppercase"> Create New Blog </h3> <hr />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-7">
						<form onSubmit={handleSubmit(onSubmit)} className="form_box border p-3">
							<div className="form-group">
								<label> Blog Title </label>
								<input
									type="text"
									className="form-control"
									name="title"
									ref={register({ required: true })}
									placeholder="blog title ?"
								/>
								<span className="text-danger">{errors.title && 'title is required'}</span>
							</div>
							<div className="form-group">
								<label> Author </label>
								<input
									type="text"
									className="form-control"
									name="author"
									ref={register({ required: true })}
									placeholder="author?"
								/>
								<span className="text-danger">{errors.author && 'author is required'}</span>
							</div>
							<div className="form-group">
								<label> Description </label>
								<textarea
									className="form-control"
									cols="30"
									rows="6"
									name="description"
									ref={register({ required: true })}
									placeholder="saying..."
								></textarea>
								<span className="text-danger">{errors.description && 'description is required'}</span>
							</div>
							<div className="form-group">
								<label> Blog Images </label>
								<input
									type="text"
									className="form-control"
									name="urls"
									ref={register({ required: true })}
									placeholder="url"
								/>
								<span className="text-danger">{errors.urls && 'url is required'}</span>
							</div>
							<button type="submit" className="btn btn-info text-uppercase col-lg-4">
								save
							</button>
							<button type="reset" className="btn btn-danger text-uppercase col-lg-4 m-2">
								reset
							</button>
						</form>
					</div>
					<div className="col-lg-5">
						<div className="d-flex justify-content-center">
							<h1> blog </h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NewBlogs;
