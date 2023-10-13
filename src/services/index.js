//Funciones para CRUD
//Funcion asincrona 

const URLApi = "https://65273be7917d673fd76d826c.mockapi.io/tasks";


//body recibira el objeto de la API
export async function create(body) {
    const response = await fetch(URLApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  
    const data = await response.json();
  
    return data;
  }
  
  export async function read() {
    const response = await fetch(URLApi);
    const data = await response.json();
    return data;
  }