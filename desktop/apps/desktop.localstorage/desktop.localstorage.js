desktop.localstorage = {};
desktop.localstorage.label = "localstorage";

desktop.localstorage.prefix = '_buddypond_desktop_';

desktop.localstorage.set = function setLocalStorage (key, val) {
  localStorage.setItem(desktop.localstorage.prefix + key, val);
  // in addition to updating the localstorage, update desktop.settings
  // Remark: desktop.settings is booted from localstorage on load
  desktop.settings[key] = val;
}

desktop.localstorage.get = function getLocalStorage (key) {
  localStorage.getItem(desktop.localstorage.prefix + key);
}

desktop.localstorage.removeItem = function removeLocalStorage (key) {
  localStorage.removeItem(desktop.localstorage.prefix + key);
}

desktop.localstorage.load = function loadlocalstorageGames () {
  // boot all localstorage data into local settings
  for (var key in localStorage){
    if (key.search(desktop.localstorage.prefix) !== -1) {
      let param = key.replace(desktop.localstorage.prefix, '');
      console.log('booting', param, localStorage[key])
      
      try {
        desktop.settings[param] = JSON.parse(localStorage[key]);
      } catch (err) {
        desktop.settings[param] = localStorage[key];
      }
    }
  }
  return true;
};
