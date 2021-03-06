const { Schema, model } = require("mongoose");

const ClientSchema = new Schema({
	name: { type: String, required: true },
	mobile: { type: String, required: true },
	adress: {
		street: { type: String },
		number: { type: String },
		complement: { type: String },
		city: { type: String },
		state: {
			type: String,
			enum: [
				"Acre",
				"Alagoas",
				"Amapá",
				"Amazonas",
				"Bahia",
				"Ceará",
				"Distrito Federal",
				"Espírito Santo",
				"Goiás",
				"Maranhão",
				"Mato Grosso",
				"Mato Grosso do Sul",
				"Minas Gerais",
				"Pará",
				"Paraíba",
				"Paraná",
				"Pernambuco",
				"Piauí",
				"Rio de Janeiro",
				"Rio Grande do Norte",
				"Rio Grande do Sul",
				"Rondônia",
				"Roraima",
				"Santa Catarina",
				"São Paulo",
				"Sergipe",
				"Tocantins",
			],
		},
		zipcode: { type: String },
	},
	pets_id: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
	user_id: { type: Schema.Types.ObjectId, ref: "User" },
});

const ClientModel = model("Client", ClientSchema);

module.exports = ClientModel;
