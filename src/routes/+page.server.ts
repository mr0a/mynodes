import { NAME } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	console.log('Running in server', NAME);
	return { mnodes: [1, 2, 3, 4, 5] };
};
