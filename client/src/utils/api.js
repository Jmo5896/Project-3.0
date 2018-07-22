import axios from "axios";

export default {
    

getAllUserPlans: function(id){
    return axios.get("/api/planit/plan/"+ id + "/all" )
},


getPlanByID: function(id){
    return axios.get("/api/planit/plan/" + id)
},

postPlan: function(GearData){
    return axios.post("/api/planit/plan/", GearData)
},

getExpendableGoods: function(id){
    return axios.get("/api/planit/travel/is/fun/ExpendableGoods/" + id)
},

postExpendableGoods: function(ExData){
    return axios.post("/api/planit/travel/is/fun/ExpendableGoods", ExData)
},

getGear: function(id){
    return axios.get("/api/planit/travel/is/fun/with/Gear/" + id)
},

postGear: function(GearData){
    return axios.post("/api/planit/travel/is/fun/with/Gear", GearData)
},

getLogistics: function(id){
    return axios.get("/api/planit/travel/is/fun/with/your/Logistics/" + id)
},

postLogistics: function(LogData){
    return axios.post("/api/planit/travel/is/fun/with/your/Logistics", LogData)
},

getMessage: function(id){
    return axios.get("/api/planit/travel/is/fun/with/your/friends/MessageBoard/" + id)
},

postMessage: function(MessageData){
    return axios.post("/api/planit/travel/is/fun/with/your/friends/MessageBoard", MessageData)
},

getOther:function(id){
    return axios.get("/api/planit/travel/is/fun/with/your/friends/and/Other/" + id)
},

postOther: function(OtherData){
    return axios.post("/api/planit/travel/is/fun/with/your/friends/and/Other", OtherData)
},

getRec: function(id){
    return axios.get("/api/planit/travel/is/fun/with/your/friends/and/family/Recreational/" + id)
},

postRec: function(RecData){
    return axios.post("/api/planit/travel/is/fun/with/your/friends/and/family/Recreational", RecData)
},

getUser: function(id){
    return axios.get("/api/planit/travel/is/fun/with/your/friends/and/family/enjoy/User/" + id)
},

postUser: function(UserData){
    return axios.post("/api/planit/travel/is/fun/with/your/friends/and/family/enjoy/User", UserData)
}







// deletePlan: function(id){
//     return axios.put("/api/planit" + id)
    
// },
    
}
