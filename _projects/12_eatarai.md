---
layout: page
title: Eatarai (เมื่อไรจะไปกิน)
description: LINE bot for tracking a shared restaurant wishlist across groups, rooms, and direct chats
img: assets/img/eatarai.jpg
importance: 1
category: Personal
related_publications: false
---

## Overview

Built **Eatarai** (เมื่อไรจะไปกิน — "When are we going to eat?"), a LINE bot that lets a group keep a shared restaurant wishlist, scoped separately per LINE group, multi-person room, and direct chat.

---

## Project Context

### Technical Approach

- **Serverless Architecture**: Runs on a **Cloudflare Worker**, communicating with **Supabase** entirely over REST/RPC (no direct Postgres TCP connection), which fits the Worker's stateless request runtime
- **LIFF-Based Map Flow**: A LINE LIFF mini-app lets the requesting user pick a location (current location or a map picker), search **Google Places**, and attach the chosen branch to a wishlist item
- **Cost-Controlled Google API Usage**: Google Places Text Search only fires after a user selects a location in the LIFF flow — never on simple add/remove/list commands — with per-chat and per-day quotas enforced atomically via a Postgres advisory-lock RPC
- **Session Security**: LIFF sessions are bound to `chat_id + owner_user_id`, so a leaked LIFF URL can't be used by anyone else to read or modify the list

---

## Key Features

- **Shared Wishlist Commands**: Add, remove, mark-as-eaten, and list restaurants directly in chat
- **Map Attachment**: Attach a verified Google Maps link to a wishlist item via the LIFF flow
- **Scoped Storage**: Each LINE group, room, and direct chat keeps its own independent list

---

## Technologies Used

| Category | Tools |
|----------|-------|
| **Runtime** | Cloudflare Workers, TypeScript |
| **Backend & DB** | Supabase (PostgreSQL, RPC) |
| **Messaging** | LINE Messaging API, LINE LIFF |
| **External APIs** | Google Places API (Text Search) |

---

## Source & Links

- **GitHub Repository**: [kritnipit-phetanan/eatarai](https://github.com/kritnipit-phetanan/eatarai)
