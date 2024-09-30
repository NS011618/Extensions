document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get({highlights: []}, function(result) {
      let highlightsList = document.getElementById('highlights-list');
      result.highlights.forEach(function(highlight) {
        let highlightItem = document.createElement('div');
        highlightItem.className = 'highlight-item';
        highlightItem.innerHTML = `
          <div class="highlight-text">${highlight.text}</div>
          <div class="highlight-timestamp">${new Date(highlight.timestamp).toLocaleString()}</div>
        `;
        highlightsList.appendChild(highlightItem);
      });
    });
});