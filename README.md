# Slides
這個是一個可以把 markdown 文件轉成簡報的工具，透過 [reveal.js](https://revealjs.com) 的幫助轉換成簡報
這個工具是啟發自 [hackmd.io](https://hackmd.io) 和 [slides.com](https://slides.com)，但是我們不儲存檔案在我們的伺服器，你可以用自己喜歡的編輯器編輯完了之後上傳到 GitHub，我們會從 GitHub 上抓取你的檔案
# 如何使用
1. 到 [slides](https://slides.simba-fs.dev)
2. 在畫面上唯一的輸入框輸入 GitHub path（見下面說明）
3. 按下 "GO"
4. 開始你的簡報

# GitHub path
基本的 GitHhb path 是 `username/repo` ，這類的 path 會載入 README.md 當作來源
你也可以指定檔案，只要把他加在 repo 後面，像是 `username/repo/slides.md`，這類的 path 必須指定檔名，否則會發生錯誤

# Google Analystic
如果要啟用 GA，在啟動時加上環境變數 `GA`，例如：（那個 id 是我亂掰的，填你自己的 id）
```
GA=UA-7458927582-2 npm start
```
