(function () {
  var news = Array.isArray(window.LAB_NEWS) ? window.LAB_NEWS.slice() : [];
  var page = document.body.getAttribute("data-page");

  news.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  function formatDate(dateText) {
    var date = new Date(dateText);
    if (Number.isNaN(date.getTime())) {
      return dateText;
    }

    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var day = String(date.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + day;
  }

  function renderRecentNews() {
    var container = document.getElementById("recent-news");
    if (!container) {
      return;
    }

    var recent = news.slice(0, 4);
    if (!recent.length) {
      container.innerHTML = '<p class="empty-state">暂无新闻，请在 `assets/js/site-data.js` 中添加数据。</p>';
      return;
    }

    container.innerHTML = recent
      .map(function (item) {
        return (
          '<article class="card">' +
          '<time datetime="' + item.date + '">' + formatDate(item.date) + '</time>' +
          "<h3>" + item.title + "</h3>" +
          "<p>" + item.summary + "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderAllNews() {
    var container = document.getElementById("all-news");
    if (!container) {
      return;
    }

    if (!news.length) {
      container.innerHTML = '<p class="empty-state">暂无新闻，请在 `assets/js/site-data.js` 中添加数据。</p>';
      return;
    }

    container.innerHTML = news
      .map(function (item) {
        var tag = item.tag ? " · " + item.tag : "";
        return (
          '<article class="timeline-item">' +
          '<time datetime="' + item.date + '">' + formatDate(item.date) + '</time>' +
          "<div>" +
          "<h3>" + item.title + "</h3>" +
          "<p>" + item.summary + tag + "</p>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  if (page === "home") {
    renderRecentNews();
  }

  if (page === "news") {
    renderAllNews();
  }
})();
