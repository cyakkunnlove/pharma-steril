const categories = ["すべて", "クリーンベンチ操作", "TPN調製", "抗がん剤調製", "眼科用製剤", "注射剤混合"];

const videos = [
  { title: "クリーンベンチの基本操作と清掃手順", category: "クリーンベンチ操作", duration: "12:30", level: "基礎" },
  { title: "手指衛生とガウンテクニック", category: "クリーンベンチ操作", duration: "8:45", level: "基礎" },
  { title: "クリーンベンチ内での無菌操作の基本", category: "クリーンベンチ操作", duration: "15:20", level: "基礎" },
  { title: "TPN（高カロリー輸液）基本調製手順", category: "TPN調製", duration: "18:00", level: "中級" },
  { title: "微量元素・ビタミン混合の注意点", category: "TPN調製", duration: "10:15", level: "中級" },
  { title: "TPN調製時の配合変化チェック", category: "TPN調製", duration: "14:30", level: "上級" },
  { title: "抗がん剤調製の安全手順（閉鎖式器具）", category: "抗がん剤調製", duration: "20:00", level: "上級" },
  { title: "抗がん剤曝露対策と防護具の正しい着脱", category: "抗がん剤調製", duration: "11:45", level: "中級" },
  { title: "シクロフォスファミド調製の実演", category: "抗がん剤調製", duration: "16:30", level: "上級" },
  { title: "無菌性点眼液の調製方法", category: "眼科用製剤", duration: "13:00", level: "中級" },
  { title: "注射剤混合調製の基本操作", category: "注射剤混合", duration: "9:50", level: "基礎" },
  { title: "インスリン製剤の取り扱いと混合注意点", category: "注射剤混合", duration: "11:20", level: "中級" },
];

const levelColor: Record<string, string> = {
  "基礎": "bg-green-100 text-green-700",
  "中級": "bg-yellow-100 text-yellow-700",
  "上級": "bg-red-100 text-red-700",
};

export default function VideosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">手技動画ライブラリ</h1>
      <p className="text-gray-600 mb-8">無菌調剤に必要な手技を動画で学べます</p>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c, i) => (
          <button key={c} className={`px-4 py-2 rounded-full text-sm font-medium transition ${i === 0 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v) => (
          <div key={v.title} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer group">
            <div className="aspect-video bg-gray-100 flex items-center justify-center relative">
              <div className="w-14 h-14 bg-blue-600/80 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition">
                <span className="text-white text-2xl ml-1">▶</span>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{v.duration}</span>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-500">{v.category}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${levelColor[v.level]}`}>{v.level}</span>
              </div>
              <h3 className="font-medium text-sm leading-snug">{v.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
