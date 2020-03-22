const exPress = require("express"),
    customer = require(`../../../models/Customer`),
    appointments = require(`../../../../models/Appointment`),
    verifyuser = require(`../../../../middleware/authmiddle`),
    router = exPress.Router();

router.get(`/Appointments`, verifyuser, (request, response) => {
    const usr = request.body.user;
    customer.findOne({ user: usr.id })
        .then(
            (custObj) => {
                return appointments.find({ customer: custObj.id })
            }
        ).then(
            appts => {
                return response.json(appts)
            }
        ).catch(
            (err) => {
                response.json(err)
            }
        )
})


router.post(`/:apptid/change`, verifyuser, (request, response) => {

    const apptID = request.params.apptid,
        usr = request.body.user,
        newDateTime = request.body.newDateTime;
    appointments.findById(apptID)
        .then(
            apptObj => {
                apptObj.datetimeslot.start = newDateTime.start;
                apptObj.datetimeslot.end = newDateTime.end;
                apptObj.save()
                .then(
                    savedapptObj => {
                        return response.json(savedapptObj)
                    }
                ).catch(
                    err => {
                        return response.json(err)
                    }
                )
            }
        )
})

module.exports = router;

