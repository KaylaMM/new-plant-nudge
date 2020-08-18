const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Plant = require("../models/Plant");
const uploadCloud = require("../config/cloudinary-setup");

//User Homepage
router.get("/", (req, res) => {
  User.findById(req.res._id)
    .populate("plants")
    .populate("plantProgress")
    .then((currentUser) => {
      res.status(200).json(currentUser);
    })
    .catch((err) => res.status(500).json(err));
});

//Create new Plant
router.post("/newPlant", (req, res, next) => {
  Plant.create(req.body)
    .then((plantDoc) => res.status(200).json({ plant: plantDoc }))
    .catch((err) => next(err));
});

//Read (Plant) Documents
router.get("/allPlants", (req, res, next) => {
  console.log(req.user);
  //below is axios call
  Plant.find({ owner: req.params._id })
    .then((allUserPlantsFromDB) => {
      console.log("Retrieved plants from DB:", allUserPlantsFromDB);
      res.json(allUserPlantsFromDB);
    })
    .catch((error) => {
      console.log("Error while getting the plants from the DB: ", error);
    });
});

router.get("/allPlants/:plantId", (req, res, next) => {
  console.log("The ID from the URL is: ", plantId);
  res.json(allPlants);
});

router.get("allPlants/:plantId", (req, res, next) => {
  Plant.findOne({ _id: req.params.plantId })
    .then((thePlant) => {
      res.json(allPlants, { plant: thePlant });
    })
    .catch((error) => {
      console.log("Error while retrieving plant details: ", error);
    });
});

//Update a Plant
router.post("/updatePlant/:id", (req, res, next) => {
  Plant.findByIdAndUpdate(
    req.params.id,
    {
      plant: req.body.plant,
      location: req.body.location,
      nextWatering: req.body.nextWatering,
      amountOfWaterNeeded: req.body.amountOfWaterNeeded,
      progressPic: req.body.progressPic,
    },
    { new: true }
  )
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.json(error);
    });
});

//Delete Plant
router.post("/deletePlant/:id", (req, res, next) => {
  Plant.findByIdAndRemove(req.params.id)
    .then((deletedPlant) => {
      res.json({ message: "Successfully deleted!" });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
