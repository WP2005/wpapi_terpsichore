function renderGallery(data) {
  //--- Panel 1 ---------------
  console.log("data is: ", data);
  document.getElementById("wpGallery_1");
  document.getElementById("wpGallery_1").src = `${data[12].source_url}`;

  document.getElementById("wpGallery_2");
  document.getElementById("wpGallery_2").src = `${data[5].source_url}`;

  document.getElementById("wpGallery_3");
  document.getElementById("wpGallery_3").src = `${data[4].source_url}`;

  document.getElementById("wpGallery_4");
  document.getElementById("wpGallery_4").src = `${data[3].source_url}`;

  document.getElementById("wpGallery_5");
  document.getElementById("wpGallery_5").src = `${data[6].source_url}`;

  document.getElementById("wpGallery_6");
  document.getElementById("wpGallery_6").src = `${data[2].source_url}`;

  document.getElementById("wpGallery_7");
  document.getElementById("wpGallery_7").src = `${data[7].source_url}`;

  document.getElementById("wpGallery_8");
  document.getElementById("wpGallery_8").src = `${data[14].source_url}`;

  document.getElementById("wpGallery_9");
  document.getElementById("wpGallery_9").src = `${data[9].source_url}`;
}

export { renderGallery };
