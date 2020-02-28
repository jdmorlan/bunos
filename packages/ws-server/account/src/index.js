const v1 = require("cloudevents-sdk/v1");

class Account {
  constructor(opts) {
    this._id = opts.id;
    this._attributes = {};
    this._ws = opts.ws;
  }

  get id() {
    return this._id;
  }

  get(attributeKey) {
    return this._attributes[attributeKey];
  }

  toJS() {
    return { id: this.id, attributes: this._attributes };
  }

  send(data, attributes = {}) {
    try {
      const event = v1.event();

      event.time(new Date());

      if (attributes.source) {
        event.source(attributes.source);
      }

      if (attributes.type) {
        event.type(attributes.type);
      }

      if (attributes.dataContentType) {
        event.dataContentType(attributes.dataContentType);
      }

      event.data(data);

      const json = JSON.stringify(event.format());
      const buffer = Buffer.from(json);

      this._ws.send(buffer);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = { Account };
