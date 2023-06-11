const { Schema, model } = require("mongoose");

const carSchema = new Schema(
    {
        car_number: {
            type: Number,
            required: true,
        },
        make: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        mileage: {
            type: Number,
            required: true,
        },
        price_type_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Price",
        },
    },
    {
        versionKey: false,
    }
);

module.exports = model("Car", carSchema);
