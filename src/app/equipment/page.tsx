const equipment = [
  { name: "クリーンベンチ（垂直層流方式）", category: "設備", spec: "クラス100（ISO 5）", supplier: "日本エアーテック", note: "年1回のHEPAフィルター交換推奨" },
  { name: "安全キャビネット（クラスIIB2）", category: "設備", spec: "JIS K 3800準拠", supplier: "日本エアーテック", note: "抗がん剤調製時必須" },
  { name: "ディスポーザブルシリンジ（各サイズ）", category: "器具", spec: "1mL/5mL/10mL/20mL/50mL", supplier: "テルモ", note: "ルアーロック式推奨" },
  { name: "フィルターニードル（5μm）", category: "器具", spec: "18G×1.5インチ", supplier: "テルモ", note: "アンプルからの吸引時使用" },
  { name: "閉鎖式薬物移送システム（CSTD）", category: "器具", spec: "PhaSeal/ChemoClave", supplier: "日本ベクトン・ディッキンソン", note: "抗がん剤調製時必須" },
  { name: "無菌手袋（パウダーフリー）", category: "防護具", spec: "ラテックスまたはニトリル", supplier: "各社", note: "二重装着推奨" },
  { name: "アイソレーションガウン", category: "防護具", spec: "不織布製・袖口ゴム入り", supplier: "各社", note: "使い捨てタイプ" },
  { name: "N95マスク", category: "防護具", spec: "NIOSH認定品", supplier: "3M", note: "抗がん剤調製時" },
  { name: "ゴーグル/フェイスシールド", category: "防護具", spec: "飛散防止型", supplier: "各社", note: "抗がん剤調製時" },
  { name: "消毒用エタノール（70%）", category: "消毒剤", spec: "500mL スプレーボトル", supplier: "健栄製薬", note: "クリーンベンチ清拭用" },
  { name: "イソプロパノール（70%）", category: "消毒剤", spec: "500mL", supplier: "各社", note: "代替消毒剤" },
  { name: "ポビドンヨード消毒液", category: "消毒剤", spec: "10%", supplier: "明治", note: "ゴム栓消毒用" },
  { name: "滅菌済みIVバッグ", category: "資材", spec: "各容量", supplier: "テルモ/大塚製薬", note: "TPN調製用" },
  { name: "輸液フィルター（0.22μm）", category: "資材", spec: "インラインフィルター", supplier: "ポール", note: "最終フィルトレーション用" },
  { name: "ケモセーフティスピルキット", category: "安全備品", spec: "抗がん剤飛散対応", supplier: "各社", note: "緊急時対応用・常備必須" },
];

const categoryColor: Record<string, string> = {
  "設備": "bg-blue-100 text-blue-700",
  "器具": "bg-purple-100 text-purple-700",
  "防護具": "bg-orange-100 text-orange-700",
  "消毒剤": "bg-green-100 text-green-700",
  "資材": "bg-gray-100 text-gray-700",
  "安全備品": "bg-red-100 text-red-700",
};

export default function EquipmentPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">必要物品リスト</h1>
      <p className="text-gray-600 mb-8">無菌調剤に必要な設備・器具・消耗品の一覧</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold">品名</th>
              <th className="text-left py-3 px-4 font-semibold">カテゴリ</th>
              <th className="text-left py-3 px-4 font-semibold">規格・仕様</th>
              <th className="text-left py-3 px-4 font-semibold">主要メーカー</th>
              <th className="text-left py-3 px-4 font-semibold">備考</th>
            </tr>
          </thead>
          <tbody>
            {equipment.map((e) => (
              <tr key={e.name} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{e.name}</td>
                <td className="py-3 px-4"><span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColor[e.category]}`}>{e.category}</span></td>
                <td className="py-3 px-4 text-gray-600">{e.spec}</td>
                <td className="py-3 px-4 text-gray-600">{e.supplier}</td>
                <td className="py-3 px-4 text-gray-500">{e.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
