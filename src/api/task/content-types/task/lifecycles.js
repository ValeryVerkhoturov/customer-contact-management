'use strict'

module.exports = {

  async beforeCreate(event) {
    event.params.date_of_task_creation = new Date(Date.now()).toISOString()
    console.log(event.params.date_of_task_creation)
  },

  async beforeUpdate(event) {
    event.params.date_of_task_creation = new Date(Date.now()).toISOString()
    console.log(event.params.date_of_task_creation)
  },
};
