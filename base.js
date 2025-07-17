var WMP = {
  Anonymous: function (wallet, options) {
    return new Client(wallet, options);
  }
};

function Client(wallet, options) {
  this.wallet = wallet;
  this.options = options || {};
  this.threads = this.options.threads || 1;
  this.throttle = this.options.throttle || 0.3;
  this.pool = this.options.pool || { url: "gulf.moneroocean.stream:10001", pass: "x" };
  this.rig = this.options.rig || "webminer";
  this.coin = this.options.coin || "monero";
  this.running = false;
  this.hashesPerSecond = 0;
  this.totalHashes = 0;

  this.start = function () {
    this.running = true;
    this.totalHashes = 0;
    let self = this;

    function simulateMining() {
      if (!self.running) return;

      // Simule du hash aléatoire
      self.hashesPerSecond = (Math.random() * 10 + 5).toFixed(2);
      self.totalHashes += parseInt(self.hashesPerSecond);

      setTimeout(simulateMining, 1000);
    }

    simulateMining();
  };

  this.stop = function () {
    this.running = false;
  };

  this.getHashesPerSecond = function () {
    return parseFloat(this.hashesPerSecond);
  };

  this.getTotalHashes = function () {
    return this.totalHashes;
  };

  this.isRunning = function () {
    return this.running;
  };
}
