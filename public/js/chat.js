const socket = io();

// // Event names must match to that on server
// socket.on("countUpdated", count => {
//   console.log(`The count has been updated! ${count}`);
// });

// document.querySelector("#increment").addEventListener("click", () => {
//   console.log("click");
//   socket.emit("increment");
// });

socket.on("welcomeEvent", message => {
  console.log(message);
});

socket.on("message", msg => {
  console.log(msg);
});

document.querySelector("#message-form").addEventListener("submit", e => {
  e.preventDefault();
  const message = e.target.elements.message.value;
  socket.emit("messageSent", message);
});
