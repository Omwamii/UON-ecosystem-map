function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: "6aba552fb22c25cd",
    center: { lat: -1.2797696694122846, lng: 36.81628485857397 },
    zoom: 18,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });

  //marker for main campus tower
  const main_campus = new google.maps.Marker({
    position: { lat: -1.279359726655597, lng: 36.816361321930266 },
    map,
    animation: google.maps.Animation.DROP, //icons drop when map loads
    title: "UoN towers",
    icon: {
      url: "building-tower.png",
      scaledSize: new google.maps.Size(38, 31),
    },
  });
  const infowindow = new google.maps.InfoWindow({
    content: "University of Nairobi Tower",
  });
  main_campus.addListener("click", () => {
    infowindow.open(map, main_campus);
  });

  // marker for department of computing
  const chiromo_computing = new google.maps.Marker({
    position: { lat: -1.2729369348875013, lng: 36.80713313766487 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Department of computing",
    icon: {
      url: "computer_pixel.jpg",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const computing_info = new google.maps.InfoWindow({
    content: "Department of computing",
  });
  chiromo_computing.addListener("click", () => {
    computing_info.open(map, chiromo_computing);
  });

  //marker for klabu
  const klabu = new google.maps.Marker({
    position: { lat: -1.282485555331184, lng: 36.81083031006496 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Klabu (club 36)",
    icon: {
      url: "food-cart.png",
      scaledSize: new google.maps.Size(35, 31),
    },
  });
  const klabu_info = new google.maps.InfoWindow({
    content: "Klabu food joint",
  });
  klabu.addListener("click", () => {
    klabu_info.open(map, klabu);
  });

  //marker for examination center
  const exam_center = new google.maps.Marker({
    position: { lat: -1.2727154158666287, lng: 36.80691070302399 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Examination center",
    icon: {
      url: "test.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const exCenter_info = new google.maps.InfoWindow({
    content: "Exam center",
  });
  exam_center.addListener("click", () => {
    exCenter_info.open(map, exam_center);
  });

  //marker for department of geology
  const geology_dpt = new google.maps.Marker({
    position: { lat: -1.273916748759782, lng: 36.80780119641136 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Geology department",
    icon: {
      url: "geology.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const geology_info = new google.maps.InfoWindow({
    content: "Geology department",
  });
  geology_dpt.addListener("click", () => {
    geology_info.open(map, geology_dpt);
  });

  //marker for chem department
  const chem_dpt= new google.maps.Marker({
    position: { lat: -1.2735832042958102, lng: 36.8071732499254 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Chemistry department",
    icon: {
      url: "chem.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const chem_info= new google.maps.InfoWindow({
    content: "Chemistry department",
  });
  chem_dpt.addListener("click", () => {
    chem_info.open(map, chem_dpt);
  });

  //marker for chiromo library
  const chiromo_lib= new google.maps.Marker({
    position: { lat: -1.2736134401168453, lng: 36.80377947104992},
    map,
    animation: google.maps.Animation.DROP,
    title: "Chiromo library",
    icon: {
      url: "library.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const chiromoLib_info= new google.maps.InfoWindow({
    content: "Chiromo library",
  });
  chiromo_lib.addListener("click", () => {
    chiromoLib_info.open(map, chiromo_lib);
  });

  //marker for jomo kenyatta main campus lib
  const main_lib= new google.maps.Marker({
    position: { lat: -1.280174244416643, lng: 36.81586243105648},
    map,
    animation: google.maps.Animation.DROP,
    title: "Jomo kenyatta Memorial library",
    icon: {
      url: "library.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const mainLib_info= new google.maps.InfoWindow({
    content: "Jomo Kenyatta Memorial library",
  });
  main_lib.addListener("click", () => {
    mainLib_info.open(map, main_lib);
  });

  //marker for chiromo_lib parking
  const chiromoLib_parking= new google.maps.Marker({
    position: { lat: -1.2735337716527146, lng: 36.804130556996014},
    map,
    animation: google.maps.Animation.DROP,
    title: "parking",
    icon: {
      url: "parking-sign.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const clib_info= new google.maps.InfoWindow({
    content: "parking",
  });
  chiromoLib_parking.addListener("click", () => {
    clib_info.open(map, chiromoLib_parking);
  });

  //marker for chiromo mortuary UoN
  const cUon_mortuary= new google.maps.Marker({
    position: { lat: -1.273484163040762, lng: 36.804456445392354},
    map,
    animation: google.maps.Animation.DROP,
    title: "Chiromo UoN mortuary",
    icon: {
      url: "mortuary.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const cMortuary_info= new google.maps.InfoWindow({
    content: "mortuary",
  });
  cUon_mortuary.addListener("click", () => {
    cMortuary_info.open(map, cUon_mortuary);
  });

  //marker for human anat lab
  const anat_lab = new google.maps.Marker({
    position: { lat: -1.2735756708124275, lng: 36.8044772325212},
    map,
    animation: google.maps.Animation.DROP,
    title: "Human anatomy lab",
    icon: {
      url: "lab.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const anatLab_info= new google.maps.InfoWindow({
    content: "Human anatomy lab",
  });
  anat_lab.addListener("click", () => {
    anatLab_info.open(map, anat_lab);
  });

  //marker for chiromo mortuary
  const chiromo_mot = new google.maps.Marker({
    position: { lat: -1.2732837174315128, lng: 36.80486816447663},
    map,
    animation: google.maps.Animation.DROP,
    title: "Chiromo mortuary",
    icon: {
      url: "mortuary.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const cMot_info= new google.maps.InfoWindow({
    content: "chiromo mortuary",
  });
  chiromo_mot.addListener("click", () => {
    cMot_info.open(map, chiromo_mot);
  });

  //marker for anatomy lecture hall
  const anat_lecture = new google.maps.Marker({
    position: { lat: -1.2734432694533213, lng: 36.805092128930035},
    map,
    animation: google.maps.Animation.DROP,
    title: "Anatomy lecture hall",
    icon: {
      url: "lecture.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const anatL_info = new google.maps.InfoWindow({
    content: "Anatomy lecture",
  });
  anat_lecture.addListener("click", () => {
    anatL_info.open(map, anat_lecture);
  });

  //marker for dpt of veterinary anatomy & physiology
  const vet_dpt = new google.maps.Marker({
    position: { lat: -1.2734389119402576, lng: 36.805149796432985},
    map,
    animation: google.maps.Animation.DROP,
    title: "Department of veterinary anatomy & physiology",
    icon: {
      url: "vet.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const vetDpt_info = new google.maps.InfoWindow({
    content: "Vet dpt",
  });
  vet_dpt.addListener("click", () => {
    vetDpt_info.open(map, vet_dpt);
  });

  //marker for physiology lab
  const phys_lab = new google.maps.Marker({
    position: { lat: -1.2734053926086755, lng: 36.80522087496523 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Physiology lab",
    icon: {
      url: "lab.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const physLab_info = new google.maps.InfoWindow({
    content: "physiology lab",
  });
  phys_lab.addListener("click", () => {
    physLab_info.open(map, phys_lab);
  });

  //marker for Histology lab
  const hist_lab = new google.maps.Marker({
    position: { lat: -1.2733651694102046, lng: 36.80527988355803 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Histology lab",
    icon: {
      url: "lab.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const histLab_info = new google.maps.InfoWindow({
    content: "Histology lab",
  });
  hist_lab.addListener("click", () => {
    histLab_info.open(map, hist_lab);
  });

  //marker for biochem dept
  const bio_dpt = new google.maps.Marker({
    position: { lat: -1.2732364551696325, lng: 36.80564399343304 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Department of Biochemistry",
    icon: {
      url: "biochemistry.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const bioDpt_info = new google.maps.InfoWindow({
    content: "Dept of biochem",
  });
  bio_dpt.addListener("click", () => {
    bioDpt_info.open(map, bio_dpt);
  });

}

window.initMap = initMap;
