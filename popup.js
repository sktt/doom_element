const spanLicenseStatus = document.querySelector("#licenseStatus")
const buttonConnect = document.querySelector("#btn_connect");
buttonConnect.onclick = () => {
  chrome.runtime.sendMessage(
    "cws__get_auth_token+check_license+buy_page",
    checkLicense
  );
}

const buttonBuy = document.querySelector("#btn_buy");

buttonBuy.onclick = () => {
  chrome.runtime.sendMessage("cws__buy_page");
}

const buttonBillingPortal = document.querySelector("#btn_portal");
buttonBillingPortal.onclick  = () => {
  chrome.runtime.sendMessage("cws__get_billing_portal_url", url => {
    if (!url) {
      // they have a license, but does not with us. so must be google, send
      // ;;
      // them to google's billing portal.
      // TODO: can we find the user index of the authenticated user, ie. /u/0?
      url = "https://pay.google.com/gp/w/u/0/home/subscriptionsandservices";
    }
    window.open(url)
  });
}

function checkLicense({ needsAuth, needsPermissions, licenseActive }) {
  spanLicenseStatus.innerText = licenseActive ? "ACTIVE" : "INACTIVE"
  spanLicenseStatus.style.color = licenseActive ? "green" : "red"

  if (needsPermissions) {
    buttonConnect.style.visibility = "visible"
  } else if (needsAuth) {
    buttonConnect.style.visibility = "visible"
  } else if (!licenseActive) {
    buttonBuy.style.visibility = "visible"
  } else {
    buttonBillingPortal.style.visibility = "visible"
  }
}

chrome.runtime.sendMessage("cws__check_license", checkLicense);
