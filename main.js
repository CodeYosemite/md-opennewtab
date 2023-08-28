// var
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Open the ?link in new tab
function openLinkInNewTab(link) {
  const newTab = window.open(link, '_blank');
  newTab.focus();
}

// ?current open link
const linkParam = getQueryParam('link');
const currentParam = getQueryParam('current');

// check if is inputted/provided
if (linkParam) {
  openLinkInNewTab(linkParam);

  // check if ?current is too
  if (currentParam) {
    setTimeout(() => {
      window.location.href = currentParam;
    }, 1000);
  }
}
