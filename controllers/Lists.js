const Lists = require('../models/lists');

const getAllLists = ({ skip, limit,name="" }) => {
	return new Promise(async (resolve, reject) => {
		try {
			const [data, count] = await Promise.all([
				Lists.find({name: {$regex: name, $options: 'i'}}).skip(skip).limit(limit),
				Lists.count({name: {$regex: name, $options: 'i'}}),
			]);

			resolve({ data, count });
		} catch (error) {
			console.log(error);
			reject(error);
		}
	});
};

module.exports = { getAllLists };
