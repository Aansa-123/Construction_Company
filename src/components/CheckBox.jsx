

import { useState } from "react"
import { Check } from "lucide-react"

export default function Checkbox() {
  const [checkboxes, setCheckboxes] = useState({
    sample: false,
    primary: true,
    confirm: false,
    disabled: false,
    disabledActive: true,
  })

  const toggleCheckbox = (key) => {
    if (key === "disabled") return
    setCheckboxes((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const Checkbox = ({ checked, onChange, disabled = false }) => (
    <button
      onClick={onChange}
      disabled={disabled}
      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
        checked ? "bg-pink-500 border-pink-500" : "bg-white border-gray-300"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      {checked && <Check className="w-3 h-3 text-white" />}
    </button>
  )

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-6">Checkboxes</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Checkbox checked={checkboxes.sample} onChange={() => toggleCheckbox("sample")} />
          <span className="text-sm text-gray-600">01. Sample Checkbox</span>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox checked={checkboxes.primary} onChange={() => toggleCheckbox("primary")} />
          <span className="text-sm text-gray-600">02. Primary Color Checkbox</span>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox checked={checkboxes.confirm} onChange={() => toggleCheckbox("confirm")} />
          <span className="text-sm text-gray-600">03. Confirm Color Checkbox</span>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox checked={checkboxes.disabled} onChange={() => toggleCheckbox("disabled")} disabled />
          <span className="text-sm text-gray-600">04. Disabled Checkbox</span>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox checked={checkboxes.disabledActive} onChange={() => toggleCheckbox("disabledActive")} disabled />
          <span className="text-sm text-gray-600">05. Disabled Checkbox active</span>
        </div>
      </div>
    </div>
  )
}
