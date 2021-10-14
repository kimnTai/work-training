const imgData = {
   nav: ["images/img/nav-place.png", "images/img/nav-human.png", "images/img/nav-dec.png", "images/img/nav-pet.png"],
   thumb_s: ["./images/img/thumb-s1.jpg", "./images/img/thumb-s2.jpg", "./images/img/thumb-s3.jpg", "./images/img/thumb-s4.jpg", "./images/img/thumb-s5.jpg", "./images/img/thumb-s6.jpg", "./images/img/thumb-s7.jpg", "./images/img/thumb-s8.jpg", "./images/img/thumb-s9.jpg",],
   thumb_hm: ["./images/img/thumb-hm1.png", "./images/img/thumb-hm4.png", "./images/img/thumb-hm3.png", "./images/img/thumb-hm2.png", "./images/img/thumb-hm5.png", "./images/img/thumb-hm6.png",],
   thumb_d: ["./images/img/thumb-d1.png", "./images/img/thumb-d2.png", "./images/img/thumb-d3.png", "./images/img/thumb-d4.png", "./images/img/thumb-d5.png", "./images/img/thumb-d6.png", "./images/img/thumb-d7.png", "./images/img/thumb-d8.png", "./images/img/thumb-d9.png", "./images/img/thumb-d10.png", "./images/img/thumb-d11.png", "./images/img/thumb-d12.png",],
   thumb_p: ["./images/img/thumb-p1.png", "./images/img/thumb-p2.png", "./images/img/thumb-p3.png", "./images/img/thumb-p4.png", "./images/img/thumb-p5.png", "./images/img/thumb-p6.png",],
   background: ["./images/img/bg1.jpg", "./images/img/bg2.jpg", "./images/img/bg3.jpg", "./images/img/bg4.jpg", "./images/img/bg5.jpg", "./images/img/bg6.jpg", "./images/img/bg7.jpg", "./images/img/bg8.jpg", "./images/img/bg9.jpg",],
};
const subtabData = {
   bridegroom: ["images/img/thumb-bg-hair1.png", "images/img/thumb-bg-hair2.png", "images/img/thumb-bg-hair3.png", "images/img/thumb-bg-hair4.png", "images/img/thumb-bg-hair5.png", "images/img/thumb-bg-hair6.png", "images/img/thumb-bg-clothes1.png", "images/img/thumb-bg-clothes2.png", "images/img/thumb-bg-clothes3.png", "images/img/thumb-bg-clothes4.png", "images/img/thumb-bg-clothes5.png", "images/img/thumb-bg-clothes6.png"],
   bestman: ["images/img/thumb-bmm1.png", "images/img/thumb-bmm2.png", "images/img/thumb-bmm3.png"],
   boy: ["images/img/thumb-chm1.png", "images/img/thumb-chm2.png", "images/img/thumb-chm3.png"],
   bride: ["images/img/thumb-b-hair1.png", "images/img/thumb-b-hair2.png", "images/img/thumb-b-hair3.png", "images/img/thumb-b-hair4.png", "images/img/thumb-b-hair5.png", "images/img/thumb-b-hair6.png", "images/img/thumb-b-clothes1.png", "images/img/thumb-b-clothes2.png", "images/img/thumb-b-clothes3.png", "images/img/thumb-b-clothes4.png", "images/img/thumb-b-clothes5.png", "images/img/thumb-b-clothes6.png",],
   bridesmaid: ["images/img/thumb-bm1.png", "images/img/thumb-bm2.png", "images/img/thumb-bm3.png"],
   girl: ["images/img/thumb-chf1.png", "images/img/thumb-chf2.png", "images/img/thumb-chf3.png"],
};
const sizeJson = {
   'thumb_p': [{
      'url': './images/img/pet1.png',
      'width': 197,
      'height': 300,
   }, {
      'url': './images/img/pet2.png',
      'width': 200,
      'height': 255,
   }, {
      'url': './images/img/pet3.png',
      'width': 300,
      'height': 240
   }, {
      'url': './images/img/pet4.png',
      'width': 300,
      'height': 320
   }, {
      'url': './images/img/pet5.png',
      'width': 229,
      'height': 300
   }, {
      'url': './images/img/pet6.png',
      'width': 270,
      'height': 240
   },],
   'thumb_d': [
      {
         'url': './images/img/dec1.png',
         'width': 352,
         'height': 323
      },
      {
         'url': './images/img/dec2.png',
         'width': 275,
         'height': 454
      },
      {
         'url': './images/img/dec3.png',
         'width': 352,
         'height': 460
      },
      {
         'url': './images/img/dec4.png',
         'width': 750,
         'height': 900
      },
      {
         'url': './images/img/dec5.png',
         'width': 330,
         'height': 250
      },
      {
         'url': './images/img/dec6.png',
         'width': 330,
         'height': 410
      },
      {
         'url': './images/img/dec7.png',
         'width': 380,
         'height': 430
      },
      {
         'url': './images/img/dec8.png',
         'width': 80,
         'height': 267
      },
      {
         'url': './images/img/dec9.png',
         'width': 350,
         'height': 480
      },
      {
         'url': './images/img/dec10.png',
         'width': 285,
         'height': 430
      },
      {
         'url': './images/img/dec11.png',
         'width': 281,
         'height': 420
      },
      {
         'url': './images/img/dec12.png',
         'width': 155,
         'height': 200
      },
   ],
   'bmm': [{
      'url': './images/img/bmm1.png',
      'width': 240,
      'height': 650
   },
   {
      'url': './images/img/bmm2.png',
      'width': 240,
      'height': 650
   },
   {
      'url': './images/img/bmm3.png',
      'width': 240,
      'height': 650
   },],
   'bm': [{
      'url': './images/img/bm1.png',
      'width': 300,
      'height': 650
   },
   {
      'url': './images/img/bm2.png',
      'width': 300,
      'height': 650
   },
   {
      'url': './images/img/bm3.png',
      'width': 300,
      'height': 650
   },
   ],
   'cm': [{
      'url': './images/img/cm1.png',
      'width': 240,
      'height': 600
   },
   {
      'url': './images/img/cm2.png',
      'width': 240,
      'height': 600
   },
   {
      'url': './images/img/cm3.png',
      'width': 240,
      'height': 600
   },
   ],
   'cf': [{
      'url': './images/img/cf1.png',
      'width': 320,
      'height': 530
   },
   {
      'url': './images/img/cf2.png',
      'width': 320,
      'height': 530
   },
   {
      'url': './images/img/cf3.png',
      'width': 320,
      'height': 530
   },]
};
let words = [
   '我怎么这么好看，在我梦中的婚礼上。',
   '新郎气质跟红毯不搭，帮我换一个试试吧。',
   '确认过眼神，遇见对的人。你，在哪儿？',
   '梦想过很多次婚礼，要不要和我一起办一次？',
   '没有婚礼的婚姻可以幸福，但不完整。',
   '婚礼，定格的是幸福，跟钱没关系。',
   '谁再说我是单身狗，我就跟狗结婚。',
   '别瞎耽误功夫了，带我去旅行结婚吧。',
   '现在这点爱，别的不够，结婚足够了。',
   '我想结婚很久了，你愿意跟我一起吗？',
   '婚礼不可以随便，选个场景才浪漫。',
   '搞对象难，结婚难，预想婚礼现场，很简单。',
   '我想办场轰轰烈烈的婚礼，你来当新郎，好吗？'
]
