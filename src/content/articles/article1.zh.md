---
title: SSE、MQTT、輪迴查詢
description: 關於進度上的做法。
lang: zh
image: ""
date: 2024-05-25
---

在日復一日的開發生活中，總會遇到一個老問題：「我要怎麼知道任務做完沒？」這個問題比「午餐要吃什麼」還常見。今天來聊聊三種進度追蹤方式：SSE（Server-Sent Events）、MQTT（Message Queuing Telemetry Transport）與輪迴查詢（polling）。

_________________

先來總結圖表

| 特性/技術         | SSE（Server-Sent Events）        | MQTT                                | 輪詢（Polling）                   |
|------------------|----------------------------------|-------------------------------------|------------------------------------|
| 連線方式         | 單向持久連線                     | 雙向持久連線（需 Broker）           | 重複短連線（定時請求）             |
| 即時性           | 高                                | 高                                   | 低至中（取決於頻率）              |
| 資源使用         | 中                                | 低                                   | 高                                 |
| 複雜度           | 低（瀏覽器原生支援）              | 高（需 MQTT client 與 Broker）      | 低（但笨重）                       |
| 穩定性           | 易中斷，需處理 reconnect           | 穩定，有 QoS 支援                    | 穩定，但效能差                     |
| 雙向溝通         | 否                                | 是                                   | 可模擬（但不直觀）                 |
| 適用場景         | 進度更新、即時通知                | IoT 設備、雙向通訊                   | 簡易實作、臨時交差                  |

---

## 1. SSE：我單向，但我持續輸出

SSE 最常見的使用情境大概是監視器或直播等應用，一路單向不斷推送資料。這個東西以前被我遺忘在技術列表底部，一旦用起來，不得了，非常適合進度條這種需要「持續更新但不用回應」的場景。  
缺點是無法進行互動，而且斷線時需要額外實作 reconnect 機制。

---

## 2. MQTT：極輕量但多工

MQTT 採用主題訂閱與發布的模式，在過去的實作中非常常見。需要什麼資料，就訂閱對應的 topic。  
優點是雙向溝通、延遲低、效能好；但缺點也明顯：  
- 漏掉的訊息無法回溯，需搭配資料庫保存。  
- 部署上需要額外的 Broker，如 Mosquitto，與 DevOps 合作的愉快程度會直接影響是否痛苦。

---

## 3. 輪迴查詢：什麼都不會出錯，但就是錯了

輪詢（Polling）是最原始的方式。每隔幾秒發一個 request：「好了沒？」「好了沒？」「好了沒？」  
聽起來像不耐煩的 PM，也像快變成 DDOS 的我。雖然簡單好寫，沒有技術門檻，但效能差，對伺服器與網路都是浪費。

---

## 結語：

根據公司現況來考慮，如果我能爭取到資源、或是 DevOps 人好說話，我會選擇 MQTT。但就學習曲線與開發效率來說，SSE 是相對簡潔又不太會出事的折衷方案。  
至於輪詢？它是一種開發的過渡期，也是一種心累的象徵。

---

> 技術選型的本質不是完美，而是**哪種爛法比較能忍受**。
