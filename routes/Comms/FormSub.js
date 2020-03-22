const           exPress     =       require("express"),
                regForm     =       require(`../../models/Registration`),
                router      =       exPress.Router();

router.post(`/`, (request, response) => {
    const formInfo = request.body;
    console.log(formInfo);
    const newContact = new regForm(formInfo)
    newContact.save()
    .then(
        (savedForm) => {
            response.json(savedForm);
        }
    ).catch(
        (err) => {
            console.log(err);
            // response.status().json(err);
        }
    )
})

module.exports = router;