---
date: 2025-04-02
headline1: Building the backbone of Tchibos digital business
headline2: How freiheit.com built Tchibo's webshop from scratch and made their operations more efficient and scalable
teaser:
lead_image: null
image: /img/chronicle/case-studies/250402-case-study-tchibo-part01-header.webp
imageAltText: freiheit.com engineering teams build Tchibo's webshop from scratch
vimeo: null
youtube: null
hideHeaderTitle: true
download: /downloads/250404-case-study-tchibo.pdf
draft: true
---

### How Tchibo's "Themenwelten" became scalable 

In the 1850s, coffee became popular among the general population. All social classes – rich and poor – drank the aromatic beverage. During the periods of crisis in the two World Wars, there was a decline in consumption. 
After World War II ended, coffee became a symbol for reconstruction and economic miracle. Drinking coffee meant being able to afford luxury goods. 

At that time in 1949 Max Herz had an idea: Making coffee accessible to everyone again. And he made his vision become reality. In the same year he founded his coffee mailing business Tchibo together with his business partner Carl Tchiling. This revolutionized the coffee industry in just a few years. 

In 2025, 75 years later, Tchibo has 900 stores and 24,200 retail depots in ten European countries and ships coffee worldwide. In 1994 a new chapter started. 
Tchibo invented “Themenwelten” (eng. theme worlds) – surprising their customers with “Jede Woche eine neue Welt” (eng. every week a new world). Launching a new range of non-food goods every week. Not only revolutionizing the coffee but the whole retail industry, Tchibo still remains one of the leading retailers in Europe. 

This new and unique business model required reliable planning, production and sales of new products every week in all of their stores. 
With the start of the first internet boom, Tchibo realized they needed to expand their coffee and non-food business online. Making all their goods available on the internet for their customers. And so they did: As one of the internet pioneers Tchibo launched their first webshop in 1997 in Germany and expanded over the next two decades to 8 additional countries.
 
But making “Jede Woche eine neue Welt” reliably available in their webshop with a continuously growing assortment became impossible as they used a standardized webshop solution. New features, changes and updates couldn’t be implemented as necessary for their weekly changing assortment. At this time online shops in general evolved from being an exception to becoming a business-critical necessity for big retailers like Tchibo. 

Their weekly changing “Themenwelten” were manually built and deployed every week. This resulted in a high manual effort creating many dependencies. Even for small adjustments like price changes the whole webshop needed to be re-deployed. In 2008 Tchibo realized what had to change – they needed a stable webshop with a highly specialized and fast content management system. To ensure that “Jede Woche eine neue Welt” is reliably available to their customers.

After revolutionizing not only the coffee but also the retail industry, they now needed to also revolutionize their online business. To make sure they still remain the leading coffee retailer in Europe. 
In 2008 Tchibo decided to look for a dependable partner to tackle that challenge. To continue meeting their customers' needs, demands and to ensure smooth sales via the webshop at any time. And this is where the software engineering company freiheit.com came in. 
</br>

{{< image src="/img/chronicle/case-studies/250402-case-study-tchibo-part01-image01.webp" alt="freiheit.com engineering teams discuss the technology for Tchibo's new webshop" >}}
</br>

A member of Tchibo’s management board had already worked with freiheit.com on time, on budget, on target and on quality in another project. When Tchibo organized a call for tenders (a “beauty contest”) to find the right partner to build their new webshop from scratch he invited freiheit.com to take part in it. They competed against five other tech companies. But with presenting a new unique approach, freiheit.com convinced Tchibo that they are able to build the backbone of Tchibo’s digital business. 

This is where a strong partnership started, that should last for over two decades and is still ongoing. freiheit.com played a huge part in making Tchibo’s webshop successful by building a new webshop from scratch and continuously extending it for almost two decades This ensured a unique shopping experience for their customers even with upcoming demands. 

The new webshop featured a tailor-made content management system and seamless scalability, ensuring smooth operations even on the busiest days – especially during peak holiday seasons. 
freiheit.com also added a lot of new features, rolled out to new countries and the traffic quadrupled over time. And still it is a solid system that Tchibo can trust. Building and maintaining such a system over almost two decades at scale means building a system that can stand the test of time.

### Meet the key players

**About Tchibo**

Tchibo is known for their coffee and their wide range of weekly changing non-food retail goods. With more than 10,000 employees and more than 9 million webshop visitors each month, Tchibo is now the leading retailer for coffee and one of the biggest retailers for customer goods in Germany and Europe. With a yearly turnover of over three billion euros. 

In the beginning Tchibo’s business model was limited to their original idea – they sent coffee beans from their own roastery via mail to their customers. This made the luxury good coffee accessible for everyone. To further improve their customer service, Tchibo opened their first store in Hamburg in 1955, where customers could taste a cup of coffee before buying a package of roasted coffee beans. They expanded fast – just three years later they had 77 branches in Germany. In 1973 they also started selling non-food goods in their stores.

As mentioned earlier in 1994 Tchibo introduced “Themenwelten” to their customers and surprised them with a new wide range of retail goods every week. Driven by the internet boom Tchibo launched their first webshop in 1997. Since then every offered product could be ordered online. 

Going online was a big step for Tchibo. The webshop expanded quickly. Their standardized webshop solution wasn’t able to scale to the increasing demands and requirements anymore. 
</br>

{{< image src="/img/chronicle/case-studies/250402-steckbriefe-tchibo.webp" alt="Tchibo is known for their coffee and their Themenwelten" >}}
</br>

**About freiheit.com**

freiheit.com was founded in 1999 in Hamburg by Claudia Dietze and Stefan Richter. They have delivered hundreds of large-scale software projects that help their clients create future business models based on software. They are working for the Who’s Who of European businesses and industries. 
From e-commerce to connected cars over retail, healthcare, mobility to logistics and many more industries. 
They take on mission impossible projects and build custom large-scale software that has never been built before. 
</br>

{{< image src="/img/chronicle/case-studies/250402-steckbriefe-freiheit.com.webp" alt="freiheit.com is a software engineering company" >}}
</br>

### Defining the problem

In the beginning of the internet boom in 1997 Tchibo expanded their business online. For over ten years they used a standardized webshop solution – an on-premise and traditional monolithic architecture responsible for deployment and maintenance. For a retailer this big, a smoothly running webshop system is mandatory. 

The concept of standard software is based on the idea of a one-size-fits-all approach. The idea that it is suitable for multiple different businesses. This works for business concepts or processes that are mostly the same in every company – like email and calendar management. Standard software for webshops is built for businesses with a fixed range of products with none to minimal changes. 

{{< border-box >}}
###### Deep Dive

### Monolith

A monolith describes a software that is designed as a single service – built and deployed as a single, unified, self-contained unit. It consists of a database, a user interface and a server-side application. Everything is stored in the same code base – frontend logic as well as background processes and server logic. 

When the application grows, it might become challenging to maintain the monolithic architecture. A single change in one component often requires redeploying the entire application. This can slow down development and increase the risk of errors. Additionally, scaling a monolith involves replicating the entire system rather than scaling individual services. This leads to inefficiencies. 

The evolution of a monolith is a modular monolith. Unlike the traditional monoliths this architecture is structured into independent modules and components, each of them with well-defined boundaries. Every module is independent and isolated. This makes the monolith software easier maintainable and extendable, as well as more flexible. 

Tchibo’s former standard solution was a traditional monolith, freiheit.com built the new webshop in 2009 as in a modular monolithic architecture. 
In 2020 it was split up into a microservices architecture.
{{< /border-box >}}

Tchibo however has a rolling assortment – they launch a new “Themenwelten” each week which then remains for seven weeks. Therefore Tchibo needed a webshop that is made for launching and taking down assortments with more than 100 products on a weekly basis. 

Tchibo’s standard webshop solution was in operation for more than 10 years already. In this time they continuously tried to adapt the system to their specific needs. But the flexibility of the standardized software reached its limits. As the webshop grew, the requirements increased as well. Tchibo wasn’t able to add custom features and adapt the standard system to their needs anymore. It was time for a custom, scalable and future-proof webshop solution. 

The former system needed to be replaced without downtime. The new webshop system should make Tchibo’s operations more efficient and also raise the webshop performance, sales and customer satisfaction. 
</br>

{{< image src="/img/chronicle/case-studies/250402-case-study-tchibo-part01-image02.webp" alt="Tchibo has a rolling assortment with seven weeks cycles" >}}
</br>

### Point of departure – setting the stage

On January 6th, 2009, the initial kick-off meeting from freiheit.com and Tchibo took place. 

This marked the starting point for a decades long and ongoing partnership. 

freiheit.com engineers visited Tchibo’s offices to discuss details about front end, back end and what technology is required to meet Tchibo’s needs and to make this project a great success. Already two days after their final workshop, freiheit.com presented their first concept. 

This project was a core system replacement where the former software was in operation for more than 10 years. 
In this time they identified and implemented many important features that they needed in order to run the webshop and their business. So it was important that the new system contained all those features as well. freiheit.com needed to analyze the former webshop to find out its functional scope and propose a final delivery date. 
The former system also stored 300GB data – for example all sales orders and invoices from the last 10 years. This data also needed to be migrated to the new webshop.

The freiheit.com engineering team had to transfer this into a concept on how to maintain all those features while building them with a new technical solution.

In the end the concept contained more than 1000 pages describing the project scope in detail. 

freiheit.com came up with a solution to solve this problem and make Tchibo’s webshop future-proof – everything needed to be built from scratch. Because special businesses like Tchibo require custom-built software solutions as standard solutions can keep up with their demands. 

freiheit.com planned to build the new webshop as a modular monolith with independent modules and components – to make the software easier maintainable, extendable and more flexible.

The development started on May 2nd 2009, the first code commit was done on May 5th.
The first Go-Live was planned for June 6th, 2010.
</br>

{{< image src="/img/chronicle/case-studies/250402-case-study-tchibo-part01-image03.webp" alt="freiheit.com engineers start building Tchibo's webshop from scratch" >}}
</br>

### Building a new Content Management System from scratch

The complexity of the content management and deployment should be reduced significantly with the new webshop. Tchibo should be able to make live changes on the webshop pages instead of re-deploying the whole shop. 

Back then Tchibo created their whole “Themenwelten” content with Photoshop mock-ups. A web designer put together the new webshop with a Photoshop visual as a guideline in HTML and then implemented it in the webshop system. 
A complicated and time consuming process. 

The goal was to drastically simplify this production process. 
To do so, freiheit.com made the HTML code configurable. 
This made the creation process easier and faster. It also enabled Tchibo to create and develop “Themenwelten” independently from the rest of the webshop. They no longer had to deploy a whole new webshop each week – they now could implement changes directly in the live system. 
From this point on content pre-production, scheduling and automated web page Go-Lives were possible. 

### Displaying all product information

There is one specific objective that needed to be resolved – a mandatory feature to ensure a convenient shopping experience for Tchibo’s customers: Displaying different dimensions of one product like size and color options. 

At that time the product data came from different data sources. One of Tchibo’s data sources was their goods management system built in the 1970s. It was not made for processing webshop data. That’s why its product instances only processed one dimension for each product – the size. A technical challenge we solved. freiheit.com created the missing dimensions in the system making it possible to display all information at one glance on the product detail page (PDP). 

freiheit.com also built the PDP to be able to process the data source for seals as for quality, sustainability or allergens to make this data visible and understandable to the customers. 

freiheit.com enabled Tchibo’s webshop to manage and process product data from different sources. Customers were now able to see all options and product information at one glance. This improved the customer experience and ensured effortless purchase decision making. All connected workflows for webshop management systems, maintenance and processes were simplified, which made working with the system and content management more productive and efficient.  
</br>

{{< grid-images cols="2" style="gap: 20px; column-gap: 10px;">}}
  <!-- First column with one image -->
  {{< image src="/img/chronicle/case-studies/250403-displaying-all-product-details-website-lime-01.4.webp"  alt="freiheit.com engineers enabled Tchibo's webshop to display product size and color options" >}}
  
  <!-- Second column with two images stacked vertically -->
  <div style="display: flex; flex-direction: column; gap: 21px;">
    {{< image src="/img/chronicle/case-studies/250403-displaying-all-product-details-website-lime-03.webp" alt="freiheit.com enabled Tchibo's webshop to manage data from different sources like quality seals" >}}
    {{< image src="/img/chronicle/case-studies/250403-displaying-all-product-details-website-lime-02.webp" alt="freiheit.com made quality seals visile on Tchibo's webshop">}}
  </div>
{{< /grid-images >}}
</br>

### The first Go-Live

**Liechtenstein & Switzerland**

On June 6th, 2010 the new webshop was ready to go live as planned over one year in advance. To make sure that everything was working as expected, freiheit.com didn’t roll out the webshop in all nine countries at once. They started with the smaller countries Liechtenstein and Switzerland to then roll out the new webshop in Germany – the most important country.

The Go-Live went smoothly. Every feature worked properly. 

This achievement was a very important milestone in the project and was only the first success in the year-long partnership that followed after this. 

freiheit.com had planned the Go-Live in Liechtenstein and Switzerland three months in advance to the big roll-out in Germany. After the smooth deployment of the new system in those two countries the engineering teams had to develop additional features that weren’t needed for the webshop in Liechtenstein and Switzerland like an application for buying mobile phones and mobile phone contracts. 

After that the webshop was ready to go live in Germany and the rest of the world. 
</br>

**Germany & the rest of the world**

On September 16th, 2010 the new webshop was planned to go live in Germany – the biggest and most important market for Tchibo. It was set to mid September because the new webshop needed to be rolled-out before the “ski phase” started in October. Which is followed by the Christmas phase. Together they are the busiest time of the year.
Therefore it was even more important that this Go-Live would run smoothly. 

The challenge of this Go-Live did not only include the deployment of the new webshop system but also the migration of 300GB data from the former system. This data included for example all customer data like sales orders and invoices from the last 10 years. Tchibo’s customers had to be able to log into their account and find all this data as they used to the morning after the Go-Live.  

For this, the former webshop needed to be shut down first. That led to unavoidable downtime. To reduce potential economic impact, freiheit.com planned the deployment at night, because there was way less traffic. 

When the engineering teams planned the night of the deployment they planned enough time to do the data migration twice. They scheduled this extra time, so that in case of unexpected problems during the first migration, they had enough time to fix the problems and restart the migration. As unexpected challenges arise at every deployment. 

When the engineering teams started the deployment at 10pm on September 15th. They began with the data migration and testing if all features were running correctly. In the beginning everything looked great but then the migration of 300GB data failed. The engineering teams noticed the problem immediately and fixed it in a couple of minutes. 

When the data migration started a second time, everything ran smoothly. The migration was successfully completed. The new webshop went live on time, on target, on budget and on quality.

{{< quote text="The first big goal of this webshop project was a successful ski phase in 2010 - with an average of ten thousands of orders per day and thousands of orders per hour. Yesterday we processed more than twice as many orders with around twice as many orders per hour as expected at peak times and the shop didn't even cough." source="Tchibo Manager in 2010" >}}

### How did freiheit.com successfully replace Tchibo's webshop that was in operation for more than 10 years?

freiheit.com replaced Tchibo's former standard webshop with a custom software built from scratch. A high traffic system that was in operation for more than 10 years and generated millions of revenue for Tchibo. The new system should contain the same features as the former one. It needed to be scalable and future-proof. 
The new webshop needed to be rolled-out before the most important sales phase of the year – the ski and Christmas phase – with ten thousands of orders each day. 
freiheit.com committed to the Go-Live date twelve months in advance and delivered as promised on time, on budget, on target and on quality. 

How did they do it?

freiheit.com works methodless but they have three principles that make them successful.
</br>

**Working in small and efficient teams**
The freiheit.com works in small, but efficient engineering teams. One team for each track meaning the different parts of the webshop – like one team for webshop search, cart and check out, front end and back end. 

Working in small teams reduces complexity on all ends. Each engineer is responsible for their work, from start to finish. Every member is deeply involved in the creation of the product from the first idea to the final rollout.
</br>

**Using backward planning**
All of freiheit.com’s teams use a project management tool built by the engineering company for the backward forward planning of each project. They always start with an ambitious but feasible deadline – the final delivery date. From there on they find out how to fit the project scope into the timeline and then plan backward chronologically from the end of the project with epics and stories to the starting point. An epic defines a feature or increment that can be broken down into stories. The stories are designed as consecutive, dependent steps to reach the epic’s goal. This gave every team a clear understanding of what to do in which time schedule. 
</br>

**Working data driven**
freiheit.com uses data and metrics to systematically lead software projects to success. Through data-driven Software Engineering, they significantly increase the delivery reliability of large-scale software projects.

All of freiheit.com’s teams use the project management tool to track their performance and guarantee full transparency internally but also to their clients. 

To track the status of the project and the individual team, freiheit.com uses over 40 different metrics. The focus amongst these is on key metrics like:
* **Planning Reliability:** This metric describes the percentage of stories that were planned into an iteration at the moment the iteration was started and that were completely finished before the iteration was closed. After 50% of the project, roughly 50% of the work should be done. 
* **Estimate Deviation:** This metric describes how close the effort estimates were compared to the actual effort needed.
* **Development Ratio:** This metric describes how much of the time invested was spent purely on development versus how much time was spent on non-development work. This rate should be at least 60% at all times.
* **Service Level Objectives:** This metric describes how good the built service is performing in production.
The data and metrics visible in their internal project management tool do not directly indicate what is wrong and what needs to be fixed within the code. But they give an indication and can provide warnings if certain thresholds are reached. It is up to the engineers to interpret them and take the correct action to change the metric. The possibility to monitor the metrics over time shows the teams the effectiveness of their derived actions.

The project’s success is rooted in these principles of working.

### Looking into the past and future

At the end of 2024 Tchibo and freiheit.com look back on a partnership that has lasted for almost two decades. Together they made Tchibo’s webshop successful – the traffic quadrupled over time. 

Tchibo’s new webshop is customized to their specific requirements coming with their special business concept of a rolling assortment for “Jede Woche eine neue Welt”. This new system enabled Tchibo to efficiently and productively manage and maintain webshop content, especially their “Themenwelten”. Every feature runs smoothly all the time, ensuring seamless webshop sales and a great customer experience. 

In 2020 Tchibo’s webshop traffic had grown more and more over time, which resulted in an  IT infrastructure  that got progressively more strained. Especially during peak seasons like Christmas the servers would still struggle to cope with the increased demand. To tackle the higher webshop traffic, they had to book more servers manually – months in advance. This was expensive and came with high effort. And they only could react to an increased demand, if they had predicted it in the long-term. Spontaneous higher webshop traffic couldn’t be tackled, which in the worst case would lead to the webshop going down. This is why freiheit.com and Tchibo decided to move the  webshop to the cloud and split its monolithic architecture into a microservice architecture in 2020. 




