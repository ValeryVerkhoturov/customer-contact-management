'use strict';

/**
 * organization service
 */

const { createCoreService } = require('@strapi/strapi').factories;

const qs = require('qs');

module.exports = createCoreService('api::organization.organization', ({ strapi }) => ({
  async findOne(...args) {
    let { user } = args[args.length - 1];
    const { id : contactPersonId } = await strapi.db.query('api::contact-pearson.contact-pearson').findOne({
      select: [],
      where: { user : user, published_at : { $not : null } },
    });

    return await strapi.db.query('api::organization.organization').findOne({
      where: { contact_pearsons : contactPersonId, published_at : { $not : null } },
    });
  },
}));
