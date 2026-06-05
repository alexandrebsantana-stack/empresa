const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./src/database/db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

// GET - Listar todos os colaboradores
app.get('/colaboradores', (req, res) => {
    db.query('SELECT * FROM colaboradores', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
});

// POST - Cadastrar colaborador
app.post('/colaboradores', (req, res) => {
    const { nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status } = req.body;
    const sql = 'INSERT INTO colaboradores (nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: results.insertId, message: 'Colaborador cadastrado com sucesso!' });
    });
});

// PUT - Atualizar dados do colaborador
app.put('/colaboradores/:id', (req, res) => {
    const { id } = req.params;
    const { nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status } = req.body;
    const sql = 'UPDATE colaboradores SET nome_completo=?, idade=?, cargo=?, salario=?, tempo_empresa=?, data_admissao=?, setor=?, status=? WHERE id=?';
    db.query(sql, [nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status, id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Colaborador atualizado com sucesso!' });
    });
});

// DELETE - Remover colaborador
app.delete('/colaboradores/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM colaboradores WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Colaborador removido com sucesso!' });
    });
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
