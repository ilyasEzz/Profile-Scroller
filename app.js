const nextBtn = document.getElementById("next");
const data = [
  {
    name: "Soufiane",
    age: 25,
    gender: "male",
    lookingFor: "femele",
    picture: "https://randomuser.me/api/portraits/men/66.jpg"
  },
  {
    name: "Viktor",
    age: 22,
    gender: "male",
    lookingFor: "femele",
    picture: "https://randomuser.me/api/portraits/men/27.jpg"
  },
  {
    name: "Rita",
    age: 24,
    gender: "femele",
    lookingFor: "male",
    picture: "https://randomuser.me/api/portraits/women/66.jpg"
  },
  {
    name: "Jenifer",
    age: 32,
    gender: "femele",
    lookingFor: "male",
    picture: "https://randomuser.me/api/portraits/women/32.jpg"
  }
];
const profiles = profileIterator(data);

next.addEventListener("click", nextProfile);

// display first profile
nextProfile()


function nextProfile() {
  const currentProfile = profiles.next().value;
  if(currentProfile !== undefined) {
  document.getElementById("profileDisplay").innerHTML = `
  <ul class="list-group">
    <li class="list-group-item">${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.name}</li>
    <li class="list-group-item">Gender: ${currentProfile.gender}</li>
    <li class="list-group-item">Looking for: ${currentProfile.lookingFor}</li>
  </ul>
  `;

  document.getElementById("imageDisplay").innerHTML = 
  `<img src="${currentProfile.picture}">`;
  } else {
      // No more profiles
      window.location.reload();
  } 

}

function profileIterator(profiles) {
    let nextIndex = 0;
  
    return {
      next: function() {
        return nextIndex < profiles.length
          ? { value: profiles[nextIndex++], done: false }
          : { done: true };
      }
    };
  }