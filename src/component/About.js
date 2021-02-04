import React from 'react';

function About() {
	document.title = 'About, Blog App';
	return (
		<div className="about-section">
			<div className="container">
				<div className="row mt-3">
					<div className="col-lg-8 col-md-10 col-sm-12">
						<h1 className="h2 font-weight-bold"> About </h1>{' '}
						<p>
							A blog is a type of website where the content is presented in reverse chronological
							order(newer content appear first).Blog content is often referred to as entries or“ blog
							posts”.Blogs are typically run by an individual or a small group of people to present
							information in a conversational style.However, now there are tons of corporate blogs that
							produce a lot of informational and thought - leadership style content.{' '}
						</p>
						<p> Typical blog posts also have a comments section where users can respond to the article. </p>{' '}
						<h4> History of Blogs </h4>{' '}
						<p>
							Blogs evolved from online diaries and journals in the mid - 90 s.At that time, internet
							users were already running personal web pages where they published regular updates about
							their personal lives, thoughts, and social commentary.{' '}
						</p>{' '}
						<p>
							The term web log was first used during the late 90 s, which later became‘ weblog’, then‘ we
							blog’, and finally just‘ blog’.{' '}
						</p>{' '}
						<p>
							Due to the growing number of such web pages, several tools started to appear, which made it
							easier for users to create online journals and blogs.These tools helped popularize blogging
							and made the technology accessible to non - technical users.{' '}
						</p>{' '}
					</div>{' '}
					<div className="col-lg-4">
						<div className="imgBox">
							<img
								src="https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg"
								className="w-100"
								alt="imgs"
							/>
						</div>{' '}
					</div>{' '}
				</div>{' '}
			</div>{' '}
		</div>
	);
}

export default About;
