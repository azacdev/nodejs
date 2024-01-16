const express = require("express");
const router = express.Router();

const {
  getPerson,
  createPerson,
  createPersonPostman,
  updatePersonPostman,
  deletePersonPostman,
} = require("../controllers/people");

// router.get("/", getPerson);
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman);
// router.put("/postman/:id", updatePersonPostman);
// router.delete("/postman/:id", deletePersonPostman);

router.route("/").get(getPerson).post(createPerson);
router.route("/postman").post(createPersonPostman);
router
  .route("/postman/:id")
  .put(updatePersonPostman)
  .delete(deletePersonPostman);

module.exports = router;
