let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}


function save() {
    
    let cookiesInJar = document.createElement("button");
    cookiesInJar.className = "cookies-in-jar";
    cookiesInJar.id = "cookies-in-jar";
    cookiesInJar.onclick = removeJar;
    
    let cookies = document.createElement("p");
    cookies.className = "stack";
    cookies.textContent = count;
    
    let jar = document.createElement("p");
    jar.className = "stack";
    jar.textContent = "🫙";
    
    cookiesInJar.appendChild(jar);
    cookiesInJar.appendChild(cookies);
    document.getElementById("score-section").appendChild(cookiesInJar);
    
    //cookiesEl.textContent += count
    //cookiesInJar.textContent += "🫙"
    console.log(count);
    count = 0;
    countEl.textContent = count;
}

function removeJar() {
    console.log("Jar removed")
    let jar = document.getElementById("cookies-in-jar");
    jar.remove();
    
}

//ANIMATION

const cookie = document.getElementById("cookie-img");
const wrapper = document.getElementById("cookie-wrapper");

cookie.addEventListener("click", () => {
  const particleCount = 8; // Number of mini cookies to explode

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "cookie-particle";

    // Random angle and distance
    const angle = Math.random() * 2 * Math.PI;
    const distance = 120 + Math.random() * 120; // 80-130px

    // Use trigonometry to get x and y movement
    const x = Math.cos(angle) * distance + "px";
    const y = Math.sin(angle) * distance + "px";

    // Set the random movement using CSS vars
    particle.style.setProperty("--x", x);
    particle.style.setProperty("--y", y);

    // Set the particle's start position near the big cookie
    particle.style.left = cookie.offsetLeft + cookie.offsetWidth / 2 + "px";
    particle.style.top = cookie.offsetTop + cookie.offsetHeight / 2 + "px";

    // Add particle to the wrapper
    wrapper.appendChild(particle);

    // Remove after animation ends
    setTimeout(() => {
      particle.remove();
    }, 600);
  }
});


