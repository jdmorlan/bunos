/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  someSidebar: {
    Gateway: [
      {
        type: 'doc',
        id: 'gateway/getting-started',
      },
      {
        type: 'category',
        label: 'Components',
        items: ['gateway/modifiers', 'gateway/responders', 'gateway/app-store'],
      },
    ],
    'Web Sockets': [
      {
        type: 'doc',
        id: 'ws-server/getting-started',
      },
    ],
  },
};
