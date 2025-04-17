const CustomPopover = ({ id }: { id: string }) => {
  return (
    <div className="tooltip [--trigger:click] " id={id}>
      <div className="tooltip-toggle">
        <button className="btn btn-square bg-red-500" aria-label="Popover Button">
          <span className="icon-[tabler--chevron-up]">Apasa</span>
        </button>
        <div className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="popover">
          <div className="tooltip-body bg-base-100 max-w-xs rounded-lg p-4 text-start">
            <span className="text-base-content text-lg font-medium">Popover title</span>
            <p className="text-base-content/80 text-base pt-4">
              This text serves as placeholder content for the popover, showcasing its overall look in the user
              interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPopover;
