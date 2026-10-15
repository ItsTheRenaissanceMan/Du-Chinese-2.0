/**
 * Original, deterministic graded practice material.
 * Each topic has three to five manually written bilingual facts/events. Each
 * level adds a different grammatical frame and one of three reading tasks.
 * These are explicitly labeled practice variations, not independent editorial
 * stories. No Du Chinese content or other published lesson text is used.
 * Run from any directory: node scripts/generate-stories.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { additionalTopicsA } from './additional-topics-a.mjs';
import { additionalTopicsB } from './additional-topics-b.mjs';

const seed = (topic, topicEn, text) => ({
  topic, topicEn,
  facts: text.trim().split('\n').map(line => {
    const parts = line.trim().split('|');
    if (parts.length !== 2) throw new Error(`Invalid bilingual pair: ${line}`);
    return { zh: parts[0], en: parts[1] };
  }),
});

const baseTopics = {
  Everyday: [
    seed('早上的面包', 'Morning bread', `小林去买面包。|Xiaolin goes to buy bread.
店里没有小面包了。|The shop has run out of small bread rolls.
小林买了一个大面包，和朋友一起吃。|Xiaolin buys a large loaf and shares it with a friend.`),
    seed('图书馆的一天', 'A day at the library', `小林去图书馆还书。|Xiaolin goes to the library to return a book.
书里有一张旧照片。|There is an old photograph inside the book.
小林把照片交给工作人员。|Xiaolin gives the photograph to a staff member.`),
    seed('错过的公共汽车', 'The missed bus', `小林到车站的时候，车已经走了。|When Xiaolin reaches the stop, the bus has already left.
下一辆车要等十分钟。|There is a ten-minute wait for the next bus.
小林给朋友发消息，说自己会晚到。|Xiaolin messages a friend to say that they will arrive late.`),
    seed('窗边的小花', 'The flower by the window', `小林在窗边放了一盆花。|Xiaolin puts a potted flower by the window.
今天，花的叶子有一点干。|Today the flower's leaves are a little dry.
小林给花浇了一点水。|Xiaolin gives the flower a little water.`),
    seed('电梯里的邻居', 'A neighbor in the lift', `小林在电梯里遇到邻居。|Xiaolin meets a neighbor in the lift.
邻居拿着两个很重的袋子。|The neighbor is carrying two heavy bags.
小林帮邻居把袋子拿到门口。|Xiaolin helps carry the bags to the neighbor's door.`),
    seed('第一次做汤', 'Making soup for the first time', `小林想做一碗菜汤。|Xiaolin wants to make a bowl of vegetable soup.
水开了以后，小林才把菜放进去。|Xiaolin adds the vegetables only after the water boils.
汤有一点咸，小林又加了一些水。|The soup is a little salty, so Xiaolin adds some more water.`),
    seed('雨中的伞', 'An umbrella in the rain', `小林出门以后，天开始下雨。|It starts to rain after Xiaolin leaves home.
一位朋友带了两把伞。|A friend has brought two umbrellas.
朋友借给小林一把伞。|The friend lends Xiaolin an umbrella.`),
    seed('自行车的铃', 'A bicycle bell', `小林的自行车铃不响了。|Xiaolin's bicycle bell has stopped ringing.
小林请修车的人检查车铃。|Xiaolin asks a bicycle repairer to check the bell.
换好车铃以后，小林先试了一下。|After the bell is replaced, Xiaolin tests it first.`),
    seed('远方的明信片', 'A postcard from afar', `小林买了一张明信片。|Xiaolin buys a postcard.
小林在卡片上写了家里的地址。|Xiaolin writes their home address on the card.
旅行结束以后，明信片才到家。|The postcard reaches home only after the trip is over.`),
    seed('天气预报', 'The weather forecast', `小林看了明天的天气预报。|Xiaolin checks tomorrow's weather forecast.
预报说，下午可能下雨。|The forecast says that it may rain in the afternoon.
小林把去公园的时间改到上午。|Xiaolin moves the park visit to the morning.`),
    seed('邻居的钥匙', "A neighbor's key", `小林在楼下捡到一把钥匙。|Xiaolin finds a key downstairs.
钥匙上写着邻居的名字。|The neighbor's name is written on the key.
小林把钥匙还给了邻居。|Xiaolin returns the key to the neighbor.`),
    seed('两张车票', 'Two tickets', `小林想买两张火车票。|Xiaolin wants to buy two train tickets.
上午的车已经没有座位了。|There are no seats left on the morning train.
小林和朋友商量后，买了下午的票。|After discussing it with a friend, Xiaolin buys tickets for the afternoon.`),
    seed('安静的学习时间', 'A quiet study session', `小林和朋友一起学习。|Xiaolin studies with a friend.
两个人先把手机放进书包。|They first put their phones in their bags.
半个小时以后，他们休息了五分钟。|After half an hour, they take a five-minute break.`),
  ],
  Culture: [
    seed('饺子', 'Dumplings', `饺子里面可以放菜，也可以放肉。|Dumplings can contain vegetables or meat.
包饺子的时候，要把边捏好。|When making dumplings, the edges need to be pinched closed.
有些家庭喜欢在节日里一起包饺子。|Some families enjoy making dumplings together during festivals.`),
    seed('中国茶', 'Chinese tea', `茶有很多种，绿茶是其中一种。|There are many kinds of tea; green tea is one of them.
水太热，有时会让茶变苦。|Water that is too hot can sometimes make tea bitter.
不同的茶，适合的水温也可能不同。|Different teas may need different water temperatures.`),
    seed('筷子', 'Chopsticks', `吃饭的时候，很多人用筷子。|Many people use chopsticks when eating.
两根筷子一起动，就能夹起食物。|Moving the two chopsticks together lets you pick up food.
第一次用筷子的人，常常需要多练习。|People using chopsticks for the first time often need more practice.`),
    seed('春节', 'The Spring Festival', `春节是中国的重要节日。|The Spring Festival is an important festival in China.
很多家庭会在节日前打扫房子。|Many families clean their homes before the festival.
节日里的做法，在不同地方并不完全一样。|Festival customs are not exactly the same in different places.`),
    seed('中秋节', 'The Mid-Autumn Festival', `中秋节在农历八月十五。|The Mid-Autumn Festival falls on the fifteenth day of the eighth lunar month.
有些家庭会吃月饼、看月亮。|Some families eat mooncakes and look at the moon.
月饼有不同的大小和味道。|Mooncakes come in different sizes and flavors.`),
    seed('元宵节的灯', 'Lantern Festival lights', `元宵节在农历正月十五。|The Lantern Festival falls on the fifteenth day of the first lunar month.
有些地方会举办灯会。|Some places hold lantern displays.
人们看灯的时候，也可能一起猜灯谜。|While looking at the lanterns, people may also solve lantern riddles together.`),
    seed('书法', 'Calligraphy', `写毛笔字要用笔、墨和纸。|Writing with a brush requires a brush, ink, and paper.
手用的力不同，线条也会不同。|Different amounts of pressure from the hand produce different lines.
练字的人常常先观察，再下笔。|People practicing calligraphy often observe first and then put brush to paper.`),
    seed('皮影戏', 'Shadow puppetry', `皮影戏用灯光照着小人。|In shadow puppetry, a light shines on small figures.
小人的影子出现在幕布上。|The figures' shadows appear on a screen.
表演的人一边移动小人，一边讲故事。|The performers tell a story as they move the figures.`),
    seed('剪纸', 'Paper cutting', `剪纸的人用纸和剪刀做图案。|Paper cutters use paper and scissors to make designs.
把纸折起来，可以剪出重复的形状。|Folding the paper allows repeated shapes to be cut.
剪的时候要小心，不要伤到手。|Be careful while cutting so that you do not hurt your hands.`),
    seed('端午节', 'The Dragon Boat Festival', `端午节在农历五月初五。|The Dragon Boat Festival falls on the fifth day of the fifth lunar month.
一些地方有划龙舟的活动。|Some places hold dragon boat races.
不同地方的粽子，里面的馅也不一样。|Rice dumplings from different places have different fillings.`),
    seed('中国结', 'Chinese knots', `中国结通常用绳子编成。|Chinese knots are usually made by weaving cord.
编的时候，要记住绳子经过的位置。|When weaving, you need to keep track of where the cord passes.
做好的结可以挂起来，也可以送给朋友。|A finished knot can be hung up or given to a friend.`),
    seed('庙会', 'Temple fairs', `有些地方在节日里举办庙会。|Some places hold temple fairs during festivals.
庙会上可能有小吃，也可能有表演。|A temple fair may have snacks and performances.
一个地方的庙会，往往有自己的特色。|A place's temple fair often has its own distinctive features.`),
    seed('二胡', 'The erhu', `二胡是一种有两根弦的乐器。|The erhu is an instrument with two strings.
演奏的人用弓拉动琴弦。|The player uses a bow to move across the strings.
手的位置变了，声音的高低也会变。|When the hand's position changes, the pitch changes as well.`),
  ],
  Education: [
    seed('月亮的光', 'Moonlight', `月亮自己不会发光。|The moon does not produce its own light.
我们看到的月光，来自太阳。|The moonlight we see comes from the sun.
月亮反射了太阳的光。|The moon reflects the sun's light.`),
    seed('水的变化', 'Changes in water', `水很冷的时候，可以变成冰。|When water is very cold, it can turn into ice.
冰变暖以后，又会变成水。|When ice warms up, it turns back into water.
这个变化没有把水变成另一种物质。|This change does not turn water into a different substance.`),
    seed('植物的叶子', 'Plant leaves', `很多植物有绿色的叶子。|Many plants have green leaves.
叶子可以利用阳光，帮助植物制造养分。|Leaves can use sunlight to help the plant make nutrients.
植物也需要水和空气。|Plants also need water and air.`),
    seed('声音', 'Sound', `用手轻轻拨动琴弦，琴弦就会动。|Gently plucking a string makes it move.
琴弦的振动会产生声音。|The string's vibrations produce sound.
弦不再振动的时候，声音也会停下来。|When the string stops vibrating, the sound also stops.`),
    seed('磁铁', 'Magnets', `磁铁可以吸住一些铁做的东西。|A magnet can attract some objects made of iron.
木头和纸通常不会被磁铁吸住。|Wood and paper are usually not attracted to magnets.
不是所有的金属都会被磁铁吸住。|Not all metals are attracted to magnets.`),
    seed('过滤', 'Filtering', `沙子和水混在一起，会让水看起来很浑。|Sand mixed with water makes the water look cloudy.
滤纸可以把一些沙子留在纸上。|Filter paper can trap some of the sand.
水看起来清了，也不一定能直接喝。|Even if the water looks clear, it is not necessarily safe to drink directly.`),
    seed('四季', 'The seasons', `地球绕着太阳运动。|The Earth moves around the sun.
地球的轴是倾斜的。|The Earth's axis is tilted.
这使不同地方在一年里得到的阳光发生变化。|This changes the sunlight that different places receive over the year.`),
    seed('洗手', 'Washing hands', `手会接触很多东西。|Hands touch many things.
用肥皂和水洗手，可以去掉许多细菌。|Washing hands with soap and water can remove many bacteria.
吃东西以前，洗手是一个好习惯。|Washing your hands before eating is a good habit.`),
    seed('鸟的羽毛', 'Bird feathers', `鸟的羽毛有不同的作用。|Bird feathers have different functions.
有些羽毛帮助鸟飞，有些帮助鸟保暖。|Some feathers help birds fly; others help keep them warm.
有羽毛的鸟，不一定都会飞。|Having feathers does not mean that every bird can fly.`),
    seed('河水', 'River water', `河水常常从高处流向低处。|River water usually flows from higher ground to lower ground.
雨水可以流进河里。|Rainwater can flow into rivers.
保护河水，也要注意河的上游。|Protecting river water also means paying attention to the upstream area.`),
    seed('蝴蝶的成长', 'How butterflies grow', `蝴蝶先产卵。|A butterfly first lays eggs.
卵里出来的小虫会长成毛毛虫。|The small creatures that hatch from the eggs grow into caterpillars.
毛毛虫变成蛹以后，才会变成蝴蝶。|The caterpillar becomes a butterfly only after becoming a pupa.`),
    seed('影子', 'Shadows', `光照到一个不透明的东西上，就会出现影子。|A shadow appears when light shines on an opaque object.
光的位置变了，影子的位置也会变。|When the light's position changes, the shadow's position changes too.
观察影子的时候，要注意光从哪里来。|When observing a shadow, pay attention to where the light comes from.`),
    seed('省电', 'Saving electricity', `空房间里的灯，有时还亮着。|Sometimes the lights in an empty room are still on.
离开房间的时候，可以关掉不需要的灯。|When leaving a room, you can switch off lights that are not needed.
小小的习惯，也能减少一些用电。|Small habits can also reduce electricity use.`),
  ],
  Fiction: [
    seed('会说话的石头', 'The talking stone', `故事里，小林在河边找到一块石头。|In the story, Xiaolin finds a stone by a river.
每到晚上，石头就轻声说一个字。|Each evening, the stone softly says one word.
小林把字写下来，发现它们是一句问候。|Xiaolin writes the words down and discovers that they form a greeting.`),
    seed('迟到的影子', 'The late shadow', `故事里，小林的影子总是慢一步。|In the story, Xiaolin's shadow is always one step behind.
小林停下来，影子才追上来。|The shadow catches up only when Xiaolin stops.
小林从此每天留一点时间等它。|From then on, Xiaolin sets aside a little time each day to wait for it.`),
    seed('云上的花园', 'A garden on a cloud', `故事里，一片云上长着花。|In the story, flowers grow on a cloud.
云里的小鸟每天给花唱歌。|A little bird in the cloud sings to the flowers every day.
花开的时候，天空就多了一种颜色。|When the flowers bloom, the sky gains another color.`),
    seed('没有声音的钟', 'The silent clock', `故事里，一座钟从来不响。|In the story, a clock never rings.
一位孩子发现，钟在用灯光报时。|A child discovers that the clock tells the time using light.
大家看懂灯光以后，就不再说钟坏了。|Once everyone understands the lights, they stop saying the clock is broken.`),
    seed('小猫的地图', "The kitten's map", `故事里，一只小猫画了一张地图。|In the story, a kitten draws a map.
地图上没有路，只有好闻的气味。|The map has no roads, only pleasant smells.
另一只猫顺着气味，找到了朋友的家。|Another cat follows the smells and finds a friend's home.`),
    seed('装着风的盒子', 'A box of wind', `故事里，小林收到一个小盒子。|In the story, Xiaolin receives a small box.
盒子一打开，就吹出凉凉的风。|A cool breeze blows out as soon as the box is opened.
小林在热天打开它，让邻居一起乘凉。|Xiaolin opens it on hot days so that the neighbors can cool off too.`),
    seed('书里的门', 'The door in a book', `故事里，小林在书里看到一扇门。|In the story, Xiaolin sees a door inside a book.
门后是一间没有书的图书馆。|Behind it is a library with no books.
小林带去一本书，图书馆就有了第一位读者。|Xiaolin brings a book, and the library gains its first reader.`),
    seed('会游泳的灯', 'The swimming lamp', `故事里，一盏小灯住在湖里。|In the story, a little lamp lives in a lake.
晚上，它游到岸边，为晚归的人照路。|At night it swims to the shore and lights the way for people returning late.
人们把湖水保护好，小灯就一直亮着。|As people take care of the lake, the little lamp keeps shining.`),
    seed('雨的信', "The rain's letter", `故事里，每一滴雨都带着一个字。|In the story, every raindrop carries a word.
小林把雨水收进一只碗里。|Xiaolin collects the rainwater in a bowl.
碗底出现了一句话：请照顾这棵树。|A sentence appears at the bottom of the bowl: Please look after this tree.`),
    seed('月亮的围巾', "The moon's scarf", `故事里，月亮觉得夜里有一点冷。|In the story, the moon feels a little cold at night.
一位奶奶用白云织了一条围巾。|A grandmother knits a scarf out of white clouds.
月亮围上围巾以后，仍然给大地送来光。|Even after putting on the scarf, the moon continues sending light to the Earth.`),
    seed('种下的声音', 'A sound planted in the ground', `故事里，一位孩子把笑声种进土里。|In the story, a child plants laughter in the soil.
春天来了，地里长出小小的铃铛。|When spring arrives, little bells grow out of the ground.
风一吹，大家就听见那位孩子的笑声。|Whenever the wind blows, everyone hears the child's laughter.`),
    seed('迷路的星星', 'The lost star', `故事里，一颗星星掉在公园里。|In the story, a star falls into a park.
小林把它放在最高的树上。|Xiaolin puts it on the tallest tree.
其他星星看见它，就来带它回家。|The other stars see it and come to take it home.`),
    seed('停在昨天的车', 'The bus that stops in yesterday', `故事里，一辆车的最后一站是昨天。|In the story, a bus's final stop is yesterday.
小林上车以后，看见昨天忘记带走的伞。|After getting on, Xiaolin sees the umbrella they forgot to take yesterday.
小林拿好伞，再坐车回到今天。|Xiaolin picks up the umbrella and takes the bus back to today.`),
  ],
  History: [
    seed('蔡伦与造纸', 'Cai Lun and papermaking', `很早以前，中国已经有人造纸。|People in China were making paper long ago.
东汉时，蔡伦改进了造纸的方法。|During the Eastern Han, Cai Lun improved papermaking methods.
他并不是第一个造纸的人。|He was not the first person to make paper.`),
    seed('丝绸之路', 'The Silk Road', `古代，商人经过很多地方运送货物。|In ancient times, merchants transported goods through many places.
今天，人们把其中一些路线叫作丝绸之路。|Today people call some of these routes the Silk Road.
丝绸之路不是只有一条路。|The Silk Road was not just one road.`),
    seed('李白', 'Li Bai', `李白是唐代的一位诗人。|Li Bai was a poet during the Tang dynasty.
他在诗里写过月亮，也写过朋友。|He wrote about the moon and about friends in his poems.
他的许多诗，今天还有人读。|Many of his poems are still read today.`),
    seed('长城', 'The Great Wall', `中国不同的时代，都有人修筑城墙。|People built walls in China during different periods.
今天保存下来的长城，有很多部分修于明代。|Many surviving sections of the Great Wall were built during the Ming dynasty.
长城并不是一次修好的。|The Great Wall was not built all at once.`),
    seed('兵马俑', 'The terracotta army', `秦始皇陵附近有很多陶俑。|There are many clay figures near the tomb of the First Emperor of Qin.
其中有士兵的样子，也有马的样子。|Some look like soldiers, and others look like horses.
这些陶俑让人们了解古代的一些工艺。|These clay figures help people learn about some ancient crafts.`),
    seed('郑和的船队', "Zheng He's fleet", `明代，郑和多次带领船队出海。|During the Ming dynasty, Zheng He led fleets on several sea voyages.
船队到过亚洲和非洲的一些地方。|The fleets visited parts of Asia and Africa.
这些航行需要很多人的合作。|These voyages required cooperation among many people.`),
    seed('印刷术', 'Printing', `雕版印刷要先把文字刻在木板上。|Woodblock printing begins by carving text into wooden blocks.
宋代，毕昇用活字进行印刷。|During the Song dynasty, Bi Sheng printed with movable type.
活字可以移动，也可以再次使用。|Movable type can be moved and used again.`),
    seed('指南针', 'The compass', `古代中国的人发现了磁石的一些特点。|People in ancient China discovered some properties of lodestone.
后来，人们用磁针帮助判断方向。|Later, people used magnetic needles to help determine direction.
指南针在航海中发挥了作用。|The compass played a role in navigation.`),
    seed('敦煌', 'Dunhuang', `敦煌在今天的中国甘肃省。|Dunhuang is in what is now China's Gansu Province.
莫高窟里保存着许多壁画和雕像。|The Mogao Caves preserve many murals and sculptures.
这些作品来自不同的历史时期。|These works come from different historical periods.`),
    seed('张骞', 'Zhang Qian', `张骞生活在西汉时期。|Zhang Qian lived during the Western Han period.
他曾奉命前往西域。|He was sent on missions to the Western Regions.
他的经历帮助汉朝了解更远的地方。|His experiences helped the Han court learn about more distant places.`),
    seed('北京故宫', 'The Forbidden City', `北京故宫曾是明清两代的皇宫。|The Forbidden City in Beijing was the imperial palace during the Ming and Qing dynasties.
宫里有很多不同用途的建筑。|The palace contains many buildings with different uses.
今天，故宫也是一座博物馆。|Today the Forbidden City is also a museum.`),
    seed('都江堰', 'Dujiangyan', `都江堰是四川的一项古代水利工程。|Dujiangyan is an ancient water-management project in Sichuan.
人们用它来分水，也用它来帮助灌溉。|People use it to divert water and to help with irrigation.
这项工程至今仍在发挥作用。|This project still serves a purpose today.`),
    seed('唐代的长安', "Chang'an during the Tang dynasty", `长安曾是唐代的都城。|Chang'an was the capital of the Tang dynasty.
城里有来自不同地方的人。|There were people from many different places in the city.
今天的西安与古代长安的位置有联系。|The location of today's Xi'an is connected to that of ancient Chang'an.`),
  ],
};

export const topics = Object.fromEntries(Object.entries(baseTopics).map(([category, seeds]) => [
  category,
  [...seeds, ...additionalTopicsA[category], ...additionalTopicsB[category]],
]));

const pair = (zh, en) => ({ zh, en });
const exercises = [
  { id: 'notice', title: '第一次了解', titleEn: 'A first look' },
  { id: 'explain', title: '讲给朋友听', titleEn: 'Tell a friend' },
  { id: 'question', title: '再问一个问题', titleEn: 'One more question' },
];

// Each exercise is a coherent short learning narrative. Higher levels introduce
// longer clauses, comparison, qualified conclusions, and reflective language;
// the factual core deliberately stays stable for graded rereading.
function frame(level, topic, topicEn, exercise) {
  const intros = {
    1: [pair('今天，小林看了一个小故事。', 'Today Xiaolin reads a little story.'), pair('小林先读，再想一想。', 'Xiaolin reads first, then thinks for a moment.')],
    2: [pair('今天，小林读了一个新故事。', 'Today Xiaolin reads a new story.'), pair('遇到不懂的地方，小林会停下来查一查。', 'When something is unclear, Xiaolin stops to look it up.')],
    3: [pair(`为了练习阅读，小林找来一篇题为《${topic}》的短文。`, `To practice reading, Xiaolin finds a short passage titled “${topicEn}.”`), pair('小林没有急着往下读，而是先把不熟悉的词记在纸上。', 'Instead of rushing ahead, Xiaolin first writes unfamiliar words on paper.')],
    4: [pair(`一看到《${topic}》这个题目，小林才发现自己对相关内容的理解并不完整。`, `On seeing the title “${topicEn},” Xiaolin realizes that their understanding of the subject is incomplete.`), pair('虽然短文不长，小林还是决定逐句阅读，免得忽略关键的细节。', 'Although the passage is short, Xiaolin decides to read it sentence by sentence to avoid missing key details.')],
    5: [pair(`在讨论题为《${topic}》的短文之前，小林特意整理了一遍材料，希望把模糊的印象变成能够说明白的认识。`, `Before discussing the short passage titled “${topicEn},” Xiaolin deliberately reviews the material, hoping to turn vague impressions into an understanding that can be explained clearly.`), pair('与其凭着熟悉的几个词就匆忙判断，小林宁愿多花一点时间，分清文字究竟表达了什么。', 'Rather than judge hastily from a few familiar words, Xiaolin prefers to spend more time working out what the text actually expresses.')],
    6: [pair(`围绕《${topic}》这篇短文的讨论刚刚开始，小林便意识到，所谓熟悉，有时不过是把零散印象误当成了系统认识。`, `As the discussion of the short passage “${topicEn}” begins, Xiaolin realizes that what is called familiarity sometimes amounts to mistaking scattered impressions for systematic understanding.`), pair('要让交流超越想当然的判断，首先得耐心梳理材料中的细节，既不因表达简短而轻视它，也不因词语陌生而夸大它。', 'For an exchange to go beyond assumptions, its details must first be examined patiently, neither dismissed because the wording is brief nor exaggerated because the vocabulary is unfamiliar.')],
  };
  const bridges = {
    1: pair('小林现在知道得多一点了。', 'Xiaolin now knows a little more.'),
    2: pair('读完以后，小林把最重要的内容写了下来。', 'After reading, Xiaolin writes down the most important points.'),
    3: pair('这几句话看起来简单，不过要说清楚，仍然需要认真理解。', 'These sentences look simple, but explaining them clearly still requires careful understanding.'),
    4: pair('相比一开始的印象，这些具体的内容让小林看到了更多值得思考的地方。', 'Compared with the initial impressions, these concrete details give Xiaolin more to think about.'),
    5: pair('小林渐渐明白，真正的理解不只是记住几个关键词，还包括知道这些词在具体语境里如何互相联系。', 'Xiaolin gradually realizes that real understanding involves not only remembering key words but also knowing how they connect in a particular context.'),
    6: pair('倘若只把关键词逐一背熟，却不追问它们在语境中如何构成意义，那么看似牢固的记忆，也可能掩盖尚未澄清的疑问。', 'If one merely memorizes key words without asking how they create meaning in context, seemingly solid recall may conceal questions that have yet to be clarified.'),
  };
  const endings = {
    1: {
      notice: [pair('小林画了一个小图。', 'Xiaolin draws a small picture.'), pair('看着图，小林又读了一遍。', 'Looking at the picture, Xiaolin reads it again.')],
      explain: [pair('小林把这些话告诉朋友。', 'Xiaolin tells a friend these things.'), pair('朋友说：我也想学。', 'The friend says: I want to learn too.')],
      question: [pair('小林还有一个问题。', 'Xiaolin still has a question.'), pair('小林把问题写下来，明天再看。', 'Xiaolin writes the question down to look at again tomorrow.')],
    },
    2: {
      notice: [pair('为了记得更清楚，小林画了一张小图。', 'To remember more clearly, Xiaolin draws a small diagram.'), pair('第二次读的时候，小林一边看图，一边读。', 'On the second reading, Xiaolin reads while looking at the diagram.')],
      explain: [pair('朋友来了，小林就用自己的话讲了一遍。', 'When a friend arrives, Xiaolin explains it once in their own words.'), pair('朋友有一个词没听懂，小林就慢慢说给朋友听。', 'The friend does not understand one word, so Xiaolin says it slowly for them.')],
      question: [pair('小林还想知道更多，就写下了一个问题。', 'Wanting to know more, Xiaolin writes down a question.'), pair('今天不一定能找到答案，不过明天可以接着找。', 'The answer may not be found today, but the search can continue tomorrow.')],
    },
    3: {
      notice: [pair('小林试着用一张图，把文字里的意思连起来。', 'Xiaolin tries to connect the ideas in the text using a diagram.'), pair('等到再读一遍时，小林已经能够说出自己刚才没有注意到的细节。', 'By the time Xiaolin reads it again, they can identify details they missed earlier.')],
      explain: [pair('朋友问起这段内容时，小林尽量用自己的话解释，而不是照着原文念。', 'When a friend asks about the passage, Xiaolin tries to explain it in their own words instead of reading the original aloud.'), pair('解释到一半，小林才发现有一个词还没完全弄懂，于是又查了一次。', 'Halfway through the explanation, Xiaolin realizes that one word is not fully understood and looks it up again.')],
      question: [pair('与其假装已经懂了，小林更愿意把还不清楚的问题写下来。', 'Rather than pretend to understand, Xiaolin prefers to write down the remaining questions.'), pair('下一次阅读时，小林打算带着这个问题，寻找更具体的答案。', 'During the next reading, Xiaolin plans to look for a more specific answer with this question in mind.')],
    },
    4: {
      notice: [pair('为了检验自己的理解，小林没有立即背诵原文，而是先画出内容之间的联系。', 'To test their understanding, Xiaolin first diagrams the connections between ideas rather than immediately memorizing the original text.'), pair('图里有一处始终画不明白，反而提醒小林回到原文，重新确认那句话的意思。', 'One part of the diagram remains unclear, prompting Xiaolin to return to the original and check that sentence again.')],
      explain: [pair('向朋友解释的时候，小林发现，只有真正理解了前后关系，才不容易把话说乱。', 'While explaining it to a friend, Xiaolin discovers that understanding the relationships between ideas helps keep the explanation in order.'), pair('朋友提出的问题虽然很简单，却让小林看清了自己原先忽略的一处细节。', 'Although the friend asks a simple question, it helps Xiaolin recognize a detail previously overlooked.')],
      question: [pair('小林把已知的内容和仍待解答的问题分开记录，避免把猜测当成事实。', 'Xiaolin records what is known separately from unanswered questions, avoiding treating guesses as facts.'), pair('即使暂时没有答案，这样的记录也能为下一次阅读提供一个明确的方向。', 'Even without an immediate answer, these notes can give the next reading a clear direction.')],
    },
    5: {
      notice: [pair('小林尝试把段落改画成一幅示意图，并用图中的空白检查自己的理解是否存在断点。', 'Xiaolin tries converting the passage into a diagram and uses its gaps to check for breaks in understanding.'), pair('这种做法并不意味着图片能够替代文字，而是借助另一种表达方式，暴露阅读时容易被顺畅语句掩盖的问题。', 'This does not mean pictures can replace text; a different form of expression helps expose problems that smooth sentences can conceal during reading.')],
      explain: [pair('当朋友要求举例时，小林才意识到，复述结论和说明结论之间，仍然隔着一段需要自己完成的思考。', 'When a friend asks for an example, Xiaolin realizes that repeating a conclusion and explaining it are separated by reasoning that must still be done.'), pair('两人于是回到具体的词句上讨论，直到每一处解释都能与原文对应，而不是仅仅听起来像一个答案。', 'They therefore return to the wording and discuss it until each explanation corresponds to the text instead of merely sounding like an answer.')],
      question: [pair('对于尚未解决的疑问，小林既不急于填入一个听起来合理的答案，也不因为暂时查不到就把它搁置不管。', 'For unresolved questions, Xiaolin neither rushes to fill in a plausible-sounding answer nor abandons them because an immediate answer is unavailable.'), pair('小林记下疑问产生的位置，准备在下一次阅读中比较不同材料，逐步缩小需要进一步核实的范围。', 'Xiaolin notes where the questions arose and plans to compare different materials during the next reading, gradually narrowing what needs further checking.')],
    },
    6: {
      notice: [pair('把段落转化为示意图之后，小林并未把图的完整当作理解的完成，而是沿着各处联系，逐一核查其中是否存在未经说明的跳跃。', 'After turning the passage into a diagram, Xiaolin does not equate a complete diagram with complete understanding, but checks each connection for unexplained leaps.'), pair('重新阅读所带来的价值，正在于让熟悉的表达显露出新的层次：昨日以为不言自明的地方，今日反倒成了进一步思考的起点。', 'The value of rereading lies in revealing new layers within familiar expressions: what seemed self-evident yesterday becomes the starting point for further thought today.')],
      explain: [pair('朋友追问之后，小林不得不把原本连贯的复述拆解开来，辨别哪些说法来自材料，哪些只是自己在阅读过程中补上的推断。', 'After a friend asks follow-up questions, Xiaolin has to break down the fluent retelling and distinguish statements from the material from inferences added during reading.'), pair('待这些界限逐渐清晰，交流才从交换几个结论，转向共同检验理解的依据；说得流利，终于不再被轻易等同于想得周全。', 'As these boundaries become clearer, the exchange moves from trading conclusions to jointly testing the grounds for understanding; fluency is finally no longer casually equated with thorough thinking.')],
      question: [pair('小林把尚存的疑问连同产生疑问的语境一并记录，既保留追索的线索，也提醒自己，暂时不能回答并不等于问题本身没有价值。', 'Xiaolin records the remaining questions together with the context that prompted them, preserving clues for further inquiry and remembering that a question is not worthless merely because it cannot yet be answered.'), pair('下一次阅读未必会立即带来确定的答案，却可能帮助小林重新界定问题，使原先笼统的困惑，逐渐成为能够认真讨论和核实的具体事项。', 'The next reading may not immediately yield a definite answer, but it may help Xiaolin redefine the question, gradually turning a vague uncertainty into something specific that can be discussed and checked carefully.')],
    },
  };
  return { intro: intros[level], bridge: bridges[level], ending: endings[level][exercise.id] };
}

export function generatePracticeStories() {
  const result = [];
  for (let level = 1; level <= 6; level++) {
    for (const [category, categoryTopics] of Object.entries(topics)) {
      for (const [index, topic] of categoryTopics.entries()) {
        const exercise = exercises[(index + level - 1) % exercises.length];
        const narrative = frame(level, topic.topic, topic.topicEn, exercise);
        const sentences = [...narrative.intro, ...topic.facts, narrative.bridge, ...narrative.ending];
        result.push({
          id: `practice-l${level}-${category.toLowerCase()}-${String(index + 1).padStart(2, '0')}-${exercise.id}`,
          title: `${topic.topic}：${exercise.title}`,
          titleEn: `${topic.topicEn}: ${exercise.titleEn}`,
          level, category,
          summary: `A guided reading of “${topic.topicEn}.” Practice reading: ${exercise.titleEn.toLowerCase()}. This topic recurs at other levels.`,
          minutes: Math.max(1, Math.ceil(sentences.reduce((sum, sentence) => sum + sentence.zh.length, 0) / 180)),
          sentences,
          series: 'Practice variations',
        });
      }
    }
  }
  return result;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const destination = new URL('../src/data/catalog.json', import.meta.url);
  await mkdir(path.dirname(fileURLToPath(destination)), { recursive: true });
  const generated = generatePracticeStories();
  await writeFile(destination, JSON.stringify(generated, null, 2) + '\n', 'utf8');
  console.log(`Generated ${generated.length} labeled guided readings (195 distinct topic seeds per level, one reading per topic at each level).`);
}
