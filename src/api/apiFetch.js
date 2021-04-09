const BASE_URL = "https://tranquil-journey-35663.herokuapp.com/api/";

const URL_LOGIN = "usuario/login";
const URL_REGISTRO = "usuario/";
const URL_CANDIDATO = "candidatos/";
const URL_PARTIDO = "partido/";

export default class {
  static async getCandidatos() {
    try {
      const request = await fetch(BASE_URL + URL_CANDIDATO);
      if (request.ok) {
        return await request.json();
      }
    } catch (e) {
      throw new Error(e.toString());
    }
  }

  static async getPartidos() {
    try {
      const request = await fetch(BASE_URL + URL_PARTIDO);
      if (request.ok) {
        return await request.json();
      }
    } catch (e) {
      throw new Error(e.toString());
    }
  }

  static async addPartido(partido) {
    try {
      const request = await fetch(BASE_URL + URL_PARTIDO, {
        method: "POST",
        body: JSON.stringify(partido),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (request.ok) {
        return await request.json();
      }
    } catch (e) {
      throw new Error(e.toString());
    }
  }
  static async getPartido(partido) {
    console.log('buscando: ' + partido)
    try {
      const request = await fetch(BASE_URL + URL_PARTIDO + partido);
      if (request.ok) {
        return await request.json();
      }
    } catch (e) {
      throw new Error(e.toString());
    }
  }

  static async login(data) {
    try {
      const request = await fetch(BASE_URL + URL_LOGIN, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (request.ok) {
        return await request.json();
      } else {
        return false;
      }
    } catch (e) {
      throw new Error(e.toString());
    }
  }
  static async registro(data) {
    try {
      const request = await fetch(BASE_URL + URL_REGISTRO, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (request.ok) {
        return await request.json();
      } else {
        return false;
      }
    } catch (e) {
      throw new Error(e.toString());
    }
  }
}
