const { request, response } = require("express");
const handlErrors = require("../middlewares/validator");
const Signalerdata = require("../others/requetteSignaler")


const dataSignaler = class {

    static AllSignaler = async (req = request, res = response) => {

        const Signaler = await Signalerdata.SignalerAll()
        if (Signaler.success) {

            res.status(201).json({ "statut": "success", "data": Signaler.success })
        } else {
            res.status(400).json({ "statut": "error", "data": Signaler.erreur })
        }

    }

    static PostSignaler = async (req = request, res = response) => {
        console.log('bobyjj', req.body);

        const Signaler = await Signalerdata.insertSignaler(req.body)
        if (Signaler.success) {


            res.status(201).send({ "statut": "success", "data": 'Signaler  postulé' })
        } else {
            const error = handlErrors(Signaler.erreur)
            res.status(400).json({ "statut": "error", "data": "erreur d'envoi" })
        }

    }

    static GetSignalerbyId = async (req = request, res = response) => {
        console.log('boby22', req.params.id);

        const Signaler = await Signalerdata.IdbySignaler(req.params.id)
        if (Signaler.success) {
            console.log('erzarete', Signaler.success);

            res.status(201).send({ "statut": "success", "data": Signaler.success })
        } else {
            const error = handlErrors(Signaler.erreur)
            res.status(400).json({ "statut": "error", "data": Signaler.erreur })
        }

    }

    static DeleteSignaler = async (req = request, res = response) => {
        console.log('boby', req.params.id);

        const Signaler = await Signalerdata.SignalerDelete(req.params.id)
        if (Signaler.success) {
            console.log('erzarete', Signaler.success);

            res.status(201).send({ "message": "Signaler  delete avec success" })
        } else {
            const error = handlErrors(Signaler.erreur)
            res.status(400).json({ "alert": error })
        }

    }

    static UpdateSignaler = async (req = request, res = response) => {
        console.log('boby', req.params.id);
        console.log('boby', req.body);


        const Signaler = await Signalerdata.SignalerUpdate(req.body, req.params.id)
        if (Signaler.success) {
            console.log('erzarete', Signaler.success);

            res.status(201).send({ "statut": "success", "data": 'update Signaler .success' })
        } else {
            const error = handlErrors(Signaler.erreur)
            res.status(400).json({ "statut": "error", "data": Signaler.erreur })
        }

    }


}


module.exports = dataSignaler