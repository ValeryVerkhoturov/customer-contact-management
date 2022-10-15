'use strict'

module.exports = {

  async beforeCreate(event) {
    event.params.data.author_user = event.params.data.createdBy;
    event.params.data.date_of_task_creation = new Date(Date.now()).toISOString();

    if (event.params.data.is_finished &&
        !event.params.data.hasOwnProperty('execution_actual_date_to') &&
        event.params.data.execution_actual_date_to == null) {
      event.params.data.execution_actual_date_to = new Date(Date.now()).toISOString()
    }
  },

  async beforeUpdate(event) {
    if (event.params.data.is_finished &&
        !event.params.data.hasOwnProperty('execution_actual_date_to') &&
        event.params.data.execution_actual_date_to == null) {
      event.params.data.execution_actual_date_to = new Date(Date.now()).toISOString()
    }
  }

};
