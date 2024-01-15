let path = window.location.pathname;
if (path == "" || path == "/")
  document.querySelector("html")?.setAttribute("data-theme", "");
else {
  let path_id = path.split("/")[1];
  document.querySelector("html")?.setAttribute("data-theme", path_id);
}
