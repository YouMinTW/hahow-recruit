# Hahow Recruit Project (frontend)

[Demo Website:](https://hahow-recruit.vercel.app/) [https://hahow-recruit.vercel.app/](https://hahow-recruit.vercel.app/)

[Project Requirement by Hahow](https://github.com/hahow/hahow-recruit/blob/master/frontend.md)

## 我們該如何執行完成的 package

### 環境要求

- git v2.24.3 +
- node v12.18.3 +
- npm v6.14.6 +
- yarn 1.22.5 +

### 開發

1. 於 Github 取得 repo 連結，下指令 git clone，下載至本機。
2. 使用終端機連線到本機資料夾路徑，下指令 yarn ，安裝所有專案相依套件
3. 下指令 yarn start ，進入開發模式，腳本會自動將 app 掛載，可至瀏覽器連線對應的 port 號
4. 本專案開發流程採用 git-flow，請切換至相對應的分支進行開發

```bash
git clone https://github.com/YouMinTW/hahow-recruit.git
cd hahow-recruit
yarn
yarn start

```

### 部署

1. 切換至主分支，下指令 git checkout master
2. 建構編譯後可部署檔案，下指令 yarn build
3. 將目錄的資料夾，移交檔案至後端伺服器部署
4. 或可根據公司 CI, CD 流程，與 remote Repo 執行自動化腳本

註 1：本專案使用 react-router-dom 的 BrowserRouter，需請後端協助設定路由導向
註 2：本專案採 Backendless 自動化部署，透過[Vercel](https://vercel.com/)建立專案，並自動連線至 [Github repo](https://github.com/YouMinTW/hahow-recruit.git)，設定偵測 master 分支，自動進行更新、發布。

```bash
git checkout master
yarn build

```

## 專案的架構、Web 的架構邏輯

```bash
├── src/
│   ├── heroes/
│   │   ├── state/
│   │   │   └── recoilState   # 所有與 Hero 有關、需要共享的 state
│   │   └──  **/*.js          # 所有與 Hero 有關的元件、 utilities
│   ├── layouts/
│   │   └──  **/*.js          # 作為共用 Layout 元件 eg PageLayout FlexContainer
│   ├── main/                 # Application 中的一些必備、重要的功能、元件
│   │   └──  ErrorBoundary    # Application Crash 的錯誤處理、fallback
│   ├── pages/
│   │   ├── **/*.js           # Application 所有的頁面元件
│   ├── App.js                # 包覆整體 App 需要的元件，通常如一些共用 context <Provider>
│   ├── Routes.js             # Application 集中管理頁面的所有路由
│   └──index.js               # Application 掛載到 HTML DOM 的進入點
├── public/
├── node_modules/             # 有使用到的第三方套件
├── build                     # 編譯過後，可部署到瀏覽器執行的檔案
├── .prettierrc               # 專案協作的程式碼格式規範
├── .env                      # 未來可擴充，根據此檔案區分 測試、正式的開發環境
├── .env.example              # env 範例檔
├── README.md                 # 本專案說明文件
├── package.json              # 本專案所使用到的套件、可執行的腳本
├── yarn.lock
└── .gitignore
```

## 你對於所有使用到的第三方 library 的理解，以及他們的功能簡介

### 總覽

- UI 框架： [Styled Components](https://styled-components.com/)、[Ant design](https://ant.design/)
- 狀態管理： [Recoil](https://recoiljs.org/)
- 前端路由： [React router dom](https://reactrouter.com/web/guides/quick-start)
- HTTP 客戶端： [Axios](https://github.com/axios/axios)
- 格式化程式碼： [Prettier](https://prettier.io/)
- 語法檢查： [Eslint](https://eslint.org/)

### Dependencies

**React router dom**: 協助快速建立前端路由，並將常用的 Web API 如：location, history 與 前端 Reactjs 整合， 早期傳統 HashRouter 是藉由 \# 釘錨點在前端進行路由， BrowserRouter 則需要和後端再搭配伺服器轉址。

**Styled Components**: 在動態樣式透過 props 處理很方便，也不用繼續苦惱一堆跨瀏覽器 css vendor 要處理，可將樣式 _(style)_ 與元件結構 _(Component)_ 寫入在同一份 jsx 檔，好維護程式碼、保持關注點、可以更專注在刻畫樣式，更多理由及介紹可以前往我最近寫的部落格文章 [初探 Styled-Components](https://ken-chen.medium.com/%E5%88%9D%E6%8E%A2-styled-components-139450221f0)

**Ant design**: Reactjs 著名的 UI library 之一，有許多現成元件，可基於其客製化主題、動畫元件、樣板，快速使用。使開發者能更專注在商業邏輯上的實作。

    其實在本次 Recruit 的專案當中，並不需要特別同時採用到 2 份 UI 框架 (增加程式碼檔案大小)，
    由於在一面的過程中，有與技術主管討論到內部使用框架的一些心得及看法，遂於本次同時採用此 2 種框架。
    （本專案 HeroListPage 僅使用 Styled Components，HeroProfilePage 等，則兩者混用）

**Axios**: 老牌的 http 客戶端，支援 Promise based 的 http 請求，在取消、攔截、轉換請求都有提供支援的解決方案，自動 JSON 轉型，支援併發請求，其底層本質也是轉化為 XMLHttpRequest ，可支援舊瀏覽器。 在 axios instance 上，也能輕易設定 header, config ，使我們更輕鬆的設定基本的 CSRF 防範。 api instance 也能增進程式碼可讀性及關注點分離。

**Recoil**: 由 Facebook 團隊開發，近兩年流行起來的狀態管理工具，在呼叫狀態的 API 更接近原生的 React hooks ，也大幅度減少需要建立很多`<SomethingProvider>`的 boilerplate ，如同 Redux ，只要 1 個 `<RecoilRoot>` ，就可以將所有 global state 放入於此，透過 atom, selector 等，也可快速將不同類型的全域狀態進行分類，簡單明瞭，也較容易處理一些相依性狀態（ 如本次專案的 hero list 跟 hero profile ）。並且有針對 React 特性做效能優化，提供專屬區隔的 API ，讓 state 可以分別有 setter, getter API，因此能針對有在畫面使用到該 state 的地方才進行更新，如果僅是更新狀態，但並無在畫面使用，就可以不重新渲染。其在非同步的狀態更新，也可以良好的跟 `<Suspense>`做搭配，或是一些客製化的 partial loading 並且將此狀態做快取，更多理由、使用技巧及心得可以看我 9 月鐵人幫撰寫的內容 [關於 React，那些我不知道的](https://ithelp.ithome.com.tw/users/20130721/ironman/3820) 系列。

### Development Dependencies( or Global Dependencies )

**Prettier**: 協助程式碼格式、排版一致，增進整份專案的可讀性及一致性。

**Eslint**: 協助檢查、修正程式碼語法及風格，避免使用到 JavaScript 危險的語法，並協助維持整份專案的開發風格。 （本專案採用 CRA 官方推薦的預設版本)，未來可根據團隊需求再進行設定、擴增或刪除規則

## 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解

1. 若遇到程式碼當中，有些複雜的流程控制(Flow Control)，可能會有 if / else statement，或 for 迴圈(應盡量避免)等，比較命令式的程式碼時，下註解解釋其意圖。
2. 比較底層、早期原生的操作，通常偏向命令式(imperative)，可能像 Object.assign 等，解釋其意圖。

```js
var obj = Object.assign({}, object1, object2) // 感謝 偉哉 ES6+ 拯救
Object.getOwnPropertySymbols(obj)
```

3. 如同 2. 抽象化層級較高的程式碼也可以考慮撰寫 (解釋意圖、目的等)。
4. 有使用一些繞路、workaround 時。
5. 如同 4. 以特別的方式補起來的 Third Party Library 的坑等（程式碼的部分記得同時縮小影響範圍）。
6. 若在企業級應用，也可能需要撰寫法律類型的註解。
7. TODO 類，配合緊急狀況的短期做法，未來仍有需回去補足、加強的地方。

## 在這份專案中你遇到的困難、問題，以及解決的方法

1.  在 Routing 當中共享元件：在不同的 route 底下，都要同時顯示 Hero List Page，之前的經驗，沒有遇過此使用情境，透過來回研讀 React-router-dom 官網及 codeSandbox 的實驗中，發現解決方案。在 Sub Route 裡，一瞬間想到 `<Switch>`僅會渲染單一元件，並將之移除即完成。主要參考 [React Training / React router / Nesting](https://reactrouter.com/web/example/nesting)。

2.  剛開始在 Skill increment, decrement 商業邏輯要實作在哪裡，選擇直接從計數器元件`<SkillPointCounter>`處理。

    拿到 props 下來的 callback 在其中寫入商業邏輯 ( 判斷是當前點的哪個技能、還有沒有 remain point 可以遞增及是否等於 0 停止遞減等 )。
    後來注意到此做法，將造成 SkillPointCounter 的擴充性、可共用性降低。

```jsx
const SkillPointCounter = ({ name, value, setSkillPoints, remain }) => {
  const increment = () =>
    setSkillPoints(prevStatus => {
      if (remain > 0) {
        return { ...prevStatus, [name]: value + 1 }
      } else {
        return prevStatus
      }
    })
  const decrement = () => {} // 類似上面，省略
  return (
    <div>
      <span>{name}</span>
      <button onClick={increment}>+</button>
      <span>{value}</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}
```

    後來在思考抽象化的過程中，想到一個不錯的方法，
    由於最近都在學習關於 Functional Programming 的思考方式，遂想到透過 curry 的方式處理。

    在 <HeroProfilePage> 層，將商業邏輯處理完 increment, decrement，
    我們只要將這 2 個 callback 傳遞下去，如此便可提升 <SkillPointCounter> 在未來的可擴充性、可共用性。
    同時也修正 state 的命名 從 setSkillPoints 改為 setUpdatedProfile 。

```jsx
const HeroProfilePage = ({ originalProfile, handleSubmit }) => {
  const [updatedProfile, setUpdatedProfile] = useState({})
  useEffect(() => { }, [originalProfile]) // 略 （切換英雄、或server 回傳更新成功時，要重新設定 originalProfile
  const remain = someCalculation() // 略 只是將 originalProfile, updatedProfile 各自加總後，再從 origin 扣除 updated

  // 將 increment 抽象為兩層 curry function ， 1. 先取得 屬性(str, int, luk) 2. 取得該屬性的值
  const incrementWith = propertyName => value =>
    setUpdatedProfile(prevStatus => {
      if (remain > 0) {
        return { ...prevStatus, [propertyName]: value + 1 }
      } else {
        return prevStatus
      }
    })
  const decrementWith = () => {} // 類似上面，省略
    return (
        <div>
          {Object.entries(updatedProfile)
            .sort(comparePriorities)  // 另外也注意到，4 個屬性的順序要另外經過排序，因此也在 Object map 之前先 sort 過。
            .map(([property, value]) => (
              <SkillPointCounter
                key={property}
                name={property}
                value={value}
                remain={remain}
                // 用 curry function 在 map 時，便先取得 str, int, luck 等 propertyName，產生 increment function
                increment={incrementWith(property)}
                decrement={decrementWith(property)}
              />
            ))}
        </div>
    )

```

```jsx
const SkillPointCounter = ({ name, value, remain, increment, decrement }) => {
  // 這邊就只需要將 value 值，放入上層 props 下來的 increment callback 即可
  return (
    <div>
      <span> {name} </span>
      <Button onClick={() => increment(value)} disabled={remain <= 0}>
        +
      </Button>
      <span> {value} </span>
      <Button onClick={() => decrement(value)} disabled={value <= 0}>
        -
      </Button>
    </div>
  )
}
```

3. Recoil 共享狀態在更新技能點數 \[patch\] **/heroes/${heroID}/profile** 時，收到 server response 後，沒辦法寫回原本的 Recoil state，原因是 `SelectorFamily` api，不支援 async 寫入 (詳情見 github issue [Async selector set function](https://github.com/facebookexperimental/Recoil/issues/762)，官方仍在思考未來是否將此功能納入)，解決辦法透過實驗 github / StackOverflow 的解法，以及回頭思考該狀態的特徵及要素，發現可以透過另外一隻 API `atomFamily` 解決此問題。就不需要特別繞路、寫一些 workaround。

## Check List

### 其他已開發項目

1. 首頁自動導向到 `/heroes`
2. 首次進入 `/heroes` 的 Hero List Page Component 會 `<Suspense>` (實作 Load Page)，接下來有 Recoil 快取存在，就不會再進入全站 Loading 了
3. 實作 Not Found Page 搭配 Error Boundary 包含三種畫面
   1. 沒有連線的畫面
   2. 前端路由 Not found 的頁面(4xx)
   3. 其他 error 的畫面(5xx)
4. 實作 Hero Profile Page 的 Loadable (Partial Loading) 增進使用者體驗，在第一次進入新的 heroID (`/heroes/:heroID` ), 底下會渲染 `<Skeleton>`，之後再回到同一個 heroID，就可以仰賴 Recoil 快取，就不會再進入 `<Skeleton>` 了。

### 原需求已開發項目

- [x] 整個專案會需要兩個頁面
      Hero List Page \(網址: /heroes\)
      Hero Profile Page \(網址: /heroes/:heroId\)
  > Hero List Page Component 跨路由`/heroes`, `/heroes/:heroID` 共享
- [x] "Hero List Page"、"Hero Profile Page" 都有一個 "Hero List" 在頁面上水平置中 (API: GET https://hahow-recruit.herokuapp.com/heroes)
- [x] "Hero List" 上的元素我們稱為 "Hero Card"，在 "Hero List" 中由左到右排列，如果在小尺寸螢幕上列表中的元素超出畫面就自動往下排列
- [x] "Hero Card" 必須包含圖片和名字，且是可以點擊的連結
- [x] "Hero Card" 連結會連到單一 Hero 的 "Hero Profile Page"，"Hero List" 依然在相同位置，並且不因切換連結重新 render
- [x] 當在 "Hero Profile Page" 時要將現在所選中的 "Hero Card" 用不同的顏色或圖案標示出來
- [x] "Hero Profile Page" 中，在 "Hero List" 底下會有一個 "Hero Profile"
- [x] "Hero Profile" 會顯示 Hero 的能力值 \( API: GET https://hahow-recruit.herokuapp.com/heroes/:heroId/profile \)，並且在數值左右各有一個按鈕，負責做增減功能，另外有一個顯示剩餘的能力點數的地方，一開始預設值是 0
  > 技能選擇器有實作完成商業邏輯包含： 技能排序、點數遞增遞減規則、送出檢查規則，並且為了使用者友善，有搭配 `<button disabled>`
- [x] "Hero Profile" 最下方有一個儲存按鈕，按下按鈕後，會將現在設定的能力值提交更新 server 上的資料 \( API: PATCH https://hahow-recruit.herokuapp.com/heroes/1/profile \)，送出的能力值總和必須與拿到的時候相同
- [x] Hero 能力值不能小於零

## 總結

### 可優化的地方

#### 互動面

若時間允許，可以跟 UI, PM 更細部的討論需求:

1. 使用者的技能點數更新後，若未儲存、直接切換英雄會遺失紀錄，是否該保留未儲存的修改，或是切換英雄前做一些 視覺提醒 (如 modal 之類的)。

2. 若是這個技能非常重要，或是只允許有限次數修正，則可在送出儲存前，提醒使用者是否確認變更（如 modal 之類的）。

#### 個人面

1. 在 Not Found Page (3 種類型的 Not Found),Error Boundary，在時間的考量下，決定先寫入同一 Page， 根據 3 種狀態 (if props === ...) ，回傳不同的畫面，雖優化成 switch case，但未來或許可依據這 3 種狀態獨自建立各自的頁面，讓關注點各自分離，或是進行程式碼可讀性優化等。

   理由：在 Functional Programming 典範中的一些原則提到，我們應盡量避免使用 statement \(if else\) 而是 expression，使我們的元件盡量維持無狀態性 (stateless)，而我們也能更好預測使用的結果、增進元件的可擴充性並增進可讀性等。更多優勢詳見，我最近撰寫的 Medium [為什麼我要學 Functional Programming? — 可讀、可靠、有信心](https://ken-chen.medium.com/%E7%82%BA%E4%BB%80%E9%BA%BC%E6%88%91%E8%A6%81%E5%AD%B8-functional-programming-%E5%8F%AF%E8%AE%80-%E5%8F%AF%E9%9D%A0-%E6%9C%89%E4%BF%A1%E5%BF%83-160e39f1632b)

2. 命名技巧的優化，如 API 回傳的英雄 Profile 點數、使用者更新的 Profile 點數名稱，一開始有點想不太到，最後採取 originalProfile, updatedProfile 命名，
   中間也一度嘗試過 skillPoints, currentHeroSkillPoints 等，在 profile 頁面上的 計數器的優先順序 (STR > INT > AGI > LUK)的權重物件，其命名也從最初的 propertyOrderMap 改為 profilePriorityMap，未來時間允許的話，可嘗試多探索命名的可能性。

3. 時間的考量下，先預設採信後端回傳完全沒問題，從 Server 回傳的 profile 技能點數，可在前端多做些檢測、預防，避免加總時爆掉，如 `undefined + 1 // 回傳 NaN`。

#### 商務面

1. 現在 HeroListPage 僅拿取 currentHeroID，若未來有商務上需求，可呼叫 currentHeroProfileState 拿到當前英雄得技能點數，需要取得 name, image 的話，可以使用 selectorFamily API 建立新 state，透過 ID 直接拿到 當前英雄的其他資料 (name, img) ，不需要另外呼叫 Single Hero \[GET\] API。

2. CSS 樣式可根據設計稿做更深度的刻畫、甚至隨著 App 變大，可搭配 theme, Design system 等，維持風格一致性與共用性。
