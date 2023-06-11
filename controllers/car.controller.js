const { errorHandler } = require("../helpers/error_handler");
const Car = require("../models/car");

exports.getAll = async (req, res) => {
    try {
        const cars = await Car.find({});
        if (cars.length == 0) {
            res.status(400).send({ message: "Mashinalar toplimadi" });
        } else {
            res.json(cars);
        }
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.addCar = async (req, res) => {
    try {
        const { car_number, make, model, year, mileage, price_type_id } =
            req.body;
        const newCar = await Car({
            car_number,
            make,
            model,
            year,
            mileage,
            price_type_id,
        });
        const added = await newCar.save();
        res.status(200).send({ message: "Yangi mashina qo'shildi" });
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.updateCar = async (req, res) => {
    try {
        const { car_number, make, model, year, mileage, price_type_id } =
            req.body;
        const car = await Car.findOne({ _id: req.params.id });
        if (!car) {
            res.status(400).send({ message: "Mashina topilmadi" });
        } else {
            const updated = await Car.updateOne(
                { _id: req.params.id },
                { car_number, make, model, year, mileage, price_type_id }
            );
            res.status(200).send({
                message: "Mashina ma'lumotlari yangilandi",
            });
        }
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.deleteCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            res.status(400).send({ message: "Mashina topilmadi" });
        } else {
            await Car.deleteOne({ _id: req.params.id });
            res.status(200).send({ message: "Mashina o'chirildi" });
        }
    } catch (error) {
        errorHandler(res, error);
    }
};
