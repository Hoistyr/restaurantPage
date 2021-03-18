(()=>{"use strict";const e=()=>{const e=document.querySelector("#content");console.log(e);const t=document.createElement("header");t.id="header",e.prepend(t);const n=document.createElement("div");n.id="nameHolder",t.appendChild(n);const a=document.createElement("h1");a.id="restaurantName",a.classList.add("onHome"),a.textContent="Garbalo's",n.appendChild(a);const c=document.createElement("div");c.id="tabHolder",t.appendChild(c);const o=document.createElement("h2");o.id="menuTab",o.classList.add("headerTab"),o.textContent="Menu",c.appendChild(o);const s=document.createElement("h2");s.id="contactTab",s.classList.add("headerTab"),s.textContent="Contact us",c.appendChild(s)},t=()=>{let e=document.querySelector("#pageContent");null!==e&&e.remove()},n=()=>{document.querySelectorAll(".headerTab").forEach((e=>{e.classList.remove("onPage")})),document.getElementById("restaurantName").classList.remove("onHome")},a={buildBlock:e=>{const t=document.querySelector("#content"),n=document.createElement("div");n.id="pageContent",t.appendChild(n);for(let t=1;t<=e;t++){const e=document.createElement("div");e.id=`block${t}`,e.classList.add("imageInfoBlock"),n.appendChild(e),document.getElementById("restaurantName").classList.add("onHome");const a=document.createElement("img");a.src="../src/images/homepageImage.jpg",a.classList.add("homepageImage");const c=document.createElement("div");if(c.id="restaurantInformation",t%2!=0){e.append(a,c);const t=document.createElement("p");t.classList.add("infoText","rightText"),t.textContent="Here at Garbalo's we care deeply about creating an enjoyable dining experience.",c.appendChild(t)}else{e.append(c,a);const t=document.createElement("p");t.classList.add("infoText","leftText"),t.textContent="Here at Garbalo's we care deeply about creating an enjoyable dining experience.",c.appendChild(t)}}}},c=()=>{document.getElementById("menuTab").classList.add("headerTab","onPage");let e=[];class t{constructor(e){this.name=e,this.description=""}setDescription(e){this.description="Salad"===e?"A crispy and delicious taste of nature's best. Lettuce, spinach, tomatoes, cucumbers, dressing, nuts, and berries":"No description available"}}["Salad","Hamburger","Steak","Lobster","Sandwich","Fries","Chicken Sandwich"].forEach((n=>{const a=new t(n);a.setDescription(n),e.push(a)})),console.log(e),(()=>{const t=document.querySelector("#content"),n=document.createElement("div");n.id="pageContent",t.appendChild(n);for(let t=0;t<e.length;t++){const a=e[t].name.toLowerCase().replace(/\s/g,""),c=document.createElement("div");c.id=`${a}`,c.classList.add("menuImageInfoBlock"),n.appendChild(c);const o=document.createElement("img");o.src=`../src/images/${a}.jpg`,o.classList.add("foodImage"),o.alt=`Picture of a ${a}`;const s=document.createElement("div");s.id="foodInfoButtonHolder";const d=document.createElement("div");if(d.id="foodInformation",t%2!=0){c.append(o,s),s.appendChild(d);const n=document.createElement("h2");n.classList.add("foodTitle"),n.textContent=`${e[t].name}`,d.appendChild(n);const a=document.createElement("p");a.classList.add("foodInfoText","rightText"),a.textContent=`${e[t].description}`,d.appendChild(a)}else{c.append(s,o),s.appendChild(d);const n=document.createElement("h2");n.classList.add("foodTitle"),n.textContent=`${e[t].name}`,d.appendChild(n);const a=document.createElement("p");a.classList.add("foodInfoText","leftText"),a.textContent=`${e[t].description}`,d.appendChild(a)}const i=document.createElement("div");i.classList.add("orderButton"),i.textContent="Add to Order",s.appendChild(i)}})()},o=()=>{document.getElementById("contactTab").classList.add("headerTab","onPage"),(()=>{console.log("in build block");const e=document.querySelector("#content"),t=document.createElement("div");t.id="pageContent",e.appendChild(t);const n=document.createElement("div");n.classList.add("contactBlock"),t.appendChild(n);const a=document.createElement("div");a.id="contactInformation",n.append(a),a.innerHTML="<p class='contactInfoText'>Feel free to contact us with any questions you might have!</p>\n            <h1 class='contactInfoTitle' id='contactInfoMainTitle'>Contact Information:</h1>\n            </br></br>\n            <h2 class='contactInfoTitle' id='address'>Address:</h2>\n            <p class='contactInfoText' id='address'>895 W. Birch St.\n            Alabaster, RO 35007</p>\n            </br>\n            <h2 class='contactInfoTitle' id='phoneTitle'>Phone Number (Call or Text):</h2>\n            <p class='contactInfoText' id='phoneNumber'>(123) 456-789</p>\n            </br>\n            <h2 class='contactInfoTitle' id='emailTitle'>Email:</h2>\n            <p class='contactInfoText' id='emailText'>contact@garbalos.com</p>\n            </br>\n            <h2 class='contactInfoTitle' id='socialMediaTitle'>Social Media:</h2>\n            <div id='socialMediaImagesHolder'>\n            <img class='socialMediaImage' id='twitterIcon' alt='Twitter Icon' src='../src/images/twitterIcon.svg'>\n            <img class='socialMediaImage' id='instagramIcon' alt='Instagram Icon' src='../src/images/instagramIcon.svg'>\n            <img class='socialMediaImage' id='facebookIcon' alt='Facebook Icon' src='../src/images/facebookIcon.svg'>\n            </div>"})()},s=()=>{console.log("loadhomefired"),t(),n(),a.buildBlock(2),l.stopListeners.allListeners(),l.startListeners.menuListener(),l.startListeners.contactListener()},d=()=>{console.log("loadmenuclicked"),t(),n(),c(),l.stopListeners.allListeners(),l.startListeners.homeListener(),l.startListeners.contactListener()},i=()=>{console.log("loadcontactclicked"),t(),n(),o(),l.stopListeners.allListeners(),l.startListeners.homeListener(),l.startListeners.menuListener()},l={startListeners:{allListeners:()=>{const e=document.getElementById("restaurantName"),t=document.getElementById("menuTab"),n=document.getElementById("contactTab");e.addEventListener("click",s),t.addEventListener("click",d),n.addEventListener("click",i)},homeListener:()=>{document.getElementById("restaurantName").addEventListener("click",s)},menuListener:()=>{document.getElementById("menuTab").addEventListener("click",d)},contactListener:()=>{document.getElementById("contactTab").addEventListener("click",i)}},stopListeners:{allListeners:()=>{const e=document.getElementById("restaurantName"),t=document.getElementById("menuTab"),n=document.getElementById("contactTab");e.removeEventListener("click",s),t.removeEventListener("click",d),n.removeEventListener("click",i)},homeListener:()=>{document.getElementById("restaurantName").removeEventListener("click",s)},menuListener:()=>{document.getElementById("menuTab").removeEventListener("click",d)},contactListener:()=>{document.getElementById("contactTab").removeEventListener("click",i)}}};console.log("firstload"),e(),a.buildBlock(2),l.startListeners.allListeners()})();