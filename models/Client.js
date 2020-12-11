const { Schema, model } = require("mongoose");

const ClientSchema = new Schema({
	name: { type: String, required: true, unique: true },
	mobile: { type: String, required: true },
	adress: {
		street: { type: String, required: true },
		city: { type: String, required: true },
	},
	pets_id: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
});

const ClientModel = model("Client", ClientSchema);

module.exports = ClientModel;
