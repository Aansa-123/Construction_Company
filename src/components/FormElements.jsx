import { useState } from "react"
import { MapPin, Globe, ChevronDown, Check } from "lucide-react"

export default function FormElement() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    message: "",
    primaryColor: "#3B82F6",
    accentColor: "#10B981",
    secondaryColor: "#8B5CF6",
  })

  const [switches, setSwitches] = useState({
    sample: false,
    primary: true,
    confirm: true,
  })

  const [checkboxes, setCheckboxes] = useState({
    sample: false,
    primary: true,
    confirm: false,
    disabled: false,
    disabledActive: true,
  })

  const [selectedRadio, setSelectedRadio] = useState("confirm")
  const [selectedSelect, setSelectedSelect] = useState("english")

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const toggleSwitch = (key) => {
    setSwitches((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const toggleCheckbox = (key) => {
    if (key === "disabled") return
    setCheckboxes((prev) => ({ ...prev, [key]: !prev[key] }))
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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form Elements */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Form Element</h2>

            <form className="space-y-6">
              {/* Text Inputs */}
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-100 text-gray-700 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-100 text-gray-700 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-gray-100 text-gray-700 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-100 text-gray-700 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-100 text-gray-700 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* City Input with Icon */}
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleFormChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 text-gray-700 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Country Input with Icon */}
              <div className="relative">
                <Globe className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleFormChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 text-gray-700 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-100 text-gray-700 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Color Inputs */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">Primary color</label>
                <input
                  type="color"
                  name="primaryColor"
                  value={formData.primaryColor}
                  onChange={handleFormChange}
                  className="w-full h-12 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Accent color</label>
                <input
                  type="color"
                  name="accentColor"
                  value={formData.accentColor}
                  onChange={handleFormChange}
                  className="w-full h-12 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Secondary color</label>
                <input
                  type="color"
                  name="secondaryColor"
                  value={formData.secondaryColor}
                  onChange={handleFormChange}
                  className="w-full h-12 rounded-lg cursor-pointer"
                />
              </div>
            </form>
          </div>

          {/* Right Column - UI Components */}
          <div className="space-y-12">
            {/* Switches */}
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

            {/* Selectboxes */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Selectboxes</h3>
              <div className="relative">
                <select
                  value={selectedSelect}
                  onChange={(e) => setSelectedSelect(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                </select>
                <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Checkboxes */}
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
                  <Checkbox
                    checked={checkboxes.disabledActive}
                    onChange={() => toggleCheckbox("disabledActive")}
                    disabled
                  />
                  <span className="text-sm text-gray-600">05. Disabled Checkbox active</span>
                </div>
              </div>
            </div>

            {/* Radios */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Radios</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Radio
                    value="sample"
                    checked={selectedRadio === "sample"}
                    onChange={() => setSelectedRadio("sample")}
                  />
                  <span className="text-sm text-gray-600">01. Sample radio</span>
                </div>
                <div className="flex items-center gap-3">
                  <Radio
                    value="primary"
                    checked={selectedRadio === "primary"}
                    onChange={() => setSelectedRadio("primary")}
                    color="pink"
                  />
                  <span className="text-sm text-gray-600">02. Primary Color radio</span>
                </div>
                <div className="flex items-center gap-3">
                  <Radio
                    value="confirm"
                    checked={selectedRadio === "confirm"}
                    onChange={() => setSelectedRadio("confirm")}
                    color="black"
                  />
                  <span className="text-sm text-gray-600">03. Confirm Color radio</span>
                </div>
                <div className="flex items-center gap-3">
                  <Radio
                    value="disabled"
                    checked={selectedRadio === "disabled"}
                    onChange={() => setSelectedRadio("disabled")}
                    disabled
                  />
                  <span className="text-sm text-gray-600">04. Disabled radio</span>
                </div>
                <div className="flex items-center gap-3">
                  <Radio
                    value="disabledActive"
                    checked={selectedRadio === "disabledActive"}
                    onChange={() => setSelectedRadio("disabledActive")}
                    disabled
                    color="black"
                  />
                  <span className="text-sm text-gray-600">05. Disabled radio active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
