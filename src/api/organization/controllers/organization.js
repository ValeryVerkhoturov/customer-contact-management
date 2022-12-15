'use strict';

/**
 * organization controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::organization.organization', ({ /*strapi*/ }) => ({
  async findOne(ctx) {
    ctx.query = { ...ctx.query, 'user' : ctx.state.user.id };
    return super.findOne(ctx);
  }
}));
