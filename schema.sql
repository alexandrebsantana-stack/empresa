CREATE DATABASE IF NOT EXISTS empresa_db;
USE empresa_db;

CREATE TABLE IF NOT EXISTS colaboradores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(255) NOT NULL,
    idade INT NOT NULL,
    cargo VARCHAR(100) NOT NULL,
    salario DECIMAL(10, 2) NOT NULL,
    tempo_empresa INT NOT NULL COMMENT 'Tempo em meses',
    data_admissao DATE NOT NULL,
    setor VARCHAR(100) NOT NULL,
    status ENUM('Ativo', 'Inativo') DEFAULT 'Ativo'
);

INSERT INTO colaboradores (nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status) VALUES
('Ana Silva', 28, 'Desenvolvedora Frontend', 5500.00, 24, '2024-06-01', 'TI', 'Ativo'),
('Carlos Pereira', 35, 'Gerente de Projetos', 9000.00, 48, '2022-06-05', 'TI', 'Ativo'),
('Mariana Souza', 42, 'Analista de RH', 4500.00, 60, '2021-06-10', 'Recursos Humanos', 'Ativo'),
('João Gomes', 25, 'Assistente Administrativo', 2500.00, 12, '2025-06-01', 'Administração', 'Ativo'),
('Beatriz Costa', 30, 'Designer UX/UI', 6000.00, 36, '2023-05-15', 'Produto', 'Ativo'),
('Lucas Fernandes', 29, 'Desenvolvedor Backend', 6500.00, 18, '2024-12-01', 'TI', 'Inativo'),
('Fernanda Lima', 38, 'Coordenadora de Marketing', 7500.00, 40, '2023-02-20', 'Marketing', 'Ativo'),
('Rafael Alves', 45, 'Diretor Financeiro', 15000.00, 84, '2019-06-01', 'Financeiro', 'Ativo'),
('Juliana Rocha', 26, 'Analista de Suporte', 3000.00, 6, '2025-12-10', 'TI', 'Ativo'),
('Thiago Mendes', 33, 'Especialista em Vendas', 5000.00, 20, '2024-10-05', 'Comercial', 'Ativo');
