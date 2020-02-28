const keyBy = require("lodash/keyBy");
const { Policy } = require("@bunos/access-control");

class MemoryPolicyStore {
  constructor(opts = {}) {
    const normPolicies = opts.policies || [];
    this._policies = keyBy(normPolicies, "id");
  }

  async add(policy) {
    this._policies[policy.id] = policy;
    return Promise.resolve(new Policy(policy));
  }

  async get(policyId) {
    const policy = this._policies[policyId];

    if (!policy) {
      return Promise.resolve(null);
    }

    return Promise.resolve(new Policy(policy));
  }

  async update(opts) {
    const { policyId, ...rest } = opts;
    this._policies[policyId] = rest;

    return Promise.resolve(new Policy({ id: policyId, ...rest }));
  }

  async search(opts) {
    const { resource, action } = opts;

    const policies = Object.values(this._policies);

    const policy = policies.find(policy => {
      return policy.resource === resource && policy.action === action;
    });

    return Promise.resolve(new Policy(policy));
  }

  async archive(policyId) {
    delete this._policies[policyId];
    return Promise.resolve(policyId);
  }
}

module.exports = MemoryPolicyStore;
