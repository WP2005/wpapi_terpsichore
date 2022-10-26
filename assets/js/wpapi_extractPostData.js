function extractPostData(data) {
  var postData = data.map((e) => {
    var post = {
      id: e.id,
      title: e.title.rendered,
      catnum: e.categories[0],
      content: e.content.rendered,
      img_url: e._embedded["wp:featuredmedia"][0]["source_url"],
    };
    //console.log("post data: ", post);
    return post;
  });
  return postData;
}

export { extractPostData };
