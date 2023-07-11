const db = require('../config/connection');
const { User, Event } = require('../models');

const userData = require('./userData.json');
// const eventData = require('./eventData.json');

db.once('open', async () => {
  try {
    // await Event.deleteMany({});
    await User.deleteMany({});

    await User.create(userData);

    // for (let i = 0; i < thoughtSeeds.length; i++) {
    //   const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: thoughtAuthor },
    //     {
    //       $addToSet: {
    //         thoughts: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
