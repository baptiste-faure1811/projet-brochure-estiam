import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Ioffrealternance } from './offrealternance'
import { Idescalternance } from './descalternance';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class Alternanceservice {

      private offrealternance: Ioffrealternance[]=[]
      private desc:string[]=[]
      readonly url= environment.host + "/alternance/offres"
      readonly url1= environment.host + "/alternance/descalternance"

      constructor(private htppclient: HttpClient){

      }
    addoffrealternance(nom_entreprise:string,desc_offre:string,poste:string, 
                        profil_recherche:string,lien_cand:string){
                            const newOffrealternance={nom_entreprise:nom_entreprise,desc_offre:desc_offre,
                                                    poste:poste, profil_recherche:profil_recherche,
                                                     lien_cand:lien_cand} as Ioffrealternance;
                            return this.htppclient.post(this.url,newOffrealternance);

    }
    getoffrealternance(){
        return this.htppclient.get<Ioffrealternance[]>(this.url)
    }
   
    updateoffrealternance(nom_recherche:string,nom_entreprise:string,desc_offre:string,poste:string, 
                              profil_recherche:string,lien_cand:string){
                              const URL=this.url + "/" + nom_recherche
                              
                                const newOffrealternance={nom_entreprise:nom_entreprise,desc_offre:desc_offre,
                                    poste:poste, profil_recherche:profil_recherche,
                                     lien_cand:lien_cand} as Ioffrealternance;
                               return this.htppclient.put<Ioffrealternance>(URL,newOffrealternance);
    }
    deleteoffrealternance(offrealternance:Ioffrealternance){

        const URL=this.url + "/" + offrealternance.nom_entreprise
        return this.htppclient.delete<Ioffrealternance>(URL);
    }
    
    adddescalternance(image:string,text:string){

        const newdescalternance={image: image,text:text} as Idescalternance
        return this.htppclient.post(this.url1,newdescalternance);
    }
    getdescalternance(){
        return this.htppclient.get<Idescalternance[]>(this.url1)
    }
    deletedescalternance(Descalternance: Idescalternance){

       return this.htppclient.delete<Idescalternance>(this.url1)
    }

    updatedescalternance(image:string,text:string){
        const URL= this.url1 + "/" + image
        const newdescalternance={image:image,text:text} as Idescalternance
        return this.htppclient.put<Idescalternance>(URL,newdescalternance)
    }
   
}