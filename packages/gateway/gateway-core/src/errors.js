class GatewayError extends Error {
  constructor(message) {
    super(message);

    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class InvalidGatewayOptions extends GatewayError {
  constructor(options) {
    super("Invalid Option[s] provided to Bunos Gateway");
    this.data = options;
  }
}

module.exports = { GatewayError, InvalidGatewayOptions };
