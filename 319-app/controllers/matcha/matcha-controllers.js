import Matcha from "../../models/matcha/matcha-model.js";

async function seedMatcha(req, res) {
  try {
    await Matcha.deleteMany({}); //using empty object queries for everything

    const matchaData = [
      {
        name: "Aiya",
        color: "Vibrant Green",
        readyToDrink: true,
        email: "aiya@example.com",
      },
      {
        name: "Marukyu",
        color: "Lively Green",
        readyToDrink: true,
        email: "marukyu@example.com",
      },
      {
        name: "Chamberlain",
        color: "Dull Green",
        readyToDrink: false,
        email: "chamberlain@example.com",
      },
      {
        name: "Matcha Wellness",
        color: "Ugly Green",
        readyToDrink: false,
        email: "wellness@example.com",
      },
      {
        name: "Pantenger Matcha",
        color: "Yellow Green",
        readyToDrink: false,
        email: "pantenger@example.com",
      },
      {
        name: "Harai No Mukashi",
        color: "Deep Green",
        readyToDrink: true,
        email: "Harai@example.com",
      },
      {
        name: "Akira",
        color: "Slay Green",
        readyToDrink: true,
        email: "akira@example.com",
      },
      {
        name: "Kyoto Dew",
        color: "Lime Green",
        readyToDrink: true,
        email: "Kyoto@example.com",
      },
      {
        name: "Konomi Akira",
        color: "Green Apple",
        readyToDrink: true,
        email: "konomi@example.com",
      },
      {
        name: "Kenko",
        color: "Vibrant Green",
        readyToDrink: true,
        email: "Kenko@example.com",
      },
    ];
    await Matcha.create(matchaData);

    res.status(201).send("Matcha recipes seeded  successfully!");
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
    if (req.body.readyToDrink === "on") {
      req.body.readyToDrink = true;
    } else {
      req.body.readyToDrink = false;
    }

    const Matcha = await Matcha.create(req.body);
    res.status(201).json(matcha);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Something is wrong.", error: error.message });
  }
}
async function updateMatcha(req, res) {
  try {
    const updatedMatcha = await Matcha.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedMatcha);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating Matcha", error: error.message });
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

export { seedMatcha, getMatcha, createMatcha, updateMatcha, deleteMatcha };
