---
layout: sitemap

title: Sitemap

permalink: /sitemap/
---

<div class="sitemap">
  <ul id="primaryNav" class="col6">
    <li id="home"><a href="/">Home</a></li>
		<li><a href="/start-here/">Start Here</a></li>
		<li><a href="/lets-collaborate/">Work With Us</a></li>
		<li><a href="/reading-list/">Reading List</a></li>
		<li><a href="/join-pare-and-flourish/">Join Pare and Flourish</a></li>
    <li><a href="/tag/">Posts By Tag</a>
      <ul>
        {% assign tags_list = site.tags | sort %}  
        {% for tag in tags_list %} 
          <li><a href="/tag/{{tag[0] | replace:' ','-' | downcase}}/">{{tag[0]}}</a></li>
        {% endfor %}
      </ul>
    </li>
    <li><a href="/blog/">Blog</a>
      <ul>
        {% for post in site.categories.blog %}
					<li><a href="{{post.url}}">{{post.title}}</a></li>
        {% endfor %}
      </ul>
    </li>
  </ul>
</div>