var disqus_config = function() {
  let data_element = document.getElementById("disqus-data");
  this.page.url = data_element.dataset.url;
  this.page.identifier = data_element.dataset.identifier;
};
