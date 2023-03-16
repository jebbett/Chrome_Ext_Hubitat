// Saves options to chrome.storage
function save_options() {
  var eapi = document.getElementById('extapi').value;
  chrome.storage.sync.set({
    extAPI: eapi,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    extAPI: 'define'
  }, function(items) {
    document.getElementById('extapi').value = items.extAPI;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);