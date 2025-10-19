import React from 'react'

function Map() {
  return (
   <>
    <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="Faisalabad Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34365.35072278938!2d73.04944649438369!3d31.399416909706588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Pakistan!5e1!3m2!1sen!2s!4v1759840129110!5m2!1sen!2s"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
   </>
  )
}

export default Map