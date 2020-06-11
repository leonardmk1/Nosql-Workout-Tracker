const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
    exercises: {
      type: {
        type: String,
        trim: true,
        required: "Enter the type of exercise",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name of the exercise",
      },
      distance: {
        type: Number,
        required: "Enter the distance in miles of the exercise",
      },
      duration: {
        type: Number,
        required: "Enter the duration in minutes of the exercise",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(function() {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
