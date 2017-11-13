---
layout: content-page

title: Search

permalink: /search/
---

<ul id="search-results"></ul>

<script>
  window.store = {
    {% for post in site.posts %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "author": "{% if page.author %}{{ post.author | xml_escape }}{% else %}Skylar Wooden and Katie Butler{% endif %}",
        "category": "{{ post.category | xml_escape }}",
        "content": {{ post.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>
<script src="/assets/javascript/lunr.min.js"></script>
<script src="/assets/javascript/search.js"></script>