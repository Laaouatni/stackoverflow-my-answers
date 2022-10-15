const worker1 = [
  { day: 1, w1: 2 },
  { day: 2, w1: 3 },
  { day: 3, w1: 1 },
];
const worker2 = [
  { day: 2, w2: 1 },
  { day: 3, w2: 2 },
];
const worker3 = [
  { day: 1, w3: 3 },
  { day: 2, w3: 2 },
];

function sortWorkersByDate(...objWorkers) {
  let output = {};

  objWorkers.forEach((worker) => {
    worker.forEach((dayObj) => {
      if (!output[dayObj.day]) output[dayObj.day] = {};
      // logic for sorting
      Object.assign(output[dayObj.day], dayObj);
    });
  });

  return output;
}

console.log(
  sortWorkersByDate(worker1, worker2, worker3)
);

document.documentElement.innerHTML = JSON.stringify(
  sortWorkersByDate(worker1, worker2, worker3),
  false,
);
