import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const interestedContestants = sequelize.define("interestedContestants",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
});
  
sequelize.sync().then(()=>{
    console.log("interestedContestants table created...");
}).catch(err=>{
    console.log(err);
});

export default interestedContestants;