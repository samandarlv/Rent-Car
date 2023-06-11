const { Schema, model } = require("mongoose");

const rentSchema = new Schema(
    {
        car_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Car",
        },
        client_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Client",
        },
        from_datetime: {
            type: Date,
            required: true,
        },
        to_datetime: {
            type: Date,
            required: true,
        },
        rent_status_id: {
            type: Number,
            min: 1,
            max: 2,
        },
        rent_type_id: {
            type: Number,
            required: true,
            min: 1,
            max: 2,
        },
        amount: {
            type: Number,
        },
    },
    {
        versionKey: false,
    }
);

module.exports = model("Rent", rentSchema);
