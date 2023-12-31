import { API_RM } from "../constants/Api.constants";

class RMService{

    async getAllCharacters(){
        const response = await fetch(API_RM.CHARACTERS());
         return response.json();    
    }
    async getCharactersById(id){
        const response = await fetch(API_RM.CHARACTER_BY_ID(id));
         return response.json();    
    }
    async getAllEpisodes(){
        const response = await fetch(API_RM.EPISODES());
        return response.json();
    }
    async getAllLocations(){
        const response = await fetch(API_RM.LOCATIONS());
        return response.json();
    }

}

export default new RMService();