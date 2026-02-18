const records = [
  { id: "REC-2026-0215-001", staff: "田中 太郎", type: "実技テスト", content: "TPN調製実技テスト", date: "2026-02-15", result: "合格", score: "92/100" },
  { id: "REC-2026-0214-001", staff: "佐藤 花子", type: "動画視聴", content: "クリーンベンチ操作 基本手順", date: "2026-02-14", result: "完了", score: "-" },
  { id: "REC-2026-0214-002", staff: "佐藤 花子", type: "動画視聴", content: "手指衛生・ガウンテクニック", date: "2026-02-14", result: "完了", score: "-" },
  { id: "REC-2026-0210-001", staff: "鈴木 一郎", type: "筆記テスト", content: "抗がん剤調製 安全手順テスト", date: "2026-02-10", result: "合格", score: "88/100" },
  { id: "REC-2026-0208-001", staff: "田中 太郎", type: "動画視聴", content: "閉鎖式器具の使用方法", date: "2026-02-08", result: "完了", score: "-" },
  { id: "REC-2026-0205-001", staff: "高橋 美咲", type: "筆記テスト", content: "無菌調剤基礎知識テスト", date: "2026-02-05", result: "不合格", score: "58/100" },
  { id: "REC-2026-0128-001", staff: "高橋 美咲", type: "動画視聴", content: "クリーンベンチ基本操作", date: "2026-01-28", result: "完了", score: "-" },
  { id: "REC-2026-0120-001", staff: "伊藤 健太", type: "動画視聴", content: "無菌操作の基本概念", date: "2026-01-20", result: "完了", score: "-" },
  { id: "REC-2026-0115-001", staff: "田中 太郎", type: "実技テスト", content: "抗がん剤調製実技（シクロフォスファミド）", date: "2026-01-15", result: "合格", score: "95/100" },
  { id: "REC-2026-0110-001", staff: "鈴木 一郎", type: "動画視聴", content: "TPN基本調製手順", date: "2026-01-10", result: "完了", score: "-" },
];

const resultStyle: Record<string, string> = {
  "合格": "bg-green-100 text-green-700",
  "完了": "bg-blue-100 text-blue-700",
  "不合格": "bg-red-100 text-red-700",
};

const typeStyle: Record<string, string> = {
  "動画視聴": "bg-purple-100 text-purple-700",
  "筆記テスト": "bg-yellow-100 text-yellow-700",
  "実技テスト": "bg-orange-100 text-orange-700",
};

export default function RecordsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">研修記録</h1>
          <p className="text-gray-600">さくら薬局 本店 — 全スタッフの研修履歴</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
            📥 CSV出力
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            📄 PDF出力（個別指導用）
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white">
          <option>全スタッフ</option>
          <option>田中 太郎</option>
          <option>佐藤 花子</option>
          <option>鈴木 一郎</option>
          <option>高橋 美咲</option>
          <option>伊藤 健太</option>
        </select>
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white">
          <option>全タイプ</option>
          <option>動画視聴</option>
          <option>筆記テスト</option>
          <option>実技テスト</option>
        </select>
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white">
          <option>全期間</option>
          <option>今月</option>
          <option>先月</option>
          <option>過去3ヶ月</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold">記録ID</th>
                <th className="text-left py-3 px-4 font-semibold">日付</th>
                <th className="text-left py-3 px-4 font-semibold">スタッフ</th>
                <th className="text-left py-3 px-4 font-semibold">種別</th>
                <th className="text-left py-3 px-4 font-semibold">内容</th>
                <th className="text-left py-3 px-4 font-semibold">スコア</th>
                <th className="text-left py-3 px-4 font-semibold">結果</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-400 font-mono text-xs">{r.id}</td>
                  <td className="py-3 px-4">{r.date}</td>
                  <td className="py-3 px-4 font-medium">{r.staff}</td>
                  <td className="py-3 px-4"><span className={`text-xs px-2 py-1 rounded-full font-medium ${typeStyle[r.type]}`}>{r.type}</span></td>
                  <td className="py-3 px-4">{r.content}</td>
                  <td className="py-3 px-4 text-gray-600">{r.score}</td>
                  <td className="py-3 px-4"><span className={`text-xs px-2 py-1 rounded-full font-medium ${resultStyle[r.result]}`}>{r.result}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500 flex items-center justify-between">
        <p>全 {records.length} 件を表示中</p>
        <p className="text-xs text-gray-400">※ PDF出力は個別指導対応用のフォーマットで出力されます</p>
      </div>
    </div>
  );
}
