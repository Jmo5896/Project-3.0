const db = require("../models")

module.exports = {


    findOneByPlanId: function(req,res){
        db.MessageBoard
            .then(req.query)
            .sort({_:id})
            .then(dbPlanit => res.json(dbPlanit))
            .catch(err => res.status(422).json(err));
    },

    findAllByUserId: function(req,res){
        db.MessageBoard
        .findById(req.params.id)
        .then(dbPlanit => res.json(dbPlanit))
        .catch(err => res.status(422).json(err));
    },
        
    create: function(req,res){
        db.MessageBoard
        .create(req.body)
        .then(dbPlanit => res.json(dbPlanit))
        .catch(err => res.status(422).json(err));
    },

    update: function(req,res){
        db.MessageBoard
        .findOneAndUpdate({_id:req.params.id}, req.body)
        .then(dbPlanit => res.json(dbPlanit))
        .catch(err => res.status(422).json(err));
    },

    remove: function(req,res){
        db.MessageBoard
        .findById({_id: req.params.id})
        .then(dbPlanit => dbPlanit.remove())
        .then(dbPlanit => res.json(dbPLanit))
        .catch(err => res.status(422).json)
    }
};