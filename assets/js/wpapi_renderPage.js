function renderPage(postData) {
  //--- Panel 1 ---------------
  document
    .getElementById("panel1.title")
    .insertAdjacentHTML("beforeend", postData[0].title);
  document
    .getElementById("panel1.content")
    .insertAdjacentHTML("beforeend", postData[0].content);
  document.getElementById("panel1.image").src = `${postData[0].img_url}`;

  //--- Panel 2 ---------------
  document
    .getElementById("panel2.title")
    .insertAdjacentHTML("beforeend", postData[1].title);
  document
    .getElementById("panel2.content")
    .insertAdjacentHTML("beforeend", postData[1].content);
  document.getElementById("panel2.image").src = `${postData[1].img_url}`;

  //--- Panel 4 ---------------
  document
    .getElementById("panel4.title")
    .insertAdjacentHTML("beforeend", postData[3].title);
  document
    .getElementById("panel4.content")
    .insertAdjacentHTML("beforeend", postData[3].content);
  document.getElementById("panel4.image").src = `${postData[3].img_url}`;
}

export { renderPage };
