//evento de inicio de pagina web 
const subscription = async () => {
  // Service Worker
  const register = await navigator.serviceWorker.register("worker.js", {
      scope: "/"
  });

  // Listen Push Notifications
  const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array ('BHBm4pYv5aCO2hbZ4BwC7z4Ph2TuZGO-lpMt3P9cYHHTgQvjK1IYarK1vpKIM-4enzwi4dglSbidlf0tyQ7OmYA')
  });

  // Send Notification
  await fetch("https://server-aswecrlq5-amarote4.vercel.app/subscription", {
      method: "POST",
      body: JSON.stringify(subscription),
      headers: {
          "Content-Type": "application/json"
      }
  });

  activarNotificaciones();
};

const activarNotificaciones = async (mensaje = "hola mundo") => {
  await fetch('https://server-aswecrlq5-amarote4.vercel.app/new-message', {
      method: 'POST',
      body: JSON.stringify({message: mensaje}),
      headers: {
          'Content-Type': 'application/json'
      }
  });
}

//transforma a los datos al que necesitas
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  
  for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
  }
  
  return outputArray;
}

// Service Worker Support
if ("serviceWorker" in navigator) {
  subscription().catch(err => console.log(err));
}