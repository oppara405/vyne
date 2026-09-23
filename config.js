/* ============================================================
 * BLOB NETWORK v3 (Supabase Edition) — 設定ファイル
 * このファイルだけ編集すれば見た目・挙動・接続先を変更できます。
 * ============================================================ */
window.BLOB_CONFIG = {

  supabase: {
    projectUrl: "https://yhwpbhwirtgzgpbvuitn.supabase.co",  
    anonKey:    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlod3BiaHdpcnRnemdwYnZ1aXRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyOTAwNjgsImV4cCI6MjA5OTg2NjA2OH0.r2LKAttggH_MCt1GLt-Z8rTLg0NNHKoKYo4RzRSFqio",  
  },

  /* ---- 全体挙動 ---- */
  maxBlobs: 50,          // 画面上のblob最大数（ハード上限50）
                         // 初期表示 = min(Total Marks, maxBlobs, 50)。超過後は新規クリックが最古を押し出す
  clickLimit: 1,         // 1ページ表示あたりのクリック回数（リロードで復活。0で無制限）
  counter: true,         // 下部HUDバーの表示
  countOffset: -1,       // カウンター表示の補正（#00起点に合わせて-1。実数表示なら0）
  captionLeft: "Total Marks:",
  captionRight: "Let's click/tap\nto leave your mark",

  /* ---- 初期表示 ----
   * initialBlobs: null → Total Marks（DBの累計）の数だけ表示（従来の挙動）
   *               数値 → Total Marksに関係なく常にその数で表示（上限は maxBlobs / mobileMaxBlobs）
   * Supabase未接続かつ initialBlobs:null のときは seedBlobs を表示 */
  initial: {
    initialBlobs: null,
  },

  /* ---- フレームレート / モバイル軽量モード ----
   * fps を下げるとコマ送り風（アナログ感）になる。1〜60。60以上は制限なし */
  perf: {
    pcFps: 60,            // PCのフレームレート
    mobileFps: 24,        // モバイルのフレームレート
    mobileBlurScale: 0.5, // モバイルでのブラー弱体化（0.5〜1）
    mobileMaxBlobs: 15,   // モバイルでの表示blob上限
  },

  /* ---- 自分のblobのハイライト（テキスト選択風） ---- */
  selection: {
    bg: "#000000",
    text: "#ffffff",
  },

  /* ---- フォールバック表示blob（Supabase未接続時 or Total Marks=0のときのみ） ---- */
  seedBlobs: [
    {x:0.22,y:0.30,r:70},{x:0.35,y:0.42,r:38},{x:0.60,y:0.28,r:85},
    {x:0.72,y:0.55,r:44},{x:0.48,y:0.68,r:60},{x:0.15,y:0.72,r:30},
  ],

  /* ---- 描画パラメーター ---- */
  params: {
    w: 1200, h: 700,
    bg: "#ff2e74",
    c1: "#ffffff", c2: "#a356e1",
    useGrad: true, gradAng: 0,
    blur: 15, contrast: 60, opacity: 1,
    minR: 12, maxR: 82,
    speed: 50,
    pulse: 0.3,
    lnOn: true, lnDist: 300, lnW: 1, lnC: "#ffffff", lnA: 0.55,
    hudMarker: true, hudCoords: true, hudId: true,
    hudSize: 9, hudC: "#000000",
  },
};
