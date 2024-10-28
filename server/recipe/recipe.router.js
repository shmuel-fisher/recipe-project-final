const recipeService = require('./recipe.service');
const exprees = require('express');
recipeRouter = exprees.Router();


recipeRouter.get('/:id', async (req, res) => {
    try {
        let recipe = await recipeService.readOne(req.params.id);
        console.log(recipe);
        res.send(recipe);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})

recipeRouter.post('/by/name', async (req, res) => {
    try {
        let recipe = await recipeService.readOneByName(req.body.name);
        res.send(recipe);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})




//למצוא מתכון על פי שדה מסוים
recipeRouter.post('/find/by', async (req, res) => {
    try {
        let field = req.body.field;
        let filter = req.body.filter;
        console.log(field, filter);
        let recipe = await recipeService.findBy(field, filter);
        console.log(recipe);
        res.send(recipe);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})


recipeRouter.post('/search', async (req, res) => {
    try {
        let filter = req.body.filter;
        let recipe = await recipeService.search(filter);
        console.log(recipe);
        res.send(recipe);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})




recipeRouter.post('/status/:isActive', async (req, res) => {
    let isActive = req.params.isActive;
    try {
        console.log(isActive);
        let data = await recipeService.readAll(isActive);
        res.send(data);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
});




recipeRouter.post('/add', async (req, res) => {

    // data = {
    //     owner: req.body.owner,
    //     name: req.body.name,
    //     servings: req.body.servings,
    //     type: req.body.type,
    //     time: req.body.time,
    //     level: req.body.level,
    //     product: req.body.product,
    //     directions: req.body.directions,
    //     image: req.body.image,
    //     tags: req.body.tags
    // }

    try {
       console.log(req.body.data,"from add router")
        let result = await recipeService.addNewRecipe(req.body.data);
        console.log(result + "result");
        res.send(result);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})

recipeRouter.put('/views/update', async (req, res) => {
    console.log("robin isn't defined");
    try {
        // let user = await recipeService.readOne(id);
        // let views = user.views;
        // console.log(views);
        let response = await recipeService.updateViews(req.body.id);
        res.send(response);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
})



recipeRouter.get('/all/tags', (req, res) => {
    recipeService.getAllTags()
        .then(response => {
            // שלב 1: איחוד כל התגים מכל האובייקטים למערך אחד
            let allTags = [];

            if (response) {
                allTags = response.map(recipe => recipe.tags).flat();

                // שלב 2: הסרת כפילויות
                let uniqueTags = [...new Set(allTags)];

                // שלב 3: מיון המערך בסדר אלפביתי
                const sortedTags = uniqueTags.sort((a, b) => a.localeCompare(b));

                res.send(sortedTags);
            }
        })
        .catch(error => {
            res.status(400).send(error.message);
        });
});


recipeRouter.patch('/recipe/upDate/:id' ,async (req,res) =>{
    try {
        const recipeId = req.params.id;
        const updateData = req.body;

        const updatedRecipe = await recipeService.updateRecipeAndActivate(recipeId, updateData);

        if (!updatedRecipe) {
            return res.status(404).send({ message: 'Recipe not found' });
        }

        res.status(200).send(updatedRecipe);
    } catch (error) {
        res.status(500).send({ message: 'Server error', error });
    }
});



module.exports = { recipeRouter };

