const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const cloudinary = require('cloudinary').v2;

const app = express();
const port = 3000;

app.use(express.static(`${__dirname}/../dist`));
app.use(bodyParser.json({ limit: '10mb', extended: true }));

// app.get('/', (req,res) => {
//   res.send('hello');
// })

app.listen(port, () => {
  console.log(`Listening on port: ${port}!`);
});

app.post('', (req, res) => {
  console.log('Serving POST request');
  cloudinary.uploader.upload(req.body.photo, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(result.secure_url);
    }
  });
});
