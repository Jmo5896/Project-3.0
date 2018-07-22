const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect((process.env.MONGODB_URI ||"mongodb://localhost:27017/planitdb"), { useNewUrlParser: true });

//expandable goods ==============================
const ExpendableGoodsSeed = [
  {
    title: "test1.0",
    comments: "J-Dawg",
    price: 200.00,
    quantity_needed: 10,
    quantity_actual: 5
  },
  {
    title: "test1.1",
    comments: "Justin",
    price: 100.00,
    quantity_needed: 8,
    quantity_actual: 1
  }
];

db.ExpendableGoods
  .remove({})
  .then(() => db.ExpendableGoods.collection.insertMany(ExpendableGoodsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
//expandable goods ==============================

//gear===========================================
const GearSeed = [
  {
    title: "test0.0",
    comments: "J-Dawg",
    quantity_needed: 10,
    quantity_actual: 5
  },
  {
    title: "test0.1",
    comments: "Justin",
    quantity_needed: 8,
    quantity_actual: 1
  }
];

db.Gear
  .remove({})
  .then(() => db.Gear.collection.insertMany(GearSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
//gear===========================================

//logistics======================================
const LogisticsSeed = [
  {
    title: "test2.0",
    comments: "J-Dawg"
  },
  {
    title: "test2.1",
    comments: "Justin"
  }
];

db.Logistics
  .remove({})
  .then(() => db.Logistics.collection.insertMany(LogisticsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
//logistics======================================

//MessageBoard===================================
const MessageBoardSeed = [
  {
    title: "test3.1",
    comments: "Justin"
  }
];

db.MessageBoard
  .remove({})
  .then(() => db.MessageBoard.collection.insertMany(MessageBoardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
//MessageBoard===================================

//other==========================================
const OtherSeed = [
  {
    title: "test4.0",
    comments: "J-Dawg",
    price: 200.00,
    quantity_needed: 10,
    quantity_actual: 5
  },
  {
    title: "test4.1",
    comments: "Justin",
    price: 100.00,
    quantity_needed: 8,
    quantity_actual: 1
  }
];

db.Other
  .remove({})
  .then(() => db.Other.collection.insertMany(OtherSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
//other==========================================

//PlanIt=========================================
const PlanItSeed = [
  {
    title: "test5.0",
    location: "J-Dawg",
    members: ['Ashely', 'Donald', 'Justin', 'Tyler', 'Walker']
  },
  {
    title: "test5.1",
    location: "Justin",
    members: ['Ashely', 'Donald', 'Justin', 'Tyler', 'Walker']
  }
];

db.PlanIt
  .remove({})
  .then(() => db.PlanIt.collection.insertMany(PlanItSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
//PlanIt=========================================

//recreational===================================
const RecreationalSeed = [
  {
    title: "test6.0",
    comments: "J-Dawg",
    price: 100.00,
    quantity_needed: 15,
    quantity_actual: 5
  },
  {
    title: "test6.1",
    comments: "Justin",
    price: 60.00,
    quantity_needed: 2,
    quantity_actual: 1
  }
];

db.Recreational
  .remove({})
  .then(() => db.Recreational.collection.insertMany(RecreationalSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
//recreational===================================

//users==========================================
const UserSeed = [
  {
    email: "example@gmail.com",
    username: "example1234",
    password: '1234',
    passwordConf: '1234',
    name: 'guest'
  },
  {
    email: "example2@gmail.com",
    username: "example5678",
    password: '1234',
    passwordConf: '1234',
    name: 'guest2'
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(UserSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
//users==========================================