import { readFile } from "node:fs/promises";
import client from "./pg.client.js";

const jsonFile = new URL("./data.json", import.meta.url);
try {
  const jsonContent = await readFile(jsonFile);

  if (!jsonContent) {
    throw new Error(`${jsonFile} has no content`);
  }
  // Et enfin interpreter le texte JSON en tant qu'objet JS
  const data = JSON.parse(jsonContent);

  if (typeof data !== "object") {
    throw new Error(`${jsonFile} content is not a object`);
  }
  console.log(`ici=>${data}`);

  client.query(
  // eslint-disable-next-line quotes
    `CREATE TABLE IF NOT EXISTS "boblatable" (id SERIAL PRIMARY KEY,firstname VARCHAR(255), lastname VARCHAR(255))`,
  );

//   data.forEach((dataElement) => {
//     client.query(
//       // eslint-disable-next-line quotes
//       'INSERT INTO "boblatable" (firstname, lastname) VALUES($1, $2)',
//       [dataElement.firstname, dataElement.lastname],
//       (err, res) => {
//         if (err) {
//           console.error(err);
//         } else {
//           console.log("Insertion réussie:", res.rows);
//         }
//       }
//     );
//   });
} catch (error) {
  console.error(error);
} finally {
//   // Fermer la connexion à la base de données dans le bloc finally
  client.end();
}
