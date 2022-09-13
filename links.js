const data = [
  {name: "Discord", link: "https://discord.gg/fYUvhgrq53", image: "https://cdn1.dotesports.com/wp-content/uploads/2019/02/03105952/discord-logo.jpg"},
  {name: "Instagram", link: "https://www.instagram.com/hori.zon424/", image: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square1-1024.png"},
  {name: "Clothes shop", link: "https://www.instagram.com/hanime_clothes/", image: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square1-1024.png"}
];
let nc = ""; // nc => New Content
for (let i = 0; i < data.length; i++) {
  var da = data[i];
  nc += `<div class="article"><a href="${da.link}">${da.name}</a><img src="${da.image}"/></div>`;
}
document.getElementById("links").innerHTML = nc;
