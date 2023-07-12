const db = require('../config/connection');
const { User, Event } = require('../models');

const userData = require('./userData.json');

db.once('open', async () => {
  try {
    console.log(userData)
    await User.deleteMany({});

    await User.insertMany(userData)
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
