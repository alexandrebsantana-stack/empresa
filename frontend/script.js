const API_URL = 'http://localhost:3000/colaboradores';

document.addEventListener('DOMContentLoaded', listarColaboradores);

document.getElementById('formColaborador').addEventListener('submit', async (e) => {
    e.preventDefault();
    const dados = {
        nome_completo: document.getElementById('nome').value,
        idade: parseInt(document.getElementById('idade').value),
        cargo: document.getElementById('cargo').value,
        salario: parseFloat(document.getElementById('salario').value),
        tempo_empresa: parseInt(document.getElementById('tempo').value),
        data_admissao: document.getElementById('data_admissao').value,
        setor: document.getElementById('setor').value,
        status: document.getElementById('status').value
    };

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    });

    if (response.ok) {
        document.getElementById('formColaborador').reset();
        listarColaboradores();
    }
});

async function listarColaboradores() {
    const response = await fetch(API_URL);
    const colaboradores = await response.json();
    const tbody = document.querySelector('#tabelaColaboradores tbody');
    tbody.innerHTML = '';
    
    colaboradores.forEach(col => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${col.id}</td>
            <td>${col.nome_completo}</td>
            <td>${col.cargo}</td>
            <td>${col.setor}</td>
            <td>R$ ${parseFloat(col.salario).toFixed(2)}</td>
            <td>${col.status}</td>
        `;
        tbody.appendChild(tr);
    });
}
