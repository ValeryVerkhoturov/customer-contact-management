'use strict';

/**
 * contact-pearson controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-pearson.contact-pearson', ({ /*strapi*/ }) => ({
  async findOne(ctx) {
    ctx.query = { ...ctx.query, 'user' : ctx.state.user.id };
    return super.findOne(ctx);
  }
}));
