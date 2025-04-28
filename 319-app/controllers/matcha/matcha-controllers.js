import Matcha from "../../models/matcha/matcha-model.js";

async function seedMatcha(req, res) {
  try {
    await Matcha.deleteMany({}); //using empty object queries for everything
    await Matcha.create([
      {
        name: "Aiya",
        color: "Vibrant Green",
        readyToDrink: true,
      },
      {
        name: "Marukyu",
        color: "Lively Green",
        readyToDrink: true,
      },
      {
        name: "Chamberlain",
        color: "Dull Green",
        readyToDrink: false,
      },
      {
        name: "Matcha Wellness",
        color: "Ugly Green",
        readyToDrink: false,
      },
      {
        name: "Pantenger Matcha",
        color: "Yellow Green",
        readyToDrink: false,
      },
      {
        name: "Harai No Mukashi",
        color: "Deep Green",
        readyToDrink: true,
      },
      {
        name: "Akira",
        color: "Slay Green",
        readyToDrink: true,
      },
      {
        name: "Kyoto Dew",
        color: "Lime Green",
        readyToDrink: true,
      },
      {
        name: "Konomi Akira",
        color: "Green Apple",
        readyToDrink: true,
      },
      {
        name: "Kenko",
        color: "Vibrant Green",
        readyToDrink: true,
      },
    ]);

    res.status(201).redirect("/matcha");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function getMatcha(req, res) {
  try {
    const Matchas = await Matcha.find({});
    res.status(200).json(Matchas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function createMatcha(req, res) {
  try {
    req.body.readyToDrink === "on";
    const Matcha = await Matcha.create(req.body);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Something is wrong.", error: error.message });
  }
}

async function deleteMatcha(req, res) {
  try {
    await Matcha.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Matcha deleted successfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export { seedMatcha, getMatcha, createMatcha, deleteMatcha };
