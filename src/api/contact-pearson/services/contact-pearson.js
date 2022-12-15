'use strict';

/**
 * contact-pearson service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contact-pearson.contact-pearson', ({ strapi }) => ({
  async findOne(...args) {
    let { user } = args[args.length - 1];

    return await strapi.db.query('api::contact-pearson.contact-pearson').findOne({
      where: { user : user, published_at : { $not : null } },
    });
  },
}));
