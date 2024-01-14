import adapter from '@sveltejs/adapter-vercel';


/* dangerous */
/* https://github.com/sveltejs/kit/discussions/7600 */
/* https://stackoverflow.com/questions/73790956/cross-site-post-form-submissions-are-forbidden/73801539#73801539 */
export default {
	kit: {
		adapter: adapter({}),
		csrf: {checkOrigin: false}
	}
};

