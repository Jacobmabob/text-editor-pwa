const butInstall = document.getElementById('buttonInstall');

 butInstall.addEventListener('click', () => console.log('yo'))

 window.addEventListener('beforeinstallprompt', (event) => {
     window.deferredPrompt = event;

     butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    console.log('hi')
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     return;
    }
  
    promptEvent.prompt();
    
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
