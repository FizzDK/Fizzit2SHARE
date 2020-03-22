const           exPress     =       require("express"),
                preContact  =       require(`../../models/Registration`),
                router      =       exPress.Router();

router.post(`/`, (request, response) => {
    const formInfo = request.body;
    console.log(formInfo);
    const newComm = new preContact(formInfo)
    newComm.save()
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