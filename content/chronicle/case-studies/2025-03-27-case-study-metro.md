---
date: 2025-03-27
headline1: How METRO's E-Commerce Platform went live worldwide
headline2: A global B2B Retail solution built by freiheit.com
teaser:
lead_image: null
image: /img/chronicle/case-studies/250325-case-study-metro-image-09.webp
vimeo: null
youtube: null
tags:
hideHeaderTitle: true
download: /downloads/25-02-27-Case-Study-METRO.pdf
---

### Building a customer individual e-commerce platform

METRO AG, the global wholesale giant, serves over 21 million professional customers in over 30 countries worldwide with a revenue of 31.3 B Euro in 2024 alone. Many of them are in the field of restaurants, hotels, caterers and kiosks. METRO is the backbone of the entire hospitality industry, helping them run their daily business. These businesses all over the world must be able to rely on METRO 100% every day.

Their customers place their orders weekly and get them delivered or pick them up directly at one of the 625 stores. Each order is hyper individualized down to the price, and changes constantly with the seasons.

In the past, customers placed their orders through many different channels, using fax, email, phone calls or METROs old webshop. A great number of their almost 90.000 employees worldwide would then review and register their orders in a separate system - with different webshop solutions in each METRO country.

To make this vision come to life, Dentsply Sirona was looking for a strong partner to help them build a solution that would bring all the dental applications safely into the cloud. This cloud platform, called DS Core, would allow dentists and laboratories to collaborate seamlessly with each other, making the workflow more efficient and the treatment span shorter for the patient.

{{< quote text="Our goal was to rapidly roll out into all 30 countries with 624 stores. This was simply not possible with an on-premise solution. Our large-scale business requires an incredibly fast and reliable infrastructure with automatic provisioning of additional infrastructure" source="Timo Salzsieder - Chief Executive Officer METRO, 2018" >}}

In the early 2010s, METRO realized it was time for a change. Their old e-commerce platform “fast order entry” faced challenges due to its inability to handle the complexity of B2B wholesale transactions, such as bulk orders, customized pricing, and seamless integration with logistics systems, leading to inefficiencies and customer dissatisfaction. To stay ahead of their competitors and keep up with the pace of online retail, their e-commerce platform had to be completely renewed to:
- Be globally available, scalable and flexible for the future of METRO
- Enable employees to manage and adjust every order within one system
- Offer a customized shopping experience for each customer
- Support the unique highly-individualized pricing model of METRO

The complexity of this e-commerce platform would be substantial, as it combined a number of dependencies and databases.
In late 2014, METRO found the right partner to build this B2B platform, freiheit.com. The software engineering company from Hamburg offered a new way of software engineering, reducing complexity on all levels. Together they defined a new approach that would lead the project to a fast roll-out and a scalable platform ready for any demand. They implemented a new microservices platform with React.js while pioneering Kubernetes back when it was still in its beta-phase. In only 12 months of development time, they built a platform with more than 200 services. From the first workshop to delivering the finished project, METRO and freiheit.com wrote over 5 billion lines of code. Together they set up a platform that brought METRO away from delivery cycles of several months to daily live deployments and moved from a monolithic architecture to microservices.
This system now generates over 4 billion euros per year and has become an essential part of METRO's business. Bringing their webshop to a complete new level.
Nowadays, their clients can simply place their orders choosing from over 850.000 products (e.g. Germany), on the website and METRO employees can access and modify them through the push of a button.

Individualized. All in one place. Scalable and future-proof.

### Meet the Key Players

<br />

#### About METRO

METRO AG, commonly known as METRO, is a global wholesale company headquartered in Düsseldorf, Germany. It was founded in 1964 by Ernst Schmidt and Wilhelm Schmidt-Ruthenbeck, starting off as a cash-and-carry business, which is a retail business model in which customers select, pay for and take away (carry) the goods themselves. This was aimed at catering to professional customers such as restaurants, hotels, and independent retailers. Over the decades, METRO has expanded significantly, establishing a presence in over 30 countries and employing over 90.000 people worldwide.

A true German success story.

Today, METRO focuses on its core wholesale and digital business solutions, particularly catering to the needs of the hospitality sector like HoReCa (Hotel, Restaurants and Catering) as well as their Trader Customers (kiosks and stores). The company offers their customers a combination of physical outlets and digital platforms. Through these initiatives, METRO continues to adapt to market demands, offering efficient, digital-focused solutions for modern businesses.

{{< image src="/img/chronicle/case-studies/250407-metro-case-study-steckbrief.webp" alt="The german whole sale caters to needs of the hospitality sector like HoReCa" >}}


#### About freiheit.com

The software engineering company freiheit.com technologies was founded in 1999 in Hamburg by Claudia Dietze and Stefan Richter. They have delivered hundreds of large-scale projects that help their clients create future business models based on software. From global cloud platforms in dentistry, over B2B food delivery platforms, to connected cars. Across all industries and for the Who-is-Who of European businesses and industries. For clients like Dentsply Sirona, Tchibo, EDEKA, or Mercedes Benz.

They take on mission impossible projects and build custom large-scale software platforms tailored to their clients needs.
After showing METRO in 2014 how they could build an efficient e-commerce platform together that would revolutionize their business model, both companies started a collaboration that has been lasting for over a decade.

This partnership shapes METRO's future as a German B2B retail giant while centralizing and diversifying their offer to their over 21 million professional customers worldwide.

{{< image src="/img/chronicle/case-studies/250402-steckbriefe-freiheit.com.webp" alt="freiheit.com is a software engineering company" >}}

<br />

### From the MVP to an omnichannel vision

Let's go back to the start
In 2014, METRO approached freiheit.com to develop a modern platform that would revolutionize their pre-ordering system. At the time, METRO was relying on a legacy system, MCRM (Metro Customer Relationship Management), introduced in 2009. This system had limited possibilities to add features, was difficult to use, and had long release cycles. It was simply not scalable for METRO's growing omnichannel business.
The initial goal was clear:
- Replace MCRM with a scalable and user-friendly platform that can offer both employees and customers direct order placement and tracking.

Historically, METRO's process revolved around “fast order entry” where bulk buyers — primarily HoReCA (Hotels, Restaurants, Cafes) customers — placed orders through METRO employees, typically over the phone or via mail. This system lacked the possibility to be integrated with other METRO operations and therefore slowed down the order and delivery process.

The vision was more than just a simple replacement. METRO aimed for an omnichannel solution that eventually combined:
- Delivery services
- Online ordering
- Marketplace for regional suppliers
    - like wineries and cheese dairies especially in France.

This new platform would allow METRO to serve their diverse target audience and marked the beginning of the biggest modernization project in the history of METRO. Starting in 2015, together with freiheit.com, the project was to be rolled out in different stages. Beginning with connecting a first depot to the e-commerce platform in Germany and later expanding to include France's marketplace and eventually to the rest of Europe.

#### Delivering the Minimum Viable Product

Before developing what they had defined in all detail, freiheit.com built a Minimum Viable Product (MVP). This is done to show the client on a smaller scale how the project will be rolled out and how the solution approach could look like.
The initial development phase (2015-2016) focused on replacing METRO's old delivery concept, with Germany serving as the pilot country. The challenge was not just meeting technical specifications but ensuring the system could go live on a predefined day - METRO had tied the Go-Live date to strict deadlines.
A high-performing and flexible system was non-negotiable - and freiheit.com delivered.
This MVP already included the following features:

An e-commerce platform where clients could place their orders while employees could track and adjust them.
- Individual prices: METRO employees can adapt prices and add discounts to items for certain customers.
- Replace: Customers can easily find and get replacement suggestions for articles if they are not available.

After defining the scope together with METRO, this first MVP went live in 2016 in Germany and was then extended with more features. More countries like France, Spain and Italy followed soon, making the e-commerce platform available in over 15 countries fast - showing METRO that freiheit.com was the right partner for this modernisation on all levels. Such a large-scale deployment in many countries can take years in other companies.
However, Metro had a first stable and secure MVP in production in Germany after only 12 months.
But this was only the beginning and where the partnership between both companies started - What would follow were years of successful collaboration.

{{< quote text="From the very beginning of the project it was clear that we would not only create a completely new B2B eCommerce platform, but that we would do the groundwork for the future of software development at METRO. Even though we knew that, nobody in the starter team could imagine how big this would grow only in the first two years" source="Stefan Richter, Head of Engineering and founder of freiheit.com" >}}

After the successful project start, the teams also started to develop additional features to the online ordering system and began to replace METROs on-premise solution step-by-step.
More on that later.

#### What makes METRO special

As a B2B provider, METRO has requirements that deviate from a normal B2C eCommerce platform:

- A typical METRO customer can have shopping baskets of 500 items or more and several users from both sides can work in the same shopping basket at the same time.
- Every customer can have its individual price which needs to be calculated on-the-fly in combination with discounts, flash sales or other special pricing models.
- The delivery of the goods is completely different:
    - In a B2C platform, an employee picks the product from the warehouse and delivers it directly to the customer.
    - In B2B, food service distribution moves completely different goods such as 500 kg sugar for a bakery chain or large orders with ultra-fresh foods.These need a very clearly defined picking process that considers different freezing zones to make sure that the goods are delivered in compliance with cold chains.

Additionally, each country has a slightly different business model.

In Europe, particularly in Germany and France, demand is driven by high-quality fresh produce, gourmet products, and sustainable sourcing for hotels, restaurants, and catering businesses. Eastern European markets, like Poland and Romania, emphasize cost-effective bulk purchases for small retailers and independent businesses. In Asia, especially in Pakistan, demand leans towards essential food staples, wholesale grocery items, and bulk restaurant supplies catering to local eateries and small businesses.

Providing this unique service on a large scale in 30 countries requires an incredibly reliable and powerful infrastructure.

{{< image src="/img/chronicle/case-studies/250325-case-study-metro-image-07.webp" alt="" >}}

#### The Architecture

To build a microservice architecture on such a large-scale level was a radical departure from the monolithic structure of METROs legacy solution and not yet common at that time back in 2015.

While microservices promised scalability and modularity, they also brought a new complexity. Distributed systems required new monitoring solutions to ensure stability of this system. To address this, the teams integrated Datadog for monitoring and troubleshooting, a tool still used in the METRO project and by freiheit.com in general to this day.

The adoption of the microservice architecture was a significant success, by breaking the system into smaller, manageable components with clear API dependencies. As Carsten Luckmann, a Team Lead at freiheit.com put it:

*“Divide and conquer — dividing the problem into small problems and solving them individually. We made METRO’s service significantly faster and more efficient.”*

Apart from choosing microservices as their architecture, it was also clear from the beginning that the software should run only in containers.
freiheit.com evaluated various container orchestration frameworks that allow to create the envisioned scalable microservices architecture. In the end, they chose Docker containers. As the number of containers grows, it becomes difficult to scale and manage them effectively.

This is where Kubernetes comes in.

Kubernetes is an open-source platform for the automation of deploying, scaling, and operating application containers. When freiheit.com started to work with this platform, Kubernetes was quite new and still in the beta phase. Nonetheless, they decided to implement it and realised the potential it could have for the roll-out of the entire project. Because to freiheit.com's team it was clear that Kubernetes would win the cloud wars.

{{< quote text="We all sat together in a room in our office in Hamburg. It was like a war room in which everyone worked together to guarantee a successful Go-Live.”" source="Carsten Luckmann - Team Lead - freiheit.com" >}}

The success of this first Go-Live was only the beginning.
The engineering teams started to develop more features in the following months and went live in the biggest depot close to Frankfurt, Germany in June of the same year. The rest of all German stores and depots would follow, completing the roll-out by January 17th of 2017. Following this, the teams began to implement METRO's e-commerce platform to the other METRO countries one by one - generating an average revenue of 40 Mio Euro per day.
To serve the different customer profiles, METRO developed two profiles that represented two different groups of customers and their purchase behavior, Betty and Mario. While Betty was a large customer, ordering weekly deliveries to their restaurant, Mario would prefer to come into the store and pick his products, which were often non-food items, independently and irregularly.
Here's a detailed look into the two profiles:

{{< grid-images cols="2">}}
{{< image src="/img/chronicle/case-studies/250325-case-study-metro-mario.webp" alt="" >}} {{< image src="/img/chronicle/case-studies/250325-case-study-metro-betty.webp" alt="" >}}
{{< /grid-images >}}

Both the assortment and the user experience of METRO's webshop had to cater to both profiles.

France demanded a very specific feature set which focussed on the persona Mario. Following this, in 2017 the project expanded beyond METROs store delivery to an omnichannel solution to offer their customers a larger assortment of regional products.
A marketplace system, powered by Mirakl (A marketplace provider) , was integrated into the new webshop in France, targeting regional suppliers. This addition allowed METRO to diversify its offerings, catering to small producers and expanding its customer base especially in France.
METRO's Food Service Distribution (FSD) model became more defined during this phase:
- HoReCa Customers: Hotels, restaurants, and cafes receiving regular deliveries every two weeks. These customers valued reliability and higher-quality service over margin sensitivity.
- Trader Customers: Predominantly in Eastern Europe, these customers (e.g., gas stations, kiosks) served end consumers and required competitive pricing to stay viable against supermarkets.

Meanwhile, METRO's strategy continued to evolve.
In France, the marketplace gained popularity due to the amount of small, regional suppliers. Click-and-collect services, online ordering, and DHL deliveries expanded METROs traditional Cash & Carry model.

From June of 2018 to August of 2019 even more countries launched, rolling out the e-commerce platform in Russia, Romania, the Netherlands, Belgium, Kazakhstan, Hungary, China, Bulgaria, Croatia, Moldova, and finally Serbia in August of 2019.

<br />

{{< image src="/img/chronicle/case-studies/250325-case-study-metro-warenkorb.webp" alt="" >}}

### The collaboration that led to success

#### The different teams

Over the span of the collaboration between METRO and freiheit.com, the teams working on the e-commerce platform were divided into different groups, each in charge of a different aspect of the platform.


**Search and Discover Team**
    This team is focused on helping customers find products easily and intuitively on the platform. They built and maintained product recommendations and category browsing. By optimizing search relevance, filtering, and personalized recommendations, METRO ensures that customers can efficiently discover products that match their preferences.


**Price Team**
    The Price Team managed the platform's pricing functionality. They handled dynamic real-time pricing models, discounts, promotional offers, and price updates across different regions and segments.
    The old pricing engine handled a handful of price calculations of baskets of 100 line items which took one or one and a half seconds.METROs new price engine is capable of thousands of calculations at the same time in under half a second or in milliseconds. And this on a global platform.


**CIA Team**
    The Customer Inspire Assist (CIA) team focused on customer engagement and support throughout the METRO shopping experience. They developed features to inspire customers and recommend them the right products.


**Product Data Team**
    The Evaluate team managed the product data and its quality, ensuring that all items on the platform have accurate, real-time, and detailed information. They focused on product descriptions, specifications, images, and ratings, which are essential for a clear and reliable presentation of items, helping METRO customers make the best purchases.


**Orders Processing Team**
    The Order Capture team (Order Processing) oversaw the systems for capturing and processing customer orders. They ensured that every order placed on METROs platform is accurately recorded and processed for fulfillment.


**Order Management - Order Planning Team**
    The Order Management team handled the planning and scheduling of orders after they’re placed. They coordinated METROs inventory availability, shipment timelines, and logistics to ensure that orders are fulfilled efficiently. 


**Pick and Pack Team**
    The Pick and Pack team was dedicated to assisting the order fulfillment process for the METRO warehouse staff. They developed a guide for the pickers when to assist them to correctly assemble products for each order, ensuring accuracy and efficiency in the packing process.

The combination of these teams and their efforts led to a successful collaboration and a future-proof e-commerce platform that would serve METRO for years to come.

{{< quote text="To this day, this project is a project close to my heart. It was also the first really big project for me in which we not only developed the software ourselves, but also laid the foundation for Metro to set up its own engineering organization. We even conducted the first job interviews together to hire their first engineers. That was the foundation for Metro's engineering organization today." source="Birgit Riedel - Client Success Expert Director - freiheit.com" >}}


#### freiheit.com's DNA

One thing is clear. The collaboration between METRO and freiheit.com in itself is a success story.
But what exactly did freiheit.com bring to the table?
The software engineering organisation founded in Hamburg works in small and efficient teams to reduce complexity on all ends. Each engineer within their engineering organisation is responsible for their work, from start to finish. The teams work data-driven and spend most of their time coding. Each engineer is a full-stack engineer - they are in charge of the entire product from frontend to backend. This means every member is deeply involved in the creation of the product from the first idea to the final rollout.

METRO took these basic engineering principles, and with the support of freiheit.com they implemented into their organization as well.

{{< quote text="We went away from seven hierarchies into two hierarchies which have people management responsibilities. So we went from a direct way of leading into an indirect way of leading - giving a high extent of responsibilities into the teams. Even though that comes with its own challenges, it's so much more competence and commitment driven." source="Sven Lipowski - Business Process Director Customer METRO 2018" >}}

But that is not all. freiheit.com uses data and metrics to systematically lead software projects to success. Through data-driven Software Engineering, they significantly increase the delivery reliability of large-scale software projects.
All of freiheit.com's teams use Revolution, a project management tool built by the company, to track their performance and guarantee full transparency internally but also to their customers. In collaboration with METRO, it was actually the first time this tool was used, as freiheit.com had then just recently released it.

<br />

{{< image src="/img/chronicle/case-studies/250325-case-studies-revolution.webp" alt="" >}}

<br />

To track the status of the project and the individual team, freiheit.com uses over 40 different metrics. The focus amongst these is on key metrics like:
- **Planning Reliability:** This metric describes the percentage of stories that were planned into an iteration at the moment the iteration was started and that were completely finished before the iteration was closed.
- **Estimate Deviation:** This metric describes how close the effort estimates were compared to the actual effort needed.
- **Development Ratio:** This metric describes how much of the time invested was spent purely on development versus how much time was spent on non-development work.

<br />

{{< image src="/img/chronicle/case-studies/250325-case-study-metro-revolution-01.webp" alt="" >}}

<br />

The data and metrics visible in Revolution do not directly indicate what is wrong and what needs to be fixed within the code. They give an indication and can provide warnings to the teams if certain thresholds are reached. It is up to the engineers to interpret them and take the correct action to improve their metrics. The engineers at freiheit.com learn how to find and remove friction from the first day they join. The possibility to monitor the metrics over time shows the teams the effectiveness of their derived actions.

{{< quote text="Working together with the METRO team was a special time for me. Metro wanted to bring change and step into the future — and making that happen together with them was something I will never forget." source="Katrin Stamme - Principal Software Engineer - freiheit.com" >}}

### The final step

#### A future-proof e-commerce platform

Today, METRO has a future-proof system that they can constantly expand and scale. They now own and maintain the entirety of the code that has been running successfully for 8 years.

This code gives their customers an individualized shopping experience. This code enables METRO employees to manage and adjust every order within one system. This code generates average sales of 10 thousand euros per minute across all countries.

This makes METRO globally available, scalable and ready for the future.


