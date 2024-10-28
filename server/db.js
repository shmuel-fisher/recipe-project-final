const mongoose = require('mongoose');
const {config} = require("dotenv")


config();

function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL)
            .then(res => console.log("conecting"));
    }
    catch (err) {
        console.log(err);
    }
}


module.exports={connect};










//חישוב זמן 

// classTiming: {
//     type: String,
//     validate: {
//       validator: function (v) {
//         if (!v) {
//           return true;
//         }
//         return /([01]?[0-9]|2[0-3]):[0-5][0-9]/.test(v);
//       },
//       message: (props) => `${props.value} is not valid time!`,
//     },
//   },
