const { Router } = require("express");
const { placeController } = require("../controllers/place.controller");

const router = Router();

router.get("/place", placeController.getPlaces);
router.post("/place", placeController.addPlace);
router.delete("/place", placeController.deletePlace);

module.exports = router;
