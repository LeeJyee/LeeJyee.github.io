# LeeJyee.github.io

基于 Vanilla Web Development（纯 `HTML + CSS + JavaScript`）构建的课题组网站模板，可直接部署到 GitHub Pages。

## 页面结构

- `index.html`：主页（含近期科研进展）
- `members.html`：成员介绍页
- `works.html`：工作成果页
- `news.html`：完整 News 页

## 目录说明

```text
.
├── index.html
├── members.html
├── works.html
├── news.html
└── assets
    ├── css
    │   └── style.css
    └── js
        ├── site-data.js
        └── main.js
```

## 本地预览

在仓库根目录运行：

```bash
python3 -m http.server 8000
```

然后访问：`http://localhost:8000`

## 部署到 GitHub Pages

1. 将代码推送到仓库默认分支（如 `main`）。
2. 进入 GitHub 仓库 `Settings` -> `Pages`。
3. `Build and deployment` 选择 `Deploy from a branch`。
4. Branch 选择 `main`，文件夹选择 `/ (root)`，保存。
5. 等待部署完成后即可通过 `https://<username>.github.io/<repo>/` 访问。

如果仓库名是 `<username>.github.io`，访问地址通常为 `https://<username>.github.io/`。

## 内容维护

- 修改新闻：编辑 `assets/js/site-data.js` 中的 `window.LAB_NEWS`。
- 修改成员信息：编辑 `members.html`。
- 修改成果信息：编辑 `works.html`。
- 调整视觉样式：编辑 `assets/css/style.css`。
