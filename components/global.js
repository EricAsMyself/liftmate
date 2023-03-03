let Work = 60;


let fname = 'NO NAME'
let lname = "NO NAME"

export const setFname = (value) => {
  fname = value
}
export const setLname = (value) => {
  lname = value
}
export const getFname = () => {
  return fname
}
export const getLname = () => {
  return lname
}

export const setWork = (value) => {
  Work = value;
};

export const getWork = () => {
  return Work;
};

let Rest = 30

export const setRest = (value) => {
    Rest = value;
  };
  
  export const getRest = () => {
    return Rest;
  };


  var data = [
    {
      day: 1,
      name: 'Pull',
      content: [{ id: 1, weight: "DeadLift (Barbell)", content:[
      {id: 1,target: 1, weight: 240, reps: 1},
      {id: 2,target: 1, weight: 240, reps: 1},
      {id: 3,target: 1, weight: 240, reps: 1},]
      }
    ]},
  ];

  let PPL = [
    {
    day: 1,
    name: 'Pull',
    content: [{ id: 1, weight: "DeadLift (Barbell)", content:[
    {id: 1,target: 1, weight: 240, reps: 1},
    {id: 2,target: 1, weight: 240, reps: 1},
    {id: 3,target: 1, weight: 240, reps: 1},]
    },
    { id: 1, weight: "Lat Pulldown", content:[
    {id: 1, weight: 95, reps: 12},
    {id: 2, weight: 90, reps: 11},
    {id: 3, weight: 90, reps: 10},
    {id: 4, weight: 80, reps: 10},]
    },
    { id: 1, weight: "Chest Supported Row", content:[
    {id: 1, weight: 45, reps: 12},
    {id: 2, weight: 45, reps: 11},
    {id: 1, weight: 45, reps: 12},
    {id: 2, weight: 45, reps: 11},]
    },
    { id: 1, weight: "Face pull", content:[
    {id: 1, weight: 1, reps: 12},
    {id: 2, weight: 100, reps: 11},
    {id: 3, weight: 20, reps: 10},]
    },
    { id: 1, weight: "Hammer Curl", content:[
    {id: 1, weight: 1, reps: 12},
    {id: 2, weight: 100, reps: 11},
    {id: 3, weight: 20, reps: 10},]
    },
    { id: 1, weight: "Bicep Curl (Dumbell)", content:[
    {id: 1, weight: 1, reps: 12},
    {id: 2, weight: 100, reps: 11},
    {id: 3, weight: 20, reps: 10},]
    }
  ]},
  {
    day: 2,
    content: [{ id: 1, weight: "Bench Press", content:[
    {id: 1,target: 1, weight: 240, reps: 10},
    {id: 2,target: 1, weight: 240, reps: 10},
    {id: 3,target: 1, weight: 240, reps: 10},]
    },
    { id: 1, weight: "Overhead Press", content:[
    {id: 1, weight: 95, reps: 5},
    {id: 2, weight: 90, reps: 5},
    {id: 3, weight: 90, reps: 5},
    {id: 4, weight: 80, reps: 5},]
    },
    { id: 1, weight: "Incline Press (Dumbell)", content:[
    {id: 1, weight: 45, reps: 12},
    {id: 2, weight: 45, reps: 11},
    {id: 1, weight: 45, reps: 12},
    {id: 2, weight: 45, reps: 11},]
    },
    { id: 1, weight: "Tricep Pushdowns", content:[
    {id: 1, weight: 1, reps: 12},
    {id: 2, weight: 100, reps: 11},
    {id: 3, weight: 20, reps: 10},]
    },
    { id: 1, weight: "Lateral Raise", content:[
    {id: 1, weight: 1, reps: 12},
    {id: 2, weight: 100, reps: 11},
    {id: 3, weight: 20, reps: 10},]
    },
    { id: 1, weight: "Overhead Triceps Extensions", content:[
    {id: 1, weight: 1, reps: 12},
    {id: 2, weight: 100, reps: 11},
    {id: 3, weight: 20, reps: 10},]
    },
    { id: 1, weight: "Lateral Raise", content:[
      {id: 1, weight: 1, reps: 12},
      {id: 2, weight: 100, reps: 11},
      {id: 3, weight: 20, reps: 10},]
      },
  ]},
  {
    day: 3,
    content: [{ id: 1, weight: "Squat", content:[
    {id: 1,target: 1, weight: 240, reps: 1},
    {id: 2,target: 1, weight: 240, reps: 1},
    {id: 3,target: 1, weight: 240, reps: 1},]
    },
    { id: 1, weight: "Romanian Deadlift", content:[
    {id: 1, weight: 95, reps: 12},
    {id: 2, weight: 90, reps: 11},
    {id: 3, weight: 90, reps: 10},
    {id: 4, weight: 80, reps: 10},]
    },
    { id: 1, weight: "Leg Press", content:[
    {id: 1, weight: 45, reps: 12},
    {id: 2, weight: 45, reps: 11},
    {id: 1, weight: 45, reps: 12},
    {id: 2, weight: 45, reps: 11},]
    },
    { id: 1, weight: "Leg Curls", content:[
    {id: 1, weight: 1, reps: 12},
    {id: 2, weight: 100, reps: 11},
    {id: 3, weight: 20, reps: 10},]
    },
    { id: 1, weight: "Calf Raise", content:[
    {id: 1, weight: 1, reps: 12},
    {id: 2, weight: 100, reps: 11},
    {id: 3, weight: 20, reps: 10},]
    }
  ]},
];

  let Empty = [
    { id: 1, weight: "EMPTY", content:[
    {id: 1,target: 1, weight: 1, reps: 1},]
    },
  ];

  let fullBodyWorkout = [{
  day: 1,
  content:[
    { id: 1, weight: "Squat (Barbell)", content: [
      { id: 1, weight: 135, reps: 12 },
      { id: 2, weight: 185, reps: 10 },
      { id: 3, weight: 205, reps: 8 },
      { id: 4, weight: 225, reps: 6 }
    ]},
    { id: 2, weight: "Bench Press (Barbell)", content: [
      { id: 1, weight: 135, reps: 12 },
      { id: 2, weight: 185, reps: 10 },
      { id: 3, weight: 205, reps: 8 },
      { id: 4, weight: 225, reps: 6 }
    ]},
    { id: 3, weight: "Bent-Over Row (Barbell)", content: [
      { id: 1, weight: 95, reps: 12 },
      { id: 2, weight: 115, reps: 10 },
      { id: 3, weight: 135, reps: 8 },
      { id: 4, weight: 155, reps: 6 }
    ]},
    { id: 4, weight: "Shoulder Press (Dumbbell)", content: [
      { id: 1, weight: 35, reps: 12 },
      { id: 2, weight: 45, reps: 10 },
      { id: 3, weight: 55, reps: 8 },
      { id: 4, weight: 65, reps: 6 }
    ]},
    { id: 5, weight: "Bicep Curl (Dumbbell)", content: [
      { id: 1, weight: 20, reps: 12 },
      { id: 2, weight: 25, reps: 10 },
      { id: 3, weight: 30, reps: 8 },
      { id: 4, weight: 35, reps: 6 }
    ]},
    { id: 6, weight: "Tricep Extension (Dumbbell)", content: [
      { id: 1, weight: 20, reps: 12 },
      { id: 2, weight: 25, reps: 10 },
      { id: 3, weight: 30, reps: 8 },
      { id: 4, weight: 35, reps: 6 },]}]},
      {
    day: 2,
    content:[
      { id: 1, weight: "Squat (Barbell)", content: [
        { id: 1, weight: 135, reps: 12 },
        { id: 2, weight: 185, reps: 10 },
        { id: 3, weight: 205, reps: 8 },
        { id: 4, weight: 225, reps: 6 }
      ]},
      { id: 2, weight: "Bench Press (Barbell)", content: [
        { id: 1, weight: 135, reps: 12 },
        { id: 2, weight: 185, reps: 10 },
        { id: 3, weight: 205, reps: 8 },
        { id: 4, weight: 225, reps: 6 }
      ]},
      { id: 3, weight: "Bent-Over Row (Barbell)", content: [
        { id: 1, weight: 95, reps: 12 },
        { id: 2, weight: 115, reps: 10 },
        { id: 3, weight: 135, reps: 8 },
        { id: 4, weight: 155, reps: 6 }
      ]},
      { id: 4, weight: "Shoulder Press (Dumbbell)", content: [
        { id: 1, weight: 35, reps: 12 },
        { id: 2, weight: 45, reps: 10 },
        { id: 3, weight: 55, reps: 8 },
        { id: 4, weight: 65, reps: 6 }
      ]},
      { id: 5, weight: "Bicep Curl (Dumbbell)", content: [
        { id: 1, weight: 20, reps: 12 },
        { id: 2, weight: 25, reps: 10 },
        { id: 3, weight: 30, reps: 8 },
        { id: 4, weight: 35, reps: 6 }
      ]},
      { id: 6, weight: "Tricep Extension (Dumbbell)", content: [
        { id: 1, weight: 20, reps: 12 },
        { id: 2, weight: 25, reps: 10 },
        { id: 3, weight: 30, reps: 8 },
        { id: 4, weight: 35, reps: 6 },]}]},

      {
      day: 3,
      content:[
        { id: 1, weight: "Squat (Barbell)", content: [
          { id: 1, weight: 135, reps: 12 },
          { id: 2, weight: 185, reps: 10 },
          { id: 3, weight: 205, reps: 8 },
          { id: 4, weight: 225, reps: 6 }
        ]},
        { id: 2, weight: "Bench Press (Barbell)", content: [
          { id: 1, weight: 135, reps: 12 },
          { id: 2, weight: 185, reps: 10 },
          { id: 3, weight: 205, reps: 8 },
          { id: 4, weight: 225, reps: 6 }
        ]},
        { id: 3, weight: "Bent-Over Row (Barbell)", content: [
          { id: 1, weight: 95, reps: 12 },
          { id: 2, weight: 115, reps: 10 },
          { id: 3, weight: 135, reps: 8 },
          { id: 4, weight: 155, reps: 6 }
        ]},
        { id: 4, weight: "Shoulder Press (Dumbbell)", content: [
          { id: 1, weight: 35, reps: 12 },
          { id: 2, weight: 45, reps: 10 },
          { id: 3, weight: 55, reps: 8 },
          { id: 4, weight: 65, reps: 6 }
        ]},
        { id: 5, weight: "Bicep Curl (Dumbbell)", content: [
          { id: 1, weight: 20, reps: 12 },
          { id: 2, weight: 25, reps: 10 },
          { id: 3, weight: 30, reps: 8 },
          { id: 4, weight: 35, reps: 6 }
        ]},
        { id: 6, weight: "Tricep Extension (Dumbbell)", content: [
          { id: 1, weight: 20, reps: 12 },
          { id: 2, weight: 25, reps: 10 },
          { id: 3, weight: 30, reps: 8 },
          { id: 4, weight: 35, reps: 6 },]}
    ]}];

export const getPPL = () => {
  return PPL;
}
export const setWorkout = (value) => {
    if (value == "PPL") {
      console.log(value)
      data = PPL;
    }
    if (value == "EMPTY"){
      console.log(value)
      data = Empty;
    }
    if (value == "BODY") {
      console.log(value)
      data = fullBodyWorkout;
    }
  };

  export const getPull = () => {
    return PPL; //DO NOT LEAVE THIS SWITCH IT BACK TO data
  };

  export const getPull2 = () => {
    return data; //DO NOT LEAVE THIS SWITCH IT BACK TO data
  };

