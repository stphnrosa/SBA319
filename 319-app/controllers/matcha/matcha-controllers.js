import matcha from "../../models/matcha/matcha-model.js";

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
    const matchas = await Matcha.find({});
    res.status(200).json(matchas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function createMatcha(req, res) {
  try {
    req.body.readyToDrink === "on";
    const matcha = await Matcha.create(req.body);
  } catch (error) {
    res
      .status(400)
      .json({ message: "something is wrong.", error: error.message });
  }
}

async function deleteMatcha(req, res) {
  try {
    await matcha.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Matcha deleted successfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export { seedMatcha, getMatcha, createMatcha, deleteMatcha };
