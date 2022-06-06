const apiPromise = fetch(
  "https://grandcircusco.github.io/demo-apis/donuts.json"
).then((res) => res.json());

//1
apiPromise.then((donuts) => console.log(donuts));

//2
apiPromise.then((donuts) => console.log("API promise ", donuts.count));

//3
const countPromise = apiPromise.then((donuts) => donuts.count);
countPromise.then((count) => console.log("Count Promise ", count));

//4
const top4Promise = apiPromise.then((donuts) => donuts.results.slice(0, 4));
top4Promise.then((top4Donuts) => console.log(top4Donuts));

//5
const namesPromise = apiPromise.then((donuts) =>
  donuts.results.map((donut) => donut.name)
);
namesPromise.then((donutNames) => console.log(donutNames));

//6
const capNamesPromise = namesPromise.then((donutNames) =>
  donutNames.map((name) => name.toUpperCase())
);
capNamesPromise.then((upperCaseNames) => console.log(upperCaseNames));

//7
let badPromise = fetch(
  "https://grandcircusco.github.io/demo-apis/wrong.json"
).then((res) => res.json());
badPromise.catch((err) => {
  console.log("FAILED", err);
});
