let express = require('express');
let path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(3000, () => {
    'Listening to port 3000...'
});