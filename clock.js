function Clock(config) {
  this.clock = config.clock;
  this.timeSave = millis();
  this.start = config.start;
}

Clock.prototype.tick = function() {
  if (millis() > this.timeSave+this.clock) {
  this.start();
  this.timeSave = millis();  
  }
}