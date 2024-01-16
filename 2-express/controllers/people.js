let { people } = require("../data");

const getPerson = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide credentials" });
  }
  res.status(201).send({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide credentials" });
  }
  res.status(201).send({ success: true, data: [...people, name] });
};

const updatePersonPostman = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(201).send({ success: true, data: newPeople });
};

const deletePersonPostman = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `no such person with id ${id}` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));

  res.status(200).send({ success: true, data: newPeople });
};

module.exports = {
  getPerson,
  createPerson,
  createPersonPostman,
  updatePersonPostman,
  deletePersonPostman,
};
