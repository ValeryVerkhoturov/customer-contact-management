'use strict';

/**
 * task service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task.task', ({ strapi }) => ({
  async find(...args) {
    console.log('find', args);
    let { user } = args[args.length - 1];
    const { id : contactPersonId } = await strapi.db.query('api::contact-pearson.contact-pearson').findOne({
      select: [],
      where: { user : user },
    });
    console.log("contactPersonId", contactPersonId);
    const organizations = await strapi.db.query('api::organization.organization').findMany({
      select: [],
      populate: ['contact_pearsons'],
    });
    console.log("orgId", organizations);
    for (let organization of organizations) {
      if (organization.contact_pearsons.find(contactPerson => contactPerson.id === contactPersonId)) {
        console.log("orgId", organization.id);
        let tasks =  await strapi.db.query('api::task.task').findMany(
          { where: { organization : organization.id } });
        console.log('tasks', tasks.filter(task => task.hasOwnProperty('publishedAt')));
        return tasks.filter(task => task.hasOwnProperty('publishedAt'));
      }
    }
  },
}));
