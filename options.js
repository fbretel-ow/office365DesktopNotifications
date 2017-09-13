function save_options() {
  var urls = document.getElementById('urls').value.split('\n');
  chrome.storage.sync.set({
    urls: urls,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    urls: ["https://outlook.office.com/", "https://outlook.office365.com/"]
  }, function(items) {
    document.getElementById('urls').value = items.urls.join('\n');
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
