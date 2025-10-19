
import { useState } from "react"

export default function Switches() {
  const [switches, setSwitches] = useState({
    sample: false,
    primary: true,
    confirm: true,
  })

  const toggleSwitch = (key) => {
    setSwitches((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const Switch = ({ checked, onChange }) => (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
          checked ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  )

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-6">Switches</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">01. Sample Switch</span>
          <Switch checked={switches.sample} onChange={() => toggleSwitch("sample")} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">02. Primary Color Switch</span>
          <Switch checked={switches.primary} onChange={() => toggleSwitch("primary")} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">03. Confirm Color Switch</span>
          <Switch checked={switches.confirm} onChange={() => toggleSwitch("confirm")} />
        </div>
      </div>
    </div>
  )
}
