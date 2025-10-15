// pionConnection.js
// Using plain WebRTC APIs for data channel
let peerConnection;
let dataChannel;
let remoteHandler = null;

export function initPion(onRemoteMessage) {
  remoteHandler = onRemoteMessage;

  peerConnection = new RTCPeerConnection();

  // Create a data channel
  dataChannel = peerConnection.createDataChannel("shoppingList");
  dataChannel.onmessage = (event) => {
    if (remoteHandler) remoteHandler(JSON.parse(event.data));
  };

  // Simulate local signaling
  peerConnection.ondatachannel = (event) => {
    event.channel.onmessage = (e) => {
      if (remoteHandler) remoteHandler(JSON.parse(e.data));
    };
  };
}

export function sendUpdate(message) {
  if (dataChannel && dataChannel.readyState === "open") {
    dataChannel.send(JSON.stringify(message));
  }
}
