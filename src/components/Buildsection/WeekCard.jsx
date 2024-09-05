const WeekCard = ({ imgUrl }) => {
  return (
    <div>
      <img
        src={imgUrl}
        width={350}
        alt=""
        className="rounded-xl shadow-2xl shadow-blue-500/20 "
      />
    </div>
  );
};

export default WeekCard;
