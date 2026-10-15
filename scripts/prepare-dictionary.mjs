import { createRequire } from 'node:module';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { convert as convertPinyin } from 'pinyin-pro';

const require = createRequire(import.meta.url);
const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const packageRoot = dirname(require.resolve('cedict-json'));
const sourceBytes = await readFile(join(packageRoot, 'cedict.json'));
const source = JSON.parse(sourceBytes.toString('utf8'));
const packageInfo = JSON.parse(await readFile(join(packageRoot, 'package.json'), 'utf8'));

// Original, approximate reading bands. These are deliberately not labeled official HSK levels.
const commonWords = [
  '我 你 您 他 她 它 我们 你们 他们 她们 是 的 了 吗 呢 吧 不 没 没有 有 在 和 也 都 很 个 两 一 二 三 四 五 六 七 八 九 十 百 人 中国 中文 汉字 汉语 朋友 家 书 水 茶 咖啡 吃 喝 买 去 来 回 看 读 听 说 写 学 学习 喜欢 想 要 可以 会 能 好 大 小 多 少 高 低 新 老 热 冷 天 日 月 年 今天 明天 昨天 现在 时候 时间 早上 上午 中午 下午 晚上 晚安 你好 再见 谢谢 不客气 对不起 没关系 请 爱 妈妈 爸爸 儿子 女儿 先生 小姐 老师 学生 学校 医院 商店 钱 块 元 本 杯 只 岁 点 分钟 多少 什么 谁 哪 哪儿 这 那 这里 那里 怎么 叫 名字 工作 住 坐 开 桌子 椅子 电脑 电影 手机 衣服 狗 猫 菜 水果 苹果 米饭 面条 饭 鸡蛋 牛奶 白 黑 红 绿 蓝 黄 颜色',
  '每 第 比 更 最 再 又 还 已经 正在 因为 所以 但是 或者 还是 如果 过 得 从 到 离 让 给 别 应该 一起 一样 觉得 知道 认识 懂 明白 希望 帮助 告诉 问 回答 介绍 准备 开始 结束 事情 问题 办法 习惯 练习 记得 忘记 需要 决定 选择 找 发现 看到 听到 找到 等 走 跑 游泳 旅游 旅行 运动 睡觉 起床 休息 生病 药 送 进 出 进来 出去 出门 回家 看见 带 穿 洗 做 教 学会 笑 快乐 高兴 难过 累 忙 饿 渴 对 错 远 近 长 短 快 慢 早 晚 贵 便宜 安静 新鲜 干净 漂亮 可爱 好吃 有趣 容易 难 重要 非常 太 真 一点 有点 一些 所有 一直 经常 常常 有时候 总是 可能 当然 北京 上海 公园 图书馆 饭馆 餐厅 火车 汽车 自行车 地铁 飞机 车站 机场 路 街 道 城市 村子 地方 房间 门 窗 窗户 左边 右边 上 下 前 后 里 外 旁边 中间 边 上面 下面 里面 外面 树 花 草 河 山 海 太阳 月亮 风 雨 雪 天气 孩子 男 女 男人 女人 哥哥 姐姐 弟弟 妹妹 奶奶 爷爷 家人 同学 邻居 生日 礼物 故事 文化 历史 生活 世界 水杯 包 票 早餐 午饭 晚饭 汉堡 面包 糖 鱼 肉 蔬菜 香蕉 桌 碗 盘子 杯子 双 张 份 件 次 遍 句 句话 星期 周 春天 夏天 秋天 冬天 周末 去年 今年 明年',
  '地 着 把 被 才 就 虽然 可是 比较 越来越 而且 一边 为了 除了 也许 必须 关于 一般 主要 特别 确实 实在 认真 小心 仔细 突然 终于 后来 然后 最后 原来 结果 于是 尽管 只 只是 只要 只有 无论 不管 即使 不仅 要是 根据 通过 面对 成为 作为 保持 坚持 放弃 完成 理解 解释 表达 讨论 交流 研究 调查 分析 解决 计划 组织 安排 参加 加入 支持 保护 发展 改变 改善 提高 减少 增加 影响 造成 产生 提供 获得 创造 实现 证明 比如 例如 同时 另外 其实 实际 经验 机会 方法 过程 原因 目的 方向 内容 意思 意见 观点 态度 关系 环境 社会 国家 经济 交通 教育 科学 技术 自然 动物 植物 森林 土地 空气 污染 安全 危险 健康 身体 心情 感觉 感情 感动 紧张 失望 担心 满意 相信 成功 失败 努力 进步 成长 回忆 印象 梦 梦想 传统 节日 春节 中秋节 博物馆 艺术 音乐 诗 诗人 作家 小说 文章 阅读 词 词语 词典 字典 词汇 语法 翻译 发音 声音 声调 简单 复杂 清楚 清晰 详细 深 浅 厚 薄 重 轻 软 硬 熟悉 陌生 普通 合适 正确 错误 相同 不同 特殊 完全 基本 永远 曾经 仍然 暂时 逐渐 似乎 大概 也就是说 反而 不但 并且 甚至 却',
  '除非 宁可 宁愿 与其 既然 难道 究竟 毕竟 总之 因此 然而 此外 从而 以至于 尤其 反映 表明 意味着 涉及 探索 思考 推动 促进 尊重 承认 承担 维持 建立 达到 评价 判断 观察 现象 领域 结构 形式 价值 责任 标准 条件 范围 制度 政策 资源 传统 习俗 文明 哲学 思想 智慧 自由 平等 公平 道德 理想 信念 意义 遗产 考古 贸易 丝绸 皇帝 朝代 朝廷 战争 战略 将军 勇气 忠诚 牺牲 友谊 矛盾 冲突 困难 挑战 克服 适应 面临 繁荣 衰落 变迁 演变 多样 丰富 生动 细致 耐心 独立 共同 各自 凭借 依靠 伴随 包含 结合 融合 吸收 积累 传播 传承 描写 象征 寓言 传说 灵感 叙述 情节 人物 角色 作者 读者 作品 主题 修辞 成语 一方面 另一方面',
];
const estimates = new Map();
commonWords.forEach((words, index) => {
  for (const word of words.split(/\s+/)) if (!estimates.has(word)) estimates.set(word, index + 1);
});
for (const word of ['银行', '邮局', '邮件', '信', '信用卡', '取钱', '存钱']) estimates.set(word, 2);

function estimatedLevel(entry) {
  if (estimates.has(entry.simplified)) return estimates.get(entry.simplified);
  const definitions = entry.english.join('; ');
  if (/(archaic|classical|literary|botany|chemistry|medical|geology|surname|variant of)/i.test(definitions)) return 6;
  // Unmapped words are intentionally shown as higher difficulty, without pretending to be exam ratings.
  return Array.from(entry.simplified).length >= 4 ? 6 : 5;
}

const entries = source.map(entry => ({
  simplified: entry.simplified,
  traditional: entry.traditional,
  pinyin: convertPinyin(entry.pinyin.replace(/u:/gi, 'ü').replace(/([a-züv]+)[05]\b/gi, '$1')),
  definitions: entry.english,
  level: estimatedLevel(entry),
}));
if (entries.length < 100000 || !entries.some(entry => entry.simplified === '中国')) {
  throw new Error('Unexpected CC-CEDICT dataset; refused to generate an incomplete dictionary.');
}
const output = join(projectRoot, 'public/data');
await mkdir(output, { recursive: true });
await writeFile(join(output, 'cedict.json'), JSON.stringify(entries));
await writeFile(join(output, 'CEDICT-LICENSE.txt'), await readFile(join(packageRoot, 'LICENSE')));
const metadata = {
  name: 'CC-CEDICT',
  contributors: 'CC-CEDICT contributors; JSON distribution by Matt Tingen',
  source: 'https://www.mdbg.net/chinese/dictionary?page=cc-cedict',
  distribution: `cedict-json@${packageInfo.version}`,
  repository: 'https://github.com/matt-tingen/cedict-json',
  license: 'CC-BY-SA-4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  entryCount: entries.length,
  simplifiedHeadwordCount: new Set(entries.map(entry => entry.simplified)).size,
  sourceSha256: createHash('sha256').update(sourceBytes).digest('hex'),
  modifications: 'Renamed english to definitions, converted numeric pinyin to tone marks, added original approximate reading-difficulty bands. No dictionary definitions removed.',
  difficultyDisclaimer: 'Reading bands are estimates, not official HSK classifications or validated assessment scores.',
};
await writeFile(join(output, 'cedict-meta.json'), `${JSON.stringify(metadata, null, 2)}\n`);
console.log(`Prepared ${entries.length.toLocaleString()} CC-CEDICT entries (${metadata.simplifiedHeadwordCount.toLocaleString()} headwords). Data license: ${metadata.license}. Difficulty bands are estimates.`);
