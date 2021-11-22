import { db, User } from "../model";

import type { IncomingMessage, ServerResponse } from 'http';

export default async (req: IncomingMessage, res: ServerResponse) => {
	const con = await db();

	const user = new User();
	user.name = "Tommy";
	await con.manager.save(user);

	const users = await con.manager.find(User);

	res.statusCode = 200;
	return {
		users
	};
}