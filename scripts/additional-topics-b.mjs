// Additional manually authored bilingual reading topics. No published lessons are reproduced.
const seed = (topic, topicEn, text) => ({
  topic, topicEn,
  facts: text.trim().split('\n').map(line => {
    const parts = line.trim().split('|');
    if (parts.length !== 2) throw new Error(`Invalid bilingual pair: ${line}`);
    return { zh: parts[0], en: parts[1] };
  }),
});

export const additionalTopicsB = {
  Everyday: [
    seed('买菜时的零钱', 'Small change at the market', `小安去市场买菜，发现手机没电了。|Xiao'an goes to the market for vegetables and finds that her phone is out of power.
她不能用手机付款，就数了数口袋里的零钱。|Unable to pay with her phone, she counts the small change in her pocket.
钱只够买两种菜，她就先放回了一袋蘑菇。|The money is enough for only two kinds of vegetables, so she puts back a bag of mushrooms.
回家以后，她把充电器放在门口，提醒自己出门前充电。|Back home, she puts the charger by the door to remind herself to charge her phone before going out.`),
    seed('留下来的小票', 'The receipt worth keeping', `小梅买了一件衬衫，却发现袖子太长。|Xiaomei buys a shirt but finds that the sleeves are too long.
她想换一件，店员请她出示小票。|She wants to exchange it, and the shop assistant asks to see the receipt.
小票还在纸袋里，她顺利换到了合适的尺码。|The receipt is still in the paper bag, so she successfully exchanges the shirt for the right size.
她这才明白，买完东西以后，有些小纸片还不能马上扔掉。|Only then does she understand that some small slips of paper should not be thrown away immediately after a purchase.`),
    seed('冰箱里的名字', 'Names in the refrigerator', `三个朋友住在一起，也一起用冰箱。|Three friends live together and share a refrigerator.
有一天，阿明把别人的牛奶喝了，以为是自己买的。|One day, Aming drinks someone else's milk, thinking he bought it himself.
他道歉以后，大家决定在自己的食物上写名字。|After he apologizes, they decide to write their names on their own food.
愿意分享的东西，就放在一个没有名字的篮子里。|Items they are willing to share go in a basket without names.`),
    seed('一只手套的旅行', 'The journey of a glove', `冬天，小雪发现自己只剩一只手套。|In winter, Xiaoxue discovers that she has only one glove left.
她想起早上在教室里脱过手套，就回去找。|Remembering that she took her gloves off in the classroom that morning, she goes back to look.
同学已经把另一只挂在门边，方便她看见。|A classmate has already hung the other glove by the door where she can see it.
第二天，小雪把两只手套放在同一个口袋里。|The next day, Xiaoxue puts both gloves in the same pocket.`),
    seed('写错的门牌号', 'The wrong house number', `小河寄了一份礼物给朋友，却把门牌号写错了。|Xiaohe sends a gift to a friend but writes the wrong house number.
送货员打电话确认地址，小河才发现错误。|Xiaohe notices the mistake only when the delivery worker calls to confirm the address.
她立刻说清楚正确的位置，还向送货员道谢。|She immediately explains the correct location and thanks the delivery worker.
礼物按时到了，朋友回电话说很喜欢。|The gift arrives on time, and the friend calls back to say that they really like it.`),
    seed('看医生前的纸条', 'A note before a medical appointment', `爷爷要去看医生，担心忘记自己想问的问题。|Grandfather has a medical appointment and worries that he will forget his questions.
小林帮他把最近不舒服的地方写在纸上。|Xiaolin helps him write down where he has been feeling unwell recently.
到了医院，爷爷看着纸条，把情况一项一项说清楚。|At the hospital, Grandfather looks at the note and explains each issue clearly.
回家后，他们把医生的说明收好，方便下次查看。|Back home, they keep the doctor's instructions in a safe place for future reference.`),
    seed('白衣服变粉了', 'The white shirt turns pink', `小美第一次自己洗衣服，把红袜子和白衬衫放在了一起。|The first time Xiaomei washes her own clothes, she puts red socks in with a white shirt.
洗完以后，白衬衫有了一点粉色。|After the wash, the white shirt has a pink tint.
她查看衣服上的标签，发现红袜子需要分开洗。|She checks the clothing labels and discovers that the red socks should be washed separately.
她把这次的经验记下来，下次先把深色和浅色衣服分开。|She notes what she has learned and separates dark and light clothes before the next wash.`),
    seed('楼上的脚步声', 'Footsteps upstairs', `晚上，小周总能听见楼上传来的脚步声。|At night, Xiaozhou keeps hearing footsteps from upstairs.
她没有马上生气，而是在白天去和邻居商量。|Instead of immediately getting angry, she goes to discuss it with the neighbor during the day.
邻居原来在照顾一个刚学走路的孩子，并不知道声音这么大。|The neighbor has been caring for a child who has just learned to walk and did not realize how loud the noise was.
他们一起想办法，在常走的地方铺上了软垫。|They work out a solution together and lay soft mats in the places most often walked on.`),
    seed('借来的充电器', 'The borrowed charger', `小青在咖啡店等朋友，手机快没电了。|Xiaoqing waits for a friend in a café, and her phone is almost out of power.
店员借给她一个充电器，她把手机放在自己看得见的地方。|The café worker lends her a charger, and she puts her phone where she can see it.
朋友到了以后，她先把充电器还给店员，再离开。|After her friend arrives, she returns the charger to the worker before leaving.
朋友说，她出门前记得检查电量，今天却忘了。|Her friend says that she normally remembers to check the battery before going out but forgot today.`),
    seed('日历上的小圆圈', 'The little circle on the calendar', `爸爸的生日快到了，小乐怕自己忘记。|Dad's birthday is coming, and Xiaole is afraid of forgetting.
她在日历上画了一个圆圈，又写了两个字：做卡。|She draws a circle on the calendar and adds two words: make card.
生日当天，她把画好的卡片放在爸爸的早餐旁边。|On his birthday, she puts the finished card beside Dad's breakfast.
爸爸没有想到这个小惊喜，笑着把卡片收进包里。|Dad is not expecting the little surprise and smiles as he puts the card in his bag.`),
    seed('靠窗的座位', 'The window seat', `小北第一次一个人坐火车，特别想坐在窗边。|Xiaobei takes a train alone for the first time and especially wants to sit by the window.
他找到座位时，发现旁边的人也喜欢看风景。|When he finds his seat, he discovers that the person beside him also enjoys looking at the scenery.
两个人轮流介绍窗外的山和河，旅途很快就过去了。|They take turns describing the mountains and rivers outside, and the journey passes quickly.
下车前，小北先检查座位下有没有留下东西。|Before getting off, Xiaobei checks whether he has left anything under the seat.`),
    seed('周六的朗读', 'Saturday reading aloud', `小苏每个周六去社区给孩子们读故事。|Every Saturday, Xiaosu goes to the community center to read stories to children.
有一次，孩子们不太明白故事里的一句老话。|One time, the children do not quite understand an old saying in the story.
她用一个生活中的例子解释，然后请孩子们说说自己的想法。|She explains it with an example from everyday life and then asks the children for their thoughts.
故事结束时，最安静的孩子也举起了手。|By the end of the story, even the quietest child has raised a hand.`),
    seed('两个人的午饭', 'Lunch for two', `小林和同事一起准备午饭，每人带一道菜。|Xiaolin and a colleague prepare lunch together, each bringing one dish.
出门以前，小林才发现两个人都打算带土豆。|Just before leaving, Xiaolin discovers that both of them are planning to bring potatoes.
他们商量了一下，让一个人改带青菜。|They discuss it and agree that one person will bring green vegetables instead.
吃饭的时候，他们觉得提前说一声，午饭就能更丰富。|While eating, they realize that a quick conversation beforehand can make lunch more varied.`),
  ],
  Culture: [
    seed('舞狮的配合', 'Working together in a lion dance', `表演开始以前，两个舞狮的人先练习脚步。|Before the performance begins, the two lion dancers practice their steps.
一个人控制狮头，另一个人跟在后面。|One controls the lion's head, and the other follows behind.
两个人配合得好，狮子看起来才有精神。|Only when the two work well together does the lion look lively.
鼓声响起，观众跟着节奏拍起手来。|When the drums begin, the audience claps along with the rhythm.`),
    seed('爷爷的象棋', "Grandfather's Chinese chessboard", `爷爷把象棋摆好，请小河先走一步。|Grandfather sets up the Chinese chess pieces and invites Xiaohe to make the first move.
小河想让马直着走，爷爷就解释马的走法。|Xiaohe wants the horse to move straight, so Grandfather explains how it moves.
他们没有急着分输赢，而是边下边学规则。|Instead of rushing to decide a winner, they learn the rules as they play.
最后，小河主动提出，再下一盘。|At the end, Xiaohe asks to play another game.`),
    seed('麻将桌旁的学习', 'Learning beside a mahjong table', `外婆和朋友打麻将，小雨坐在旁边看。|Grandmother plays mahjong with friends while Xiaoyu watches beside them.
她发现牌上有字，也有不同的图案。|She notices that the tiles have characters and different designs.
外婆说，不同地方的规则可能不一样。|Grandmother says that rules may differ from place to place.
小雨先认识牌的种类，没有马上参加游戏。|Xiaoyu first learns the types of tiles rather than immediately joining the game.`),
    seed('一枚小印章', 'A small seal', `老师给小叶看了一枚刻着名字的印章。|The teacher shows Xiaoye a seal engraved with a name.
印章蘸上红色的印泥，就能把字留在纸上。|When dipped in red seal paste, it can leave the characters on paper.
印章上的字要反着刻，印出来才是正的。|The characters on the seal must be carved in reverse so that the impression reads correctly.
小叶先在纸上练习设计，没有直接使用刻刀。|Xiaoye practices the design on paper first rather than using a carving knife immediately.`),
    seed('青花瓷上的蓝色', 'Blue on blue-and-white porcelain', `小河在展览里看见一个白底蓝花的瓷瓶。|At an exhibition, Xiaohe sees a porcelain vase with blue designs on a white background.
讲解员说，这种瓷器叫青花瓷。|The guide says that this kind of porcelain is called blue-and-white porcelain.
工匠先画图案，再经过上釉和烧制。|The artisan paints the design before glazing and firing it.
小河发现，瓶子上的花纹也可以讲出一个故事。|Xiaohe discovers that the patterns on the vase can also tell a story.`),
    seed('竹篮的纹路', 'The pattern in a bamboo basket', `村里的一位师傅用细竹条编篮子。|An artisan in the village weaves baskets with thin bamboo strips.
竹条一上一下地交错，慢慢形成篮子的底。|The strips cross over and under each other, gradually forming the basket's base.
小林试着编了几行，发现每一根的位置都很重要。|Xiaolin tries weaving a few rows and discovers that every strip's position matters.
一个看起来普通的篮子，其实需要耐心和手艺。|A seemingly ordinary basket actually requires patience and skill.`),
    seed('扇子上的画', 'A painting on a fan', `夏天，小美参加了一次画扇子的活动。|In summer, Xiaomei joins an activity painting fans.
老师请大家先想好图案，再轻轻下笔。|The teacher asks everyone to plan the design first and then apply the brush lightly.
小美画了两片叶子，没有把整个扇面涂满。|Xiaomei paints two leaves without filling the entire fan surface.
扇风的时候，画也跟着动，像叶子真的遇见了风。|As she fans herself, the painting moves too, as though the leaves have really met the wind.`),
    seed('一起读唐诗', 'Reading Tang poetry together', `晚饭以后，爸爸和孩子一起读一首唐诗。|After dinner, Dad and his child read a Tang poem together.
孩子先听声音，再问不认识的字是什么意思。|The child first listens to its sounds and then asks what the unfamiliar characters mean.
爸爸没有要求马上背下来，而是请孩子想象诗里的画面。|Dad does not require immediate memorization but asks the child to imagine the scene in the poem.
第二天，他们又读了一遍，发现了一处新的细节。|The next day, they read it again and notice a new detail.`),
    seed('门边的春联', 'Spring couplets beside the door', `春节前，小安和妈妈准备贴春联。|Before the Spring Festival, Xiao'an and Mom prepare to put up spring couplets.
两条长纸分别贴在门的两边，横批贴在上方。|The two long strips go on either side of the door, and the horizontal inscription goes above.
妈妈说，先读懂内容，再确认上下联的位置。|Mom says they should understand the text before checking the placement of the first and second lines.
贴好以后，小安站远一点，看看两边是不是整齐。|After putting them up, Xiao'an steps back to see whether the two sides are aligned.`),
    seed('圆桌上的分享', 'Sharing at a round table', `一家人在圆桌旁吃饭，中间放着几盘菜。|A family eats around a round table with several dishes in the center.
小林想尝一道离自己很远的菜，就请别人帮忙。|Xiaolin wants to try a dish far away and asks someone for help.
家人把盘子递过来，又问旁边的人要不要尝一尝。|A family member passes the dish over and asks the person nearby if they would like to try it too.
这顿饭里，分享的不只是食物，还有一天里的消息。|During this meal, they share not only food but also news from the day.`),
    seed('清明时的回忆', 'Remembering at Qingming', `清明节前后，有些家庭会祭扫，怀念去世的亲人。|Around the Qingming Festival, some families tend graves and remember relatives who have died.
小安听奶奶讲起以前家里的生活。|Xiao'an listens as Grandmother describes the family's life in earlier times.
她把奶奶说的故事记在本子里，想留给以后的人看。|She writes Grandmother's stories in a notebook to preserve them for future readers.
不同家庭表达怀念的方式，可以并不相同。|Different families may express remembrance in different ways.`),
    seed('冬至的一碗热汤', 'A bowl of hot soup at the winter solstice', `冬至的时候，北半球的白天很短。|At the winter solstice, daylight is very short in the Northern Hemisphere.
一些家庭会在这一天准备特别的食物。|Some families prepare special foods on this day.
小林家喝热汤，邻居家吃汤圆，他们的习惯不一样。|Xiaolin's family drinks hot soup while the neighbors eat tangyuan; their customs are different.
大家互相问候，都希望彼此平安地过冬。|They greet one another and hope that everyone gets through winter safely.`),
    seed('农历里的闰月', 'Leap months in the Chinese calendar', `小河发现，今年的农历里有一个闰月。|Xiaohe notices that this year's Chinese calendar has a leap month.
老师说，农历既考虑月亮的变化，也考虑太阳年的长短。|The teacher says that the Chinese calendar considers both the moon's cycles and the length of the solar year.
有些年份需要多加一个月，来调整两者之间的差别。|Some years need an extra month to adjust the difference between the two.
小河这才知道，农历不只是把每个月随便排在一起。|Only then does Xiaohe realize that the Chinese calendar does not simply put months together at random.`),
  ],
  Education: [
    seed('一次呼吸', 'One breath', `吸气的时候，空气进入肺。|When we inhale, air enters the lungs.
空气中的氧气可以经过肺进入血液。|Oxygen in the air can pass through the lungs into the blood.
呼气的时候，身体排出一些二氧化碳。|When we exhale, the body releases some carbon dioxide.
跑步以后，呼吸常常会变快。|Breathing often becomes faster after running.`),
    seed('闻不到时的味道', 'Flavor when we cannot smell', `小美感冒的时候，觉得饭菜没有平时香。|When Xiaomei has a cold, food seems less fragrant than usual.
老师说，吃东西时，舌头和鼻子都会帮助我们感受味道。|The teacher says that both the tongue and the nose help us experience flavor while eating.
鼻子闻不到气味，食物的味道就可能感觉不同。|When the nose cannot detect smells, food may seem to taste different.
小美发现，味道不只是舌头一个人的工作。|Xiaomei discovers that flavor is not the tongue's job alone.`),
    seed('牙刷的工作', 'What a toothbrush does', `吃完东西，牙齿上可能留下食物和牙菌斑。|After eating, food and plaque may remain on the teeth.
牙刷可以帮助清洁牙齿的表面。|A toothbrush can help clean tooth surfaces.
刷牙要仔细，但不需要用很大的力。|Brushing should be thorough, but does not require excessive force.
小林用牙医教的方法，慢慢刷好每一个地方。|Xiaolin slowly brushes every area using the method taught by the dentist.`),
    seed('掉下来的球', 'The falling ball', `小北松开手，球就向地面落下。|Xiaobei lets go, and the ball falls toward the ground.
地球的引力会把球拉向地球。|The Earth's gravity pulls the ball toward the Earth.
抛上去的球，也会受到引力的影响。|A ball thrown upward is also affected by gravity.
球飞到最高处以后，就开始往下落。|After reaching its highest point, the ball begins to fall.`),
    seed('长杆子与小石头', 'A long rod and a small stone', `老师用一根杆子和一个支点做实验。|The teacher performs an experiment with a rod and a pivot.
把支点的位置改变，抬起同一件东西需要的力也会改变。|Changing the pivot's position changes the force needed to lift the same object.
这种工具利用了杠杆的原理。|This tool uses the principle of the lever.
学生发现，有时换一个用力的位置，比使劲更有效。|The students discover that changing where force is applied can sometimes be more effective than pushing harder.`),
    seed('亮起来的小灯', 'The little light that comes on', `老师把电池、小灯和电线放在桌上。|The teacher puts a battery, a small lamp, and wires on the table.
电线连接成完整的回路以后，小灯亮了。|The lamp comes on after the wires form a complete circuit.
断开一处连接，小灯就灭了。|Breaking one connection makes the lamp go out.
这个实验只用小电池，学生不能去碰墙上的插座。|This experiment uses only a small battery; students must not touch wall sockets.`),
    seed('晒干的毛巾', 'The towel that dries in the sun', `洗过的毛巾挂在外面，过一会儿就干了。|A washed towel is hung outside and dries after a while.
毛巾里的水慢慢变成水蒸气，进入空气。|The water in the towel gradually becomes water vapor and enters the air.
这个过程叫蒸发，不一定要等水烧开才会发生。|This process is called evaporation; water does not need to boil for it to occur.
有风的时候，毛巾常常干得更快。|The towel often dries faster when it is windy.`),
    seed('早晨的露水', 'Morning dew', `早晨，小叶在草上看见许多小水珠。|In the morning, Xiaoye sees many little drops of water on the grass.
夜里，草的表面可能变得很冷。|During the night, the surface of the grass can become very cold.
空气中的水蒸气遇到冷的表面，可能形成露水。|Water vapor in the air can form dew when it meets a cold surface.
草上的水珠不一定是下雨留下的。|The drops on the grass are not necessarily left by rain.`),
    seed('土里的蚯蚓', 'Earthworms in the soil', `小林在花园里发现一条蚯蚓。|Xiaolin finds an earthworm in the garden.
蚯蚓在土里活动，会形成一些小通道。|As earthworms move through the soil, they create small passages.
这些通道可以帮助空气和水进入土里。|These passages can help air and water enter the soil.
小林把土轻轻盖回去，没有把蚯蚓带走。|Xiaolin gently covers the soil again instead of taking the earthworm away.`),
    seed('空瓶子的去向', 'Where the empty bottle goes', `小河喝完水，准备处理空瓶子。|Xiaohe finishes drinking water and prepares to dispose of the empty bottle.
她先看当地的分类说明，不是只看瓶子的颜色。|She checks the local sorting instructions rather than just the bottle's color.
有些材料可以回收，但不同地方的要求可能不同。|Some materials can be recycled, but requirements may differ between places.
按照当地规则分类，能帮助后面的处理工作。|Sorting according to local rules can help with later processing.`),
    seed('四个人的饼', 'A pie for four', `一张饼被平均切成四块。|A pie is divided into four equal pieces.
每一块都是整张饼的四分之一。|Each piece is one quarter of the whole pie.
小乐拿了两块，就是拿走了整张饼的一半。|Xiaole takes two pieces, which is half of the whole pie.
大家发现，分数说的是部分和整体之间的关系。|They discover that fractions describe the relationship between a part and a whole.`),
    seed('地图上的符号', 'Symbols on a map', `小青拿到一张公园地图，看到许多小图案。|Xiaoqing receives a park map and sees many little symbols.
地图旁边的图例解释了这些图案的意思。|The legend beside the map explains what these symbols mean.
她先看图例，再找洗手间的位置。|She reads the legend first and then looks for the restroom.
看懂符号，比猜每一个图案更容易找到目的地。|Understanding the symbols makes finding a destination easier than guessing what each one means.`),
    seed('学习后的睡眠', 'Sleep after studying', `小周想整晚背单词，可是越来越困。|Xiaozhou wants to memorize vocabulary all night but becomes increasingly sleepy.
老师提醒她，睡眠和记忆的整理有关。|The teacher reminds her that sleep is connected to the organization of memories.
只增加学习时间，不一定能让记忆更好。|Simply increasing study time does not necessarily improve memory.
小周改成早点睡，第二天再复习昨天的内容。|Xiaozhou decides to sleep earlier and review the previous day's material the next day.`),
  ],
  Fiction: [
    seed('巨人的一只鞋', 'One shoe belonging to a giant', `故事里，一只巨人的鞋落在村子旁边。|In the story, one of a giant's shoes falls beside a village.
下雨的时候，孩子们跑进鞋里，发现里面很干。|When it rains, the children run inside the shoe and find that it is dry.
巨人回来找鞋，听见里面有人在唱歌。|The giant returns to look for the shoe and hears people singing inside.
他把另一只鞋也留下来，让村子多了一间活动室。|He leaves the other shoe as well, giving the village another activity room.`),
    seed('忘记名字的门', 'The door that forgets its name', `故事里，一扇门每天都忘记自己通向哪里。|In the story, a door forgets where it leads every day.
人们把目的地写在门上，可是第二天字又消失了。|People write the destination on it, but the writing disappears the next day.
一个孩子在门旁种了一棵花，告诉它这里是花园。|A child plants a flower beside it and tells it that this place is a garden.
花开以后，门终于记住了回家的方向。|After the flower blooms, the door finally remembers the way home.`),
    seed('海底的邮递员', 'The underwater postman', `故事里，一只海龟替海里的动物送信。|In the story, a turtle delivers letters for the animals of the sea.
有一天，信上的地址被水冲掉了。|One day, water washes the address off a letter.
海龟读到信里说要送一个贝壳，就去找喜欢收集贝壳的章鱼。|The turtle reads that the letter promises a shell and goes to find the octopus who likes collecting shells.
章鱼认出了朋友的笔迹，笑着收下了信。|The octopus recognizes a friend's handwriting and happily accepts the letter.`),
    seed('开进森林的火车', 'The train that enters a forest', `故事里，一辆小火车开进了没有铁轨的森林。|In the story, a little train enters a forest with no tracks.
树木伸出树枝，把路一段一段接起来。|The trees extend their branches and join the route together, section by section.
火车把山外的消息带给森林里的动物。|The train brings news from beyond the mountains to the forest animals.
回去的时候，动物送它一车种子。|On the return journey, the animals give it a trainload of seeds.`),
    seed('机器人的花园', "The robot's garden", `故事里，一个机器人每天给花园里的花浇水。|In the story, a robot waters the garden's flowers every day.
它按同一个时间工作，却没有发现那天下了雨。|It follows the same schedule but does not notice that it has rained that day.
一只小鸟提醒它，先看看土地，再决定要不要浇水。|A little bird reminds it to look at the soil before deciding whether to water.
机器人学会了观察，花园也比以前更健康。|The robot learns to observe, and the garden becomes healthier than before.`),
    seed('报时的花', 'The flower that tells the time', `故事里，小云种了一朵会报时的花。|In the story, Xiaoyun plants a flower that can tell the time.
每到整点，花就轻轻唱一声。|At every hour, the flower sings softly once.
小云想睡觉时，花还是不停唱歌。|The flower keeps singing even when Xiaoyun wants to sleep.
她和花商量好，夜里只开花，不唱歌。|She agrees with the flower that at night it will bloom but not sing.`),
    seed('收集气味的人', 'The collector of smells', `故事里，一位老人用瓶子收集气味。|In the story, an old man collects smells in bottles.
一个瓶子里是雨后的泥土，另一个是刚烤好的面包。|One bottle holds the smell of earth after rain, and another the smell of freshly baked bread.
一位远行的人闻到家乡的饭香，忽然想起了母亲。|A traveler smells food from home and suddenly thinks of their mother.
老人把那只瓶子送给了他，却请他有空时回家看看。|The old man gives him the bottle but asks him to visit home when he has time.`),
    seed('云朵面包店', 'The cloud bakery', `故事里，一家面包店开在天空上。|In the story, a bakery opens in the sky.
店里的面包太轻，风一吹就飞走了。|Its bread is so light that it flies away whenever the wind blows.
店主用小绳子把面包系好，交给来买东西的小鸟。|The owner ties the bread with little strings and gives it to the birds who come to shop.
小鸟把面包带到地面，孩子们也尝到了天空的味道。|The birds carry the bread to the ground, and the children get a taste of the sky too.`),
    seed('出售梦的夜市', 'The night market that sells dreams', `故事里，夜市上有一个卖梦的小摊。|In the story, a night market has a little stall that sells dreams.
小安想买一个勇敢的梦，好在明天上台讲话。|Xiao'an wants to buy a brave dream so that she can speak on stage tomorrow.
摊主给她一个空袋子，请她先把想说的话练一遍。|The seller gives her an empty bag and asks her to practice what she wants to say first.
小安练了几次，发现自己已经不太害怕，便没有买梦。|After practicing several times, Xiao'an discovers that she is less afraid and does not buy a dream.`),
    seed('睡着的山', 'The sleeping mountain', `故事里，一座山已经睡了很久。|In the story, a mountain has been asleep for a long time.
春天到了，花想叫醒它，却没有足够大的声音。|When spring arrives, the flowers want to wake it but are not loud enough.
小河、鸟和风一起唱歌，山终于慢慢睁开了眼睛。|The river, the birds, and the wind sing together, and the mountain finally opens its eyes slowly.
山看见大家，就把温暖的泉水送到了村里。|Seeing everyone, the mountain sends warm spring water to the village.`),
    seed('纸鸟的第一场雨', "The paper bird's first rain", `故事里，一只纸鸟想飞到河对岸。|In the story, a paper bird wants to fly to the other side of a river.
雨突然下了起来，它的翅膀越来越重。|It suddenly starts to rain, and its wings become heavier and heavier.
一只鸭子让纸鸟坐在背上，带它过河。|A duck invites the paper bird to sit on its back and carries it across.
天晴以后，纸鸟为鸭子画了一张会飞的画像。|When the weather clears, the paper bird draws a portrait of the duck that can fly.`),
    seed('喜欢门铃的猫', 'The cat that loves doorbells', `故事里，一只猫听见门铃就会跳舞。|In the story, a cat dances whenever it hears a doorbell.
主人想睡觉，它却请所有朋友轮流按门铃。|Its owner wants to sleep, but the cat asks all its friends to take turns ringing the bell.
主人给它做了一个只有猫能听见的小铃。|The owner makes it a little bell that only cats can hear.
猫继续跳舞，主人也终于睡着了。|The cat keeps dancing, and the owner finally falls asleep.`),
    seed('小人的大书', "The little people's big book", `故事里，一群小人发现了一本比房子还大的书。|In the story, a group of little people discovers a book bigger than a house.
他们一个人翻不动一页，就一起拉住纸的边。|None of them can turn a page alone, so they pull on its edge together.
翻到花园那一页，书里的花忽然长了出来。|When they reach the garden page, the flowers in the book suddenly grow out of it.
小人们把书留在广场上，让它变成大家的花园。|The little people leave the book in the square and let it become a garden for everyone.`),
  ],
  History: [
    seed('杜甫的诗', "Du Fu's poems", `杜甫是唐代诗人，生活中经历过战乱。|Du Fu was a Tang poet who experienced warfare during his life.
他写过自己的家人，也写过普通人的困难。|He wrote about his family and about the difficulties of ordinary people.
他的诗不只是风景描写，也留下了对当时生活的观察。|His poems do more than describe scenery; they also preserve observations of life at the time.
读诗可以帮助我们接近那个时代，但不能把每一句都当作完整的历史记录。|Reading poetry can bring us closer to that era, but not every line should be treated as a complete historical record.`),
    seed('苏轼的不同身份', "Su Shi's different roles", `苏轼生活在宋代，不仅写诗，也写词和文章。|Su Shi lived during the Song dynasty and wrote not only poems but also ci verse and prose.
他还做过官，生活的地方多次改变。|He also served as an official, and the places where he lived changed several times.
一些作品里可以看到他对日常生活的兴趣。|Some of his works reveal his interest in everyday life.
了解这些经历，可以帮助读者理解作品里的不同心情。|Learning about these experiences can help readers understand the different moods in his works.`),
    seed('王羲之与书法', 'Wang Xizhi and calligraphy', `王羲之是东晋时期著名的书法家。|Wang Xizhi was a famous calligrapher of the Eastern Jin period.
后人常常学习他的字，也保存和复制与他有关的作品。|Later generations often studied his writing and preserved and copied works associated with him.
今天所见的一些作品是后来的摹本，并不是他亲手留下的原纸。|Some works seen today are later copies rather than the original sheets written by him.
看展览时，分清原作和摹本很重要。|When viewing an exhibition, it is important to distinguish originals from copies.`),
    seed('李时珍的书', "Li Shizhen's book", `李时珍是明代的一位医药学家。|Li Shizhen was a medical scholar of the Ming dynasty.
他整理资料，编写了《本草纲目》。|He organized information and compiled the Compendium of Materia Medica.
书里记录了许多关于药物和自然物品的知识。|The book records much knowledge about medicinal substances and natural materials.
它有重要的历史价值，但今天用药仍要依据现代医疗指导。|It has important historical value, but medication today should still follow modern medical guidance.`),
    seed('沈括的观察', "Shen Kuo's observations", `沈括生活在北宋时期，对很多知识领域感兴趣。|Shen Kuo lived during the Northern Song period and was interested in many fields of knowledge.
他的《梦溪笔谈》记录了不少见闻和观察。|His Dream Pool Essays records many experiences and observations.
其中有关于技术的内容，也有关于自然现象的内容。|It contains material about technology and about natural phenomena.
这些记录让后人看到，当时的人怎样思考和研究问题。|These records show later generations how people at the time thought about and investigated questions.`),
    seed('徐霞客的旅行', "Xu Xiake's journeys", `徐霞客是明代的一位旅行者。|Xu Xiake was a traveler of the Ming dynasty.
他到过许多山川，也在旅行中留下了记录。|He visited many mountains and rivers and left accounts of his travels.
后来整理的《徐霞客游记》，保存了他的很多观察。|The later compiled Travels of Xu Xiake preserves many of his observations.
这些记录把旅行经历和对地理的兴趣联系起来。|These accounts connect travel experiences with an interest in geography.`),
    seed('木兰故事的变化', 'How the Mulan story changes', `木兰替父从军的故事，来自长期流传的文学传统。|The story of Mulan taking her father's place in the army comes from a long literary tradition.
不同时代的人，会用不同方式讲述这个故事。|People in different periods tell it in different ways.
故事里的细节，不一定都能作为真实人物的历史证据。|The details in the story cannot all necessarily serve as historical evidence about a real person.
比较不同版本，可以看到人们关心的问题怎样变化。|Comparing versions can show how the issues people care about change.`),
    seed('黄道婆与纺织', 'Huang Daopo and textile work', `黄道婆与中国古代棉纺织技术的传播和改进有关。|Huang Daopo is associated with the spread and improvement of cotton textile technology in ancient China.
关于她的记载，强调了学习和传授手艺的作用。|Accounts of her emphasize the importance of learning and passing on skills.
纺织的进步不只是一个人的工作，也需要许多劳动者的实践。|Progress in textile work was not the work of one person alone; it also required the practice of many workers.
了解这段历史，可以看到日常衣物背后的技术和劳动。|Learning about this history reveals the technology and labor behind everyday clothing.`),
    seed('王祯的木活字', "Wang Zhen's wooden movable type", `王祯生活在元代，编写过一部《农书》。|Wang Zhen lived during the Yuan dynasty and compiled a work called the Book of Agriculture.
他也与木活字印刷技术的发展有关。|He is also associated with the development of wooden movable-type printing.
把字单独做出来，可以重新排列，用于不同的页面。|Making characters separately allows them to be rearranged for different pages.
这种方法需要处理许多字，也需要仔细组织排版。|This method requires handling many characters and carefully organizing the typesetting.`),
    seed('南京的明城墙', "Nanjing's Ming city wall", `南京保存着一些明代城墙。|Nanjing preserves sections of a Ming-dynasty city wall.
城墙的修建，需要准备砖石，也需要组织大量工人。|Building the wall required preparing bricks and stone and organizing many workers.
一些城砖上留下的文字，可以帮助研究者了解生产和管理。|Inscriptions left on some bricks can help researchers understand production and administration.
今天参观城墙时，我们也能思考保护老建筑的重要性。|Visiting the wall today also allows us to consider the importance of preserving old buildings.`),
    seed('福建土楼', 'Fujian tulou buildings', `福建一些地方保存着土楼，是多人共同居住的传统建筑。|Some places in Fujian preserve tulou, traditional buildings shared by many residents.
土楼不一定都是圆形，也有其他形状。|Tulou are not always round; they also have other shapes.
建筑里可以安排住宅和公共空间，方便共同生活。|The buildings can contain homes and communal spaces to support shared living.
了解一座土楼，还要了解住在里面的人怎样使用它。|Understanding a tulou also means understanding how its residents use it.`),
    seed('秦朝的统一', 'Unification under the Qin', `公元前二二一年，秦完成了对六国的征服。|In 221 BCE, Qin completed its conquest of the six other major states.
秦朝推行了统一文字、度量衡等措施。|The Qin dynasty introduced measures to standardize writing and weights and measures.
这些制度对后来的历史产生了影响。|These institutions influenced later history.
讨论这段历史，也要看到战争和严厉统治给普通人带来的代价。|Discussion of this history should also consider the costs that warfare and harsh rule imposed on ordinary people.`),
    seed('近代上海的港口', "Shanghai's port in modern history", `十九世纪中叶，上海成为通商口岸。|In the mid-nineteenth century, Shanghai became a treaty port.
这个变化与当时的不平等条约有关。|This change was connected to the unequal treaties of the time.
贸易、移民和新的城市空间，后来改变了上海的生活。|Trade, migration, and new urban spaces later changed life in Shanghai.
了解港口的历史，需要同时观察经济变化和当时的权力关系。|Understanding the port's history requires looking at both economic changes and the power relations of the period.`),
  ],
};
