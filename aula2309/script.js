//GET --> Pega os dados do servidor
//POST --> Envio dados para o servidor


const corpoTable = document.getElementById("corpo-table")


function myDeleteFunction() {
    document.getElementById("myTable").deleteTHead(0);
};


function receberDados(){
    const url =  'http://10.0.3.132:1313/listar-alunos'
    console.log(url)

    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "GET",
        
    }).then (resultado => {
        return resultado.json();
    })
    .then((dados) => {

    
        for (var num = 0; num < dados.length; num++){
            const criaLinha = document.createElement("tr");

            criaLinha.innerHTML = 
            `<tr>
            <th scope="row">${dados[num].id}</th>
            <td>${dados[num].nome}</td>
            <td>${dados[num].telefone}</td>
            <td>${dados[num].email}</td>
            <td>${dados[num].turma}/td>
          </tr>`

          corpoTable.appendChild(criaLinha);

          console.log(dados[num]);
        }
    });
}
