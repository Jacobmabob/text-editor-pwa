const butInstall = document.getElementById('buttonInstall');

 butInstall.addEventListener('click', () => console.log('yo'))

 window.addEventListener('beforeinstallprompt', (event) => {
     window.deferredPrompt = event;

     butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    console.log('hi')
    const promptEvent = window.deferredPrompt;

    if ('getInstalledRelatedApps' in window.navigator) {
        const relatedApps = await navigator.getInstalledRelatedApps();
        relatedApps.forEach((app) => {
          console.log(app.platform, app.url);
        });
      }

    if (!promptEvent) {
     return;
    }
  
    promptEvent.prompt();
    
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    butInstall.classList.toggle('hidden', true);
  window.deferredPrompt = null;
});
