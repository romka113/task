const arnold = document.getElementById("Arnold-click");
const franco = document.getElementById("Franco-click");
const oliva = document.getElementById("Sergio-click");
const lifterArea = document.getElementById("weight--lifter--info");
const main = document.getElementById("main");
const aPhotos = <HTMLInputElement>document.getElementById("aPhoto");
const titles = <HTMLInputElement>document.getElementById("title");
const infoAbouts = <HTMLInputElement>document.getElementById("infoAbout");
const infofs = <HTMLInputElement>document.getElementById("info");
const btn = document.getElementById("user-galery-btn");
let galerry = document.getElementById("user-galery");
const createSection = document.getElementById("create-your-weight-lifter");
const userInfo = document.getElementById("user-new-info");
const deleteGalery = document.getElementById("delete-all-galery");

// info about my favorite weigth-lifters
const info = [
  {
    id: "Arnold-click",
    aPhoto: "https://i1.sndcdn.com/artworks-000672279817-st910a-t500x500.jpg",
    title: "Arnold Schwarzenegger",
    infoAbout:
      "He is known for lifting insane weights even while training for bodybuilding and aesthetics. In his training program “blueprint to size” Arnold reveals his unofficial gym records to be a 247 Kg Squat, 226 Kg Bench Press and 322 Kg Deadlift.",
    info: "https://www.greatestphysiques.com/male-physiques/arnold-schwarzenegger/",
  },
  {
    id: "Franco-click",
    aPhoto:
      "https://www.greatestphysiques.com/wp-content/uploads/2016/07/Franco-no12.jpg",
    title: "Franco Columbu",
    infoAbout:
      "Known for his strength, Columbu's clean and jerk record was 400 pounds (181 kg), his bench press record was 525 pounds (238 kg), his squat record was 655 pounds (297 kg), and his deadlift record was 750 pounds (340 kg).",
    info: "https://www.greatestphysiques.com/male-physiques/franco-columbo/",
  },
  {
    id: "Sergio-click",
    aPhoto:
      "https://fitnessvolt.com/wp-content/uploads/2020/09/sergio-oliva-6.jpg",
    title: "Sergio Oliva",
    infoAbout:
      "Oliva’s stats were just unreal. He was 5’10 tall and weighed 225 – 235 lbs competing. He was known to have the smallest waist and an unbelievable V-taper. ",
    info: "https://fitnessvolt.com/sergio-oliva-profile/",
  },
];

type WeigthLifter = {
  aPhoto: string;
  title: string;
  infoAbout: string;
  info: string;
};
//array of user data
let galeryOfUsers: WeigthLifter[] = [];
//from localStorage take data if there is and create cards for user
const loadGalery = () => {
  if (lifterArea != null && jsonSt != null) {
    lifterArea.innerHTML = "";
    createInfoInv();
    galeryOfUsers.forEach((Opa, b) => {
      const div1 = document.createElement("div");
      div1.className = "card ml-5 mt-5 mb-5";
      div1.style.width = "18rem";
      div1.style.height = "10rem auto";
      const img = document.createElement("img");
      img.src = `${Opa.aPhoto}`;
      img.className = "card-img-top";
      img.style.height = "10rem";
      img.alt = "image";
      const div2 = document.createElement("div");
      div2.className = "card-body center--btn";
      const h5 = document.createElement("h5");
      h5.className = "card-title";
      h5.textContent = `${Opa.title}`;
      const p = document.createElement("p");
      p.className = "card-text";
      p.textContent = `${Opa.infoAbout}`;
      const a = document.createElement("a");
      a.href = `${Opa.info}`;
      a.className = "btn btn-primary";
      a.target = "_blank";
      a.textContent = "More info";
      const btn = document.createElement("button");
      btn.className = "btn btn-danger";
      btn.textContent = "Delete";
      btn.onclick = () => {
        deleteTas(b);
      };
      div2.appendChild(h5);
      div2.appendChild(p);
      div2.appendChild(a);
      div2.appendChild(btn);
      div1.appendChild(img);
      div1.appendChild(div2);
      lifterArea.appendChild(div1);
    });
  }
};
//from user input form take data check if it is not empty , and storage in array and save in localStorage
const addGaler = () => {
  if (lifterArea != null && btn != null) {
    if (
      aPhotos.value != "" &&
      titles.value != "" &&
      infoAbouts.value != "" &&
      infofs.value != ""
    ) {
      galeryOfUsers.push({
        aPhoto: aPhotos.value,
        title: titles.value,
        infoAbout: infoAbouts.value,
        info: infofs.value,
      });
      saveT();
      aPhotos.value = "";
      titles.value = "";
      infoAbouts.value = "";
      infofs.value = "";
      location.reload();
      createInfoInv();
    } else {
      alert("Visi laukai privalomi uzpidlyti");
    }
  }
};

const saveT = () => {
  localStorage.setItem("Weightlifter", JSON.stringify(galeryOfUsers));
};
//From own data create cards for user
let forma = (lifter: any) => {
  if (lifterArea != null) {
    lifterArea.innerHTML = "";
    const div1 = document.createElement("div");
    div1.className = "card ml-5 mt-5 mb-5";
    div1.style.width = "18rem";
    div1.style.height = "10rem auto";
    const img = document.createElement("img");
    img.src = `${lifter.aPhoto}`;
    img.className = "card-img-top";
    img.style.height = "10rem";
    img.alt = "image";
    const div2 = document.createElement("div");
    div2.className = "card-body center--btn";
    const h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = `${lifter.title}`;
    const p = document.createElement("p");
    p.className = "card-text";
    p.textContent = `${lifter.infoAbout}`;
    const a = document.createElement("a");
    a.href = `${lifter.info}`;
    a.className = "btn btn-primary";
    a.target = "_blank";
    a.textContent = "More info";
    div2.appendChild(h5);
    div2.appendChild(p);
    div2.appendChild(a);
    div1.appendChild(img);
    div1.appendChild(div2);
    lifterArea.appendChild(div1);
  }
};

let jsonSt = localStorage.getItem("Weightlifter");
if (jsonSt != null) galeryOfUsers = JSON.parse(jsonSt);

//checking if there is any data in loacalStorage and from condintion if there is data display  "Gallery" button for user
if (galeryOfUsers.length > 0 && galerry != null) {
  galerry.className = "";
}

//checking if there is any data in loacalStorage and from condintion if there is data display "Delete All Gallery" for user
if (galeryOfUsers.length > 0 && deleteGalery != null) {
  deleteGalery.className = "";
}

const createLifter = () => {
  if (lifterArea != null && main != null) {
    lifterArea.innerHTML = "";
    createInfoInv();
    info.forEach((lifter) => {
      if (arnold != null && arnold.id == lifter.id) {
        forma(lifter);
      }
    });
  }
};
const createLifter2 = () => {
  if (lifterArea != null) {
    lifterArea.innerHTML = "";
    createInfoInv();
    info.forEach((lifter) => {
      if (franco != null && franco.id == lifter.id) {
        forma(lifter);
      }
    });
  }
};

const createLifter3 = () => {
  if (lifterArea != null) {
    lifterArea.innerHTML = "";
    createInfoInv();
    info.forEach((lifter) => {
      if (oliva != null && oliva.id == lifter.id) {
        forma(lifter);
      }
    });
  }
};

//making visible user form for creating new data
const createInfo = () => {
  if (userInfo != null && lifterArea != null) {
    lifterArea.innerHTML = "";
    userInfo.style.display = "block";
  }
};

// making invisible user Form apllication
const createInfoInv = () => {
  if (userInfo != null && lifterArea != null) {
    lifterArea.innerHTML = "";
    userInfo.style.display = "none";
  }
};
//delete user data from localStorage and refresh
const deleteAll = () => {
  localStorage.removeItem("Weightlifter");
  galeryOfUsers = [];
  loadGalery();
  location.reload();
};

//delete user data from array galeryOfUsers
const deleteTas = (index: number) => {
  galeryOfUsers.splice(index, 1);
  loadGalery();
};

//making visible user form for creating new data
if (createSection != null) {
  createSection.onclick = createInfo;
}
//Form aplication button to save data to loacalStorage
if (btn != null) {
  btn.onclick = addGaler;
}

if (galerry != null) {
  galerry.onclick = loadGalery;
}
//creating arnold card
if (arnold != null) {
  arnold.onclick = createLifter;
}
//creating franco card
if (franco != null) {
  franco.onclick = createLifter2;
}
//creating oliva card
if (oliva != null) {
  oliva.onclick = createLifter3;
}
//deleting user created galery from localStorage
if (deleteGalery != null) {
  deleteGalery.onclick = deleteAll;
}
