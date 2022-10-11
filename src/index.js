'use strict';


module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {

  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    strapi.admin.services.permission.conditionProvider.registerMany([
      {
        displayName: 'Get access to task',
        name: 'get-access-to-task',
        plugin: 'admin',
        async handler(user) {
          const roles = user.roles.map(role => role.name);
          if (roles.includes("Manager"))
            return {$or : [
                { "author_user.id" : user.id},
                { "executor_user.id" : user.id},
                { "author_user.roles" : { $elemMatch: { name: "Ordinary Employee"}}}]}
          if (roles.includes("Ordinary Employee"))
            return {$or : [
                { "author_user.id" : user.id },
                { "executor_user.id" : user.id }]}
        }
      },
      {
        displayName: 'Is author or executor',
        name: 'is-author-or-executor',
        plugin: 'admin',
        async handler(user) {
          return { $or : [{ "author_user.id" : user.id }, { "executor_user.id" : user.id }]}
        }
      }
    ]);
  },
};
