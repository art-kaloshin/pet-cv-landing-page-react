<?php

$data = '
{
  "user": {
    "name": "Artem Kaloshin",
    "bio": "Web developer with over 20 years of experience in designing, developing and supporting web applications and databases. I am able to design API in Swagger and create classes that meet the principles of SOLID. I am able to use Agile Scrum methodology. I can develop apps using PHP (with frameworks like Laravel), Javascript (with frameworks like VueJs, React or jQuery).",
    "photo": "/images/avatar.jpg",

    "contacts": {
      "email": "a.i.kaloshin@gmail.com",
      "whatsapp": "+79109759770",
      "telegram": "sankaruga",
      "phone": "+79109759770"
    }
  },
  "links": [
    {
      "link": "https://instagram.com/z0_0m",
      "logo": "/images/instagram.png",
      "title": "Instagram"
    },
    {
      "link": "https://www.linkedin.com/in/artem-kaloshin/",
      "logo": "/images/Linkedin.png",
      "title": "LinkedIn"
    },
    {
      "link": "https://www.facebook.com/le.hummer",
      "logo": "/images/facebook.png",
      "title": "Facebook"
    },
    {
      "link": "https://www.youtube.com/@sankaruga",
      "logo": "/images/youtube.png",
      "title": "Youtube"
    }
  ]
}
';

header('Content-Type: application/json');
echo str_replace('a.i.kaloshin@gmail.com', 'g' . date('Ymd') . '@v2u.su', $data);
