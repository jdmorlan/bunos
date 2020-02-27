const { Storage } = require("@google-cloud/storage");

class GCPBucketResponder {
  constructor(opts) {
    const { projectId, bucket } = opts;

    this._projectId = projectId;
    this._bucketName = bucket;

    this._storage = new Storage({ projectId });
    this._bucket = this._storage.bucket(bucket);
  }

  get key() {
    return "GCP_BUCKET";
  }

  _validateStorage(opts) {
    const { target } = opts;

    if (target.options.projectId !== this._projectId) {
      this._storage = new Storage({ projectId: target.options.projectId });
    }

    return this._storage;
  }

  _validateBucket(opts) {
    this._validateStorge(opts);
    const { target } = opts;

    if (target.options.bucket !== this._bucketName) {
      this._bucket = this._storage.bucket(target.options.bucket);
    }

    return this._bucket;
  }

  run(opts) {
    this._validateBucket(opts);
    const { target } = opts;

    const file = this._bucket.file(target.url);
    file.createReadStream().pipe(opts.response);
  }
}

module.exports = GCPBucketResponder;
