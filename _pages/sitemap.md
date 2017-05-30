---
layout: sitemap

title: Sitemap

permalink: /sitemap/
---

<div class="sitemap">

  <ul id="primaryNav" class="col6">
  
    <li id="home"><a href="{{site.url}}/">Home</a></li>
    
		<li><a href="{{site.url}}/start-here/">Start Here</a></li>
    
		<li><a href="{{site.url}}/work-with-us/">Work With Us</a></li>
    
		<li><a href="{{site.url}}/resources/">Reading List</a></li>
    
		<li><a href="{{site.url}}/join-pare-and-flourish/">Join Pare and Flourish</a></li>
		
    <li><a href="{{site.url}}/tag/">Posts By Tag</a>
      <ul>
        {% assign tags_list = site.tags | sort %}  
        {% for tag in tags_list %} 
          <li><a href="{{site.url}}/tag/{{ tag[0] | replace:' ','-' | downcase }}/">{{tag[0]}}</a></li>
        {% endfor %}
      </ul>
    </li>
    
    <li><a href="{{site.url}}/blog/">Blog</a>
      <ul>
        {% for post in site.categories.blog %}
					<li><a href="{{ site.url }}{{ post.url }}">{{post.title}}</a></li>
        {% endfor %}
      </ul>
    </li>
    
  </ul>
  
</div>