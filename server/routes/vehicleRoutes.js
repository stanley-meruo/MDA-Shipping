const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");

// CREATE
router.post("/", vehicleController.createVehicle);

// READ
router.get("/", vehicleController.getAllVehicles);
router.get("/:slug", vehicleController.getVehicleBySlug);

// UPDATE
router.put("/:id", vehicleController.updateVehicle);

// DELETE
router.delete("/:id", vehicleController.deleteVehicle);

module.exports = router;
