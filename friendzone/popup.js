// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

const friends = [
  {name: "Stacie", timezone: "PST"},
  {name: "Vitor", timezone: "Spain"},
  {name: "Dave", timezone: "CET"}
].map(friend => `<li>${friend.name}: ${friend.timezone}</li>`).join("");

document.getElementById("friend-list").innerHTML = friends;