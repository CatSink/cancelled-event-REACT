const db = require('../config/connection');
const { User, Event } = require('../models');

const userData = require('./userData.json');
// const eventData = require('./eventData.json');

db.once('open', async () => {
  try {
    console.log(userData)
    // await Event.deleteMany({});
    await User.deleteMany({});

    await User.insertMany(userData)
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
