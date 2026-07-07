/**
 * 学习路径推荐器 — 纯 JS 实现
 * 点击角色按钮 → 动态显示对应的学习路线
 */
document.addEventListener('DOMContentLoaded', function () {
  var finder = document.querySelector('.path-finder');
  if (!finder) return;

  var buttons = finder.querySelectorAll('[data-role]');
  var resultPanel = finder.querySelector('.path-result');
  if (!resultPanel) return;

  // All result divs — initially hidden
  var results = resultPanel.querySelectorAll('[data-result]');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var role = this.getAttribute('data-role');

      // Toggle active class on buttons
      buttons.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      // Show/hide result
      results.forEach(function (r) {
        r.style.display = r.getAttribute('data-result') === role ? 'block' : 'none';
      });

      // Show result panel with transition
      resultPanel.style.display = 'block';
    });
  });
});
