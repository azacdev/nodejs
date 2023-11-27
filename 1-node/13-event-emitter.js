const EventEmitter = require("events");

const customEvents = new EventEmitter();

customEvents.on("response", (name, id) => {
  console.log(`data received ${name} from : ${id}`);
});

customEvents.on("response", () => {
  console.log(`data received`);
});

customEvents.emit("response", "john", 34);
