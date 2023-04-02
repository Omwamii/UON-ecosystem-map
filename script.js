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
  const chem_dpt = new google.maps.Marker({
    position: { lat: -1.2735832042958102, lng: 36.8071732499254 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Chemistry department",
    icon: {
      url: "chem.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const chem_info = new google.maps.InfoWindow({
    content: "Chemistry department",
  });
  chem_dpt.addListener("click", () => {
    chem_info.open(map, chem_dpt);
  });

  //marker for chiromo library
  const chiromo_lib = new google.maps.Marker({
    position: { lat: -1.2736134401168453, lng: 36.80377947104992 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Chiromo library",
    icon: {
      url: "library.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const chiromoLib_info = new google.maps.InfoWindow({
    content: "Chiromo library",
  });
  chiromo_lib.addListener("click", () => {
    chiromoLib_info.open(map, chiromo_lib);
  });

  //marker for jomo kenyatta main campus lib
  const main_lib = new google.maps.Marker({
    position: { lat: -1.280174244416643, lng: 36.81586243105648 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Jomo kenyatta Memorial library",
    icon: {
      url: "library.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const mainLib_info = new google.maps.InfoWindow({
    content: "Jomo Kenyatta Memorial library",
  });
  main_lib.addListener("click", () => {
    mainLib_info.open(map, main_lib);
  });

  //marker for chiromo_lib parking
  const chiromoLib_parking = new google.maps.Marker({
    position: { lat: -1.2735337716527146, lng: 36.804130556996014 },
    map,
    animation: google.maps.Animation.DROP,
    title: "parking",
    icon: {
      url: "parking-sign.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const clib_info = new google.maps.InfoWindow({
    content: "parking",
  });
  chiromoLib_parking.addListener("click", () => {
    clib_info.open(map, chiromoLib_parking);
  });

  //marker for chiromo mortuary UoN
  const cUon_mortuary = new google.maps.Marker({
    position: { lat: -1.273484163040762, lng: 36.804456445392354 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Chiromo UoN mortuary",
    icon: {
      url: "mortuary.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const cMortuary_info = new google.maps.InfoWindow({
    content: "mortuary",
  });
  cUon_mortuary.addListener("click", () => {
    cMortuary_info.open(map, cUon_mortuary);
  });

  //marker for human anat lab
  const anat_lab = new google.maps.Marker({
    position: { lat: -1.2735756708124275, lng: 36.8044772325212 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Human anatomy lab",
    icon: {
      url: "lab.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const anatLab_info = new google.maps.InfoWindow({
    content: "Human anatomy lab",
  });
  anat_lab.addListener("click", () => {
    anatLab_info.open(map, anat_lab);
  });

  //marker for chiromo mortuary
  const chiromo_mot = new google.maps.Marker({
    position: { lat: -1.2720118881810878, lng: 36.80712370170713 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Chiromo funeral parlour",
    icon: {
      url: "mortuary.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const cMot_info = new google.maps.InfoWindow({
    content: "chiromo mortuary",
  });
  chiromo_mot.addListener("click", () => {
    cMot_info.open(map, chiromo_mot);
  });

  //marker for anatomy lecture hall
  const anat_lecture = new google.maps.Marker({
    position: { lat: -1.2734432694533213, lng: 36.805092128930035 },
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
    position: { lat: -1.2734389119402576, lng: 36.805149796432985 },
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

  //marker for assistant dean's office
  const dean_office = new google.maps.Marker({
    position: { lat: -1.2734233940309128, lng: 36.80610361015183 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Assistant Dean's office",
    icon: {
      url: "office.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const dean_info = new google.maps.InfoWindow({
    content: "Ass. Dean ",
  });
  dean_office.addListener("click", () => {
    dean_info.open(map, dean_office);
  });

  //marker for chiromo castle
  const chiromo_castle = new google.maps.Marker({
    position: { lat: -1.2736536718339866, lng: 36.80616463040195 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Chiromo castle",
    icon: {
      url: "castle.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const castle_info = new google.maps.InfoWindow({
    content: "Chiromo castle",
  });
  chiromo_castle.addListener("click", () => {
    castle_info.open(map, chiromo_castle);
  });

  //marker for jirani shop
  const jirani = new google.maps.Marker({
    position: { lat: -1.2742564415701914, lng: 36.806617356318625 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Jirani shop",
    icon: {
      url: "shop.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const jirani_info = new google.maps.InfoWindow({
    content: "Jirani shop",
  });
  jirani.addListener("click", () => {
    jirani_info.open(map, jirani);
  });

  //marker for center of Biotechnology and bioinformatics
  const bio_center = new google.maps.Marker({
    position: { lat: -1.2743930974958977, lng: 36.8063460482999 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Center of Biotechnology and bioinformatics",
    icon: {
      url: "biochemistry.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const bio_info = new google.maps.InfoWindow({
    content: "Biotech",
  });
  bio_center.addListener("click", () => {
    bio_info.open(map, bio_center);
  });

  //parking near biotech building
  const bio_parking = new google.maps.Marker({
    position: { lat: -1.2744578022809494, lng: 36.80565099139632 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Parking",
    icon: {
      url: "parking-sign.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const bioP_info = new google.maps.InfoWindow({
    content: "Parking",
  });
  bio_parking.addListener("click", () => {
    bioP_info.open(map, bio_parking);
  });

  //marker for school of biological sciences
  const bio_science = new google.maps.Marker({
    position: { lat: -1.2745461901322188, lng: 36.80503243271016 },
    map,
    animation: google.maps.Animation.DROP,
    title: "School of Biological sciences",
    icon: {
      url: "dna.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const bioS_info = new google.maps.InfoWindow({
    content: "Bio",
  });
  bio_science.addListener("click", () => {
    bioS_info.open(map, bio_science);
  });

  //marker for dispensary
  const dispe = new google.maps.Marker({
    position: { lat: -1.2739084103470912, lng: 36.80380875754935 },
    map,
    animation: google.maps.Animation.DROP,
    title: "UoN Dispensary",
    icon: {
      url: "dispe.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const dispe_info = new google.maps.InfoWindow({
    content: "Dispensary",
  });
  dispe.addListener("click", () => {
    dispe_info.open(map, dispe);
  });

  //marker for UoN jevanjee garden
  const garden = new google.maps.Marker({
    position: { lat: -1.2737988094422632, lng: 36.80517714895578 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Chiromo Jevanjee gardens",
    icon: {
      url: "garden.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const garden_info = new google.maps.InfoWindow({
    content: "Garden",
  });
  garden.addListener("click", () => {
    garden_info.open(map, garden);
  });

  //marker for agric lab
  const agri_lab = new google.maps.Marker({
    position: { lat: -1.273838027053768, lng: 36.805493649617354 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Agric lab",
    icon: {
      url: "lab.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const agric_info = new google.maps.InfoWindow({
    content: "Agric lab",
  });
  agric_lab.addListener("click", () => {
    agric_info.open(map, agric_lab);
  });

  //marker for Detergent selection unit sales office
  const deter = new google.maps.Marker({
    position: { lat: -1.273284660069437, lng: 36.80680679859551 },
    map,
    animation: google.maps.Animation.DROP,
    title: "Detergent Selection unit sales office",
    icon: {
      url: "detergent.png",
      scaledSize: new google.maps.Size(33, 31),
    },
  });
  const deter_info = new google.maps.InfoWindow({
    content: "Detergent",
  });
  deter.addListener("click", () => {
    deter_info.open(map, deter);
  });
}

window.initMap = initMap;


