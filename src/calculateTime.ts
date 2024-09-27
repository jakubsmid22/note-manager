import moment from "moment";

const calculateTime = (time: number) => {
  return moment(time).fromNow();
};

export default calculateTime;
