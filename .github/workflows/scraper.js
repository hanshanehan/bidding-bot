// 简化版抓取脚本
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // 抓取三个国际机构网站...
  // 保存到 bidding_report.md
  
  await browser.close();
})();
