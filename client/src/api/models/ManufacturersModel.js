import request from '../request';

/** ****************************************
 * @async
 * @description Loads manufacturers
 * @returns {Array} cars
 */
export const getManufacturers = async (query) => {
  try {
    const result = await request({
      url: '/manufacturers',
    });
    if (result) {
      return result;
    }
    throw result;
  } catch (error) {
    throw error;
  }
};
