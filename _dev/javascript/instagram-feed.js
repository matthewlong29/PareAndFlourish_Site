$.ajax({
  type: "GET",
  dataType: "jsonp",
  url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=3971132399.ee6d3a3.b58c64fbeb3b46d3a55676dbea62148d",
  success: data => {
    const instagram = document.querySelector("#instagram-images");
    let instagramTags = "";
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < data.data[i].tags.length / 4; j++) {
        instagramTags += `#${data.data[i].tags[j]} `;
      }

      instagram.innerHTML += `<a href="${data.data[i].link}" target="_blank"><img class="img-responsive" src="${data.data[i].images.standard_resolution.url}" alt="Instagram Image. Tags: ${instagramTags}"></a>`
    }
  }
});