---
name: Flight Board
description: 桃園機場即時航班看板（手機橫放全螢幕）。兩套主題：fids（藍板，仿機場 LCD 看板）與 flap（翻牌，仿 Solari 機械翻牌）。字級以 rem 定義，根字級由畫面尺寸動態計算。
colors:
  # 共用語意
  primary: "#1D4ED8"          # 主色：選中分頁、亮列
  on-primary: "#FFFFFF"
  accent: "#FFD166"           # TPE 金：我的航班、主要按鈕
  on-accent: "#0B1A3F"
  status-delay: "#F59F00"     # 延遲（膠囊底）
  on-status-delay: "#1A1300"
  status-cancel: "#C92A2A"    # 取消（膠囊底）
  on-status-cancel: "#FFFFFF"
  # fids 藍板
  fids-bg: "#06143A"
  fids-header: "#EAF2FF"      # 表頭淺底（漸層起點）
  fids-header-2: "#CFE0FB"    # 表頭漸層終點
  on-fids-header: "#0B2A6F"
  fids-tab: "#BFD5FA"         # 未選分頁
  fids-row-a: "#0B2366"       # 斑馬紋深列
  fids-row-b: "#1D4ED8"       # 斑馬紋亮列（同 primary）
  on-fids-row: "#FFFFFF"
  fids-muted: "#D3DFFB"       # 英文副標、已出發／已抵達
  fids-ontime: "#FFD166"      # 準時
  fids-term: "#38BDF8"        # 航廈膠囊
  on-fids-term: "#04213F"
  fids-gate: "#D6E8FF"        # 登機門／轉盤膠囊
  on-fids-gate: "#0B2A6F"
  fids-footer: "#AFC3EE"
  # flap 翻牌
  flap-bg: "#0E0E0E"
  flap-row-alt: "#151515"     # 斑馬紋（極淡，保留翻牌的黑）
  flap-tile: "#1E1E1E"        # 牌片下半
  flap-tile-top: "#262626"    # 牌片上半（略亮，做出立體）
  flap-gap: "#000000"         # 中縫
  on-flap: "#F4F1E8"
  flap-label: "#FFCC33"       # 欄名、分頁、標題
  flap-muted: "#A8A39A"       # 英文副標
  flap-ontime: "#6EE7A0"
  flap-delay: "#FFB020"
  flap-cancel: "#FF6B6B"
  flap-done: "#B5B0A6"
  flap-footer: "#8F8A80"
  # 設定對話框
  dialog-surface: "#101B3D"
  on-dialog: "#F2F5FF"
  dialog-muted: "#AFC3EE"
  dialog-border: "#2A3B6E"
  dialog-input: "#0A1430"
  dialog-error: "#FF8A8A"
typography:
  title:
    fontFamily: "'Barlow Semi Condensed', 'Noto Sans TC', 'Noto Sans CJK TC', system-ui, sans-serif"
    fontSize: 1.35rem
    fontWeight: 900
    lineHeight: 1.1
  clock:
    fontFamily: "'Barlow Semi Condensed', 'Noto Sans TC', 'Noto Sans CJK TC', system-ui, sans-serif"
    fontSize: 1.6rem
    fontWeight: 700
    lineHeight: 1
  label:
    fontFamily: "'Barlow Semi Condensed', 'Noto Sans TC', 'Noto Sans CJK TC', system-ui, sans-serif"
    fontSize: 0.85rem
    fontWeight: 800
    lineHeight: 1.1
  cell:
    fontFamily: "'Barlow Semi Condensed', 'Noto Sans TC', 'Noto Sans CJK TC', system-ui, sans-serif"
    fontSize: 1.2rem
    fontWeight: 700
    lineHeight: 1.1
  place:
    fontFamily: "'Barlow Semi Condensed', 'Noto Sans TC', 'Noto Sans CJK TC', system-ui, sans-serif"
    fontSize: 1.35rem
    fontWeight: 900
    lineHeight: 1.1
  pill:
    fontFamily: "'Barlow Semi Condensed', 'Noto Sans TC', 'Noto Sans CJK TC', system-ui, sans-serif"
    fontSize: 0.95rem
    fontWeight: 800
    lineHeight: 1
  sub:
    fontFamily: "'Barlow Semi Condensed', 'Noto Sans TC', 'Noto Sans CJK TC', system-ui, sans-serif"
    fontSize: 0.56rem
    fontWeight: 600
    lineHeight: 1.15
  flap:
    fontFamily: "'JetBrains Mono', 'Noto Sans TC', 'Noto Sans CJK TC', ui-monospace, monospace"
    fontSize: 1.3rem
    fontWeight: 800
    lineHeight: 1.3
  footer:
    fontFamily: "'Barlow Semi Condensed', 'Noto Sans TC', 'Noto Sans CJK TC', system-ui, sans-serif"
    fontSize: 0.5rem
    fontWeight: 500
    lineHeight: 1.2
  dialog:
    fontFamily: "'Barlow Semi Condensed', 'Noto Sans TC', 'Noto Sans CJK TC', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  tile: 0.18rem
  pill: 0.35rem
  dialog: 12px
  full: 9999px
spacing:
  xs: 0.2rem
  sm: 0.4rem
  md: 0.8rem
  lg: 1.2rem
  d-sm: 8px
  d-md: 16px
  d-lg: 24px
components:
  header:
    backgroundColor: "{colors.fids-header}"
    textColor: "{colors.on-fids-header}"
  header-end:
    backgroundColor: "{colors.fids-header-2}"
    textColor: "{colors.on-fids-header}"
  tab-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  tab-idle:
    backgroundColor: "{colors.fids-tab}"
    textColor: "{colors.on-fids-header}"
    rounded: "{rounded.pill}"
  row-a:
    backgroundColor: "{colors.fids-row-a}"
    textColor: "{colors.on-fids-row}"
    typography: "{typography.cell}"
  row-b:
    backgroundColor: "{colors.fids-row-b}"
    textColor: "{colors.on-fids-row}"
    typography: "{typography.cell}"
  row-sub:
    backgroundColor: "{colors.fids-row-b}"
    textColor: "{colors.fids-muted}"
    typography: "{typography.sub}"
  status-ontime:
    backgroundColor: "{colors.fids-row-b}"
    textColor: "{colors.fids-ontime}"
  pill-term:
    backgroundColor: "{colors.fids-term}"
    textColor: "{colors.on-fids-term}"
    rounded: "{rounded.pill}"
    typography: "{typography.pill}"
  pill-gate:
    backgroundColor: "{colors.fids-gate}"
    textColor: "{colors.on-fids-gate}"
    rounded: "{rounded.pill}"
    typography: "{typography.pill}"
  pill-delay:
    backgroundColor: "{colors.status-delay}"
    textColor: "{colors.on-status-delay}"
    rounded: "{rounded.pill}"
  pill-cancel:
    backgroundColor: "{colors.status-cancel}"
    textColor: "{colors.on-status-cancel}"
    rounded: "{rounded.pill}"
  footer-fids:
    backgroundColor: "{colors.fids-bg}"
    textColor: "{colors.fids-footer}"
    typography: "{typography.footer}"
  flap-tile:
    backgroundColor: "{colors.flap-tile}"
    textColor: "{colors.on-flap}"
    rounded: "{rounded.tile}"
    typography: "{typography.flap}"
  flap-tile-top:
    backgroundColor: "{colors.flap-tile-top}"
    textColor: "{colors.on-flap}"
  flap-row-alt:
    backgroundColor: "{colors.flap-row-alt}"
    textColor: "{colors.flap-label}"
  flap-label:
    backgroundColor: "{colors.flap-bg}"
    textColor: "{colors.flap-label}"
    typography: "{typography.label}"
  flap-sub:
    backgroundColor: "{colors.flap-bg}"
    textColor: "{colors.flap-muted}"
  flap-ontime:
    backgroundColor: "{colors.flap-tile}"
    textColor: "{colors.flap-ontime}"
  flap-delay:
    backgroundColor: "{colors.flap-tile}"
    textColor: "{colors.flap-delay}"
  flap-cancel:
    backgroundColor: "{colors.flap-tile}"
    textColor: "{colors.flap-cancel}"
  flap-done:
    backgroundColor: "{colors.flap-tile}"
    textColor: "{colors.flap-done}"
  footer-flap:
    backgroundColor: "{colors.flap-bg}"
    textColor: "{colors.flap-footer}"
  mine-strip:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  dialog:
    backgroundColor: "{colors.dialog-surface}"
    textColor: "{colors.on-dialog}"
    rounded: "{rounded.dialog}"
    padding: "{spacing.d-lg}"
    typography: "{typography.dialog}"
  dialog-hint:
    backgroundColor: "{colors.dialog-surface}"
    textColor: "{colors.dialog-muted}"
  dialog-error-text:
    backgroundColor: "{colors.dialog-surface}"
    textColor: "{colors.dialog-error}"
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: "{spacing.d-sm}"
  input:
    backgroundColor: "{colors.dialog-input}"
    textColor: "{colors.on-dialog}"
    rounded: "{rounded.pill}"
    padding: "{spacing.d-sm}"
---

# Overview

手機橫放在桌上、整天開著的航班看板。資訊要在一兩公尺外一眼看懂，所以字大、欄位少、對比高。兩套主題共用同一份版面與狀態語意，只換外觀：fids 是現代機場 LCD 看板的藍底斑馬紋；flap 是黑底機械翻牌，換頁時每個字元會翻動。所有文字與底色組合皆達 WCAG AA（一般文字 ≥ 4.5:1）。

# Colors

fids：深海軍藍底，資料列以 `fids-row-a` / `fids-row-b` 交替做斑馬紋；表頭用淺藍漸層和深藍字，跟資料區明確分開。航廈用青色膠囊、登機門用淺藍膠囊，兩者形狀相同、顏色不同，掃一眼就分得出來。準時用 TPE 金（`fids-ontime`），在亮列上對比 4.65:1，所以亮列不可再調亮。

flap：近黑底配暖白字，模擬實體翻牌的紙板色；欄名與標題用 `flap-label` 黃。狀態用文字顏色區分（綠準時、橘延遲、紅取消、灰完成），不另加底色，保持翻牌的單純。

狀態語意兩主題一致：延遲與取消一律用實心膠囊（`status-delay`、`status-cancel`），因為它們是需要被注意的例外。我的航班一律用 `accent` 金。

Do：同一語意只用同一個 token。Don't：在列底上直接放橘色或紅色文字，亮藍列上對比不足，例外狀態一律用膠囊。

# Typography

拉丁字母與數字用 Barlow Semi Condensed（窄體，接近機場看板的 DIN 風格），中文用 Noto Sans TC 黑體；翻牌主題的字元用 JetBrains Mono 粗體，確保每格等寬。時間與班次使用等寬數字（tabular-nums），換頁時欄位不會跳動。

字級全部以 rem 表示，根字級由 JS 依畫面寬高計算，讓 N 列剛好填滿螢幕；只有設定對話框使用固定 16px，避免直向時字太小。

# Layout

上方為標題列（機場名、出發／抵達分頁、台北時間、頁碼）與欄名列，下方資料列以等高網格填滿剩餘空間，最下方為來源註記。橫向六欄：時間、目的地、班次、航廈、登機門（抵達時為行李轉盤）、備註；直向隱藏航廈欄，改在登機門膠囊前加上航廈代號。間距取 `spacing` 的 rem 值；對話框使用 d-sm / d-md / d-lg 的 px 值。

# Motion

換頁：fids 列由上而下依序淡入；flap 每個字元隨機翻動數次後停在目標字。共掛班號每 3 秒輪替。設定 `prefers-reduced-motion` 時全部改為直接切換。整個畫面每 90 秒偏移 1 至 2 像素以降低 OLED 烙印。
