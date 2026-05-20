
export default function Card() {

     const data = [
    { day: "Rab, 20 Mei 2026", price: "IDR 4.156.740" },
    { day: "Kam, 21 Mei 2026", price: "IDR 3.595.606", active: true },
    { day: "Jum, 22 Mei 2026", price: "IDR 3.510.124" },
    { day: "Sab, 23 Mei 2026", price: "IDR 3.945.431" },
    { day: "Min, 24 Mei 2026", price: "IDR 3.510.124" },
    { day: "Sen, 25 Mei 2026", price: "IDR 3.510.124" },
    { day: "Sel, 26 Mei 2026", price: "IDR 3.961.423" },
    { day: "Rab, 27 Mei 2026", price: "IDR 3.510.124" },
  ];
  return (
 <div className="flex border border-gray-300 overflow-hidden w-fit mx-auto m-20">
      {data.map((item, index) => (
        <div
          key={index}
          className="relative px-4 py-3 border-r border-gray-300 min-w-[150px] bg-white"
        >
          <p className="text-gray-500 text-sm">{item.day}</p>
          <p className="font-bold text-xl">{item.price}</p>

          {item.active && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
          )}
        </div>
      ))}
    </div>
  );
}
