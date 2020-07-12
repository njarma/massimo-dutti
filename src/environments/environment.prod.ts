export const environment = {
  production: true,
  ambientes: {
    desarrolloMock: {
      apiUrlBase: 'app/mocks/',
      esMock: true
    },
    apiDevelop: {
        apiUrlBase: 'https://swapi.dev/api/',
        imageUrlBase: 'https://starwars-visualguide.com/assets/img/starships/'
    },
    seleccionado: 'apiDevelop'
  }
};
