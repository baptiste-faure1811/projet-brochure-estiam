const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const paiementSchema = mongoose.Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    exemple: {
        nom: {
            type: String,
            required: true
            },
        info: {
                type: String,
                required: true
            }
    },
    prixAnnuel: {
        titre: {
            type: String,
            required: true
        },
        prix: {
            type: Number,
            required: true
        },
        details: {
            type: String,
        }
    },
    accompte: {
        titre: {
            type: String,
            required: true
        },
        prix: {
            type: Number,
            required: true
        },
        details: {
            type: String,
        }
    },
    fraisMobiliteInternational: {
        titre: {
            type: String,
            required: true
        },
        prix: {
            type: Number,
            required: true
        },
        details: {
            type: String,
        }
    },
    paiementEchelonne: {
        titre: {
            type: String,
            required: true
        },
        prix: {
            type: Number,
            required: true
        },
        details: {
            type: String,
        }
    },
        
});

module.exports = mongoose.model('Paiement', paiementSchema);