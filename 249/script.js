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

function test(...objWorkers) {
  let output = {};
  
  objWorkers.forEach((worker, workerIndex) => {
    worker.forEach((dayObj) => {
      const dayKey = `day${dayObj.day}`;
      const workerKey = `w${workerIndex + 1}`;

      output[dayKey] = output[dayKey] ?? {};

      Object.assign(output[dayKey], {
        [workerKey]: dayObj[workerKey],
      });
    });
  });

  return output;
}

console.log(test(worker1, worker2, worker3));
