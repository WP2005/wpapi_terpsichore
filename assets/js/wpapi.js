import { renderPage } from "/assets/js/wpapi_renderPage.js"; // Note: In index.html, set to: <script type="module" ....
import { extractPostData } from "/assets/js/wpapi_extractPostData.js";
import { extractMediaData } from "/assets/js/wpapi_extractMediaData.js";
import { renderGallery } from "/assets/js/wpapi_renderGallery.js";

//--- Fetch posts ----
const get_wpPosts = function (url) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    })
    .then((data) => {
      renderPage(extractPostData(data)); //--See two imported functions.
    })
    .catch((error) => {
      console.log("Error in fetch: ", error);
    });
}; //--- End Fetch posts ----

const get_wpPhotos = function (url) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    })
    .then((data) => {
      renderGallery(extractMediaData(data)); //--See two imported functions.
    })
    .catch((error) => {
      console.log("Error in fetch: ", error);
    });
};

//* _embed to include the featured image source. NOTE THE UNDERSCORE */
const postURL =
  "http://localhost:8080/wpthemes2/wp-json/wp/v2/posts?_embed&categories=5&filter[orderby]=id=asc";
get_wpPosts(postURL);

const mediaURL =
  "http://localhost:8080/wpthemes2/wp-json/wp/v2/media?per_page=20";
get_wpPhotos(mediaURL);
