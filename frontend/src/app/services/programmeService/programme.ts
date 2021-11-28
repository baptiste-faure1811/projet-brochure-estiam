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
    totalDuration: Number;
    programme: String;
    domaines: [Domaine];
}

export interface Domaine {
    _id: String;
    name: String;
    groupe: String;
    cours: [Cours];
}

export interface Cours {
    _id: String;
    name: String;
    ECTSCredit: Number;
    ECTSCode: String;
    oldCode: String;
    semestre: Number;
    duration: Number;
    domaine: String;
}
