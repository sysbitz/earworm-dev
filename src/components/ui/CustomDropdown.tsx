import React, { useState } from "react";

interface CustomDropdownProps {
  options: string[];
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="relative mt-1">
      <button
        type="button"
        className="w-full rounded-[20px] px-5 py-4 text-white text-[16px] font-medium geist text-left focus:outline-none border-none shadow-none"
        onClick={() => setOpen((v) => !v)}
        style={{ borderRadius: "20px", background: '#3b3b3b' }}
      >
        {selected.split('|')[0]}
        {selected.includes('|') && (
          <div className="text-[13px] text-gray-400 font-normal mt-1">{selected.split('|')[1]}</div>
        )}
      </button>
      {open && (
        <div className="absolute left-0 right-0 mt-2 rounded-[20px] py-2 z-50" style={{ borderRadius: "20px", background: '#252525' }}>
          {options.map((opt) => (
            <div
              key={opt}
              className="px-5 py-3 text-white text-[16px] geist cursor-pointer hover:bg-[#191919] transition-all"
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
            >
              <div>{opt.split('|')[0]}</div>
              {opt.includes('|') && (
                <div className="text-[13px] text-gray-400 font-normal mt-1">{opt.split('|')[1]}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
