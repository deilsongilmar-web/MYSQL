 const fakeUsers = [
    { name: "John email:john @email.com" },
    { name: "Jane Smith email:jane @email.com" }
 ];

 function listUsers(req, res) {
    res.send(fakeUsers);
}

function createUser(req, res) {
    const { name, email } = req.body;
    const newUser = { name, email };
    fakeUsers.push(newUser);
    res.json({ mensagem: "Usuário criado com sucesso", user: newUser });

    );
}

module.exports = {
    listUsers,
    createUser
}   