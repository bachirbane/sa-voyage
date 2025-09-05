import React from "react";

function Kaaba() {
  return (
    <div className="p-10 bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 rounded-3xl shadow-xl text-gray-800 leading-relaxed space-y-6 max-w-4xl mx-auto my-10">
      <h2 className="text-4xl font-extrabold text-center text-emerald-800 mb-4">
        The Kaaba
      </h2>

      <p>
        The Kaaba is a cube-shaped building covered with a black silk cloth
        called the <strong>Kiswah</strong>, located in the center of the Sacred
        Mosque (<em>al-Masjid al-Haram</em>) in Mecca. It is the
        <strong> holiest site in Islam</strong>, and the{" "}
        <strong>Black Stone</strong> is embedded in its southeastern corner.
      </p>

      <h3 className="text-2xl font-semibold text-emerald-700 mt-6">
        Religious Importance
      </h3>
      <p>
        Muslims around the world face the Kaaba during their
        <strong> daily prayers</strong>. Pilgrims perform{" "}
        <strong>seven circuits</strong> around the Kaaba during the ritual of{" "}
        <em>Tawaf</em>, which is central to both <strong>Hajj</strong> and
        <strong> Umrah</strong>.
      </p>

      <h3 className="text-2xl font-semibold text-emerald-700 mt-6">
        Origins and Symbolism
      </h3>
      <p>
        Originally, the Kaaba was a <strong>pre-Islamic sanctuary</strong>{" "}
        housing numerous idols. After Prophet Muhammad’s conquest of Mecca in
        630 CE, all idols were removed, and it was dedicated solely to God.
      </p>

      <h3 className="text-2xl font-semibold text-emerald-700 mt-6">
        Etymology
      </h3>
      <p>
        The word Kaaba literally means “<strong>cube</strong>.” It is mentioned
        in the Quran and is also referred to as the “House of God.”
      </p>

      <h3 className="text-2xl font-semibold text-emerald-700 mt-6">
        Historical Overview
      </h3>
      <p>
        References to the Kaaba date back to the 6th century. After being
        damaged by floods around 590 CE, it was rebuilt by the Quraysh tribe,
        with Prophet Muhammad himself helping in its reconstruction as a young
        man.
      </p>

      <h3 className="text-2xl font-semibold text-emerald-700 mt-6">
        Islamic Era
      </h3>
      <p>
        Initially, Muslim prayers were directed toward Jerusalem. Later, the
        Qibla (prayer direction) was changed to face Mecca, making the Kaaba the
        center of Islamic worship.
      </p>

      <h3 className="text-2xl font-semibold text-emerald-700 mt-6">
        Destruction and Reconstruction
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>684: Damaged by fire during the Umayyad siege</li>
        <li>692: Rebuilt by Ibn al-Zubayr</li>
        <li>930: Black Stone stolen by the Qarmatians</li>
        <li>1630: Restored by the Ottomans after flooding</li>
        <li>1916: Damaged during the Arab Revolt</li>
      </ul>

      <p>
        Despite numerous challenges, the Kaaba remains the{" "}
        <strong>spiritual heart of Islam</strong>, attracting millions of
        pilgrims every year.
      </p>
    </div>
  );
}

export default Kaaba;
