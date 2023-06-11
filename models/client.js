const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true,
            trim: true,
        },
        last_name: {
            type: String,
            required: true,
            trim: true,
        },
        birthday: {
            type: Date,
            require: true,
            trim: true,
            max: "2005-06-10",
        },
        passport: {
            type: Object,
            required: true,
        },
        driving_license: {
            type: Boolean,
            required: true,
        },
        adress: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
    }
);

module.exports = model("Client", clientSchema);
