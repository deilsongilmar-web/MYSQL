CREATE TABLE deilson.matricula (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT,
    turma_id INT,
    data_matricula TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Ativo', 'Trancado', 'Concluído') DEFAULT 'Ativo',
    FOREIGN KEY (aluno_id) REFERENCES deilson.alunos(id),
    FOREIGN KEY (turma_id) REFERENCES deilson.turmas(id)
);
