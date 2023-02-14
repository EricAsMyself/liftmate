let Work = 60;


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
    { id: 1, weight: "Nuna", content:[
      {id: 1,target: 1, weight: 240, reps: 1},
      {id: 2,target: 1, weight: 240, reps: 1},
      {id: 3,target: 1, weight: 240, reps: 1},]
      },
  ];

  let PPL = [
    { id: 1, weight: "DeadLift (Barbell)", content:[
    {id: 1,target: 1, weight: 240, reps: 1},
    {id: 2,target: 1, weight: 240, reps: 1},
    {id: 3,target: 1, weight: 240, reps: 1},]
    },
    { id: 1, weight: "Let Pulldown", content:[
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
  ];

  let Empty = [
    { id: 1, weight: "EMPTY", content:[
    {id: 1,target: 1, weight: 1, reps: 1},]
    },
  ];
export const setWorkout = (value) => {
    if (value == "PPL") {
      console.log('begin')
      data = PPL;
    }
    if (value == "EMPTY"){
      data = Empty;
    }
    if (value == "BODY") {
      data = Empty;
    }
  };

  export const getPull = () => {
    return data;
  };

