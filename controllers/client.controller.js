const { errorHandler } = require("../helpers/error_handler");
const Client = require("../models/client");

exports.getAll = async (req, res) => {
    try {
        const clients = await Client.find({});
        if (clients.length == 0) {
            res.status(400).send({ message: "Mijozlar toplimadi" });
        } else {
            res.json(clients);
        }
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.addClient = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            birthday,
            passport,
            driving_license,
            adress,
            phone,
        } = req.body;

        const newClient = await Client({
            first_name,
            last_name,
            birthday,
            passport,
            driving_license,
            adress,
            phone,
        });
        const added = await newClient.save();
        res.status(200).send({ message: "Yangi mijoz qo'shildi" });
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.updateClient = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            birthday,
            passport,
            driving_license,
            adress,
            phone,
        } = req.body;
        const client = await Client.findOne({ _id: req.params.id });
        if (!client) {
            res.status(400).send({ message: "Mijoz topilmadi" });
        } else {
            const updated = await Client.updateOne(
                { _id: req.params.id },
                {
                    first_name,
                    last_name,
                    birthday,
                    passport,
                    driving_license,
                    adress,
                    phone,
                }
            );
            res.status(200).send({ message: "Mijoz ma'lumotlari yangilandi" });
        }
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.deleteClient = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            res.status(400).send({ message: "Mijoz topilmadi" });
        } else {
            await Client.deleteOne({ _id: req.params.id });
            res.status(200).send({ message: "Mijoz o'chirildi" });
        }
    } catch (error) {
        errorHandler(res, error);
    }
};
