 const router = require("express").Router();
const Admin = require("../../controllers/planitControllersAdmin");
const ExpendableGoods = require("../../controllers/planitControllersExpendableGoods");
const Gear = require("../../controllers/planitControllersGear");
const Logistics = require("../../controllers/planitControllersLogisitics");
const MessageBoard = require("../../controllers/planitControllersMessageBoard");
const Other = require("../../controllers/planitControllersOther");
const PlanIt = require("../../controllers/planitControllersPlanIt");
const Recreational = require("../../controllers/planitControllersRecreational");
const User = require("../../controllers/planitControllersUser");
// const planitControllersUserSession = require("../../controllers/planitContrllersUserSession");

// function userId (req, res){
//     let items = [{
//          name:ExpendableGoods,
//          model: ExpendableGoods
//          },
//         {
//             name:Gear,
//             model: Gear
//         },
//         {
//             name:Logistics,
//             model:Logistics
//         },
//         {
//             name:Other,
//             name: Other
//         },  
//         {
//             name:Recreational,
//             name: Recreational
//         },  
//          ];

//     Promise.all(items.map(item =>{
//         return new Promise((resolve, reject) =>{
//             item.model.find({id: userid}, (err, items) => {
// 				if (err) {
// 					return reject(err);
//                 }
                
//                 resolve({
//                     [item.name]: items
//                 });
//         });
//     });
//  }))

//  .then(items => {
//      let contents = {};
//      items.forEach(item =>{
//          contents = {
//              ...contents, items
//          };
//      });
//      res.send(contents);
//  })
// .catch(err => {
//     consle.error(err);

//     res.status(500).send(err);
// })
// }

// function planId (req,res){
//     let items = [{
//          name:ExpendableGoods,
//          model: ExpendableGoods
//          },
//         {
//             name:Gear,
//             model: Gear
//         },
//         {
//             name:Logistics,
//             model:Logistics
//         },
//         {
//             name:Other,
//             name: Other
//         },  
//         {
//             name:Recreational,
//             name: Recreational
//         },  
//          ];

//     Promise.all(items.map(item =>{
//         return new Promise((resolve, reject) =>{
//             item.model.find({id: planid}, (err, items) => {
// 				if (err) {
// 					return reject(err);
//                 }
                
//                 resolve({
//                     [item.name]: items
//                 });
//         });
//     });
//  }))

//  .then(items => {
//      let contents = {};
//      items.forEach(item =>{
//          contents = {
//              ...contents, items
//          };
//      });
//      res.send(contents);
//  })
// .catch(err => {
//     consle.error(err);

//     res.status(500).send(err);
// })
// }



router.route("/")
    .get(PlanIt.findAllByPlanItId)
    .put(PlanIt.update)
    .post(PlanIt.create)
    .delete(PlanIt.remove);

router.route("/:id")
    .get(PlanIt.findOneByPlanId)
    .put(PlanIt.update)
    .post(PlanIt.create)
    .delete(PlanIt.remove);

router.route("/user")
    .post(User.create)

//Route allows you to find only by plan ID
router.route("/plan/:planid")
    .get(PlanIt.findOneByPlanId)
    .put(PlanIt.update)  
    .post(PlanIt.create) 
    .delete(PlanIt.remove);

//Routes allows to find all
 router.route("/plan/:planid/all")
    .get(PlanIt.findAllByPlanItId)
    .put(PlanIt.update)   
    .delete(PlanIt.remove);

router.route("/plan")
    .post(PlanIt.create)

// router.route("/Admin/")
//     .get(Admin.findAllByUserId)
//     .put(Admin.update)
//     .post(Admin.create)
//     .delete(Admin.remove);

router.route("/travel/is/fun/ExpendableGoods")
    .get(ExpendableGoods.findAllByUserId)
    .post(ExpendableGoods.create)
    .put(ExpendableGoods.update);

router.route("/travel/is/fun/with/Gear")
    .get(Gear.findAllByUserId)
    .post(Gear.create)
    .put(Gear.update);


router.route("/travel/is/fun/with/your/Logistics")
    .get(Logistics.findAllByUserId)
    .post(Logistics.create)
    .put(Logistics.update);

router.route("/travel/is/fun/with/your/friends/MessageBoard")
    .get(MessageBoard.findAllByUserId)
    .post(MessageBoard.create)
    .put(MessageBoard.update);

router.route("/travel/is/fun/with/your/friends/and/Other")
    .get(Other.findAllByUserId)
    .post(Other.create)
    .put(Other.update);

router.route("/travel/is/fun/with/your/friends/and/family/Recreational")
    .get(Recreational.findAllByUserId)
    .post(Recreational.create)
    .put(Recreational.update);

router.route("/travel/is/fun/with/your/friends/and/family/enjoy/User")
    .get(User.findAllByUserId)
    .post(User.create)
    .put(User.update);

module.exports = router;