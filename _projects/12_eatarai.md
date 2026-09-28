---
layout: page
title: Eatarai (เมื่อไรจะไปกิน)
description: LINE bot for shared restaurant wishlists with LIFF and Google Maps links
img: assets/img/eatarai_logo.png
importance: 1
category: Personal
related_publications: false
---

## Overview

Built **Eatarai** (เมื่อไรจะไปกิน — "When are we going to eat?"), a LINE bot for keeping a shared restaurant wishlist. Each LINE group, room, and direct chat has its own list. People can add restaurants, remove them after a visit, and open saved locations in Google Maps from the shared list.

<div class="row justify-content-center">
    <div class="col-10 col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/eatarai_wishlist.png" title="Eatarai restaurant wishlist in LINE" alt="LINE message showing a shared restaurant wishlist with Google Maps links" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The bot posts the latest restaurant list in LINE, with a map link for each saved location.
</div>

---

## Project Context

### Technical Approach

- **Serverless Backend**: A **Cloudflare Worker** receives LINE webhooks and reads or writes restaurant lists through **Supabase REST/RPC**, backed by PostgreSQL with row-level security
- **LIFF Restaurant Search**: A LINE LIFF page uses the member's current location to search nearby branches with **Google Places Text Search**; selected branches are saved with map links
- **Controlled API Usage**: Text commands to add, remove, or list restaurants do not call Google Places. LIFF searches use daily limits and server-side rate limiting
- **Chat Updates**: A Cloudflare Durable Object coordinates publishing the latest list after changes, so members see an updated list in their LINE chat

---

## Key Features

- **Chat Commands**: Mention the bot to show the list, add a restaurant, remove one, or mark it as eaten
- **Shared LIFF Menu**: Chat members can open the add/remove menu for five minutes; each member gets a separate, single-use session
- **Flexible Removal**: If a restaurant name is abbreviated or close to another name, the bot asks which item to remove
- **LIFF Menu**: Add restaurants by searching nearby branches or select multiple items to remove through a LINE mini-app
- **Map Links**: Saved places appear in the list with links to Google Maps

---

## Technologies Used

| Category | Tools |
|----------|-------|
| **Runtime** | Cloudflare Workers, Durable Objects, TypeScript |
| **Backend & DB** | Supabase (PostgreSQL, RPC) |
| **Messaging** | LINE Messaging API, LINE LIFF |
| **External APIs** | Google Places API (Text Search) |

---

## Source & Links

- **GitHub Repository**: [kritnipit-phetanan/eatarai](https://github.com/kritnipit-phetanan/eatarai)
