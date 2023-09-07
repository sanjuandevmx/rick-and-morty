export const API_RM = {
  URL: "https://rickandmortyapi.com/api",

  CHARACTERS: function () {
    return `${this.URL}/character`;
  },
  CHARACTER_BY_ID: function (id) {
    return `${this.URL}/character/${id}`;
  },
  EPISODES: function () {
    return `${this.URL}/episode`;
  },
  LOCATIONS: function (){
    return  `${this.URL}/location`;
  }
};
