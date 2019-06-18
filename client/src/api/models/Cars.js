import request from '../request';

/** ****************************************
 * @async
 * @description Loads cars
 * @returns {Array} cars
 */
export const paginate = async (query) => {
  try {
    const {
      page, color, manufacturer, sort,
    } = query;
    const result = await request({
      url: `/cars?page=${page}&color=${color}&manufacturer=${manufacturer}&sort=${sort}`,
    });
    if (result) {
      return result;
    }
    throw result;
  } catch (error) {
    throw error;
  }
};
