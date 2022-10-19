'use strict';

/**
 * contact-pearson service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contact-pearson.contact-pearson', ({ strapi }) => ({
  async findOne(...args) {
    let { populate, ...argsWithoutPopulate } = args[args.length - 1];

    if (populate.constructor === Array) {
      populate = populate.reduce((prevArr, curr) => ({ ...prevArr, [curr] : 'true' }), {});
    } else if (populate !== '*') {
      populate = { [populate] : 'true' };
    }
    return await strapi.db.query('api::contact-pearson.contact-pearson').findOne({
      where: argsWithoutPopulate,
      populate: populate,
    });
  },
}));
