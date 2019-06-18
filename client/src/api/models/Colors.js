import request from '../request';

/** ****************************************
 * @async
 * @description Loads colors
 * @returns {Array} cars
 */
export const getColors = async (query) => {
  try {
    const result = await request({
      url: '/colors',
    });
    if (result) {
      return result;
    }
    throw result;
  } catch (error) {
    throw error;
  }
};
