export interface Programme {
    _id: String;
    name: String;
    year: Number;
    totalDuration: Number;
    groupes: [Groupe];
}

export interface Groupe {
    _id: String;
    name: String;
    totalECTS: Number;
    programme: String;
    uniteEnseignements: [UniteEnseignement];
}

export interface UniteEnseignement {
    _id: String;
    name: String;
    code: String;
    totalDuration: Number;
    groupe: String;
    domaines: [String];
}
