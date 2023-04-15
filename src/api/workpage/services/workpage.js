'use strict';

/**
 * workpage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workpage.workpage');
