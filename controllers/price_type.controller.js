const { errorHandler } = require("../helpers/error_handler");
const Price = require("../models/price_type");

exports.getAll = async (req, res) => {
    try {
        const prices = await Price.find({});
        if (prices.length == 0) {
            res.status(400).send({ message: "Narxlar toplimadi" });
        } else {
            res.json(prices);
        }
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.addPrice = async (req, res) => {
    try {
        const { price_per_day, price_per_hour } = req.body;
        const newPrice = await Price({ price_per_day, price_per_hour });
        const added = await newPrice.save();
        res.status(200).send({ message: "Yangi narx qo'shildi" });
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.updatePrice = async (req, res) => {
    try {
        const { price_per_day, price_per_hour } = req.body;
        const price = await Price.findOne({ _id: req.params.id });
        if (!price) {
            res.status(400).send({ message: "Narx topilmadi" });
        } else {
            const updated = await Price.updateOne(
                { _id: req.params.id },
                { price_per_day, price_per_hour }
            );
            res.status(200).send({ message: "Narx ma'lumotlari yangilandi" });
        }
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.deletePrice = async (req, res) => {
    try {
        const price = await Price.findById(req.params.id);
        if (!price) {
            res.status(400).send({ message: "Narx topilmadi" });
        } else {
            await Price.deleteOne({ _id: req.params.id });
            res.status(200).send({ message: "Narx o'chirildi" });
        }
    } catch (error) {
        errorHandler(res, error);
    }
};
