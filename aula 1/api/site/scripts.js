document.addEventListener("DOMContentLoaded", function () {
  
  const contentRotas = document.getElementById("contentRotas");
  const apiRote = "http://localhost:3000/";
  const getApiRoute = "getRotes";

  console.log(apiRote + getApiRoute);

  let rotas = [];



  


  async function getRotes() {
      const response = await fetch(apiRote + getApiRoute);
      console.log(response);
  };

  getRotes();

  
  
  
})