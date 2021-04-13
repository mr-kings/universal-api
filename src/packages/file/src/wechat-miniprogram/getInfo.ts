import {
  GetInfoResponseData,
  GetInfoOptions,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getInfo = normalize.getInfo((options: GetInfoOptions) => {
  const { filePath, success, fail, complete } = options;
  wx.getFileInfo({
    filePath,
    success(res: GetInfoResponseData) {
      success && success(res);
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    },
  });
}, CONTAINER_NAME.WECHAT);

export default getInfo;
