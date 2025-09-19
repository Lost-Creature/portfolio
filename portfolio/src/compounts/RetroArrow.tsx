const RetroArrow = ({x,y,z}) => {
  return (
    <div className={`absolute w-full flex items-center justify-center bg-transparent ${z} ${y} ${x}`}>
      <div className="animate-[move-arrow_1s_ease-in-out_infinite_alternate] flex items-center gap-2">
        {/* Shaft – Retro blocky chunks */}
        <div className="h-12 w-34 bg-red-700 shadow-[0_0_12px_#ff1a1a]"></div>
    

        {/* Head – Triangle */}
        <div className="w-0 h-0  border-t-[48px] border-b-[48px] border-l-[80px] border-t-transparent border-b-transparent border-l-red-700  bg-transparent bg-none"></div>
      </div>
    </div>
  );
};

export default RetroArrow;
