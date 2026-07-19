
window.BLOB_CONFIG = {

  supabase: {
    projectUrl: "https://yhwpbhwirtgzgpbvuitn.supabase.co",  
    anonKey:    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlod3BiaHdpcnRnemdwYnZ1aXRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyOTAwNjgsImV4cCI6MjA5OTg2NjA2OH0.r2LKAttggH_MCt1GLt-Z8rTLg0NNHKoKYo4RzRSFqio",  
  },

  /* ---- 全体挙動 ---- */
  maxBlobs: 50,          // 画面上のblob最大数（超えると古い順に消滅）
  clickLimit: 1,         // 1ページ表示あたりのクリック回数（リロード/再訪問で復活。0で無制限）
  counter: true,         // 下部HUDバーの表示
  captionLeft: "Total Marks:",                     // 左下（改行のあとに # 数字 が付く）
  captionRight: "Let's click/tap\nto leave your mark", // 右下

  /* ---- 自分のblobのハイライト（テキスト選択風） ---- */
  selection: {
    bg: "#000000",       // ラベル背景色
    text: "#ffffff",     // ラベル文字色
  },

  /* ---- 初期表示blob（全ユーザー共通・固定座標 0..1 の正規化座標） ---- */
  seedBlobs: [
    {x:0.22,y:0.30,r:70},{x:0.35,y:0.42,r:38},{x:0.60,y:0.28,r:85},
    {x:0.72,y:0.55,r:44},{x:0.48,y:0.68,r:60},{x:0.15,y:0.72,r:30},
  ],

  /* ---- 描画パラメーター（v2 の P をそのままペーストOK） ----
   * ※ v2シミュレーターで調整済みの値を反映済み */
  params: {
    w: 1200, h: 700,          // 論理キャンバスサイズ（座標系）
    bg: "#ff2e74",
    c1: "#ffffff", c2: "#a356e1",
    useGrad: true, gradAng: 0,
    blur: 15, contrast: 60, opacity: 1,
    minR: 19, maxR: 113,
    speed: 50,                // 移動スピード（50 = 標準。周波数・振幅の両方に効く）
    pulse: 0.3,
    lnOn: true, lnDist: 300, lnW: 1, lnC: "#ffffff", lnA: 0.55,
    hudMarker: true, hudCoords: true, hudId: true,
    hudSize: 9, hudC: "#000000",
  },
};
