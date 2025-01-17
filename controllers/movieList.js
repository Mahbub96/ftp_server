const path = require("path");
const fs = require("fs");

const movieLists = (req, res, next) => {
  let url = req.url;

  console.log({ url });

  url = url.replaceAll("%20", " ");
  const folderPath = path.join(__dirname, `./../../videos/MOVIES${url}/`);

  console.log({ url });
  console.log({ folderPath });

  try {
    const data = fs.readdirSync(folderPath);

    let movies =
      '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Local Movie Server - Mahbub Alam</title><style>*{margin:0;padding:0;} ul{display: flex;align-items: center;justify-content: center;flex-direction: column;} li{list-style: none;border: 1px solid black;width: 100%;padding: 5px;text-align: -webkit-center;} a{display:block;font-size:18px;text-transform: capitalize;overflow: unset;}</style><head><body><ul>';

    data.map((movie) => {
      let moviePath = `${
        folderPath.split("/media/mahbub/Videos/videos")[1]
      }${movie}`;

      movies +=
        `<li><a style=\"padding:10px;text-decoration:none;\" href=\"${moviePath}\">` +
        movie +
        "</a></li>";
    });

    movies += "</ul></body.</html>";

    res.status(200).send(movies);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  movieLists,
};
