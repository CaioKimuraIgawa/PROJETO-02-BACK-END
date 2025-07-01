const mongoose = require('mongoose');
const User = require('./models/User');

//mongoose.connect('mongodb://localhost:27017/projeto02')
mongoose.connect('mongodb://127.0.0.1:27017/projeto02') //usado em casa

    .then(async () => {
        const exists = await User.findOne({ username: 'caio' });
        if (!exists) {
            await User.create({ username: 'caio', password: '123' });
            console.log('Usuário criado com sucesso!');
        } else {
            console.log('Usuário já existe.');
        }
        mongoose.disconnect();
    })
    .catch(err => console.error(err));
