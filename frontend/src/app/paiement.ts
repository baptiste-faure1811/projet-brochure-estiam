export interface Paiement {
    _id: {
        type: string
    },
    exemple: {
    nom: {
        type: String
        },
    info: {
            type: String
        }
    },
    prixAnnuel: {
        titre: {
            type: String
        },
        prix: {
            type: Number
        },
        details: {
            type: String
        }
    },
    fraisMobilite: {
        titre: {
            type: String
        },
        prix: {
            type: Number
        },
        details: {
            type: String
        }
    },
    fraisMobiliteInternational: {
        titre: {
            type: String
        },
        prix: {
            type: Number
        },
        details: {
            type: String
        }
    },
    paiementEchelonne: {
        titre: {
            type: String
        },
        prix: {
            type: Number
        },
        details: {
            type: String
        }
    }
}