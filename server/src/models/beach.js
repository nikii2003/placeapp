import { Schema, model } from "mongoose";

const beachSchema = new Schema ({
    name : {
       type: String
    
    }

})
const beach = model('beach',beachSchema)

export default beach