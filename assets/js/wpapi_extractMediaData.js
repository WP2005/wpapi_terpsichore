function extractMediaData(data) {
  //console.log("Good morning: ", data);
  var mediaData = data.map((e) => {
    var post = {
      id: e.id,
      source_url: e.source_url,
    };
    return post;
  });

  //const arr = Object.entries(mediaData);
  //console.log("Good morning: ", mediaData.id);
  return mediaData;
}

export { extractMediaData };
