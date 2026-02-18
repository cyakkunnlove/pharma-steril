import Link from "next/link";

const stats = [
  { label: "研修完了率", value: "78%", sub: "全スタッフ平均" },
  { label: "登録スタッフ", value: "12名", sub: "アクティブ" },
  { label: "今月の研修", value: "34件", sub: "前月比 +8件" },
  { label: "合格証発行", value: "8件", sub: "今月" },
];

const staff = [
  { name: "田中 太郎", role: "管理薬剤師", progress: 95, lastTraining: "2026-02-15" },
  { name: "佐藤 花子", role: "薬剤師", progress: 82, lastTraining: "2026-02-14" },
  { name: "鈴木 一郎", role: "薬剤師", progress: 68, lastTraining: "2026-02-10" },
  { name: "高橋 美咲", role: "薬剤師", progress: 45, lastTraining: "2026-01-28" },
  { name: "伊藤 健太", role: "薬剤助手", progress: 30, lastTraining: "2026-01-20" },
];

const recentRecords = [
  { staff: "田中 太郎", content: "TPN調製実技テスト", date: "2026-02-15", result: "合格" },
  { staff: "佐藤 花子", content: "クリーンベンチ操作 動画視聴", date: "2026-02-14", result: "完了" },
  { staff: "鈴木 一郎", content: "抗がん剤調製 安全手順テスト", date: "2026-02-10", result: "合格" },
  { staff: "佐藤 花子", content: "手指衛生・ガウンテクニック 動画視聴", date: "2026-02-14", result: "完了" },
  { staff: "高橋 美咲", content: "クリーンベンチ基本操作 動画視聴", date: "2026-01-28", result: "完了" },
];

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">ダッシュボード</h1>
          <p className="text-gray-600">さくら薬局 本店</p>
        </div>
        <Link href="/dashboard/records" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          研修記録を見る
        </Link>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-sm text-gray-500 mb-1">{s.label}</p>
            <p className="text-3xl font-bold text-gray-900">{s.value}</p>
            <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Staff */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-semibold text-lg mb-4">スタッフ研修進捗</h2>
          <div className="space-y-4">
            {staff.map((s) => (
              <div key={s.name} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                  {s.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <span className="font-medium text-sm">{s.name}</span>
                      <span className="text-gray-400 text-xs ml-2">{s.role}</span>
                    </div>
                    <span className="text-sm font-medium">{s.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${s.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Records */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-semibold text-lg mb-4">最近の研修記録</h2>
          <div className="space-y-3">
            {recentRecords.map((r, i) => (
              <div key={i} className="flex items-start justify-between py-2 border-b border-gray-50 last:border-0">
                <div>
                  <p className="text-sm font-medium">{r.content}</p>
                  <p className="text-xs text-gray-400">{r.staff} · {r.date}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium shrink-0 ${r.result === "合格" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                  {r.result}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
