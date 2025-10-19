
import { useState } from "react"

export default function Radios() {
  const [selected, setSelected] = useState("confirm")

  const Radio = ({ value, checked, onChange, disabled = false, color = "gray" }) => (
    <button
      onClick={onChange}
      disabled={disabled}
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
        checked
          ? color === "pink"
            ? "bg-pink-500 border-pink-500"
            : color === "black"
              ? "bg-black border-black"
              : "bg-gray-400 border-gray-400"
          : "bg-white border-gray-300"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      {checked && <div className="w-2 h-2 bg-white rounded-full" />}
    </button>
  )

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-6">Radios</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Radio value="sample" checked={selected === "sample"} onChange={() => setSelected("sample")} />
          <span className="text-sm text-gray-600">01. Sample radio</span>
        </div>
        <div className="flex items-center gap-3">
          <Radio
            value="primary"
            checked={selected === "primary"}
            onChange={() => setSelected("primary")}
            color="pink"
          />
          <span className="text-sm text-gray-600">02. Primary Color radio</span>
        </div>
        <div className="flex items-center gap-3">
          <Radio
            value="confirm"
            checked={selected === "confirm"}
            onChange={() => setSelected("confirm")}
            color="black"
          />
          <span className="text-sm text-gray-600">03. Confirm Color radio</span>
        </div>
        <div className="flex items-center gap-3">
          <Radio value="disabled" checked={selected === "disabled"} onChange={() => setSelected("disabled")} disabled />
          <span className="text-sm text-gray-600">04. Disabled radio</span>
        </div>
        <div className="flex items-center gap-3">
          <Radio
            value="disabledActive"
            checked={selected === "disabledActive"}
            onChange={() => setSelected("disabledActive")}
            disabled
            color="black"
          />
          <span className="text-sm text-gray-600">05. Disabled radio active</span>
        </div>
      </div>
    </div>
  )
}
