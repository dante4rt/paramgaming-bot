class Spinner {
  constructor() {
    this.frames = ['-', '\\', '|', '/'];
    this.interval = 10;
    this.intervalId = null;
    this.currentIndex = 0;
  }

  start() {
    this.intervalId = setInterval(() => {
      process.stdout.write(
        `\r${this.frames[this.currentIndex]} Fetching tasks...`
      );
      this.currentIndex = (this.currentIndex + 1) % this.frames.length;
    }, this.interval);
  }

  stop() {
    clearInterval(this.intervalId);
    process.stdout.write('\r');
  }
}

module.exports = { Spinner };
