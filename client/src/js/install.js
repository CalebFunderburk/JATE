const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferedPrompt = event

    butInstall.classList.toggle('hidden', false)
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferedPrompt
    if (!promptEvent) {
        return
    }

    promptEvent.prompt()

    window.deferedPrompt = null

    butInstall.classList.toggle('hidden', true)
});

window.addEventListener('appinstalled', (event) => {
    window.deferedPrompt = null
});
