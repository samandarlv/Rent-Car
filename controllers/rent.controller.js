const { errorHandler } = require("../helpers/error_handler");
const rent = require("../models/rent");
const Rent = require("../models/rent");

exports.getAll = async (req, res) => {
    try {
        const rents = await Rent.find({});
        if (rents.length == 0) {
            res.status(400).send({ message: "Ijara toplimadi" });
        } else {
            res.json(rents);
        }
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.addRent = async (req, res) => {
    try {
        const {
            car_id,
            client_id,
            from_datetime,
            to_datetime,
            rent_status_id,
            rent_type_id,
        } = req.body;
        const from = new Date(from_datetime);
        const to = new Date(to_datetime);
        const time = (to.getTime() - from.getTime()) / 1000 / 60 / 60;
        const newRent = await Rent({
            car_id,
            client_id,
            from_datetime,
            to_datetime,
            rent_status_id,
            rent_type_id,
        });
        const added = await newRent.save();
        res.status(200).send({ message: "Yangi ijara qo'shildi" });
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.updateRent = async (req, res) => {
    try {
        const {
            car_id,
            client_id,
            from_datetime,
            to_datetime,
            rent_status_id,
            rent_type_id,
        } = req.body;
        const rent = await Rent.findOne({ _id: req.params.id });
        if (!rent) {
            res.status(400).send({ message: "Ijara topilmadi" });
        } else {
            const updated = await Rent.updateOne(
                { _id: req.params.id },
                {
                    car_id,
                    client_id,
                    from_datetime,
                    to_datetime,
                    rent_status_id,
                    rent_type_id,
                }
            );
            res.status(200).send({ message: "Ijara ma'lumotlari yangilandi" });
        }
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.deleteRent = async (req, res) => {
    try {
        const rent = await Rent.findById(req.params.id);
        if (!rent) {
            res.status(400).send({ message: "Ijara topilmadi" });
        } else {
            await Rent.deleteOne({ _id: req.params.id });
            res.status(200).send({ message: "Ijara o'chirildi" });
        }
    } catch (error) {
        errorHandler(res, error);
    }
};
