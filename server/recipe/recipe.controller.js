const recipeModule = require('./recipe.module');

async function create(data) {
    return await recipeModule.create(data);
}

async function readAll(isActive) {
    let result= await recipeModule.find({ isActive: isActive });
//    console.log(result); 
    return result;
}


async function readOne(filter = {}) {
    console.log(filter);
    return await recipeModule.findOne(filter);
}

async function upDate(filter, data) {
    let recipe = await recipeModule.findByIdAndUpdate(filter, data);
    return recipe;
}

async function readAllBy(field, filter) {
    const query = {};
    query[field] = filter;
    console.log(query, "query");
    return await recipeModule.find(query);
}


async function search(filter) {
    const query = {};
    query["name"] = { "$regex": `^${filter}` };
    return await recipeModule.find(query);
}



async function upDateViews(filter) {
    console.log(filter, "controller");
    let result = await recipeModule.updateOne({ _id: filter }, { $inc: { views: 1 } }, { new: true })
    return result;
}

async function recipeMany() {
    let result = await recipeModule.updateMany({}, { $set: { approved: false } });
    return result;
}



async function allTags() {
        // שורה זו מחפשת במסמכים במודול recipeModule ומחזירה רק את השדה tags
    let result = await recipeModule.find({},{tags:1});
    return result;
}


// recipeRouter.put('/api/recipe/:id', async (req, res) => {
//     try {
//         const recipe = await recipeService.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.status(200).json(recipe);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


async function updateRecipe(recipeId, updateData) {
    // עדכון המתכון במסד הנתונים
    const updatedRecipe = await recipeModule.findByIdAndUpdate(recipeId, updateData, { new : true });
    return updatedRecipe;
}

module.exports = {
    create,
    readOne,
    readAll,
    upDate,
    upDateViews,
    readAllBy,
    search,
    recipeMany,
    allTags,
    updateRecipe
}