'use strict';

/**
 * task controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::task.task', ({ strapi }) => ({

  async find(ctx) {

    const { organization } = await strapi.db.query('api::contact-pearson.contact-pearson').findOne({
      select: [],
      where : {
        user : ctx.state.user.id
      },
      populate: ['organization']});


    const { data, meta } = await super.find(ctx);
    console.log(data);
    data.filter(task => task.organization.id === organization.id);


    // let query = await strapi.db.query('api::task.task').findMany({
    //   where : {
    //     organization : organization.id
    //   },
    //   populate: ['organization']});
    // query = this.find(query);

    return this.sanitizeOutput({ data, meta }, ctx);
  },
}));
