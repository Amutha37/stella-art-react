// const IMAGES = {
//   beachWaves: require("./crashingwaves.jpg").default,
//   majesty: require("./majesty.jpg").default,

//   lily: require("./lily2.jpg").default,
//   lily3: require("./lily3.png").default,
//   lily4: require("./lily4.png").default,
//   lily5: require("./lily5.png").default,
//   hummingbird: require("./hummingbird.jpg").default,
//   hummingbird1: require("./hummingbird1.png").default,
//   hummingbird2: require("./hummingbird2.png").default,
//   waves: require("./crashingwaves.jpg").default,
//   threesisters: require("./threesisters.jpg").default,
// };
// export default IMAGES;
const BannerImage = [
  {
    id: 1,
    name: "Lily Flower",
    image: require("./lilybanner.png").default,
  },
  {
    id: 2,
    name: "The Three Sistes",
    // image: require("./lilybanner.png"),
    image: require("./threesisters.jpg").default,
  },
  {
    id: 3,
    name: "Stella Outdoor",
    image: require("./stellaoutdoor.jpg").default,
    // image: require(".threesisters.jpg"),
  },
];

const NatureImages = [
  {
    id: 1,
    name: "Caves beach",
    image: require("./cavebeach.jpg"),
    className: "demo",
  },
  {
    id: 2,
    name: "Great Ocean Road",
    image: require("./greatoceanroad.jpg"),
    classname: "demo",
  },
  {
    id: 3,
    name: "threesisters",
    // image: require("./greatoceanroad.jpg"),
    image: require("./threesisters.jpg"),
    className: "demo",
  },
];

export default { BannerImage, NatureImages };
