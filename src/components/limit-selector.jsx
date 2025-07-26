const LimitSelector = ({ limit, setLimit }) => {
  return (
    <select
      className="px-4 py-2 text-sm rounded-md border border-gray-300 shadow-sm "
      value={limit}
      onChange={(e) => setLimit(e.target.value)}
    >
      <option value="5">Top 5</option>
      <option value="10">Top 10</option>
      <option value="20">Top 20</option>
      <option value="50">Top 50</option>
    </select>
  );
};

export default LimitSelector;
