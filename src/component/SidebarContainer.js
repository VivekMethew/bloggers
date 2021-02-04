import React from 'react';

function SidebarContainer() {
	return (
		<div className="side-bar p-3">
			<div className="cat_box">
				<h1 className="h3 text-info">Category</h1>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<a href="#">Category 1</a>
					</li>
					<li className="list-group-item">
						<a href="#">Category 2</a>
					</li>
					<li className="list-group-item">
						<a href="#">Category 3</a>
					</li>
					<li className="list-group-item">
						<a href="#">Category 4</a>
					</li>
					<li className="list-group-item">
						<a href="#">Category 5</a>
					</li>
					<li className="list-group-item">
						<a href="#">Category 6</a>
					</li>
				</ul>
			</div>

			<div className="blog_tags mt-3">
				<h1 className="h3 text-info">Tags</h1>
				<div className="tags mt-3">
					<button type="button" className="btn btn-success m-2">
						Tags 1
					</button>
					<button type="button" className="btn btn-success m-2">
						Tags 2
					</button>
					<button type="button" className="btn btn-success m-2">
						Tags 3
					</button>
					<button type="button" className="btn btn-success m-2">
						Tags 4
					</button>
					<button type="button" className="btn btn-success m-2">
						Tags 5
					</button>
					<button type="button" className="btn btn-success m-2">
						Tags 6
					</button>
					<button type="button" className="btn btn-success m-2">
						Tags 7
					</button>
					<button type="button" className="btn btn-success m-2">
						Tags 8
					</button>
				</div>
			</div>
		</div>
	);
}

export default SidebarContainer;
