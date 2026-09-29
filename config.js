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
    pcFps: 24,            // PCのフレームレート
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

  /* ---- アートディレクション: LOW-BIT / SAND ----
   * 色は #hex / hsl() どちらでも可。基本トーンは S83 / L44 */
  art: {
    bg:   "hsl(228, 72%, 39%)",  // 背景（青）
    edge: "hsl(200,83%,44%)",  // blobの輪郭側（青寄り）
    core: "hsl(140,83%,44%)",  // blobの中心＝出現位置（緑）
    hot:  "#E73600",           // キーカラー：座標が密集した場所
    pixel: 4,          // ドット1マスの大きさ（論理px。1200幅で150マス）大きいほど粗い
    steps: 8,          // 青→緑の階調数（少ないほどロービット）
    scatter: 0.6,      // 輪郭の外へ砂粒が散る広さ（0.1〜1.0）
    shimmer: 0.25,     // 粒のざわつき量（0=静止ディザ〜1=毎回ランダム）
    grainFps: 6,      // 粒がざわつく速さ（回/秒）
    hotRadius: 90,     // 密集判定の半径（論理px）
    hotMin: 1.5,       // この密集度からオレンジが混ざり始める（≒近くに2〜3個）
    hotMax: 3.2,       // この密集度で完全にオレンジ（≒近くに4個前後）
    hotSpill: 0.2,     // 盛り上がり周辺の背景にも散るオレンジ粒の量（0で無し）
    bgNoise: 0.2,      // 背景に走るグリッチノイズ（グレー）の比率（0〜1）
    noiseColor: null,  // null=背景色の色相から自動生成（青なら #7682B2 付近）。色を直接指定も可
    noiseFps: 8,       // ノイズの横線が切り替わる速さ（回/秒）
  },

  /* ---- 盛り上がり（オレンジ箇所）に高速で出る文字 ---- */
  hotLetters: {
    on: true,
    interval: [0.04, 0.18], // 出現間隔（秒）。オレンジ箇所のblobが多いほどさらに短くなる
    life: [0.15, 0.5],      // 1文字の表示時間（秒）
    max: 30,                // 同時に表示する最大数
  },

  /* ---- クライマックス ----
   * オレンジ箇所のblobが minBlobs 個以上の状態が holdSec 秒続くと発動。
   * durationSec 秒間、画面全体に長方形グリッチ＋青⇔オレンジ反転＋文字の点滅。
   * 終了後は最新 keep 件だけ残し、ほかは四方八方に飛び散って hideSec 秒後に戻ってくる */
  climax: {
    on: true,
    minBlobs: 10,
    holdSec: 3,
    durationSec: 2,
    keep: 8,
    scatterSec: 1.2,     // 飛び散る／戻ってくるアニメーションの秒数
    hideSec: 30,         // 飛び散ったblobが画面に出ない秒数
    cooldownSec: 10,     // 次のクライマックスまでの最短間隔（秒）
    letters: 26,         // 点滅する文字の数
    letterColors: ["#ffffff", "#000000"],
  },

  /* ---- 別レイヤー: ランダムに現れる文字 ---- */
  letters: {
    on: true,
    chars: "VYNE",
    color: "#ffffff",
    size: "clamp(28px,4.2vw,64px)",
    interval: [0.2, 1.0],  // 次の文字が出るまでの秒数（最小, 最大）
    life: [1.2, 3.5],      // 1文字が表示される秒数（最小, 最大）
    max: 22,                // 同時に表示する最大数
  },

  /* ---- 描画パラメーター（形・動き・線・HUD） ---- */
  params: {
    w: 1200, h: 700,
    blur: 15, contrast: 60, opacity: 1,
    minR: 12, maxR: 82,
    speed: 50,
    pulse: 0.3,
    lnOn: true, lnDist: 300, lnW: 1, lnC: "#ffffff", lnA: 0.55,
    hudMarker: true, hudCoords: true, hudId: true,
    hudSize: 9, hudC: "#000000",
  },
};
