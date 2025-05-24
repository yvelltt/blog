---
title: SSE, MQTT, and Polling: Three Philosophies of Progress Tracking
description: Practical approaches to progress reporting in development.
lang: en
image: ""
date: "2024-05-25"
---

# SSE, MQTT, and Polling: Three Philosophies of Progress Tracking

In the daily grind of development, one eternal question always comes up: **“How do I know when the task is done?”**  
It shows up more often than “What should I eat for lunch?”  
Here, we’ll look at three common approaches to progress tracking: SSE (Server-Sent Events), MQTT (Message Queuing Telemetry Transport), and classic polling.

| Feature / Tech     | SSE (Server-Sent Events)           | MQTT                                 | Polling                           |
|--------------------|-------------------------------------|---------------------------------------|------------------------------------|
| Connection Type     | One-way persistent connection       | Two-way persistent connection (needs broker) | Repeated short connections (interval requests) |
| Real-time Capability| High                                | High                                  | Low to medium (depends on frequency) |
| Resource Usage      | Medium                              | Low                                   | High                               |
| Complexity          | Low (natively supported by browsers)| High (requires MQTT client + broker) | Low (but inefficient)              |
| Stability           | Requires reconnection handling      | Stable with QoS                       | Stable, but inefficient            |
| Bi-directional?     | No                                  | Yes                                   | Simulatable (requires extra logic) |
| Best Use Cases      | Progress bars, live updates         | IoT communication, device-to-device  | Quick-and-dirty solutions          |

---

## 1. SSE: One-Way, but Consistent

SSE is great for pushing continuous data in one direction, like monitoring dashboards or video streams.  
It’s particularly useful for situations like a progress bar that needs constant updates without requiring user interaction.  
The downside? No bi-directional communication and you’ll have to implement reconnect logic if the connection drops. But hey, it’s simple, and sometimes that’s all we need.

---

## 2. MQTT: Lightweight and Versatile

MQTT uses a publish/subscribe model with topics. In previous projects, it’s often the go-to when we need fast, lightweight, two-way communication.  
Need data? Just subscribe to a topic.  
However, messages aren’t retained unless you set up persistence elsewhere (like a database), and setting up a broker (e.g., Mosquitto) means DevOps gets involved—prepare for diplomacy.  
Still, if you want flexibility and real-time response, this is a strong option.

---

## 3. Polling: Never Technically Wrong, Always Inefficient

Polling is the oldest trick in the book. You send a request every few seconds:  
"Is it done?" "Now?" "What about now?"  
It’s simple to implement but taxing on the server. If left unchecked, it basically becomes a mild DDoS.  
Useful in a pinch, but not elegant. Or efficient. Or… modern.

---

## Conclusion:

Depending on your company's infrastructure, available resources, and how friendly your DevOps team is, MQTT might be the ideal choice.  
But in terms of learning curve and ease of use, SSE often strikes a good balance for front-end progress tracking.

Polling? It’s what you use when you don’t have time to care.  
It’s not wrong—it’s just a little sad.

---

> Picking a technology isn’t about what’s perfect—it’s about **what kind of mess you’re willing to live with**.
