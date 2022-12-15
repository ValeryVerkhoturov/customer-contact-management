'use strict';

const {getService, sanitize} = require("@strapi/plugin-users-permissions/server/utils");
/**
 * task controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const sanitizeOutput = (task) => {
  let { publishedAd, ...sanitizedTask} = task;
  return sanitizedTask;
};

module.exports = createCoreController('api::task.task', ({ strapi }) => ({
  async find(ctx) {
    let { user } = ctx.state;
    const { id : contactPersonId } = await strapi.db.query('api::contact-pearson.contact-pearson').findOne({
      select: [],
      where: { user : user },
    });
    const organizations = await strapi.db.query('api::organization.organization').findMany({
      select: [],
      populate: ['contact_pearsons'],
    });
    for (let organization of organizations) {
      if (organization.contact_pearsons.find(contactPerson => contactPerson.id === contactPersonId)) {
        let tasks =  await strapi.db.query('api::task.task').findMany(
          { where: { organization : organization.id, publishedAt : { $not : null } }});
        return { data: tasks.map(task => sanitizeOutput(task)), meta: { count: tasks.length } };
      }
    }
  },
}));
