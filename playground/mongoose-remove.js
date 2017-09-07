const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '59b0c2d44672395c0d74e8e4'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('59b0c2d44672395c0d74e8e4').then((todo) => {
    console.log(todo);
});