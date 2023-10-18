import axios from "axios";

export const increaseCounter = async () => {

  const resp = await axios({
    method: 'post',
    url: '/api',
    data: { instanceID: `${process.env.REACT_APP_INSTANCE_ID}` }
  });
  return resp.data;
};