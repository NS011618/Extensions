document.addEventListener('mouseup', function() {
    let selectedText = window.getSelection().toString().trim();
    if (selectedText.length > 0) {
      let range = window.getSelection().getRangeAt(0);
      let newNode = document.createElement('span');
      newNode.className = 'highlight';
      range.surroundContents(newNode);
  
      // Save the highlighted text
      chrome.storage.sync.get({highlights: []}, function(result) {
        let highlights = result.highlights;
        highlights.push({
          text: selectedText,
          url: window.location.href,
          timestamp: new Date().toISOString()
        });
        chrome.storage.sync.set({highlights: highlights});
      });
    }
});