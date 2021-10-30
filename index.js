function keyLogger(pressed) {
    console.log(pressed.key);
  
  /*
  let file = new File(["logger"], "logger.txt", {
  type: "text/plain",
});
  */
  
}
window.addEventListener("keypress", keyLogger, false);

