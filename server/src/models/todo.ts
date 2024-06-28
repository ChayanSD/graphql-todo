
import mongoose,{Schema} from "mongoose";
import ITodo from "../types/todoTypes";


const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    tag : {
        type: [String],
        required: true
    }
},{timestamps:true});

const Todo = mongoose.model<ITodo>("Todo",TodoSchema);

export default Todo;