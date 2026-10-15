/** Newly authored bilingual topic cores for clearly labeled graded practice. */
const seed = (topic, topicEn, text) => ({
  topic,
  topicEn,
  facts: text.trim().split('\n').map(line => {
    const parts = line.trim().split('|');
    if (parts.length !== 2) throw new Error(`Invalid bilingual pair: ${line}`);
    return { zh: parts[0], en: parts[1] };
  }),
});

export const additionalTopicsA = {
  Everyday: [
    seed('剪短一点', 'A little shorter', `小夏去理发店剪头发。|Xiaoxia goes to a salon for a haircut.
她先用手指告诉理发师，自己想剪掉多长。|She first uses her fingers to show the hairdresser how much she wants cut off.
理发师剪了一点，请她看看镜子。|The hairdresser cuts a little and asks her to look in the mirror.
小夏觉得长度正好，不用再剪了。|Xiaoxia thinks the length is just right and needs no more cutting.`),
    seed('退回的包裹', 'The returned parcel', `阿明收到一件太小的外套。|Aming receives a coat that is too small.
他看了商店的退货说明，把外套重新装好。|He reads the shop's return instructions and repacks the coat.
在邮局，工作人员给了他一张寄件证明。|At the post office, a staff member gives him proof of posting.
他保留这张纸，等商店确认收到包裹。|He keeps the paper while waiting for the shop to confirm receipt of the parcel.`),
    seed('挑一个西瓜', 'Choosing a watermelon', `小琴想给家人买一个西瓜。|Xiaoqin wants to buy a watermelon for her family.
摊主问她，今天吃还是明天吃。|The stallholder asks whether she will eat it today or tomorrow.
小琴说今天吃，请摊主帮忙挑一个熟的。|Xiaoqin says today and asks the stallholder to help choose a ripe one.
回家后，她切开西瓜，给每个人分了一块。|After getting home, she cuts open the watermelon and gives each person a slice.`),
    seed('货架上的价格', 'The price on the shelf', `小杰在超市拿了两盒饼干。|Xiaojie picks up two boxes of biscuits at the supermarket.
结账时，他发现价钱比自己想的高。|At the checkout, he finds the price higher than he expected.
店员陪他回到货架，发现他看的是旁边商品的价格。|A shop assistant goes back to the shelf with him and discovers he read the neighboring product's price.
小杰重新看清标签，只买了一盒。|Xiaojie checks the label carefully and buys only one box.`),
    seed('野餐的毯子', 'The picnic blanket', `几位朋友约好去草地上野餐。|Several friends arrange to have a picnic on the grass.
到了公园，他们才发现没人带毯子。|Only after reaching the park do they realize nobody has brought a blanket.
大家找到一张空桌子，把食物摆在桌上。|They find an empty table and put the food on it.
吃完以后，他们把自己的垃圾都带走了。|After eating, they take all their rubbish away.`),
    seed('等候送货', 'Waiting for a delivery', `小雅在家等一张新桌子。|Xiaoya waits at home for a new table.
送货员打电话说，地图把他带到了楼的另一边。|The delivery driver calls to say the map has led him to the other side of the building.
小雅告诉他，入口在药店旁边。|Xiaoya tells him the entrance is next to the pharmacy.
桌子送到后，她谢谢送货员，也检查了桌角。|After the table arrives, she thanks the driver and checks its corners.`),
    seed('太重的行李', 'Luggage that is too heavy', `出发前，阿文称了一下自己的行李箱。|Before leaving, Awen weighs his suitcase.
箱子比机票上写的限额重了两公斤。|The suitcase is two kilograms over the allowance stated on his ticket.
他拿出三本书和一双不需要的鞋。|He removes three books and a pair of shoes he does not need.
再称一次，箱子的重量终于合适了。|When he weighs it again, the suitcase is finally within the allowance.`),
    seed('一条干净的毛巾', 'A clean towel', `小宁住进旅馆后，发现房间里少了一条毛巾。|After checking into a hotel, Xiaoning finds that a towel is missing from the room.
她打电话给前台，说明自己的房间号。|She calls reception and gives her room number.
工作人员送来一条干净的毛巾。|A staff member brings a clean towel.
小宁接过毛巾，问了第二天早餐的时间。|Xiaoning takes the towel and asks what time breakfast is served the next day.`),
    seed('没有声音的视频', 'A video call without sound', `小羽和远方的姐姐视频通话。|Xiaoyu has a video call with her sister who lives far away.
她能看见姐姐，却听不见声音。|She can see her sister but cannot hear any sound.
姐姐发现自己的麦克风关着，马上打开了。|Her sister discovers that her microphone is muted and turns it on at once.
两个人终于可以聊天，还互相看了看窗外的天气。|The two can finally talk, and they show each other the weather outside their windows.`),
    seed('搬家的纸箱', 'Moving boxes', `搬家时，小慧把东西装进了六个纸箱。|When moving home, Xiaohui packs her things into six boxes.
她在每个箱子上写了里面主要装的是什么。|She writes the main contents on each box.
到了新家，她很快找到了放杯子的箱子。|At her new home, she quickly finds the box containing the cups.
大家先喝了一杯水，再继续整理。|Everyone has a glass of water before continuing to unpack.`),
    seed('慢慢散步的小狗', 'A dog taking a slow walk', `小峰带着年老的小狗出门散步。|Xiaofeng takes his elderly dog out for a walk.
小狗走得很慢，还常常停下来闻草。|The dog walks slowly and often stops to sniff the grass.
小峰没有拉它，而是陪它慢慢走。|Xiaofeng does not pull it along but walks slowly with it.
回家以后，他给小狗准备了新鲜的水。|After returning home, he gives the dog fresh water.`),
    seed('厨房的计时器', 'The kitchen timer', `小鹿把土豆放进锅里煮。|Xiaolu puts potatoes in a pot to cook.
她怕自己忘了时间，就设了一个计时器。|Worried that she might forget the time, she sets a timer.
铃声响起时，她检查土豆，发现还不够软。|When it rings, she checks the potatoes and finds they are not soft enough yet.
她又煮了一会儿，最后才关火。|She cooks them a little longer before finally turning off the heat.`),
    seed('长椅上的围巾', 'The scarf on the bench', `小梅在公园长椅上看见一条蓝围巾。|Xiaomei sees a blue scarf on a park bench.
她把围巾交给了公园管理处。|She hands the scarf to the park office.
过了一会儿，一位老人来问有没有人捡到围巾。|A little later, an elderly person comes to ask whether anyone has found a scarf.
工作人员确认了颜色，把围巾还给了老人。|A staff member confirms its color and returns the scarf to its owner.`),
  ],
  Culture: [
    seed('古琴的七根弦', 'The guqin and its seven strings', `古琴是一种有七根弦的中国乐器。|The guqin is a Chinese instrument with seven strings.
演奏者用手指拨弦，也会改变按弦的位置。|Players pluck the strings with their fingers and also change where they press them.
不同的动作可以产生不同的音色。|Different movements can produce different tones.
听古琴时，安静的环境有助于听清细微的声音。|A quiet setting helps listeners hear the guqin's subtle sounds.`),
    seed('听一段昆曲', 'Listening to Kunqu', `昆曲是一种历史悠久的中国戏曲形式。|Kunqu is a form of Chinese traditional theatre with a long history.
表演中有歌唱、动作和音乐。|Its performances include singing, movement, and music.
有些观众会先了解剧情，再去看演出。|Some audience members learn the plot before attending a performance.
知道人物为什么说话，常常能帮助人理解舞台上的感情。|Knowing why a character speaks can often help people understand the emotions on stage.`),
    seed('一针一线的刺绣', 'Embroidery, stitch by stitch', `刺绣用针和线在布上做出图案。|Embroidery uses a needle and thread to create designs on fabric.
绣花的人先选择线的颜色，再安排针脚。|An embroiderer first chooses thread colors and then plans the stitches.
有的作品从远处看像画，近看才能看见线。|Some pieces look like paintings from a distance, and their threads are visible only up close.
完成细小的部分，往往需要时间和耐心。|Completing the fine details often takes time and patience.`),
    seed('漆器的光', 'The sheen of lacquerware', `传统漆器可以用天然漆在器物表面形成涂层。|Traditional lacquerware can use natural lacquer to form a coating on an object's surface.
工匠往往需要涂多层，并等待每层固化。|Craftspeople often apply many layers and wait for each to cure.
一些漆器还会加入雕刻或彩绘的装饰。|Some lacquerware also includes carved or painted decoration.
没有固化的天然漆可能使皮肤过敏，制作时需要防护。|Uncured natural lacquer can cause skin reactions, so protection is needed during production.`),
    seed('姓在前面', 'The family name comes first', `常见的中文姓名通常把姓放在前面。|Common Chinese names usually put the family name first.
王小雨这个名字里，王是姓，小雨是名。|In the name Wang Xiaoyu, Wang is the family name and Xiaoyu is the given name.
有些人的姓不止一个字，比如欧阳。|Some people's family names have more than one character, such as Ouyang.
不确定怎么称呼别人时，可以礼貌地问一问。|If you are unsure how to address someone, you can ask politely.`),
    seed('十二生肖', 'The twelve zodiac animals', `中国生肖用十二种动物组成一个循环。|The Chinese zodiac forms a cycle of twelve animals.
鼠、牛、虎和兔是其中的四种。|The rat, ox, tiger, and rabbit are four of them.
每过十二年，同一种生肖会再次出现。|The same zodiac animal returns every twelve years.
生肖是文化传统，并不能决定一个人的性格。|The zodiac is a cultural tradition and does not determine a person's character.`),
    seed('旗袍的变化', 'Changes in the qipao', `旗袍是一种具有代表性的中国服装。|The qipao is a representative style of Chinese clothing.
它在不同时期有过不同的长度和剪裁。|It has had different lengths and cuts in different periods.
今天，有人会在正式活动中穿旗袍。|Today, some people wear a qipao at formal events.
穿着者可以选择适合自己身体和场合的款式。|The wearer can choose a style that suits their body and the occasion.`),
    seed('面团做的小人', 'Figures made from dough', `面塑艺人用有颜色的面团做出人物或动物。|Dough-sculpture artists use colored dough to make people or animals.
一个小小的工具可以压出眼睛和衣服上的细节。|A small tool can shape eyes and details on clothing.
有些作品用于观赏，不是用来吃的。|Some pieces are for display and are not intended to be eaten.
看表演的孩子常常喜欢猜小人最后会变成什么样。|Children watching the demonstration often enjoy guessing what the little figure will become.`),
    seed('糖画的小鸟', 'A bird drawn in sugar', `做糖画的人把热糖液倒在平滑的台面上。|A sugar-painting artist pours hot liquid sugar onto a smooth surface.
细细的糖线连成了小鸟的形状。|Thin lines of sugar join to form a bird.
糖还没完全变硬时，艺人把竹签固定在作品上。|Before the sugar has completely hardened, the artist attaches a bamboo stick to the piece.
热糖液会烫伤人，观看时不要伸手去碰。|Hot liquid sugar can burn people, so do not touch it while watching.`),
    seed('各地的火锅', 'Hotpot in different places', `吃火锅时，人们把食物放进桌上的热汤里煮。|When eating hotpot, people cook food in hot broth on the table.
不同地方有不同的汤底，有的辣，有的清淡。|Different places have different broths: some spicy, others mild.
生肉要煮熟，不能只看表面变了颜色。|Raw meat needs to be cooked through; a surface color change alone is not enough.
一起吃的人也可以选择自己喜欢的蘸料。|People eating together can also choose the dipping sauce they prefer.`),
    seed('胡同里的院子', 'Courtyards in the hutongs', `北京的一些老街道被称为胡同。|Some old streets in Beijing are called hutongs.
胡同两旁可以看到四合院等传统建筑。|Traditional buildings such as courtyard houses can be seen along hutongs.
这些地方既有历史建筑，也有人们日常的生活。|These places contain both historic buildings and people's everyday lives.
参观时保持安静，是对居民的一种尊重。|Keeping quiet when visiting is one way to show respect for residents.`),
    seed('东巴文字', 'Dongba writing', `纳西族的东巴文化中保存着一种图画式的文字。|Naxi Dongba culture preserves a pictographic form of writing.
这些符号可以出现在宗教仪式使用的经书里。|These signs can appear in manuscripts used in religious rituals.
理解经书往往还需要熟悉相关的口头传统。|Understanding the manuscripts often also requires familiarity with the related oral traditions.
一个符号看起来像画，并不意味着陌生人一定能读懂它。|A sign looking like a picture does not mean that an unfamiliar reader can necessarily understand it.`),
    seed('腰鼓的节奏', 'The rhythm of waist drums', `腰鼓是一种可以系在腰间的鼓。|A waist drum is a drum that can be tied around the waist.
陕北的一些腰鼓表演会把击鼓与身体动作结合起来。|Some waist-drum performances in northern Shaanxi combine drumming with body movements.
多人一起表演时，需要注意共同的节奏。|When many people perform together, they need to follow a shared rhythm.
练习前，表演者会检查鼓带是否系好。|Before practice, performers check that the drum straps are properly fastened.`),
  ],
  Education: [
    seed('雨后的彩虹', 'A rainbow after rain', `阳光照进空气中的水滴时，会改变方向。|Sunlight changes direction when it enters water droplets in the air.
不同颜色的光改变方向的程度不同。|Different colors of light change direction by different amounts.
光在水滴内反射后出来，可以形成我们看到的彩虹。|Light that reflects inside the droplets and comes back out can form the rainbow we see.
观察者的位置也会影响能不能看见彩虹。|The observer's position also affects whether a rainbow is visible.`),
    seed('海水的涨落', 'The rise and fall of the sea', `许多海岸的海水会有规律地上涨和下降。|The water along many coasts rises and falls regularly.
月亮和太阳的引力是形成潮汐的重要原因。|The gravitational pull of the moon and sun is an important cause of tides.
海岸的形状也会影响当地的潮汐。|The shape of the coast also affects local tides.
去海边之前，可以查看当地的潮汐时间。|Before going to the coast, you can check local tide times.`),
    seed('花粉的旅行', 'The journey of pollen', `有些花需要把花粉传到另一朵花上，才能形成种子。|Some flowers need pollen transferred to another flower before they can form seeds.
蜜蜂来采蜜时，身上可能会沾到花粉。|When bees collect nectar, pollen may stick to their bodies.
它们飞到别的花上，可能帮助传粉。|When they fly to other flowers, they may help with pollination.
还有一些植物靠风来传播花粉。|Some other plants rely on the wind to carry pollen.`),
    seed('蘑菇不是植物', 'Mushrooms are not plants', `蘑菇属于真菌，不属于植物。|Mushrooms are fungi, not plants.
有些真菌能分解落叶和枯木。|Some fungi can break down fallen leaves and dead wood.
这样，原来在叶子和木头里的物质可以重新进入环境。|This allows substances originally in the leaves and wood to return to the environment.
野外的蘑菇可能有毒，不要随便采来吃。|Wild mushrooms can be poisonous, so do not pick and eat them casually.`),
    seed('不同地方的时间', 'The time in different places', `地球不停地自转，不同地方迎来太阳的时间不同。|The Earth keeps rotating, and different places face the sun at different times.
人们用时区来安排各地的钟表时间。|People use time zones to organize clock times in different places.
一些国家还会按季节调整钟表。|Some countries also adjust their clocks with the seasons.
约远方的朋友通话时，要确认双方当地的日期和时间。|When arranging a call with a distant friend, confirm the local date and time for both people.`),
    seed('跑步后的脉搏', 'The pulse after running', `安安坐着休息时，数了一下自己的脉搏。|An'an counts her pulse while sitting down to rest.
跑了一小段路后，她发现脉搏变快了。|After running a short distance, she notices that her pulse is faster.
运动时，身体通常需要更多氧气，心脏也会更快地泵血。|During exercise, the body usually needs more oxygen, and the heart pumps blood faster.
休息一会儿后，她的脉搏逐渐慢了下来。|After resting for a while, her pulse gradually slows down.`),
    seed('浮起来的小船', 'The little boat that floats', `老师把一团橡皮泥放进水里，它沉了下去。|The teacher puts a lump of modeling clay in water, and it sinks.
她把同样的橡皮泥做成空心的小船，再放进水里。|She shapes the same clay into a hollow boat and puts it in the water again.
小船排开了更多的水，这次浮了起来。|The little boat displaces more water and floats this time.
物体能不能浮起来，与它的重量和受到的浮力有关。|Whether an object floats depends on its weight and the buoyant force acting on it.`),
    seed('温度与金属', 'Temperature and metal', `许多金属受热时会稍微变长。|Many metals become slightly longer when heated.
冷却以后，它们通常又会缩短。|After cooling, they usually become shorter again.
桥梁和铁轨的设计需要考虑这种变化。|Bridge and railway-track designs need to account for this change.
看起来很小的变化，也可能在很长的结构中变得重要。|A change that looks tiny can become important in a very long structure.`),
    seed('草地上的食物链', 'A food chain in the grass', `草可以利用阳光制造自己的养分。|Grass can use sunlight to make its own nutrients.
有些昆虫吃草，一些鸟又会吃昆虫。|Some insects eat grass, and some birds eat insects.
这些关系可以连成一条食物链。|These relationships can form a food chain.
真正的环境里，许多食物链互相连接，形成食物网。|In a real environment, many food chains connect to form a food web.`),
    seed('石头里的化石', 'Fossils in rock', `有些古代生物的遗体或活动痕迹被保存成化石。|Some remains or traces of ancient organisms are preserved as fossils.
一块化石可能记录骨头，也可能记录脚印。|A fossil may preserve bones or footprints.
研究者会结合化石所在的岩层判断它的年代。|Researchers use the rock layer containing a fossil to help determine its age.
不是每一个死去的生物都会留下化石。|Not every organism that dies leaves a fossil.`),
    seed('纸上的角度', 'Angles on paper', `小雨画了两条从同一点出发的射线。|Xiaoyu draws two rays starting from the same point.
两条线之间张开的大小，就是她要测的角度。|The opening between the lines is the angle she wants to measure.
她把量角器的中心对准那个点，再读数字。|She aligns the center of the protractor with that point and then reads the number.
她发现这个角是九十度，也就是一个直角。|She discovers that the angle is ninety degrees, which is a right angle.`),
    seed('掷骰子的机会', 'The chance when rolling a die', `一个普通的骰子有六个面。|An ordinary die has six faces.
如果骰子公平，掷一次出现六的机会是六分之一。|If the die is fair, the chance of rolling a six once is one in six.
连续几次没有六，并不能保证下一次一定是六。|Failing to roll a six several times in a row does not guarantee that the next roll will be a six.
每次独立的投掷，都有同样的机会。|Each independent roll has the same probability.`),
    seed('气球吸住了纸', 'A balloon attracts paper', `小成用干布摩擦一只气球。|Xiaocheng rubs a balloon with a dry cloth.
摩擦以后，气球带上了静电。|After rubbing, the balloon has a static charge.
他把气球靠近小纸片，发现纸片被吸了过来。|He brings the balloon near small pieces of paper and finds that they are attracted to it.
空气比较潮湿时，这种现象可能不那么明显。|When the air is more humid, the effect may be less noticeable.`),
  ],
  Fiction: [
    seed('怕高的椅子', 'The chair afraid of heights', `故事里，一把椅子被搬到了剧场的高台上。|In the story, a chair is moved onto a high platform in a theatre.
椅子害怕得直发抖，不肯让演员坐下。|The chair trembles with fear and refuses to let the actor sit down.
演员先陪它练习，告诉它台边在哪里。|The actor practices with it first and shows it where the platform's edge is.
演出那天，椅子稳稳地站着，和演员一起谢幕。|On performance day, the chair stands firmly and takes a bow with the actor.`),
    seed('不听话的画笔', 'The paintbrush that makes its own choices', `故事里，一支画笔总是把蓝色画成绿色。|In the story, a paintbrush always paints green instead of blue.
画家想画大海，纸上却出现了一片森林。|The painter wants to paint the sea, but a forest appears on the paper.
他没有擦掉森林，而是在树下画了一条路。|He does not erase the forest, but paints a path under the trees.
画笔这次听了他的话，画家决定把新画送给喜欢散步的母亲。|This time the brush follows his wishes, and the painter decides to give the new painting to his mother, who likes walking.`),
    seed('通向春天的楼梯', 'The staircase to spring', `故事里，一条楼梯藏在冬天的小巷中。|In the story, a staircase is hidden in a little alley in winter.
每当有人帮助别人，楼梯就多出一级。|Whenever someone helps another person, the staircase gains a step.
邻居们一起清雪、送饭，楼梯渐渐伸向远方。|The neighbors clear snow and deliver meals together, and the staircase gradually reaches into the distance.
最后一级出现时，大家走上去，看见了开花的春天。|When the final step appears, everyone climbs up and sees spring in bloom.`),
    seed('装着四季的箱子', 'The suitcase of seasons', `故事里，一位旅行者有一个装着四季的箱子。|In the story, a traveler has a suitcase containing all four seasons.
她打开春天的口袋，房间里就飘出了花香。|When she opens the spring pocket, the scent of flowers drifts into the room.
一位孩子想一直留下春天，她却请孩子也看看秋天的颜色。|A child wants to keep spring forever, but she asks the child to look at autumn's colors too.
孩子看过四个口袋，决定让它们按自己的顺序轮流来到。|After looking in all four pockets, the child decides to let them arrive in their own order.`),
    seed('卖安静的兔子', 'The rabbit that sells quiet', `故事里，一只兔子在热闹的广场上卖安静。|In the story, a rabbit sells quiet in a busy square.
顾客付出一分钟的耐心，就能得到一小袋安静。|Customers can receive a small bag of quiet by paying one minute of patience.
一位总爱插话的人等完一分钟，第一次听完了朋友的话。|After waiting one minute, a person who always interrupts listens to a friend's whole story for the first time.
他没有带走袋子，因为安静已经留在了心里。|He does not take the bag, because the quiet has already stayed in his heart.`),
    seed('缝路的针', 'The needle that sews paths', `故事里，一根银针可以把两条断开的路缝在一起。|In the story, a silver needle can sew two disconnected paths together.
大雨冲坏小路后，孩子把银针借给了村民。|After heavy rain washes away the little path, a child lends the needle to the villagers.
大家用旧绳当线，一起缝出了通向学校的路。|Using old rope as thread, they sew a path to the school together.
路修好以后，他们把银针留在村里的工具箱中。|After repairing the path, they keep the silver needle in the village toolbox.`),
    seed('贝壳里的海浪', 'The waves inside a shell', `故事里，一个孩子捡到能装海浪的贝壳。|In the story, a child finds a shell that can hold ocean waves.
他把一朵小浪花装进去，带回家听它说话。|He puts a little wave inside and takes it home to listen to it speak.
浪花说自己想念沙滩，也想念其他的浪。|The wave says it misses the beach and the other waves.
孩子第二天回到海边，打开贝壳，让浪花回了家。|The child returns to the coast the next day, opens the shell, and lets the wave go home.`),
    seed('记住笑声的茶壶', 'The teapot that remembers laughter', `故事里，一个旧茶壶记住了家里的每一次笑声。|In the story, an old teapot remembers every laugh in the home.
家人争吵时，茶壶突然发出了他们小时候的笑声。|When the family argues, the teapot suddenly plays their childhood laughter.
大家停了下来，想起以前一起做的傻事。|Everyone stops and remembers the silly things they used to do together.
他们重新坐下说话，茶壶又悄悄记下了一次新的笑声。|They sit down to talk again, and the teapot quietly records another new laugh.`),
    seed('没有帽子的稻草人', 'The scarecrow without a hat', `故事里，一阵风吹走了稻草人的帽子。|In the story, a gust of wind blows away a scarecrow's hat.
太阳越来越热，稻草人却不能离开田地。|The sun grows hotter, but the scarecrow cannot leave the field.
几只麻雀找来树叶，给它做了一顶新帽子。|Several sparrows bring leaves and make it a new hat.
稻草人向它们道谢，也答应不再吓它们的孩子。|The scarecrow thanks them and promises not to frighten their young anymore.`),
    seed('等晚风的风筝', 'The kite waiting for the evening breeze', `故事里，一只风筝不愿在强风中起飞。|In the story, a kite does not want to fly in a strong wind.
孩子没有勉强它，而是坐在草地上一起等。|The child does not force it, but sits on the grass to wait with it.
傍晚，轻轻的风来了，风筝慢慢升上天空。|In the evening, a gentle breeze arrives, and the kite slowly rises into the sky.
它从高处看见孩子，向下摇了摇自己的长尾巴。|It sees the child from above and waves its long tail downward.`),
    seed('明天的回声', "Tomorrow's echo", `故事里，一口井会把人的话在第二天变成回声。|In the story, a well turns people's words into echoes the following day.
小叶对着井说，自己一定学不会游泳。|Xiaoye says into the well that she will never learn to swim.
第二天听到回声，她觉得这句话对自己并不公平。|Hearing the echo the next day, she feels the statement is unfair to herself.
她重新对井说，自己愿意在老师帮助下慢慢练习。|She speaks into the well again, saying she is willing to practice gradually with her teacher's help.`),
    seed('纽扣里的小海', 'The little sea inside a button', `故事里，奶奶送给阿青一颗透明的纽扣。|In the story, Grandmother gives Aqing a transparent button.
阿青凑近一看，里面竟然有一片小海。|Looking closely, Aqing discovers a tiny sea inside it.
小海上的船需要灯光，阿青就把纽扣放在窗边。|The boats on the little sea need light, so Aqing places the button by the window.
夜里，小船自己点起灯，让纽扣像星星一样发亮。|At night, the little boats light their own lamps, making the button shine like a star.`),
    seed('蜗牛送来的叶子', 'The leaf delivered by a snail', `故事里，一只蜗牛答应给朋友送一片叶子。|In the story, a snail promises to deliver a leaf to a friend.
路上的动物都说它太慢，叶子一定会干。|The animals along the way all say it is too slow and the leaf will surely dry out.
蜗牛每天给叶子滴一点水，仍然认真往前走。|The snail gives the leaf a little water every day and keeps moving carefully forward.
朋友收到新鲜的叶子时，先谢谢蜗牛一路的照顾。|When the friend receives the fresh leaf, the first thing they do is thank the snail for caring for it along the way.`),
  ],
  History: [
    seed('司马迁与史记', 'Sima Qian and the Records of the Grand Historian', `司马迁是西汉时期的历史学家。|Sima Qian was a historian during the Western Han period.
他写成了《史记》，记述许多人物和事件。|He completed the Records of the Grand Historian, describing many people and events.
这部书不仅写帝王，也写其他身份的人。|The work describes not only rulers but also people from other walks of life.
研究者阅读时，还会把它与其他材料比较。|When reading it, researchers also compare it with other sources.`),
    seed('班昭续写汉书', 'Ban Zhao and the Book of Han', `班昭是东汉时期的一位学者。|Ban Zhao was a scholar during the Eastern Han period.
她的哥哥班固参与编写《汉书》。|Her elder brother Ban Gu worked on the Book of Han.
班固去世后，班昭继续完成其中未完的部分。|After Ban Gu died, Ban Zhao continued completing unfinished parts of the work.
她也是中国历史上知名的女性作者之一。|She is also one of the well-known women writers in Chinese history.`),
    seed('王安石变法', "Wang Anshi's reforms", `王安石是北宋时期的政治家。|Wang Anshi was a statesman during the Northern Song period.
他推动一系列改革，涉及财政和其他制度。|He promoted a series of reforms involving finance and other institutions.
当时的人对这些政策有不同意见。|People at the time had different views about these policies.
了解这段历史，需要注意政策的目标和实际执行情况。|Understanding this history requires attention to both the policies' aims and how they were actually implemented.`),
    seed('文天祥的选择', "Wen Tianxiang's choice", `文天祥生活在南宋末年。|Wen Tianxiang lived near the end of the Southern Song period.
他参与抵抗元军，后来被俘。|He took part in resistance to Yuan forces and was later captured.
他拒绝为元朝效力，最终被处死。|He refused to serve the Yuan dynasty and was eventually executed.
后人常通过他的文章和诗歌了解他的信念。|Later generations often learn about his convictions through his prose and poetry.`),
    seed('宋慈与检验记录', 'Song Ci and examination records', `宋慈是南宋时期的官员。|Song Ci was an official during the Southern Song period.
他编写的《洗冤集录》讨论尸体检验等问题。|His Collected Cases of Injustice Rectified discusses examination of bodies and related matters.
这部书在中国法医学史上有重要地位。|The work holds an important place in the history of forensic medicine in China.
其中的知识属于当时的经验，不能全部当成现代医学结论。|Its knowledge reflects experience from its time and cannot all be treated as conclusions of modern medicine.`),
    seed('隋代的运河', 'Canals in the Sui period', `隋代大规模修建和连接了多段运河。|During the Sui period, canals were built and connected on a large scale.
这些水路帮助运输粮食和其他物资。|These waterways helped transport grain and other supplies.
工程需要大量劳动，也给当时的社会带来负担。|The projects required extensive labor and also placed burdens on society at the time.
后来的朝代继续使用和改建其中的水路。|Later dynasties continued using and modifying some of these waterways.`),
    seed('赵州桥', 'Zhaozhou Bridge', `赵州桥位于今天的河北省。|Zhaozhou Bridge is in what is now Hebei Province.
这座石拱桥建于隋代，通常与工匠李春联系在一起。|This stone arch bridge was built during the Sui period and is commonly associated with the craftsman Li Chun.
大拱两侧的小拱减轻了桥身重量，也有助于通过洪水。|The smaller arches on either side of the main arch reduce the bridge's weight and help floodwater pass through.
这座桥长期受到维修和保护。|The bridge has received maintenance and protection over a long period.`),
    seed('曲阜与孔子', 'Qufu and Confucius', `曲阜位于山东，与孔子的生平和后世纪念活动密切相关。|Qufu is in Shandong and is closely connected with Confucius's life and later commemorations.
孔子生活在春秋时期，是一位思想家和教育者。|Confucius lived during the Spring and Autumn period and was a thinker and educator.
今天的孔庙包含不同时代修建和重建的建筑。|Today's Temple of Confucius includes buildings constructed and rebuilt in different periods.
因此，不能把现存的整个建筑群都看作孔子时代的遗物。|The entire surviving complex therefore cannot be treated as a remnant from Confucius's own time.`),
    seed('甲骨上的文字', 'Writing on oracle bones', `商代晚期的人在一些龟甲和兽骨上刻下文字。|People in the late Shang period carved writing on some turtle shells and animal bones.
这些记录常常与占卜有关。|These records often relate to divination.
甲骨文是研究早期汉字的重要材料。|Oracle-bone inscriptions are important evidence for studying early Chinese writing.
有些字的意思，研究者到今天还在讨论。|Researchers still debate the meaning of some characters today.`),
    seed('三星堆的发现', 'Discoveries at Sanxingdui', `三星堆遗址位于四川广汉。|The Sanxingdui site is in Guanghan, Sichuan.
考古发现包括青铜面具、人物像和其他器物。|Archaeological discoveries include bronze masks, human figures, and other objects.
这些材料帮助人们认识古蜀地区的文化。|These finds help people understand the culture of the ancient Shu region.
许多器物的具体用途，还需要结合更多证据研究。|The precise uses of many objects still need study using further evidence.`),
    seed('泉州的海上贸易', 'Maritime trade at Quanzhou', `泉州位于福建沿海。|Quanzhou is on the coast of Fujian.
宋元时期，这里是重要的海上贸易港口。|During the Song and Yuan periods, it was an important maritime trading port.
来自不同地方的商人带来了货物，也带来了文化交流。|Merchants from different places brought goods and also cultural exchange.
当地留下的遗址可以帮助研究者理解那时的城市生活。|Surviving local sites can help researchers understand urban life at that time.`),
    seed('晚清的新邮政', 'New postal services in the late Qing', `晚清时期，中国建立了新的国家邮政制度。|During the late Qing period, China established a new national postal system.
邮局和邮票逐渐成为寄信生活的一部分。|Post offices and stamps gradually became part of sending letters.
在此以前，人们也通过其他机构和私人途径传递消息。|Before this, people also carried messages through other institutions and private channels.
新制度的发展并不是让所有旧方式立即消失。|The development of the new system did not make every older method disappear immediately.`),
    seed('西南联大的课堂', 'Classes at the Southwest Associated University', `西南联合大学于一九三八年在昆明成立。|The National Southwest Associated University was established in Kunming in 1938.
它由北京大学、清华大学和南开大学联合组成。|It was formed jointly by Peking University, Tsinghua University, and Nankai University.
战争期间，师生在困难条件下继续教学和学习。|During the war, teachers and students continued teaching and studying under difficult conditions.
一九四六年，三所学校陆续恢复各自的办学。|In 1946, the three universities resumed operating separately.`),
  ],
};
