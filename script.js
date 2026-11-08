const memories = [
  { date: 'MAY 28', title: '', items: [
    ['0528.jpeg', '一起去看球赛了，上次看棒球还是很小的时候第一次来美国。谢谢宝宝顶着晒黑中暑的生命危险陪我'],
    ['0528_2.HEIC', '在同一天晚上去奥特曼喝了大酒。众人皆醉 xwd 独美。在酒吧毕业了，双双获得 bachelor in alcohol']
  ]},
  { date: 'JUNE 01 — 03', title: '六月，我们一起毕业了', description: '六月，我们一起毕业了。uchi 是一个让人心情很复杂的地方，就连毕业也都是匆匆忙忙连滚带爬，生怕留下消化的时间太多会咀嚼到其中让人创伤的部分。但我们还是在校园的每一个角落，定格了最轻盈的回忆。', items: [
    ['0601.jpg', 'xwd 像一只骄傲满足的小猫'], ['0601_2.JPG', '很像在电影里的'], ['0601_3.JPG', '活动有点尴尬，但幸好拍到很般配的合照']
  ]},
  { date: 'JUNE 03', title: '', items: [['0603.MOV', '赶不上夏天的尾巴，但至少在夏天的开头来沙滩一起坐坐。永远支持 xwd 开放麦']]},
  { date: 'JUNE 09 — 21', title: '', description: '一直觉得台湾和 xwd 的气质特别合。真的一起来了！还有一个想象中 xwd 的精神城市是日本，我们会把它提上行程。', items: [
    ['0609.HEIC', '在一起补觉就是连女巫店的演出都不重要。当然，也没有错过精神返乡'], ['0609_1.HEIC', 'xwd 做小电驴表演嘻嘻不嘻嘻。摔下来的时候其实非常自责，大脑宕机，很怕 xwd 把性命交付给我结果摔烂了。'], ['0609_2.HEIC', 'xwd 开车，眼神坚定像入党'], ['0609_3.HEIC', '在 KTV 吃很好'], ['0609_4.HEIC', '解锁台北青旅'], ['0609_5.MP4', '看电影顺便收获大头贴，感谢诚品']
  ]},
  { date: 'JULY 09', title: '', items: [['0709.HEIC', '又一年，xwd 来上海找我。带 xwd 吃了上海最拿得出手的云南米线']]},
  { date: 'JULY 17 — 21', title: '', description: '不一样的是，今年我也来到了 xwd 的城市。热情好客山东，被照顾得很好。其实有时候觉得我们的原生家庭也会有互补的一面，谢谢 xwd 带我走进你的家。', items: [
    ['0717.HEIC', '也是又一年，一起看了喜欢歌手的演唱会。虽然遇上了下雨，但在现场的温度、视角和灯光都完美得刚刚好。xwd 超值拥有追十几年的和刚喜欢几个月的歌手姐 (cite xwd pyq)'], ['0720.HEIC', '在不远的地方意外挖掘了可以溯溪的宁静小山头'], ['0721.HEIC', '在离开的早上看着日出听梁博的《日落大道》。那个时刻觉得恐惧害怕担心做不到的很多事情我们也都做到了。']
  ]},
  { date: 'AUGUST 31', title: '', description: '开局了，在新的家里注入很多 xwd 的影子。', items: [
    ['0831.JPG', '把自己想象成 xwd 的样子，就有耐心做饭喂饱自己。复刻蛋炒饭盖饭'], ['0831_2.JPG', '花了一整天把属于我们的床搬了进来，这样就可以把过去的继承到未来']
  ]},
  { date: 'SEPTEMBER 10 — 12', title: '', description: 'xwd 回来了！', items: [
    ['0910.HEIC', '又一起吃上年糕了。在一起食变稀罕的日子里，大人中。'], ['0911.HEIC', 'xwd 发现的好地方。又探索出芝加哥新的一些面向，从此爱上了 312。'], ['0912.MOV', '小 xwd 蹦迪，再无聊的超现实主义音乐都没有把我们的快乐赶跑']
  ]},
  { date: 'SEPTEMBER 25 — 27', title: '', description: '可以一起在新的城市相见，谢谢 wxd 邀请我来纽约。', items: [
    ['0925.HEIC', '把台湾的回忆又复现了，好像没有时差的作用比在台北喝得还尽兴'], ['0925_2.JPG', '然后又穿梭回上海，想到了上一个夏天，一起在上海老小区进门口发现的云南风味小酒馆。记忆和味觉就这样被打通'], ['0927.HEIC', '提前两天给 xwd 过生日，永远想要喜欢热热闹闹仪式的 xwd 可以过热热闹闹的生日'], ['0927_2.MP4', '室内烟花都放了，许的愿一定会成真的']
  ]},
  { date: 'OCTOBER 09', title: '', description: '发生了很多的旅程，写到这里的时候也在想应该怎样来描绘，对不起，你应该在那几天里承受了太多吧。后来也小心翼翼不知道怎么提起，害怕二次伤害，又害怕没有交代你的不安。照片里的那一边依旧很美好。谢谢你的选择，我会学会更独立地管理我的情绪，管理关系的边界，做一个可以给你安全感的人。', items: [
    ['1009.HEIC', '我们和可爱小树'], ['1011.HEIC', '没有徒步的疲惫，反倒像踏着枫叶可以慢悠悠散步的早晨']
  ], special: true, revealImage: '0.PNG'},
  { date: 'OCTOBER 17', title: '', items: [['1017.HEIC', '一起看了一部很好的电影，一起喝酒，吃同样的虾条。我们要有更多更多这样的电影之夜。']]}
];

const timeline = document.querySelector('#timeline');
const makeMedia = (filename) => {
  const ext = filename.split('.').pop().toLowerCase();
  if (['mov', 'mp4', 'webm'].includes(ext)) {
    const video = document.createElement('video');
    video.src = `assets/originals/${filename}`; video.controls = true; video.preload = 'metadata'; video.playsInline = true;
    video.setAttribute('aria-label', filename);
    return video;
  }
  const img = document.createElement('img');
  img.src = ext === 'heic' ? `assets/thumbs/${filename.replace(/\.heic$/i, '.jpg')}` : `assets/originals/${filename}`;
  img.alt = filename; img.loading = 'lazy';
  return img;
};

memories.forEach((group, index) => {
  const section = document.createElement('article');
  section.className = 'memory-group';
  const info = document.createElement('div'); info.className = 'group-info';
  const date = document.createElement('span'); date.className = 'date'; date.textContent = group.date;
  info.append(date);
  if (group.title) { const title = document.createElement('h3'); title.textContent = group.title; info.append(title); }
  if (group.description) { const p = document.createElement('p'); p.textContent = group.description; info.append(p); }
  if (group.special) {
    const choice = document.createElement('div'); choice.className = 'memory-choice';
    const prompt = document.createElement('p'); prompt.textContent = '另外一面。';
    const actions = document.createElement('div'); actions.className = 'choice-actions';
    const reveal = document.createElement('button'); reveal.className = 'choice-button choice-reveal'; reveal.type = 'button'; reveal.textContent = '看这一面';
    const forget = document.createElement('button'); forget.className = 'choice-button choice-forget'; forget.type = 'button'; forget.textContent = '遗忘';
    actions.append(reveal, forget); choice.append(prompt, actions); info.append(choice);
    reveal.addEventListener('click', () => showFragileMemory(group.revealImage, section));
    forget.addEventListener('click', () => { choice.classList.add('forgotten'); prompt.textContent = '谢谢你选择遗忘。'; actions.remove(); });
  }
  const count = document.createElement('div'); count.className = 'group-count'; count.textContent = `${String(index + 1).padStart(2, '0')} / ${String(memories.length).padStart(2, '0')}　·　${group.items.length} ${group.items.length === 1 ? 'MEMORY' : 'MEMORIES'}`; info.append(count);
  const grid = document.createElement('div'); grid.className = 'memory-grid';
  group.items.forEach(([filename, description]) => {
    const card = document.createElement('article'); card.className = 'memory-card';
    const media = document.createElement('div'); media.className = 'media-wrap'; media.append(makeMedia(filename));
    const isVideo = /\.(mov|mp4|webm)$/i.test(filename);
    if (isVideo) { const play = document.createElement('span'); play.className = 'play-mark'; play.textContent = '▶'; play.setAttribute('aria-hidden', 'true'); media.append(play); }
    const label = document.createElement('span'); label.className = 'file-name'; label.textContent = filename;
    const details = document.createElement('details'); details.className = 'memory-note';
    const summary = document.createElement('summary'); summary.className = 'memory-summary';
    const hint = document.createElement('span'); hint.className = 'click-ring'; hint.textContent = 'CLICK'; hint.setAttribute('aria-hidden', 'true');
    summary.append(label, hint);
    if (!isVideo) summary.prepend(media); else card.append(media);
    const caption = document.createElement('div'); caption.className = 'caption'; const inner = document.createElement('div'); inner.className = 'caption-inner'; const copy = document.createElement('div'); copy.className = 'caption-copy'; const capLabel = document.createElement('span'); capLabel.className = 'caption-label'; capLabel.textContent = 'A LITTLE NOTE'; copy.append(capLabel, document.createTextNode(description)); inner.append(copy); caption.append(inner);
    details.append(summary, caption); card.append(details);
    grid.append(card);
  });
  section.append(info, grid); timeline.append(section);
});

function showFragileMemory(filename, section) {
  if (!filename) return;
  const overlay = document.createElement('div'); overlay.className = 'fragile-overlay'; overlay.setAttribute('role', 'dialog'); overlay.setAttribute('aria-label', '另外的一面');
  const photo = document.createElement('div'); photo.className = 'fragile-photo';
  const image = document.createElement('img'); image.src = `assets/originals/${filename}`; image.alt = '另外的一面'; image.className = 'fragile-image';
  const shards = document.createElement('div'); shards.className = 'tear-shards'; shards.setAttribute('aria-hidden', 'true');
  for (let i = 1; i <= 4; i++) {
    const shard = document.createElement('img'); shard.src = `assets/originals/${filename}`; shard.alt = ''; shard.className = `tear-shard shard-${i}`; shards.append(shard);
  }
  photo.append(image, shards);
  const label = document.createElement('span'); label.className = 'fragile-label'; label.textContent = `ANOTHER SIDE · ${filename}`;
  overlay.append(photo, label); section.append(overlay);
  window.setTimeout(() => overlay.classList.add('shatter'), 1800);
  window.setTimeout(() => overlay.remove(), 3300);
}
