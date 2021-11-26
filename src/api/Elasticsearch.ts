import elasticsearch from "elasticsearch";

function getCliente (){

  const cliente = new elasticsearch.Client({
      host: "localhost:9200",
  })

  return cliente;
}

export default getCliente;