const ToolTip = () => {
  return (
    <div className="tooltip">
      <button type="button" className="tooltip-toggle btn btn-square" aria-label="Tooltip">
        <span className="icon-[tabler--chevron-up]"></span>
      </button>
      <span className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
        <span className="tooltip-body">Tooltip on top</span>
      </span>
    </div>
  );
};

export default ToolTip;
