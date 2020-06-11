const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    console.log(req)
    console.log("hit")

  Workout.create({
    // date: Date.now,
    // exercise:{ 
    // type: "cardio",
    // name: running,
    // distance: 1,
    // duration: 15}
  })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("api/workouts", (req, res) => {
    console.log("hit")
    Workout.find()
    .then((dbWorkout) => {
        console.log(dbWorkout)
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
      });  
})

module.exports = router;
