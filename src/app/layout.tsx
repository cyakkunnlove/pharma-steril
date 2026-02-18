import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ファーマステリル | 無菌調剤研修プラットフォーム",
  description: "薬局向け無菌調剤の研修動画・記録管理プラットフォーム",
};

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PS</span>
            </div>
            <span className="font-bold text-xl text-gray-900">ファーマステリル</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/videos" className="text-gray-600 hover:text-blue-600 transition text-sm font-medium">動画一覧</Link>
            <Link href="/equipment" className="text-gray-600 hover:text-blue-600 transition text-sm font-medium">物品リスト</Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition text-sm font-medium">ダッシュボード</Link>
            <Link href="/#pricing" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">無料で始める</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">PS</span>
            </div>
            <span className="font-semibold text-white">ファーマステリル</span>
          </div>
          <p className="text-sm">© 2026 PharmaSteril Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
