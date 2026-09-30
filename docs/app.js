(function () {
  const { owner, auditDate, openQuestions, repos } = window.AUDIT;

  const ACTIONS = ["Keep", "Build or delete", "Park", "Archive", "Delete", "Fork"];
  const ACTION_CLASS = {
    "Keep": "a-keep",
    "Build or delete": "a-build",
    "Park": "a-park",
    "Archive": "a-archive",
    "Delete": "a-delete",
    "Fork": "a-fork",
  };

  const state = { search: "", action: "", type: "", status: "", sortKey: "action", sortDir: 1 };

  const $ = (id) => document.getElementById(id);

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Supports the two bits of Markdown used in repos.js: **bold** and `code`.
  function inlineMd(s) {
    return escapeHtml(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`(.+?)`/g, "<code>$1</code>");
  }

  function uniqueSorted(key) {
    return [...new Set(repos.map((r) => r[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  }

  function fillSelect(el, label, values) {
    el.innerHTML = `<option value="">All ${label}</option>` +
      values.map((v) => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join("");
  }

  function compare(a, b) {
    const { sortKey, sortDir } = state;
    let x = a[sortKey];
    let y = b[sortKey];

    if (sortKey === "action") {
      x = ACTIONS.indexOf(x);
      y = ACTIONS.indexOf(y);
    } else if (sortKey === "lastCommit") {
      // Repos with no commit always go last, whichever direction.
      if (!x && !y) return a.name.localeCompare(b.name);
      if (!x) return 1;
      if (!y) return -1;
    }

    const primary = typeof x === "number" ? x - y : String(x).localeCompare(String(y), undefined, { sensitivity: "base" });
    return primary !== 0 ? primary * sortDir : a.name.localeCompare(b.name);
  }

  function matches(r) {
    if (state.action && r.action !== state.action) return false;
    if (state.type && r.type !== state.type) return false;
    if (state.status && r.status !== state.status) return false;
    if (state.search) {
      const hay = `${r.name} ${r.description} ${r.notes} ${r.type} ${r.action}`.toLowerCase();
      if (!hay.includes(state.search)) return false;
    }
    return true;
  }

  function renderRows() {
    const list = repos.filter(matches).sort(compare);
    const tbody = $("rows");

    if (list.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="empty">No repos match these filters.</td></tr>`;
    } else {
      tbody.innerHTML = list.map((r) => `
        <tr>
          <td class="name"><a href="https://github.com/${owner}/${encodeURIComponent(r.name)}" target="_blank" rel="noopener">${escapeHtml(r.name)}</a></td>
          <td>${escapeHtml(r.status)}</td>
          <td>${escapeHtml(r.type)}</td>
          <td><span class="badge ${ACTION_CLASS[r.action] || ""}">${escapeHtml(r.action)}</span></td>
          <td class="text">${inlineMd(r.description)}</td>
          <td class="text muted">${inlineMd(r.notes)}</td>
          <td class="date">${r.lastCommit ? escapeHtml(r.lastCommit) : '<span class="muted">none</span>'}</td>
        </tr>`).join("");
    }

    $("count").textContent = list.length === repos.length
      ? `Showing all ${repos.length} repos`
      : `Showing ${list.length} of ${repos.length} repos`;

    document.querySelectorAll("th[data-key]").forEach((th) => {
      if (th.dataset.key === state.sortKey) {
        th.setAttribute("aria-sort", state.sortDir === 1 ? "ascending" : "descending");
      } else {
        th.removeAttribute("aria-sort");
      }
    });

    document.querySelectorAll(".chip").forEach((chip) => {
      chip.setAttribute("aria-pressed", String(chip.dataset.action === state.action));
    });
  }

  function renderSummary() {
    const counts = {};
    repos.forEach((r) => { counts[r.action] = (counts[r.action] || 0) + 1; });
    $("summary").innerHTML = ACTIONS.filter((a) => counts[a]).map((a) => `
      <button type="button" class="chip ${ACTION_CLASS[a]}" data-action="${escapeHtml(a)}" aria-pressed="false">
        ${escapeHtml(a)}<strong>${counts[a]}</strong>
      </button>`).join("");
  }

  function init() {
    const publicCount = repos.filter((r) => r.status === "public").length;
    const privateCount = repos.filter((r) => r.status === "private").length;
    const forkCount = repos.filter((r) => r.action === "Fork").length;
    $("subtitle").innerHTML =
      `Repos under <a href="https://github.com/${owner}" target="_blank" rel="noopener">github.com/${owner}</a>, ` +
      `audited ${escapeHtml(auditDate)}. ${repos.length} repos: ${publicCount} public, ${privateCount} private, ${forkCount} forks.`;

    fillSelect($("filter-action"), "actions", ACTIONS.filter((a) => repos.some((r) => r.action === a)));
    fillSelect($("filter-type"), "types", uniqueSorted("type"));
    fillSelect($("filter-status"), "statuses", uniqueSorted("status"));

    $("questions").innerHTML = openQuestions.map((q) => `<li>${inlineMd(q)}</li>`).join("");

    renderSummary();

    $("search").addEventListener("input", (e) => {
      state.search = e.target.value.trim().toLowerCase();
      renderRows();
    });

    [["filter-action", "action"], ["filter-type", "type"], ["filter-status", "status"]].forEach(([id, key]) => {
      $(id).addEventListener("change", (e) => {
        state[key] = e.target.value;
        renderRows();
      });
    });

    $("summary").addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      state.action = state.action === chip.dataset.action ? "" : chip.dataset.action;
      $("filter-action").value = state.action;
      renderRows();
    });

    document.querySelectorAll("th[data-key] button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.parentElement.dataset.key;
        if (state.sortKey === key) {
          state.sortDir = -state.sortDir;
        } else {
          state.sortKey = key;
          // Newest first is the useful default for dates.
          state.sortDir = key === "lastCommit" ? -1 : 1;
        }
        renderRows();
      });
    });

    $("reset").addEventListener("click", () => {
      Object.assign(state, { search: "", action: "", type: "", status: "", sortKey: "action", sortDir: 1 });
      $("search").value = "";
      $("filter-action").value = "";
      $("filter-type").value = "";
      $("filter-status").value = "";
      renderRows();
    });

    renderRows();
  }

  init();
})();
