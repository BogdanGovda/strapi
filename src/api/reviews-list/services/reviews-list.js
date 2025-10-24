'use strict';

/**
 * reviews-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reviews-list.reviews-list');
