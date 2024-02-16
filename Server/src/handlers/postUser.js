const c_postUser = require("../controlers/c_postUser");
const axios = require("axios");
const postUser = async (req, res) => {
  try {
    const {
      pass,
      torre,
      apto,
      torreApt,
      idUser,
      nameUser,
      user2,
      idUser2,
      nameUser2,
      apoderado,
      idApoderado,
      nameApoderado,
      tipo,
    } = req.body;
    console.log("los datos que se envían en el handler son:");
    console.log(torreApt);
    const createdUser = await c_postUser(
      pass,
      torre,
      apto,
      torreApt,
      idUser,
      nameUser,
      user2,
      idUser2,
      nameUser2,
      apoderado,
      idApoderado,
      nameApoderado,
      tipo
    );
    return res.status(200).json(createdUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = postUser;
