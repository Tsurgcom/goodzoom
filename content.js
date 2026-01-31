(function() {
  'use strict';

  function closePage() {
    chrome.runtime.sendMessage({ action: 'closeTab' });

    document.body.innerHTML = `
      <div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#1a1a2e;color:#eee;">
        <div style="text-align:center;padding:40px;max-width:400px;">
          <h1 style="color:#48bb78;font-size:24px;margin-bottom:12px;">Closing...</h1>
          <p style="color:#a0aec0;font-size:16px;">GoodZoom is closing this tab.</p>
        </div>
      </div>
    `;
    document.title = 'Closing - GoodZoom';
  }

  function init() {
    const url = window.location.href;
    if (url.includes('postattendee') || url.includes('postmeeting')) {
      setTimeout(closePage, 500);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
