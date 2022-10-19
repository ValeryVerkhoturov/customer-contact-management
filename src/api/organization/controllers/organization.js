'use strict';

/**
 * organization controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::organization.organization', ({ strapi }) => ({
  async findOne(ctx) {

    const { organization } = await strapi.db.query('api::contact-pearson.contact-pearson').findOne({
      select: [],
      where : {
        user : ctx.state.user.id
      },
      populate: ['organization']});

    return this.sanitizeOutput(organization, ctx);
  },

  async find(ctx) {
    return this.findOne(ctx);
  }

}));
