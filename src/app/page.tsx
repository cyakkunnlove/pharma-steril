import Link from "next/link";

const features = [
  { icon: "🎬", title: "手技動画ライブラリ", desc: "クリーンベンチ操作からTPN調製まで、無菌調剤の全手技を動画で学べます。最新ガイドラインに準拠。" },
  { icon: "📋", title: "研修記録・証跡管理", desc: "誰が・いつ・何を学んだかを自動記録。個別指導時にワンクリックでPDF出力可能。" },
  { icon: "👥", title: "スタッフ管理", desc: "薬局スタッフ全員の研修進捗をダッシュボードで一覧管理。未受講アラート機能付き。" },
  { icon: "📑", title: "ガイドライン配信", desc: "厚労省・日薬の最新通知を自動配信。改定時の対応漏れを防止。" },
];

const plans = [
  { name: "ライト", price: "2,980", desc: "小規模薬局向け", features: ["スタッフ5名まで", "基本手技動画（10本）", "研修記録管理", "月次レポート"], cta: false },
  { name: "スタンダード", price: "4,980", desc: "中規模薬局に最適", features: ["スタッフ15名まで", "全手技動画（50本以上）", "研修記録管理＋PDF出力", "定期テスト・合格証発行", "ガイドライン配信"], cta: true },
  { name: "プレミアム", price: "9,800", desc: "複数店舗・大規模薬局", features: ["スタッフ無制限", "全機能利用可", "複数店舗管理", "カスタムテスト作成", "専任サポート", "APIアクセス"], cta: false },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
            薬局向け無菌調剤研修プラットフォーム
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            無菌調剤の研修を、
            <br />
            <span className="text-blue-600">確実に記録する。</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            手技動画の視聴から研修記録の管理まで、ファーマステリルひとつで完結。
            <br className="hidden sm:block" />
            個別指導にも自信を持って対応できます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#pricing" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/25">
              料金プランを見る
            </Link>
            <Link href="/videos" className="bg-white text-gray-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition border border-gray-300">
              動画を見てみる
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">主な機能</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">無菌調剤に必要な研修・管理をワンストップで提供</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">料金プラン</h2>
          <p className="text-gray-600 text-center mb-12">薬局単位の月額サブスクリプション（税込）</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((p) => (
              <div key={p.name} className={`bg-white rounded-2xl p-8 ${p.cta ? "ring-2 ring-blue-600 shadow-xl relative" : "border border-gray-200"}`}>
                {p.cta && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">人気No.1</div>}
                <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">¥{p.price}</span>
                  <span className="text-gray-500 text-sm">/月</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="text-blue-600 mt-0.5">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium transition ${p.cta ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                  無料トライアル開始
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">まずは14日間、無料でお試しください</h2>
          <p className="text-gray-600 mb-8">クレジットカード不要。すべてのプランで無料トライアルをご利用いただけます。</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/25">
            無料トライアルを始める
          </button>
        </div>
      </section>
    </>
  );
}
