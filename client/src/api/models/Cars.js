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
      url: `/cars?${page ? `page=${page}&` : ''}${
        color ? `color=${color}&` : ''
      }${manufacturer ? `manufacturer=${manufacturer}&` : ''}${
        sort ? `sort=${sort}` : ''
      }`,
    });
    if (result) {
      return result;
    }
    throw result;
  } catch (error) {
    throw error;
  }
};

/** ****************************************
 * @async
 * @description Loads car
 * @returns {object} car
 */
export const getOne = async (carId) => {
  try {
    const result = await request({
      url: `/cars/${carId}`,
    });
    if (result) {
      return result;
    }
    throw result;
  } catch (error) {
    throw error;
  }
};
